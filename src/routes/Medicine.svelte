<script lang="ts">
	import { onMount } from 'svelte';
	import { link, querystring } from 'svelte-spa-router';
	import TableRow from '../lib/medicine/TableRow.svelte';
	import Layout from '../lib/Layout.svelte';
	import mapboxgl from 'mapbox-gl';
	import { districts } from '../data';
	import { API_ENDPOINT } from '../lib/env';
	import 'mapbox-gl/dist/mapbox-gl.css';
	mapboxgl.accessToken =
		'pk.eyJ1Ijoic2hha3lhcGVpcmlzIiwiYSI6ImNsN2VneWQ3bTAwYXQzb3Bxb3RiaGJseW8ifQ.vWxsiWVOuY8fiv3TLD3ggg';
	let map;
	onMount(() => {
		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/shakyapeiris/cks24cavn5dit17o5lskpj3db',
			center: [80, 7],
			zoom: 7,
		});
	});

	let selectedValue = districts[0];

	export let params;
	let name = $querystring.split('&')[0].split('=')[1].replace('%20', ' ');

	const fetchData = async (selectedDistrict: string) => {
		let url = `${API_ENDPOINT}/user/medicine/${params.id}${
			selectedDistrict !== 'All in Sri Lanka'
				? `?district=${selectedDistrict}`
				: ''
		}`;
		console.log(url);
		const response = await fetch(url);
		const data = await response.json();

		data.selectedMedicine.forEach((med) => {
			const address = med.pharmacy.contact.address.replace(' ', '+');
			fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2hha3lhcGVpcmlzIiwiYSI6ImNsN2VneWQ3bTAwYXQzb3Bxb3RiaGJseW8ifQ.vWxsiWVOuY8fiv3TLD3ggg&country=LK`
			)
				.then((res) => res.json())
				.then((response) => {
					if (
						!response ||
						!response.features ||
						!response.features.length
					) {
						console.error('Invalid response:');
						console.error(response);
						return;
					}
					const feature = response.features[0];
					console.log(feature);

					// Create a marker and add it to the map.
					new mapboxgl.Marker({
						color: '#2F8D76',
					})
						.setLngLat(feature.center)
						.setPopup(
							new mapboxgl.Popup({ offset: 25 }) // add popups
								.setHTML(
									`<h3>${med.pharmacy.shopName}</h3><p>${med.pharmacy.contact.address}</p>`
								)
						)
						.addTo(map);
				});
		});
		data.notSelectedMedicine.forEach((med) => {
			const address = med.pharmacy.contact.address.replace(' ', '+');
			fetch(
				`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoic2hha3lhcGVpcmlzIiwiYSI6ImNsN2VneWQ3bTAwYXQzb3Bxb3RiaGJseW8ifQ.vWxsiWVOuY8fiv3TLD3ggg&country=LK`
			)
				.then((res) => res.json())
				.then((response) => {
					if (
						!response ||
						!response.features ||
						!response.features.length
					) {
						console.error('Invalid response:');
						console.error(response);
						return;
					}
					const feature = response.features[0];
					console.log(feature);

					// Create a marker and add it to the map.
					new mapboxgl.Marker({
						color: 'red',
					})
						.setLngLat(feature.center)
						.setPopup(
							new mapboxgl.Popup({ offset: 25 }) // add popups
								.setHTML(
									`<h3>${med.pharmacy.shopName}</h3><p>${med.pharmacy.contact.address}</p>`
								)
						)
						.addTo(map);
				});
		});
		return {
			availablePlaces: data.selectedMedicine.map((i) => {
				return {
					name: i.pharmacy.shopName,
					contactNo: i.pharmacy.contact.phoneNo,
					mrp: i.pricePerUnit,
					stock: i.stock,
					id: i.pharmacy._id,
				};
			}),
			unAvailablePlaces: data.notSelectedMedicine.map((i) => {
				return {
					name: i.pharmacy.shopName,
					contactNo: i.pharmacy.contact.phoneNo,
					mrp: i.pricePerUnit,
					stock: i.stock,
					id: i.pharmacy._id,
				};
			}),
		};
	};

	$: promise = fetchData(selectedValue);
</script>

<svelte:head>
	<script
		src="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.js"
	></script>
</svelte:head>

<Layout isHome="{false}">
	<section
		slot="hero"
		class="min-h-[30vh] p-[30px] flex flex-col items-start justify-between"
	>
		<div class="w-full flex items-center justify-between">
			<div></div>
			<a class="w-max" href="/" use:link>
				<div
					class="flex items-center justify-between w-max h-max text-white mb-[2px]"
				>
					<div
						class="w-[1.2em] h-[1.2em] rounded-full mr-[5px] bg-white"
					></div>
					<p class="font-bold text-lg md:text-2xl">Pharmacy App</p>
				</div>
				<p
					class="font-light text-xs md:text-sm text-white w-full text-center"
				>
					Powered By <a
						class="hover:underline"
						href="https://acicts.lk/"
						target="_blank">ACICTS</a
					>
				</p>
			</a>
		</div>
		<div class="text-white">
			<p class="text-3xl md:text-6xl font-black">{name}</p>
			<p class="text-sm font-light">{params.id}</p>
		</div>
	</section>
	<section slot="body" class="py-[20px] px-[20px] md:px-[50px]">
		{#await promise}
			<p>Loading...</p>
		{:then pharmacies}
			<div class="w-full flex items-center justify-between">
				<select
					class="border-solid border-b-[1px] border-[#6C6C6C] p-[5px] w-[40%] md:w-[20%] text-[#6C6C6C] bg-white"
				>
					<option>Closest First</option>
					<option>Closest Last</option>
					<option>Price</option>
				</select>
				<select
					bind:value="{selectedValue}"
					class="border-solid border-b-[1px] border-[#6C6C6C] p-[5px] w-[40%] md:w-[20%] text-[#6C6C6C] bg-white"
				>
					{#each districts as district}
						<option value="{district}">{district}</option>
					{/each}
				</select>
			</div>
			<div class="w-full overflow-x-scroll hidden_scroll_bar">
				<table class="border-collapse w-full mt-[30px] min-w-[500px]">
					<thead class="text-[#2F8D76] text-sm md:text-base">
						<tr class="">
							<th class="w-[40%] text-left pl-[20px]">Pharmacy</th
							>
							<th class="w-[40%] text-left pl-[20px]"
								>Contact No</th
							>
							<th class="w-[10%] text-left pl-[20px]">Price</th>
							<th class="w-[10%] text-left pl-[20px]"
								>Availability status</th
							>
						</tr>
					</thead>
					<tbody class="w-full">
						{#if pharmacies.availablePlaces.length == 0}
							<tr
								class="text-red-500 w-full text-center my-[10px] font-light text-lg"
							>
								<td colspan="4"
									>Couldn't find the searched medicine in {selectedValue}</td
								>
							</tr>
						{:else}
							{#each pharmacies.availablePlaces as pharmacy, index (pharmacy.id)}
								<TableRow {...pharmacy} index="{index}" />
							{/each}
						{/if}
						{#if selectedValue !== 'All in Sri Lanka' && pharmacies.unAvailablePlaces.length > 0}
							<p class="my-[20px] font-bold md:text-lg w-max">
								Also Available In
							</p>
							{#each pharmacies.unAvailablePlaces as pharmacy, index (pharmacy.id)}
								<TableRow {...pharmacy} index="{index}" />
							{/each}
						{/if}
					</tbody>
				</table>
			</div>
		{/await}

		<div id="map" class="w-full h-[60vh]"></div>
	</section>
</Layout>

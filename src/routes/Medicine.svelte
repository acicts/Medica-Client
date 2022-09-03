<script>
	import { onMount } from 'svelte';
	import { link } from 'svelte-spa-router';
	import TableRow from '../lib/medicine/TableRow.svelte';
	import Layout from '../lib/Layout.svelte';
	import mapboxgl from 'mapbox-gl';
	import { medicine } from '../store';
	import { districts } from '../data';
	mapboxgl.accessToken =
		'pk.eyJ1Ijoic2hha3lhcGVpcmlzIiwiYSI6ImNsN2VneWQ3bTAwYXQzb3Bxb3RiaGJseW8ifQ.vWxsiWVOuY8fiv3TLD3ggg';

	onMount(() => {
		const map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/shakyapeiris/cks24cavn5dit17o5lskpj3db',
			center: [80, 7],
			zoom: 7,
		});
	});

	let selectedValue;

	export let params;
	const data = $medicine[params.id];
	let title = data.name;
	let sciTitle = data.name;
	$: pharmacies = data.stocks
		.map((pharmacy) => {
			return {
				name: pharmacy['Name of the Pharmacy'],
				district: pharmacy['District'],
				address: pharmacy['Address'],
				email: pharmacy['E mail'],
				mrp: pharmacy.price,
				stock: pharmacy.stock,
				id: pharmacy.F,
			};
		})
		.filter((pharmacy) => {
			return (
				pharmacy.district === selectedValue ||
				selectedValue === 'All in Sri Lanka'
			);
		});
	$: notSelectedPharmacies = data.stocks
		.map((pharmacy) => {
			return {
				name: pharmacy['Name of the Pharmacy'],
				district: pharmacy['District'],
				address: pharmacy['Address'],
				email: pharmacy['E mail'],
				mrp: pharmacy.price,
				stock: pharmacy.stock,
				id: pharmacy.F,
			};
		})
		.filter((pharmacy) => {
			return (
				pharmacy.district !== selectedValue ||
				selectedValue === 'All in Sri Lanka'
			);
		});
</script>

<svelte:head>
	<link
		href="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.min.css"
		rel="stylesheet"
	/>
	<script
		src="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.js"></script>
</svelte:head>

{#if data}
	<Layout isHome={false}>
		<section
			slot="hero"
			class="min-h-[30vh] p-[30px] flex flex-col items-start justify-between"
		>
			<div class="w-full flex items-center justify-between">
				<div />
				<a class="w-max" href="/" use:link>
					<div
						class="flex items-center justify-between w-max h-max text-white mb-[2px]"
					>
						<div
							class="w-[1.2em] h-[1.2em] rounded-full mr-[5px] bg-white"
						/>
						<p class="font-bold text-lg md:text-2xl">
							Pharmacy App
						</p>
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
				<p class="text-3xl md:text-6xl font-black">{title}</p>
				<p class="text-sm font-light">{sciTitle}</p>
			</div>
		</section>
		<section slot="body" class="py-[20px] px-[20px] md:px-[50px]">
			<div class="w-full flex items-center justify-between">
				<select
					class="border-solid border-b-[1px] border-[#6C6C6C] p-[5px] w-[40%] md:w-[20%] text-[#6C6C6C] bg-white"
				>
					<option>Closest First</option>
					<option>Closest Last</option>
					<option>Price</option>
				</select>
				<select
					bind:value={selectedValue}
					class="border-solid border-b-[1px] border-[#6C6C6C] p-[5px] w-[40%] md:w-[20%] text-[#6C6C6C] bg-white"
				>
					{#each districts as district}
						<option value={district}>{district}</option>
					{/each}
				</select>
			</div>
			<div class="w-full overflow-x-scroll hidden_scroll_bar">
				<table class="border-collapse sm:w-full mt-[30px] w-[500px]">
					<thead class="text-[#2F8D76] text-sm md:text-base">
						<tr class="">
							<th class="w-[40%] text-left pl-[20px]">Pharmacy</th
							>
							<th class="w-[40%] text-left pl-[20px]">Address</th>
							<th class="w-[10%] text-left pl-[20px]">MRP</th>
							<th class="w-[10%] text-left pl-[20px]"
								>Availability status</th
							>
						</tr>
					</thead>
					<tbody>
						{#each pharmacies as pharmacy, index (pharmacy.id)}
							<TableRow {...pharmacy} {index} />
						{/each}
						{#if selectedValue !== 'All in Sri Lanka'}
							<p class="my-[20px] font-bold md:text-lg w-max">
								Also Available In
							</p>
							{#each notSelectedPharmacies as pharmacy, index (pharmacy.id)}
								<TableRow {...pharmacy} {index} />
							{/each}
						{/if}
					</tbody>
				</table>
			</div>
			<div id="map" class="w-full h-[60vh]" />
		</section>
	</Layout>
{:else}
	<Layout isHome={false}>
		<section slot="body">Loading...</section>
	</Layout>
{/if}

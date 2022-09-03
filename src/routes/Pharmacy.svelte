<script>
	import { onMount } from 'svelte';
	import { link } from 'svelte-spa-router';
	import Layout from '../lib/Layout.svelte';
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import LocationIcon from 'svelte-icons-pack/fa/FaSolidLocationArrow';
	import BsTelephone from 'svelte-icons-pack/bs/BsTelephone';
	import TiLocationOutline from 'svelte-icons-pack/ti/TiLocationOutline';
	import AiOutlineMail from 'svelte-icons-pack/ai/AiOutlineMail';
	import mapboxgl from 'mapbox-gl';
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
	let title = 'Test medicine';
	let sciTitle = 'Test Scientific medicine';
	let pharmacy = 'Test pharmacy';
	export let query;
	console.log(query);
</script>

<svelte:head>
	<link
		href="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.min.css"
		rel="stylesheet"
	/>
	<script
		src="https://api.mapbox.com/mapbox-assembly/v0.23.2/assembly.js"></script>
</svelte:head>

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
		<div
			class="w-full md:flex-row flex-col flex items-start md:items-end justify-between text-white h-[10vh] md:h-0"
		>
			<div class="text-white">
				<p class="text-3xl md:text-6xl font-bold">{title}</p>
				<p class="text-sm font-light">{sciTitle}</p>
			</div>
			<p
				class="text-xl w-max flex items-center justify-between mt-[10px] sm:mt-0"
			>
				<Icon src={LocationIcon} color="white" size="1em" /><span
					class="ml-[5px] text-xs sm:text-base">{pharmacy}</span
				>
			</p>
		</div>
	</section>
	<section slot="body" class="py-[20px] md:px-[50px] px-[10px]">
		<table
			class="w-full md:w-[30%] border-collapse my-[50px] text-xs sm:text-base overflow-clip text-[#6C6C6C]"
		>
			<tbody class="w-full">
				<tr class="w-full">
					<td
						class="flex items-center justify-between w-max pb-[10px] md:p-[10px]"
					>
						<Icon src={BsTelephone} />
						<span class="ml-[5px]">Contact</span>
					</td>
					<td class=" w-6/12 sm:w-10/12 pb-[10px] md:p-[10px]"
						>0123456789</td
					>
				</tr>
				<tr class="w-full">
					<td
						class="flex items-center justify-between w-max pb-[10px] md:p-[10px]"
					>
						<Icon src={TiLocationOutline} color="#6C6C6C" />
						<span class="ml-[5px]">Address</span>
					</td>
					<td class=" w-6/12 sm:w-10/12 pb-[10px] md:p-[10px]"
						>Lorem ipsum dolor sit amet.</td
					>
				</tr>
				<tr class="w-full">
					<td
						class="flex items-center justify-between w-max pb-[10px] md:p-[10px]"
					>
						<Icon src={AiOutlineMail} color="#6C6C6C" />
						<span class="ml-[5px]">Email</span>
					</td>
					<td class=" w-6/12 sm:w-10/12 pb-[10px] md:p-[10px]"
						>testpharmac@testmail.com</td
					>
				</tr>
			</tbody>
		</table>
		<div id="map" class="w-full h-[60vh]" />
	</section>
</Layout>

<script lang="ts">
	import TableRow from '../lib/home/TableRow.svelte';
	import Search from '../lib/home/Search.svelte';
	import Layout from '../lib/Layout.svelte';
	import { medicine as newMed } from '../store';
	import TagSection from '../lib/home/TagSection.svelte';
	import { districts } from '../data';
	const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;

	let searchValue = '';
	let selectValue = districts[0];
	const fetchData = async (searchValue, selectValue) => {
		let url = `${API_ENDPOINT}/user/medicine?med=${searchValue}${
			selectValue !== 'All in Sri Lanka' ? `&district=${selectValue}` : ''
		}`;
		const response = await fetch(url);
		const data = await response.json();

		return data.medicines.map((i) => {
			return {
				name: i.name,
				totalStock: i.stock,
				mrp: i.pricePerUnit,
				id: i._id,
				chemicalName: i.chemicalName,
			};
		});
	};

	$: promise = fetchData(searchValue, selectValue);

	// $: medicines = $newMed.filter(
	// 	(i) =>
	// 		i.name.toLowerCase().includes(searchValue.toLowerCase()) &&
	// 		(selectValue === 'All in Sri Lanka' ||
	// 			i.stocks.find(
	// 				(st) =>
	// 					st.District.toLowerCase() === selectValue.toLowerCase()
	// 			))
	// );
</script>

<Layout isHome={true}>
	<section
		slot="hero"
		class="flex items-center justify-between flex-col w-full min-h-[30vh] md:min-h-[28vh] absolute bottom-2 left-[50%] translate-x-[-50%]"
	>
		<div class="w-max mx-auto">
			<div
				class="flex items-center justify-between w-max h-max text-white mb-[2px]"
			>
				<div
					class="w-[1.7em] h-[1.7em] rounded-full mr-[5px] bg-white"
				/>
				<p class="font-bold text-2xl md:text-4xl">Pharmacy App</p>
			</div>
			<p class="font-light text-sm text-white w-full text-center">
				Powered By <a
					class="hover:underline"
					href="https://acicts.lk/"
					target="_blank">ACICTS</a
				>
			</p>
		</div>
		<Search bind:searchValue bind:selectValue />
	</section>
	<section slot="body" class="p-[20px]">
		{#if searchValue.trim().length > 0}
			{#await promise}
				<p>Loading...</p>
			{:then medicines}
				{#if medicines.length == 0}
					<p
						class="text-[#5E9486] w-full text-center my-[10px] font-bold text-xl"
					>
						Couldn't find the searched medicine!
					</p>
				{:else}
					<div class="w-full overflow-scroll hidden_scroll_bar">
						<table class="border-collapse w-full min-w-[500px]">
							<thead class="text-[#2F8D76] text-sm md:text-base">
								<tr class="">
									<th class="w-1/4 text-left pl-[20px]"
										>Item</th
									>
									<th class="w-1/4 text-left pl-[20px]"
										>Chemical Name</th
									>
									<th class="w-1/4 text-left pl-[20px]"
										>Avg.Price</th
									>
									<th class="w-1/4 text-left pl-[20px]"
										>Availability status</th
									>
								</tr>
							</thead>
							<tbody>
								{#each medicines as medicine, index (medicine.id)}
									<TableRow {...medicine} {index} />
								{/each}
							</tbody>
						</table>
					</div>
				{/if}
				<TagSection
					title="Similar Searches"
					tags={[
						'Value 1',
						'Value 2',
						'Value 3',
						'Value 4',
						'Value 5',
						'Value 6',
						'Value 7',
					]}
				/>
			{:catch error}
				<p style="color: red">{error.message}</p>
			{/await}
		{:else}
			<TagSection
				title="Empty Stocks"
				tags={[
					'Value 1',
					'Value 2',
					'Value 3',
					'Value 4',
					'Value 5',
					'Value 6',
					'Value 7',
				]}
			/>
			<TagSection
				title="Least Available Stocks"
				tags={[
					'Value 1',
					'Value 2',
					'Value 3',
					'Value 4',
					'Value 5',
					'Value 6',
					'Value 7',
				]}
			/>
			<TagSection
				title="Most Searched"
				tags={[
					'Value 1',
					'Value 2',
					'Value 3',
					'Value 4',
					'Value 5',
					'Value 6',
					'Value 7',
				]}
			/>
		{/if}
	</section>
</Layout>

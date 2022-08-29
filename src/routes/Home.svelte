<script>
	import TableRow from '../lib/home/TableRow.svelte';
	import Search from '../lib/home/Search.svelte';
	import Layout from '../lib/Layout.svelte';
	import { medicine as newMed } from '../data';
	import TagSection from '../lib/home/TagSection.svelte';

	let searchValue = '';
	let selectValue = '';

	$: medicines = $newMed.filter(
		(i) =>
			i.name.toLowerCase().includes(searchValue.toLowerCase()) &&
			(selectValue === '' ||
				i.stocks.find(
					(st) =>
						st.District.toLowerCase() === selectValue.toLowerCase()
				))
	);
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
			{#if $newMed.length === 0}
				<p
					class="text-[#5E9486] w-full text-center my-[10px] font-bold text-xl"
				>
					Loading...
				</p>
			{:else if medicines.length == 0}
				<p
					class="text-[#5E9486] w-full text-center my-[10px] font-bold text-xl"
				>
					Couldn't find the searched medicine!
				</p>
			{:else}
				<table class="border-collapse w-full">
					<thead class="text-[#2F8D76] text-sm md:text-base">
						<tr class="">
							<th class="w-6/12 text-left pl-[20px]">Item</th>
							<th class="w-1/4 text-left pl-[20px]">MRP</th>
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

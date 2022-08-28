<script>
	import TableRow from '../lib/home/TableRow.svelte';
	import Search from '../lib/home/Search.svelte';
	import Layout from '../lib/Layout.svelte';
	import Tag from '../lib/home/Tag.svelte';

	let searchValue = '';
	let selectValue = 'All of Sri Lanka';

	$: medicines = [
		{
			id: 1,
			title: 'test medicine 1',
			mrp: 50.0,
			stock: 50,
		},
		{
			id: 2,
			title: 'test medicine 2',
			mrp: 200.0,
			stock: 1000,
		},
		{
			id: 3,
			title: 'test medicine 1.2',
			mrp: 25.0,
			stock: 122,
		},
		{
			id: 4,
			title: 'test medicine 3',
			mrp: 50.0,
			stock: 50,
		},
		{
			id: 5,
			title: 'test medicine 4',
			mrp: 50.0,
			stock: 0,
		},
	].filter((i) => i.title.toLowerCase().includes(searchValue.toLowerCase()));
</script>

<Layout>
	<section
		slot="hero"
		class="flex items-center justify-between flex-col w-full py-[10px] md:py-[20px] h-[30vh] md:h-[28vh]"
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
			{#if medicines.length === 0}
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

			<div class="mt-[20px]">
				<h1 class="text-lg">Similar Searches</h1>
				<div class="w-full flex items-center justify-between flex-wrap">
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
				</div>
			</div>
		{:else}
			<div class="">
				<h1 class="text-lg">Empty Stocks</h1>
				<div class="w-full flex items-center justify-between flex-wrap">
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
				</div>
			</div>
			<div class="mt-[20px]">
				<h1 class="text-lg">Least Available Stocks</h1>
				<div class="w-full flex items-center justify-between flex-wrap">
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
				</div>
			</div>
			<div class="mt-[20px]">
				<h1 class="text-lg">Most Searched</h1>
				<div class="w-full flex items-center justify-between flex-wrap">
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
					<Tag>Value 1</Tag>
				</div>
			</div>
		{/if}
	</section>
</Layout>

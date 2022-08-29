<script>
	import TableRow from '../lib/medicine/TableRow.svelte';

	import Layout from '../lib/Layout.svelte';
	let title = 'Test medicine';
	let sciTitle = 'Test Scientific medicine';
	let pharmacies = [
		{
			id: 1,
			shop: 'Pharmacy 1',
			address: 'this is a placeholder address, colombo 10',
			mrp: 50.0,
			stock: 100,
		},
		{
			id: 2,
			shop: 'Pharmacy 2',
			address: 'this is a placeholder address, colombo 10',
			mrp: 150.0,
			stock: 0,
		},
		{
			id: 3,
			shop: 'Pharmacy 3',
			address: 'this is a placeholder address, colombo 10',
			mrp: 120.0,
			stock: 400,
		},
		{
			id: 4,
			shop: 'Pharmacy 4',
			address: 'this is a placeholder address, colombo 10',
			mrp: 50.0,
			stock: 40,
		},
	];
</script>

<Layout isHome={false}>
	<section slot="body" class="p-[20px]">
		<div class="w-full flex items-center justify-between">
			<select
				class="border-solid border-b-[1px] border-[#6C6C6C] p-[5px] w-[40%] md:w-[20%] text-[#6C6C6C] bg-white"
			>
				<option>Closest First</option>
				<option>Closest Last</option>
				<option>Price</option>
			</select>
			<select
				class="border-solid border-b-[1px] border-[#6C6C6C] p-[5px] w-[40%] md:w-[20%] text-[#6C6C6C] bg-white"
			>
				<option>Sri Lanka</option>
				<option>Colombo</option>
				<option>Kandy</option>
			</select>
		</div>
		<div class="w-full overflow-x-scroll hidden_scroll_bar">
			<table class="border-collapse sm:w-full mt-[30px] w-[500px]">
				<thead class="text-[#2F8D76] text-sm md:text-base">
					<tr class="">
						<th class="w-[40%] text-left pl-[20px]">Pharmacy</th>
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
					<p class="my-[20px] font-bold md:text-lg w-max">
						Also Available In
					</p>
					{#each pharmacies as pharmacy, index (pharmacy.id)}
						<TableRow {...pharmacy} {index} />
					{/each}
				</tbody>
			</table>
		</div>
	</section>
</Layout>

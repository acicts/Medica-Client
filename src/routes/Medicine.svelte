<script>
	import { link } from 'svelte-spa-router';
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
					<p class="font-bold text-xl md:text-2xl">Pharmacy App</p>
				</div>
				<p class="font-light text-sm text-white w-full text-center">
					Powered By <a
						class="hover:underline"
						href="https://acicts.lk/"
						target="_blank">ACICTS</a
					>
				</p>
			</a>
		</div>
		<div class="text-white">
			<p class="text-6xl font-black">{title}</p>
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
		<div
			class="bg-[url(https://i.stack.imgur.com/HILmr.png)] bg-center bg-cover w-full h-[40vh]"
		/>
	</section>
</Layout>

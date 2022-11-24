<script lang="ts">
	import { link, push } from 'svelte-spa-router';
	export let name: string;
	export let contactNo: string | number;
	export let mrp: number;
	export let stock: number;
	export let index: number;
	export let id;
</script>

<tr
	class={`${
		index % 2 == 0 ? 'bg-[#CEE8B8]' : 'bg-white'
	} rounded-full text-xs md:text-base cursor-pointer `}
	on:click={() => {
		push(`/pharmacy/${id}`);
	}}
>
	<td
		class="w-[40%] py-[15px] p-[20px] rounded-l-lg md:rounded-l-full align-middle"
		><a href={`/pharmacy/${id}`} use:link>{name}</a></td
	>
	<td class="w-[40%] py-[15px] p-[20px]  align-middle">{contactNo}</td>
	<td class="w-[10%] py-[15px] p-[20px] align-middle">{mrp}</td>
	<td class="w-[10%] py-[15px] p-[20px] rounded-r-lg md:rounded-r-full"
		>{#if stock == 0}
			Out of stock
		{:else if stock < 100}
			Limited Stocks
		{:else}
			Available
		{/if}</td
	>
</tr>

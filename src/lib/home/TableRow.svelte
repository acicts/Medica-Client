<script lang="ts">
	import { link, push } from 'svelte-spa-router';
	export let name: string;
	export let mrp: number;
	export let totalStock: number;
	export let index: number;
	export let chemicalName: number;
	export let id;
	console.log(id);
</script>

<tr
	class="{`${
		index % 2 == 0 ? 'bg-[#CEE8B8]' : 'bg-white'
	} rounded-full text-xs md:text-base cursor-pointer w-full`}"
	on:click="{() => {
		push(`/medicine/${chemicalName}?name=${name}`);
	}}"
>
	<td class="w-1/4 py-[15px] p-[20px] rounded-l-lg md:rounded-l-full"
		><a href="{`/medicine/${chemicalName}?name=${name}`}" use:link>{name}</a
		></td
	>
	<td class="w-1/4 py-[15px] p-[20px]">{chemicalName}</td>
	<td class="w-1/4 py-[15px] p-[20px]">{mrp}</td>
	<td class="w-1/4 py-[15px] p-[20px] rounded-r-lg md:rounded-r-full"
		>{#if totalStock == 0}
			Out of stock
		{:else if totalStock < 100}
			Limited Stocks
		{:else}
			Available
		{/if}</td
	>
</tr>

<script lang="ts">
	export let title: string;
	export let mrp: number;
	export let stock: number;
	export let index: number;
</script>

<tr
	class={`${
		index % 2 == 0 ? 'bg-[#CEE8B8]' : 'bg-white'
	} rounded-full text-xs md:text-base cursor-pointer`}
>
	<td class="w-6/12 py-[15px] p-[20px] rounded-l-lg md:rounded-l-full"
		>{title}</td
	>
	<td class="w-1/4 py-[15px] p-[20px]">{mrp}</td>
	<td class="w-1/4 py-[15px] p-[20px] rounded-r-lg md:rounded-r-full"
		>{#if stock == 0}
			Out of stock
		{:else if stock < 100}
			Limited Stocks
		{:else}
			Available
		{/if}</td
	>
</tr>

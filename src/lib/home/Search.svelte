<script>
	import { createEventDispatcher } from 'svelte';
	import { districts } from '../../data';
	export let searchValue;
	export let selectValue;
</script>

<div
	class="md:flex hidden mb-[5px] mx-auto md:mb-0 w-[90%] md:w-full items-center md:justify-evenly justify-between"
>
	<span class="text-white">Search</span>
	<input
		class="w-[65%] px-[25px] py-[10px] bg-[#E7E7E7] text-[#6C6C6C] rounded-full"
		placeholder="Enter the checmical name"
		bind:value={searchValue}
	/>
	<select
		class="bg-[#2F8D76] w-[50%] md:w-[25%] border-solid border-b-[1px] border-white text-white p-[10px] outline-none"
		bind:value={selectValue}
	>
		{#each districts as district}
			<option value={district}>{district}</option>
		{/each}
	</select>
</div>
<div class="md:hidden block w-full text-sm">
	<div
		class="mb-[5px] mx-auto md:mb-0 w-[88%] md:w-full flex items-end md:justify-evenly justify-between"
	>
		<span class="text-white">Search</span>
		<select
			class="bg-[#2F8D76] w-[50%] md:w-[25%] border-solid border-b-[1px] border-white text-white p-[10px] outline-none"
			bind:value={selectValue}
		>
			{#each districts as district}
				<option value={district}>{district}</option>
			{/each}
		</select>
	</div>
	<input
		class="ml-[5%] w-[90%] px-[25px] py-[7px] md:py-[10px] bg-[#E7E7E7] text-[#6C6C6C] rounded-full"
		placeholder="Enter the chemical name"
		bind:value={searchValue}
	/>
</div>

<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
</script>

<span
	class="text-[#5E9486] text-xs md:text-sm lg:text-base cursor-pointer mt-[10px] border-solid border-[1px] border-[#5E9486] px-[5px] py-[2px] w-[30%] md:w-[22%] lg:w-[15%] text-center rounded-full"
	><slot /></span
>

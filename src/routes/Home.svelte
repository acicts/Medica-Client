<script>
	import Search from '../lib/home/Search.svelte';
	import Layout from '../lib/Layout.svelte';
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
		<Search />
	</section>
	<section slot="body">Test</section>
</Layout>

<script lang="ts">
	import { link } from 'svelte-spa-router';
	export let isHome: boolean;
</script>

<main>
	<section
		class={`w-full ${
			isHome ? 'min-h-[40vh]' : 'min-h-[30vh]'
		} bg-[#2F8D76] relative`}
	>
		<slot name="hero" />
	</section>
	<section class={`${isHome ? 'min-h-[60vh]' : 'min-h-[70vh]'}`}>
		<slot name="body" />
	</section>
	<footer
		class="w-full min-h-[35vh] bg-[#8FC69C] flex items-start justify-between px-[25px] md:px-[75px] lg:px-[150px] pt-[8vh] md:pt-[13vh]"
	>
		<ul class="md:flex items-center justify-between">
			<li class="footer_ul_li"><a href="/" use:link>Home</a></li>
			<li class="footer_ul_li"><a href="/about" use:link>About</a></li>
			<li class="footer_ul_li">
				<a href="/contact" use:link>Contact</a>
			</li>
			<li class="footer_ul_li"><a href="/help" use:link>Help</a></li>
		</ul>
		<div class="flex flex-col items-start justify-between">
			<div
				class="flex items-center justify-between w-max text-white mb-[15px]"
			>
				<div
					class="w-[1.2em] h-[1.2em] rounded-full mr-[5px] bg-white"
				/>
				<p class="font-bold sm:text-2xl text-lg">Pharmacy App</p>
			</div>
			<div class="font-light text-sm text-white ">
				<p>
					Powered By <a
						class="hover:underline"
						href="https://acicts.lk/"
						target="_blank">ACICTS</a
					>
				</p>
				<p>Copyright &copy; {new Date().getFullYear()}</p>
			</div>
		</div>
	</footer>
</main>

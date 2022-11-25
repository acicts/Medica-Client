<script lang="ts">
	import { push } from 'svelte-spa-router';
	import Tag from './Tag.svelte';

	export let tags: any;
	export let title: string;
</script>

<div class="mt-[50px]">
	<h1 class="text-xl font-bold">{title}</h1>
	<div class="w-full flex items-center justify-between flex-wrap">
		{#await tags}
			<h1>Loading....</h1>
		{:then tags}
			{#if tags.length == 0}
				<p class="font-light">No available results!</p>
			{:else}
				{#each tags as tag}
					<Tag
						on:click={() => {
							push(
								`/medicine/${tag.chemicalName}?name=${tag.name}`
							);
						}}>{tag.name}</Tag
					>
				{/each}
			{/if}
		{/await}
	</div>
</div>

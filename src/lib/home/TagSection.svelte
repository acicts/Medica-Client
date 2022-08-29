<script lang="ts">
	import Tag from './Tag.svelte';

	export let tags: string[];
	export let title: string;
</script>

<div class="mt-[30px]">
	<h1 class="text-lg">{title}</h1>
	<div class="w-full flex items-center justify-between flex-wrap">
		{#each tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>
</div>

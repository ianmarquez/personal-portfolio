<script lang="ts">
	import { formatDate } from '$lib/utils';
	import clsx from 'clsx';
	export let date: string;
	export let title: string;
	export let description: string = '';
	export let categories: string[];
</script>

<section class="flex flex-col gap-3 overflow-hidden max-w-2xl">
	<h1 class={clsx('text-lg sm:text-xl md:text-3xl text-primary font-bold')}>{title}</h1>
	<p class="text-secondary text-sm sm:text-md md:text-lg">
		Published at {formatDate(date, 'medium', 'en')}
	</p>
	{#if description}
		<p class="text-sm text-white font-thin max-w-2xl whitespace-break-spaces">
			{description}
		</p>
	{/if}
	<div class="flex flex-row gap-2">
		{#each categories as tag}
			<div class="badge badge-accent">&num;{tag}</div>
		{/each}
	</div>
</section>

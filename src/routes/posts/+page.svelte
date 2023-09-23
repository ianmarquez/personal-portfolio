<script lang="ts">
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<ul class="w-full flex flex-col gap-2">
	{#if data.posts.length === 0}
		<p>No Posts Found, Please come back later</p>
	{:else}
		{#each data.posts as post}
			<li class="w-full flex flex-col gap-2 border-b-primary border-b-2 last:border-b-0 py-3">
				<a
					href="/posts/{post.slug}"
					class="text-primary text-lg font-semibold underline underline-offset-2 capitalize"
					>{post.title}</a
				>
				<p class="text-secondary text-xs">{formatDate(post.date, 'medium', 'en')}</p>
				<p class="text-sm text-white font-thin max-w-2xl">{post.description}</p>
			</li>
		{/each}
	{/if}
</ul>

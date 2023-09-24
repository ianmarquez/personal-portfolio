<script lang="ts">
	import { PostCard } from '$lib/components';
	export let data;
</script>

<div class="text-md breadcrumbs">
	<ul class="[&>li>a]:duration-300">
		<li><a href="/" class="hover:text-primary">Home</a></li>
		<li><a href="/posts" class="hover:text-primary">Posts</a></li>
	</ul>
</div>

<ul class="w-full flex flex-col gap-2">
	{#if data.posts.length > 0}
		{#each data.posts as post}
			<li class="w-full flex flex-col gap-3 border-b-primary border-b-2 last:border-b-0 py-3">
				<a href="/posts/{post.slug}">
					<PostCard
						title={post.title}
						description={post.description}
						categories={post.categories}
						date={post.date}
					/>
				</a>
			</li>
		{/each}
	{:else}
		<p class="text-primary text-lg font-bold">No Posts Found, Please come back later</p>
	{/if}
</ul>

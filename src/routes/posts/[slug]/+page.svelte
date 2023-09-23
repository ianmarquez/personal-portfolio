<script lang="ts">
	import * as config from '$lib/config';
	import '/src/markdown-dark.css';
	import PostCard from '$lib/components/PostCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | {config.title}</title>
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:type" content="article" />
</svelte:head>

<div class="text-md breadcrumbs">
	<ul class="[&>li>a]:duration-300">
		<li><a href="/" class="hover:text-primary">Home</a></li>
		<li><a href="/posts" class="hover:text-primary">Posts</a></li>
		<li>
			<a href="/posts/{data.slug}" class="hover:text-primary capitalize">{data.meta.title}</a>
		</li>
	</ul>
</div>

<pre class="flex-col flex gap-2">
  <hgroup>
    <PostCard {...data.meta} />
  </hgroup>
  <article class="markdown-body">
    <svelte:component this={data.content} />
  </article>
  <a
		target="_blank"
		class="hover:underline underline-offset-4 text-xs text-secondary hover:text-primary font-thin flex flex-row gap-1 items-center"
		href="https://github.com/sindresorhus/github-markdown-css">
    <span>Markdown styling by:</span>
    <iconify-icon icon="bi-github" />
    <span>sindresorhus/github-markdown-css</span>
  </a>
</pre>

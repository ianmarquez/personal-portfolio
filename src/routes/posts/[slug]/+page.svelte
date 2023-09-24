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
			<span>{data.meta.title}</span>
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
  <p
		class="text-[#FFFF80] whitespace-pre-wrap">This post was not endorsed or sponsored by any of the mentioned parties. My views are my own.
  </p>
  <a
		target="_blank"
		class="hover:underline underline-offset-4 text-xs text-secondary hover:text-primary font-thin flex flex-row gap-1 items-center"
		href="https://github.com/sindresorhus/github-markdown-css">
    <span>Markdown styling by:</span>
    <iconify-icon icon="bi-github" />
    <span>sindresorhus/github-markdown-css</span>
  </a>
</pre>

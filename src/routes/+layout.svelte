<script lang="ts">
	import { Footer, MenuBar } from '$lib/components';
	import { Toaster } from 'svelte-french-toast';
	import * as config from '$lib/config';
	import '../app.postcss';
	import 'iconify-icon';
	export let data;
</script>

<Toaster />

<svelte:head>
	<title>{config.title}</title>
	<meta name="description" content={config.description} />
	<meta name="url" content={config.url} />
</svelte:head>

<div class="bg-base-200 min-h-full scroll-smooth flex flex-col overflow-clip font-mono">
	<MenuBar user={data.user} />
	<main class="flex-1 max-w-screen-2xl mx-auto px-2 sm:px-4 md:px-10 lg:px-12 w-full">
		<slot />
	</main>
	<Footer />
</div>

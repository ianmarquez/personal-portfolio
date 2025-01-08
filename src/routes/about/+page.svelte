<script lang="ts">
	import { Experience } from '$lib/components';
	import Data from './experience.json';
	import { skills } from '$lib/constants';
</script>

<div class="max-w-6xl flex flex-col gap-5 mx-auto my-10">
	<div class="flex flex-col gap-1">
		<p>38P Tower 1, Trion Towers 8th Ave. Corner Mckinley Parkway BGC Taguig City, Metro Manila</p>
		<p class="text-secondary text-sm">(65) 93928822, (63)998-999-2713, (63)916-632-9321</p>
		<p class="text-secondary text-sm underline underline-offset-1">
			<a href="mail:regilmarquez123@gmail.com">regilmarquez123@gmail.com</a>
		</p>
	</div>
	<h1 class="font-bold uppercase text-2xl sm:text-5xl text-primary">Ian Regil M. Marquez</h1>
	<hr class="w-full border-solid shadow-lg border-primary" />
	<p>
		Software Engineer with 10+ years of experience. Outgoing and output-oriented. Capable of working
		unsupervised and would not settle for half-baked solutions. Full-stack developer with experience
		in front-end solutions and also comfortable working in the back-end using Node.js. Currently
		leaning towards backend development with multiple side projects in Go. Currently exploring
		Svelte and Sveltekit on the side.
	</p>
	<p>
		Well-versed in front-end technologies and javascript-based solutions. I also have AWS experience
		mainly on Lambda and S3 solutions. Also experienced in developing Hybrid mobile application
		solutions using Cordova.
	</p>
	<h2 class="font-bold text-xl sm:text-4xl text-secondary pt-5">Skills</h2>
	<div class="grid grid-cols-4 lg:grid-cols-4 gap-5">
		{#each skills as skill}
			<div class="col-span-1 flex flex-row gap-2">
				<span class="font-bold text-secondary-focus">+</span>{skill}
			</div>
		{/each}
	</div>
	<h2 class="text-xl font-bold sm:text-4xl text-secondary pt-5">Experience</h2>
	<div class="flex w-full flex-col gap-10 space-around">
		{#each Data as experience}
			<Experience {...experience} />
		{/each}
	</div>
</div>

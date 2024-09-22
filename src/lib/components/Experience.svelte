<script lang="ts">
import { clsx } from 'clsx';

	export let companyName: string;
	export let jobTitle: string;
	export let date: string;
	export let technologiesUsed: string[];
	export let roles: string[];
  export let shouldBreak: boolean;
</script>

<div class={clsx('flex flex-col gap-3',shouldBreak && 'break-after-page')} >
	<div class="font-semibold text-2xl">
		<h1 class="text-primary">{companyName}</h1>
		<p class="text-secondary-focus italic">{jobTitle}</p>
	</div>
	<p class="uppercase">{date}</p>
	<hr class={clsx('w-full border-solid shadow-lg border-primary', )} />
	<div class="flex-row flex-wrap gap-3 items-end hidden">
		<!-- <h3 class="text-secondary font-semibold text-md sm:text-xl">Techonologies Used:</h3> -->
		{#each technologiesUsed as technology, index}
			<div>
				{technology}
				<span class="text-secondary-focus">{index !== technologiesUsed.length - 1 ? '|' : ''}</span>
			</div>
		{/each}
	</div>
	<!-- <h3 class="text-secondary font-semibold text-md sm:text-xl">Roles and Responsibilities:</h3> -->
	<div class="flex flex-row flex-wrap gap-3">
		{#each roles as role}
			<div class="w-full flex flex-row gap-2">
				<span class="font-bold text-secondary-focus">+</span>{role}
			</div>
		{/each}
	</div>
</div>

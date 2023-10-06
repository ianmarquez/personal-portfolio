<script lang="ts">
	export let companyName: string;
	export let jobTitle: string;
	export let date: string;
	export let technologiesUsed: string[];
	export let roles: string[];
</script>

<div class="flex flex-col max-w-4xl gap-3">
	<div class="font-bold md:text-2xl text-md">
		<h1 class="uppercase text-primary">{companyName}</h1>
		<p class="text-[#FFFF80]">{jobTitle}</p>
	</div>
	<p class="uppercase">{date}</p>
	<div class="flex flex-row flex-wrap gap-3 items-end">
		<h3 class="text-secondary font-semibold text-md sm:text-xl">Techonologies Used:</h3>
		{#each technologiesUsed as technology, index}
			<div>
				{technology}
				<span class="text-[#FFFF80]">{index !== technologiesUsed.length - 1 ? '|' : ''}</span>
			</div>
		{/each}
	</div>
	<h3 class="text-secondary font-semibold text-md sm:text-xl">Roles and Responsibilities:</h3>
	<div class="flex flex-row flex-wrap gap-3">
		{#each roles as role}
			<div class="w-full flex flex-row gap-2">
				<span class="font-bold text-[#FFFF80]">+</span>{role}
			</div>
		{/each}
	</div>
</div>

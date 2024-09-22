<script lang="ts">
	import { getImageUrl } from '$lib/utils';
	export let user: import('pocketbase').default['authStore']['model'];
</script>

<nav class="navbar bg-base-200 mb-4 break-after-page" class:justify-center={!user}>
	<ul class="flex-none flex flex-row gap-3 text-2xl [&>li>a]:duration-300">
		<li><a href="/" class="hover:text-primary hover:underline">Home</a> /</li>
		<li><a href="/about" class="hover:text-primary hover:underline">About</a> /</li>
		<li><a href="/posts" class="hover:text-primary hover:underline">Posts</a></li>
	</ul>

	{#if user}
		<div class="z-10 justify-end w-full">
			<div class="dropdown dropdown-end mr-4">
				<a href="/projects/new" class="btn btn-primary btn-outline">Add Project</a>
			</div>
			<div class="dropdown dropdown-end">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle avatar">
					<div class="w-10 rounded-full">
						<img
							src={user?.avatar
								? getImageUrl(user.collectionName, user.id, user.avatar)
								: 'https://ui-avatars.com/api/?name=' + user?.name}
							alt="User Avatar"
						/>
					</div>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a href="/my/projects" class="justify-between">My Projects</a>
					</li>
					<li>
						<a href="/my/settings">Settings</a>
					</li>
					<li>
						<form action="/logout" method="POST" class="w-full flex flex-row">
							<button type="submit" class="w-full text-start">Logout</button>
						</form>
					</li>
				</ul>
			</div>
		</div>
	{/if}
</nav>

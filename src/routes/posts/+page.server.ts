import type { Post } from '$lib/types/posts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	try {
		const response = await fetch('/api/posts');
		const posts: Post[] = await response.json();
		console.log('hello');
		return { posts };
	} catch (err) {
		return { posts: [] };
	}
};

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { dev } from '$app/environment';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		if (post.metadata.published === false || dev) {
			return {
				slug: params.slug,
				content: post.default,
				meta: post.metadata
			};
		}
		throw error(404, `Could not find ${params.slug}`);
	} catch (err) {
		console.error(err);
		throw error(404, `Could not find ${params.slug}`);
	}
};

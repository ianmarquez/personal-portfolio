import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	try {
		const post = await import(`../../../posts/${params.slug}.md`);
		return {
			slug: params.slug,
			content: post.default,
			meta: post.metadata
		};
	} catch (err) {
		console.error(err);
		throw error(404, `Could not find ${params.slug}`);
	}
};

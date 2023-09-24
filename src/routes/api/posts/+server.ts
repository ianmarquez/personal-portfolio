import { dev } from '$app/environment';
import type { Post } from '$lib/types/posts';
import { error, json } from '@sveltejs/kit';

async function getPosts() {
	let posts: Post[] = [];
	const paths = import.meta.glob('/src/posts/*.md', { eager: true });
	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;
			if (post.published || dev) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
}

export async function GET() {
	try {
		const posts = await getPosts();
		return json(posts);
	} catch (err) {
		console.log(err);
		throw error(400, 'An error has occurred fetching posts');
	}
}

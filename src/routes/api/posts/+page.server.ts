import type { Post } from '$lib/types/posts';
import { json } from '@sveltejs/kit';

async function getPosts() {
	let posts: Post[] = [];
	const paths: Record<string, unknown> = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post: Post = { ...metadata, slug };
			if (post.published && post.slug) {
				posts.push(post);
			}
		}
	}

	posts = posts.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

	return posts;
}

export async function GET() {
	const posts = await getPosts();

	return json(posts);
}

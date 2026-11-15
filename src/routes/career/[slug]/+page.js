import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	try {
		
		const response = await fetch('/api/career');
		const posts = await response.json();
		

		const post = await import(`../../../posts/career/${params.slug}.md`);
		return {
			content: post.default,
			meta: post.metadata,
			otherJobs: posts.filter((p) => p.slug !== params.slug).slice(0, 3)
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}`);
	}
}

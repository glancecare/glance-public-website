import { error } from '@sveltejs/kit';

export async function load({ params, data }) {
	try {
		const post = await import(`../../../posts/blogs/${params.slug}.md`);

		return {
			...data,
			content: post.default,
			meta: post.metadata,
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find ${params.slug}`);
	}
}

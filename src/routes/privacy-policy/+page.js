import { error } from '@sveltejs/kit';

export async function load({ data }) {
	try {
		const post = await import(`./content.md`);

		return {
			...data,
			content: post.default,
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find content`);
	}
}

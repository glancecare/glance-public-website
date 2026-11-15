import { error } from '@sveltejs/kit';

export async function load({ data }) {
	try {
		const postEn = await import(`./content-en.md`);
		const postAr = await import(`./content-ar.md`);

		return {
			...data,
			contentEn: postEn.default,
			contentAr: postAr.default
		};
	} catch (e) {
		console.error(e);
		error(404, `Could not find content`);
	}
}

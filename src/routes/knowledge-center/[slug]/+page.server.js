export async function load({ fetch, params }) {
	// Load the posts from the api
	const response = await fetch('../api/posts');
	const posts = await response.json();

	// Find the next and previous posts
	const index = posts.findIndex((p) => p.slug === params.slug);
	let next = posts[index + 1];
	let previous = posts[index - 1];

	// If previous post does not exist, set it to the last post
	if (!previous) {
		previous = posts[posts.length - 1];
	}
	// If next post does not exist, set it to the first post
	if (!next) {
		next = posts[0];
	}

	return { next, previous };
}

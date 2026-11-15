export async function load({ fetch }) {
	// Load the posts from the api
	const response = await fetch('api/posts');
	let posts = await response.json();
	// Get first 3 posts
	posts = posts.slice(0, 3);
	return { posts };
}

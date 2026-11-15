export async function load({ fetch }) {
	// Load the posts from the api
	const response = await fetch('api/career');
	const posts = await response.json();
	return { posts };
}

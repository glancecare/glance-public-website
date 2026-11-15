<script>
	import Input from '$lib/components/input/index.svelte';
	import Button from '$lib/components/button/index.svelte';

	let email = '';

	function handleEmailChange(event) {
		email = event.target.value;
	}

	function handleSubmit(event) {
		event.preventDefault();
		let url = 'https://app.glance.care/signup';
		if (email) {
			url += `?email=${email}`;
		}
		window.open(url, '_blank');
	}
</script>

<div class="flex flex-col md:flex-row gap-4 md:mt-10 mt-4 items-bottom">
	<Input
		placeholder="Enter your email"
		icon="email-at"
		bind:value={email}
		on:change={handleEmailChange}
	/>
	<Button size="sm" variant="gradient" on:click={handleSubmit}>Try for Free</Button>
</div>

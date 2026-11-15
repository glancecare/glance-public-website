<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/button/index.svelte';

	function returnToHome() {
		goto('/');
	}
</script>

<div class="h-[100vh] flex flex-col gap-5 items-center justify-center bg-white text-center">
	<h1 class="text-4xl font-bold text-[#121926] mb-6">404 - Page Not Found</h1>
	<p class="text-lg text-gray-600 mb-10">Oops! The page you're looking for doesn't exist.</p>

	<Button on:click={returnToHome}>Return to Home</Button>
</div>

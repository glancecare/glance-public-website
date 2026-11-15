<script lang="ts">
	import { onMount } from 'svelte';
	export let open: boolean = false;
	export let videoUrl: string = '';
	export let onClose: () => void = () => {};
	let isBrowser: boolean = typeof window !== 'undefined';

	// Prevent scroll when popup is open
	$: {
		if (isBrowser && document?.body) {
			if (open) {
				document.body.style.overflow = 'hidden';
			} else {
				document.body.style.overflow = '';
			}
		}
	}

	onMount(() => {
		isBrowser = true;
	});

	function handleBackgroundClick(e: MouseEvent) {
		// only close if the user clicks the actual background, not inside the dialog
		if (e.target === e.currentTarget) {
			onClose();
		}
	}
</script>

{#if open}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all"
		on:click={handleBackgroundClick}
	>
		<div class="relative bg-transparent max-w-2xl w-full mx-4 rounded-2xl shadow-lg">
			<button
				class="absolute top-2 right-2 text-white text-3xl font-light rounded-full bg-black/40 hover:bg-black/80 w-10 h-10 flex items-center justify-center z-10 transition"
				on:click={() => onClose()}
				aria-label="Close"
				type="button"
			>
				<svg width="20" height="20" fill="none" viewBox="0 0 20 20">
					<path
						d="M6 6l8 8M6 14L14 6"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
			</button>
			<div class="aspect-video w-full">
				<iframe
					class="w-full h-full rounded-2xl"
					src={videoUrl}
					title="Video"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Responsive centering and max-width for video */
	.aspect-video {
		aspect-ratio: 16/9;
		background: #111;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>

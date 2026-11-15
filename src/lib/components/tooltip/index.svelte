<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { createEventDispatcher, onMount } from 'svelte';

	export let title: string | SvelteComponent | undefined = undefined;
	export let attrs: Record<string, any> | undefined = undefined;
	export let position:
		| 'top-center'
		| 'bottom-center'
		| 'left'
		| 'right'
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right' = 'top-center';
	export let delay: number = 50;
	export let showArrow: boolean = true;
	export let maxWidth: string = '300px';
	export let zIndex: number = 1000;

	const dispatch = createEventDispatcher();

	let tooltipElement: HTMLElement;
	let anchorElement: HTMLElement;
	let isVisible = false;
	let showTimeoutId: number | undefined;
	let hideTimeoutId: number | undefined;
	let tooltipPosition = { x: 0, y: 0 };
	let tooltipClasses = '';

	const positions: Record<string, string> = {
		'top-center': 'bottom-full left-1/2 transform -translate-x-1/2 mb-2',
		'bottom-center': 'top-full left-1/2 transform -translate-x-1/2 mt-2',
		left: 'right-full top-1/2 transform -translate-y-1/2 mr-2',
		right: 'left-full top-1/2 transform -translate-y-1/2 ml-2',
		'top-left': 'bottom-full right-0 mb-2',
		'top-right': 'bottom-full left-0 mb-2',
		'bottom-left': 'top-full right-0 mt-2',
		'bottom-right': 'top-full left-0 mt-2'
	};

	const arrowPositions: Record<string, string> = {
		'top-center': 'top-full left-1/2 transform -translate-x-1/2 border-t-white',
		'bottom-center': 'bottom-full left-1/2 transform -translate-x-1/2 border-b-white',
		left: 'left-full top-1/2 transform -translate-y-1/2 border-l-white',
		right: 'right-full top-1/2 transform -translate-y-1/2 border-r-white',
		'top-left': 'top-full right-2 border-t-white',
		'top-right': 'top-full left-2 border-t-white',
		'bottom-left': 'bottom-full right-2 border-b-white',
		'bottom-right': 'bottom-full left-2 border-b-white'
	};

	function showTooltip() {
		if (showTimeoutId) {
			clearTimeout(showTimeoutId);
		}
		if (hideTimeoutId) {
			clearTimeout(hideTimeoutId);
		}

		// show the tooltip outside viewport temporarily
		tooltipPosition = { x: -1000, y: -1000 };
		isVisible = true;
		dispatch('show');
		showTimeoutId = window.setTimeout(() => {
			updatePosition();
		}, delay);
	}

	function hideTooltip() {
		if (showTimeoutId) {
			clearTimeout(showTimeoutId);
		}
		if (hideTimeoutId) {
			clearTimeout(hideTimeoutId);
		}
		hideTimeoutId = window.setTimeout(() => {
			isVisible = false;
			dispatch('hide');
		}, delay);
	}

	function updatePosition() {
		if (!anchorElement || !tooltipElement) return;

		const anchorRect = anchorElement.getBoundingClientRect();
		const tooltipRect = tooltipElement.getBoundingClientRect();
		const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
		const scrollY = window.pageYOffset || document.documentElement.scrollTop;

		let x = 0;
		let y = 0;

		switch (position) {
			case 'top-center':
				x = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
				y = anchorRect.top - tooltipRect.height - 8;
				break;
			case 'bottom-center':
				x = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
				y = anchorRect.bottom + 8;
				break;
			case 'left':
				x = anchorRect.left - tooltipRect.width - 8;
				y = anchorRect.top + anchorRect.height / 2 - tooltipRect.height / 2;
				break;
			case 'right':
				x = anchorRect.right + 8;
				y = anchorRect.top + anchorRect.height / 2 - tooltipRect.height / 2;
				break;
			case 'top-left':
				x = anchorRect.right - tooltipRect.width;
				y = anchorRect.top - tooltipRect.height - 8;
				break;
			case 'top-right':
				x = anchorRect.left;
				y = anchorRect.top - tooltipRect.height - 8;
				break;
			case 'bottom-left':
				x = anchorRect.right - tooltipRect.width;
				y = anchorRect.bottom + 8;
				break;
			case 'bottom-right':
				x = anchorRect.left;
				y = anchorRect.bottom + 8;
				break;
		}

		// Ensure tooltip stays within viewport
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		if (x < 0) x = 8;
		if (x + tooltipRect.width > viewportWidth) x = viewportWidth - tooltipRect.width - 8;
		if (y < 0) y = 8;
		if (y + tooltipRect.height > viewportHeight) y = viewportHeight - tooltipRect.height - 8;

		tooltipPosition = { x, y };
		console.log(tooltipPosition);
	}

	onMount(() => {
		window.addEventListener('scroll', updatePosition);
		window.addEventListener('resize', updatePosition);

		return () => {
			window.removeEventListener('scroll', updatePosition);
			window.removeEventListener('resize', updatePosition);
			if (showTimeoutId) clearTimeout(showTimeoutId);
			if (hideTimeoutId) clearTimeout(hideTimeoutId);
		};
	});

	$: tooltipClasses = positions[position] ?? positions['top-center'];
	$: arrowClasses = arrowPositions[position] ?? arrowPositions['top-center'];
</script>

<div
	bind:this={anchorElement}
	on:mouseenter={showTooltip}
	on:mouseleave={hideTooltip}
	on:focus={showTooltip}
	on:blur={hideTooltip}
	class="inline-block cursor-help"
	role="button"
	tabindex="0"
>
	<slot />
</div>

{#if isVisible && title}
	<div
		bind:this={tooltipElement}
		class="fixed z-{zIndex} pointer-events-none"
		style="left: {tooltipPosition.x}px; top: {tooltipPosition.y}px; max-width: {maxWidth};"
		role="tooltip"
		aria-hidden="true"
		on:mouseenter={showTooltip}
		on:mouseleave={hideTooltip}
		on:focus={showTooltip}
		on:blur={hideTooltip}
	>
		<div
			class="bg-white text-sm px-3 py-2 rounded-lg shadow-2xl relative border-1 border-(--glc-primary-200)"
		>
			{#if typeof title === 'string'}
				{title}
			{:else if typeof title === 'object' && title.constructor.name === 'Object'}
				{@html title}
			{:else if typeof title === 'function'}
				<svelte:component this={title} {...attrs} />
			{:else}
				{title}
			{/if}

			{#if showArrow}
				<div class="absolute w-0 h-0 border-4 border-transparent {arrowClasses}"></div>
			{/if}
		</div>
	</div>
{/if}

<style>
	/* Additional styles for better tooltip appearance */
	:global(.tooltip-content) {
		word-wrap: break-word;
		white-space: normal;
	}

	/* Ensure tooltip content is properly styled */
	:global(.tooltip-content *) {
		color: inherit;
	}
</style>

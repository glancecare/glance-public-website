<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	export let label: string = 'Menu';
	export let items: Array<{ id: string; label: string; href: string }> = [];
	export let active: string | null = null;
	export let width: string = 'w-auto';
	export let target: string = '_self';
	export let mobileView: boolean = false;
	export let isActive: boolean = false;

	let isOpen = false;
	let dropdownRef: HTMLDivElement;
	const dispatch = createEventDispatcher();

	// Handle navigation
	function handleSelect(item: { id: string; label: string; href: string }) {
		active = item.id;
		isOpen = false;
		dispatch('navigate', { selected: item });
	}

	// Close dropdown when clicking outside
	function handleClickOutside(event: MouseEvent) {
		if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
			isOpen = false;
		}
	}

	// Toggle dropdown
	function toggleDropdown() {
		isOpen = !isOpen;
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="relative {width}" bind:this={dropdownRef}>
	<!-- Desktop Navigation Dropdown -->
	{#if !mobileView}
		<button
			type="button"
			class="flex items-center gap-1 text-base xl:text-lg font-medium !leading-[24px] cursor-pointer {isActive
				? 'text-(--glc-primary-600)'
				: ''} "
			on:click={toggleDropdown}
			aria-haspopup="menu"
			aria-expanded={isOpen}
		>
			<span>{label}</span>
			<svg
				class="w-4 h-4 transition-transform duration-200 {isOpen ? 'transform rotate-180' : ''}"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</button>

		{#if isOpen}
			<div
				transition:fade={{ duration: 150 }}
				class="absolute z-50 mt-2 {width} min-w-[200px] bg-white border border-gray-100 rounded-lg shadow-lg"
				role="menu"
			>
				{#if items.length === 0}
					<div class="px-4 py-2 text-gray-500 italic">No options available</div>
				{:else}
					{#each items as item}
						<a
							href={item.href}
							{target}
							class="block px-4 py-2 text-[#364152] hover:bg-gray-50 hover:text-(--glc-primary-600) text-nowrap {active ===
							item.id
								? 'text-(--glc-primary-600) font-medium'
								: ''}"
							role="menuitem"
						>
							{item.label}
						</a>
					{/each}
				{/if}
			</div>
		{/if}
	{:else}
		<!-- Mobile Navigation Dropdown -->
		<div class="w-full">
			<button
				type="button"
				class="flex items-center justify-between w-full -mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 hover:bg-gray-50"
				on:click={toggleDropdown}
				aria-expanded={isOpen}
			>
				<span class="font-semibold">{label}</span>
				<svg
					class="w-4 h-4 transition-transform duration-200 {isOpen ? 'transform rotate-180' : ''}"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{#if isOpen}
				<div class="bg-gray-50 py-2" role="menu">
					{#if items.length === 0}
						<div class="px-4 py-2 text-gray-500 italic">No options available</div>
					{:else}
						{#each items as item}
							<a
								href={item.href}
								{target}
								class="block px-6 py-4 text-[#364152] hover:text-(--glc-primary-600) {active ===
								item.id
									? 'text-(--glc-primary-600) font-medium'
									: ''}"
								role="menuitem"
							>
								{item.label}
							</a>
						{/each}
					{/if}
				</div>
			{/if}
		</div>
	{/if}
</div>

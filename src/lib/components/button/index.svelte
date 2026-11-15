<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let loading: boolean = false;
	export let disabled: boolean = false;
	export let fontSize: 'xs' | 'sm' | 'md' | 'lg' = 'md';
	export let size: 'xs' | 'sm' | 'md' = 'md';
	export let rounded: 'sm' | 'md' | 'lg' | 'full' = 'full';
	export let type: 'button' | 'submit' = 'button';
	export let className: string = '';
	export let icon: ComponentType | null = null;
	export let variant: 'filled' | 'outlined' | 'link' | 'gradient' | 'text' = 'filled';
	export let href: string = '';
	export let target: string = '';

	const baseClasses =
		'flex justify-center items-center transition-all duration-150 font-medium leading-6 cursor-pointer';

	const fontSizeClasses = {
		xs: 'text-xs',
		sm: 'text-sm',
		md: 'text-base',
		lg: 'sm:text-lg text-base'
	};

	const sizeClasses = {
		xs: 'px-2 py-1',
		sm: 'px-5 py-3',
		md: 'lg:px-[24px] lg:py-[16px] px-[24px] py-[12px]'
	};

	const roundedClasses = {
		sm: 'rounded-sm',
		md: 'rounded-md',
		lg: 'rounded-lg',
		full: 'rounded-full'
	};

	const variantClasses = {
		filled: 'bg-(--glance-primary) text-white hover:bg-(--glance-primary)/80',
		outlined: 'bg-transparent text-(--glance-primary) border border-(--glance-primary) hover:bg-(--glance-primary)/10',
		link: 'text-(--glance-primary) outline-none hover:text-(--glance-primary)/80',
		gradient: 'gradient text-white hover:bg-(--glance-primary)/80'
	};

	const disabledClasses = 'opacity-50 cursor-not-allowed';

	$: buttonClasses = `${baseClasses} ${fontSizeClasses[fontSize]} ${
		sizeClasses[size]
	} ${roundedClasses[rounded]} ${variantClasses[variant]} ${disabled ? disabledClasses : ''} ${className}`;
</script>

{#if href}
	<a {href} class={buttonClasses} {type} {target}>
		{#if loading}
			<span>Loading...</span>
		{:else}
			<slot />
			{#if icon}
				<svelte:component this={icon} class="ml-2 h-4 w-4" />
			{/if}
		{/if}
	</a>
{:else}
	<button class={buttonClasses} {disabled} {type} on:click>
		{#if loading}
			<span>Loading...</span>
		{:else}
			<slot />
			{#if icon}
				<svelte:component this={icon} class="ml-2 h-4 w-4" />
			{/if}
		{/if}
	</button>
{/if}

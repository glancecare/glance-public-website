<script>
	import { page } from '$app/stores';
	import { fly } from 'svelte/transition';
	import { locale, locales } from '$lib/i18n';
	import Button from '$lib/components/button/index.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import { openDrawer } from '../../../store';
	import Dropdown from '$lib/components/dropdown/index.svelte';
	let menuOpen = false;

	const menuItems = [
		{ name: 'Home', href: '/' },
		{ name: 'Pricing', href: '/pricing' },
		{
			name: 'Enterprise',
			items: [
				{
					id: 'enterprise',
					label: 'Overview',
					href: '/enterprise'
				},
				{
					id: 'healthcare-business-analytics',
					label: 'Healthcare Business Analytics',
					href: '/healthcare-provider/healthcare-business-analytics'
				},
				{
					id: 'healthcare-provider-analytics',
					label: 'Revenue Cycle Management',
					href: '/healthcare-provider/revenue-cycle-management'
				},
				{
					id: 'clinical-documentation-improvement',
					label: 'Clinical Documentation Improvement',
					href: '/healthcare-provider/improve-clinical-documentation'
				},
				{
					id: 'clinical-decision-support',
					label: 'Clinical Decision Support',
					href: '/healthcare-provider/clinical-decision-support-system'
				}
			]
		},
		{
			name: 'About',
			items: [
				{ id: 'about-us', label: 'About Us', href: '/about-us' },
				{ id: 'why-glance', label: 'Why Glance', href: '/why-glance' }
			]
		},
		{ name: 'Knowledge Centre', href: '/knowledge-center' }
	];

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}

	const handleOpenDrawer = () => {
		openDrawer();
	};

	function isDropdownActive(items) {
		return items.some((item) => $page.url.pathname === item.href);
	}
</script>

<header class="bg-white lg:border-none border-b-2 border-[#EAEAEA] z-50">
	<nav
		class="w-full sticky flex items-center justify-between py-4 container mx-auto px-6 lg:px-0"
		aria-label="Global"
	>
		<div class="-m-1.5 p-1.5 border-r-2 border-[#EAEAEA] lg:border-none">
			<a href="/">
				<Icon name="logo" color="var(--glance-primary)" />
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
				on:click={toggleMenu}
				aria-label="Open main menu"
			>
				<Icon name="menu" />
			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-8">
			<ul class="flex flex-wrap gap-4 xl:gap-8 items-center">
				{#each menuItems as item}
					<li>
						{#if item.items}
							<Dropdown
								label={item.name}
								items={item.items}
								isActive={isDropdownActive(item.items)}
							/>
						{:else}
							<a
								href={item.href}
								class="text-base xl:text-lg font-medium !leading-[24px] {$page.url.pathname ===
								item.href
									? 'text-(--glance-primary)'
									: 'text-black'}">{item.name}</a
							>
						{/if}
					</li>
				{/each}
				<li>
					<select
						bind:value={$locale}
						class="bg-white outline-none text-base xl:text-lg font-medium leading-6"
					>
						{#each locales as l}
							<option value={l} class="text-base xl:text-lg font-medium leading-6">{l}</option>
						{/each}
					</select>
				</li>
				<li class="flex items-center gap-4">
					<Button
						href="https://app.glance.care"
						target="_blank"
						variant="outlined"
						size="sm"
						rounded="full"
						fontSize="sm">Login</Button
					>
					<Button
						variant="outlined"
						size="sm"
						rounded="full"
						fontSize="sm"
						on:click={handleOpenDrawer}
					>
						Contact Us
					</Button>
				</li>
			</ul>
		</div>
	</nav>

	{#if menuOpen}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<div class="fixed inset-0 z-10"></div>
			<div
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
				transition:fly={{ x: 300, duration: 300 }}
			>
				<div class="flex items-center justify-between">
					<a href="/">
						<Icon name="logo" color="var(--glance-primary)" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-700"
						on:click={toggleMenu}
						aria-label="Close menu"
					>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<ul class="space-y-2">
						{#each menuItems as item}
							<li>
								{#if item.items}
									<Dropdown label={item.name} items={item.items} mobileView={true} />
								{:else}
									<a
										href={item.href}
										class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										on:click={closeMenu}>{item.name}</a
									>
								{/if}
							</li>
						{/each}
						<li class="flex flex-col gap-4">
							<a
								href="/"
								class="px-6 text-center w-full py-2.5 lg:text-lg text-base
							 text-(--glance-primary) font-medium border border-(--glance-primary) rounded-full leading-[24px]"
							>
								Login
							</a>
							<Button variant="gradient" rounded="full" fontSize="lg" on:click={handleOpenDrawer}
								>Contact Us</Button
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	{/if}
</header>

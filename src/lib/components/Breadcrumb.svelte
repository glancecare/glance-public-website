<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';

	function getBreadcrumbName(path: string) {
		switch (path.toLowerCase()) {
			case 'why-glance':
				return 'Why Glance?';
			case 'knowledge-center':
				return 'Knowledge Centre';
			case 'partners':
				return 'Partnership';
			case 'about-us':
				return 'About Glance';
			case 'clinical-decision-support-system':
				return 'CDSS';
			case 'revenue-cycle-management':
				return 'RCM Solutions';
			case 'improve-clinical-documentation':
				return 'Clinical Documentation Improvement';
			case 'healthcare-business-analytics':
				return 'Business Data Analytics';
			case 'blog1':
				return 'Blog';
			case 'blog2':
				return 'Blog';
			default:
				return path.charAt(0).toUpperCase() + path.slice(1).replace(/[-_]/g, ' ');
		}
	}

	const breadcrumbs = derived(page, ($page) => {
		const paths = $page.url.pathname.split('/').filter(Boolean);
		return paths.map((path, index) => {
			return {
				name: getBreadcrumbName(path),
				href: '/' + paths.slice(0, index + 1).join('/')
			};
		});
	});

	function handleClick(href: string) {
		goto(href);
	}
</script>

<nav aria-label="Breadcrumb">
	<ul class="flex items-center gap-3 flex-wrap">
		<li>
			<a
				href="/"
				class="text-[#9AA4B2] hover:text-(--glance-primary) font-medium"
				on:click={() => handleClick('/')}
			>
				Home
			</a>
		</li>
		<span class="text-[#9AA4B2]">•</span>
		{#each $breadcrumbs as breadcrumb, index}
			<li class="flex items-center">
				<a
					href={breadcrumb.href}
					class="font-medium text-sm {index === $breadcrumbs.length - 1
						? 'text-(--glance-primary)'
						: 'text-[#9AA4B2] hover:text-(--glance-primary)'}"
					on:click={() => handleClick(breadcrumb.href)}
				>
					{breadcrumb.name}
				</a>
			</li>
			{#if index !== $breadcrumbs.length - 1}
				<span class="text-gray-400">•</span>
			{/if}
		{/each}
	</ul>
</nav>

<script lang="ts">
	import Icon from '$lib/components/icons/index.svelte';
	import { page } from '$app/stores';

	const companyLinks = [
		{
			name: 'About us',
			link: '/about-us'
		},
		{
			name: 'Why Glance',
			link: '/why-glance'
		},
		{
			name: 'Career',
			link: '/career'
		},
		{
			name: 'Partners',
			link: '/partners'
		}
	];
	const solutionLinks = [
		{
			name: 'For Clinical Care Team',
			link: '/healthcare-provider/clinical-decision-support-system'
		},
		{
			name: 'For Clinical Documentation Improvement',
			link: '/healthcare-provider/improve-clinical-documentation'
		},
		{
			name: 'For Revenue Cycle Management',
			link: '/healthcare-provider/revenue-cycle-management'
		},
		{
			name: 'For Healthcare Business Analytics',
			link: '/healthcare-provider/healthcare-business-analytics'
		}
	];

	const knowledgeCenterLinks = [
		{
			name: 'Knowledge Center',
			link: '/knowledge-center'
		},
		{
			name: 'Events',
			link: '/events'
		},
		{
			name: 'White Papers',
			link: '/whitepapers'
		}
	];

	let icons = [
		{ name: 'twitter', link: 'https://x.com/GlanceCare', defaultColor: '#9AA4B2' },
		{ name: 'instagram', link: 'https://www.instagram.com/glance.care/', defaultColor: '#9AA4B2' },
		{
			name: 'linkedIn',
			link: 'https://www.linkedin.com/company/glance-care',
			defaultColor: '#9AA4B2'
		}
	];

	const footerLinks = [
		{ name: 'Cookies', href: '/' },
		{ name: 'Privacy Policy', href: '/privacy-policy' },
		{ name: 'Terms & Conditions', href: '/terms-and-conditions' }
	];

	let hoverStates: any = {};

	const setHoverColor = (iconName: any, isHovering: any) => {
		hoverStates[iconName] = isHovering;
	};
</script>

<div class="bg-(--glc-primary-100) px-6 lg:px-0 py-20 footerWrapper">
	<footer
		class="bg-white rounded-3xl sm:py-[48px] lg:px-[102px] py-[48px] px-[16px] container mx-auto"
	>
		<div class="flex flex-col gap-[60px]">
			<div class="flex flex-col md:flex-row justify-between">
				<!-- Company Section -->
				<div class="p-4 w-full lg:w-[396px]">
					<h3
						class="text-(--glance-primary) lg:text-lg text-base font-semibold mb-6 leading-[24px] lg:leading-[26px]"
					>
						Company
					</h3>
					<ul class="space-y-6">
						{#each companyLinks as link}
							<li>
								<a
									href={link.link}
									data-sveltekit-reload
									class="lg:text-base text-sm leading leading-[20px] lg:leading-[24px] font-medium {$page
										.url.pathname === link.link
										? 'text-(--glance-primary)'
										: 'text-[#697586]'}">{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Solution Section -->
				<div class="p-4 w-full lg:w-[396px]">
					<h3
						class="text-(--glance-primary) lg:text-lg text-base font-semibold mb-6 leading-[24px] lg:leading-[26px]"
					>
						Solution
					</h3>
					<ul class="space-y-6">
						{#each solutionLinks as link}
							<li>
								<a
									href={link.link}
									data-sveltekit-reload
									class="lg:text-base text-sm leading leading-[20px] lg:leading-[24px] font-medium {$page
										.url.pathname === link.link
										? 'text-(--glance-primary)'
										: 'text-[#697586]'}">{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Knowledge Center Section -->
				<div class="p-4 w-full lg:w-[200px]">
					<h3
						class="text-(--glance-primary) lg:text-lg text-base font-semibold mb-6 leading-[24px] lg:leading-[26px]"
					>
						Knowledge centre
					</h3>
					<ul class="space-y-6">
						{#each knowledgeCenterLinks as link}
							<li>
								<a
									href={link.link}
									data-sveltekit-reload
									class="lg:text-base text-sm leading leading-[20px] lg:leading-[24px] font-medium {$page
										.url.pathname === link.link
										? 'text-(--glance-primary)'
										: 'text-[#697586]'}">{link.name}</a
								>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="flex flex-col gap-12">
				<div class="flex flex-col items-center gap-6">
					<div class="flex flex-col justify-center items-center gap-4">
						<div>
							<Icon name="logo" color="var(--glance-primary)" />
						</div>
						<div class="flex justify-center px-4 lg:px-0">
							<p
								class="text-[#697586] lg:text-sm text-xs font-medium lg:w-[60%] w-full text-center lg:leading-[22px] leading-[20px]"
							>
								Transforming Saudi Healthcare: One Breakthrough at a Time. Optimize Operations,
								Enhance Outcomes, Reduce Costs. Join the transformation.
							</p>
						</div>
					</div>
					<div class="flex items-center gap-3">
						{#each icons as icon}
							<a
								href={icon.link}
								target="_blank"
								rel="noopener noreferrer"
								class="hover:bg-(--glc-primary-100) rounded-lg p-2 cursor-pointer focus:outline-none"
								on:mouseenter={() => setHoverColor(icon.name, true)}
								on:mouseleave={() => setHoverColor(icon.name, false)}
								on:keydown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										setHoverColor(icon.name, true);
									}
								}}
								on:keyup={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										setHoverColor(icon.name, false);
									}
								}}
							>
								<Icon
									name={icon.name}
									color={hoverStates[icon.name] ? '#087AE4' : icon.defaultColor}
								/>
							</a>
						{/each}
					</div>
				</div>
				<div>
					<div class="border-b border-[#E3E8EF]">
						<ul class="flex items-center gap-6 lg:gap-20 justify-center pb-6 text-center">
							{#each footerLinks as link}
								<li class="lg:w-[180px] w-full">
									<a
										href={link.href}
										class="lg:text-sm text-xs leading-[20px] lg:leading-[16px] text-[#9AA4B2] font-medium"
										>{link.name}</a
									>
								</li>
							{/each}
						</ul>
					</div>
					<div class="text-center pt-6">
						<p class="text-xs text-[#9AA4B2] font-medium">©2024 Glance. All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	.footerWrapper {
		background-image: url('../../images/footerbg.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>

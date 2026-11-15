<script lang="ts">
	import HcpProvider from '$lib/components/comonSection/HcpProvider.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import CaseCard from '$lib/components/card/CaseCard.svelte';
	import Img1 from '$lib/images/case1.png';
	import Img3 from '$lib/images/case2.png';
	import Icon from '$lib/components/icons/index.svelte';
	import Button from '$lib/components/button/index.svelte';
	import HeroImg from '$lib/images/hcphome.png';

	import { openDrawer } from '../../store';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';

	const tabs = [
		{ name: 'HEALTHCARE PROVIDERS', active: true },
		{ name: 'Hospital' },
		{ name: 'Polyclinic' },
		{ name: 'Primary Care Providers' }
	];

	const items = [
		{
			imageSrc: Img1,
			caseTitle: 'CASE STUDY',
			heading:
				'Medical group to increase claim revenue and improve documentation quality using GlanceClaim',
			buttonText: 'Learn More'
		},
		{
			imageSrc: Img3,
			caseTitle: 'CASE STUDY',
			heading:
				'20+ doctor medical center prevents revenue leakage and increases coding accuracy using GlanceClaim™',
			buttonText: 'Learn More'
		},
		{
			imageSrc: Img1,
			caseTitle: 'CASE STUDY',
			heading: '40-year-old multi-specialty improves patien...',
			buttonText: 'Learn More'
		}
	];
	const HcpProviderItems = [
		{
			title: 'Healthcare Business Analytics',
			link: 'healthcare-provider/healthcare-business-analytics',
			icon: 'chart'
		},
		{
			title: 'Revenue Cycle Management Solutions',
			link: 'healthcare-provider/revenue-cycle-management',
			icon: 'fileSearch'
		},
		{
			title: 'Clinical documentation improvement Solutions',
			link: 'healthcare-provider/improve-clinical-documentation',
			icon: 'file'
		},
		{
			title: 'Advance Clinical Decision Support Solutions',
			link: 'healthcare-provider/clinical-decision-support-system',
			icon: 'guard'
		}
	];
</script>

<svelte:head>
	<title>Pioneering Solutions for Healthcare Providers | Glance Care</title>
	<meta
		name="description"
		content="Unlock the potential of your healthcare practice with Glance Care's transformative solutions, focused on efficiency, accuracy, and innovation."
	/>
</svelte:head>

<div>
	<div class="container mx-auto lg:py-[120px] py-10 lg:px-0 px-6">
		<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-[68px] gap-10 items-start">
			<div class="flex flex-col gap-6">
				<div>
					<Breadcrumb />
				</div>
				{#if tabs}
					<div class="hidden lg:block">
						<div class="flex items-center gap-4">
							{#each tabs as tab, i}
								<div
									class={`text-xs font-medium ${
										tab?.active
											? 'text-white bg-(--glance-primary) rounded-full px-2 py-0.5 font-medium'
											: 'text-[#121926]'
									}`}
								>
									{tab.name}
								</div>
								{#if i < tabs.length - 1}
									<Icon name="dot" />
								{/if}
							{/each}
						</div>
					</div>
				{/if}
				<div>
					<h1
						class="text-[42px] lg:text-[60px] font-medium leading-[50px] lg:leading-[70px] text-[#121926]"
					>
						Pioneering Innovation in Healthcare Solutions
					</h1>
				</div>
				<div>
					<p
						class="text-lg lg:text-[22px] lg:leading-[30px] leading-[26px] font-normal text-[#364152]"
					>
						Transforming Saudi Healthcare: Revolutionizing Efficiency, Accuracy, and Innovation at
						Every Glance.
					</p>
				</div>

				<div>
					<Button variant="gradient" rounded="full" fontSize="lg" on:click={() => openDrawer()}
						>Contact Us</Button
					>
				</div>
			</div>

			<div class="flex lg:justify-end justify-start">
				<div class="lg:h-[413px] lg:w-[522px] w-full h-full">
					<img src={HeroImg} alt="HeroImage" class="object-cover w-full h-full" />
				</div>
			</div>
		</div>
	</div>
	<div class="caseWrapper relative py-20 bg-center bg-cover bg-no-repeat">
		<div class="overlay absolute inset-0 bg-[#EEF2F6] opacity-[80%] z-0"></div>
		<div class="container mx-auto px-6 lg:px-0 relative z-10">
			<div class="flex flex-col lg:gap-20 gap-[60px]">
				<div class="space-y-2 text-center">
					<Title>Case Study</Title>
					<SubHeading textAlign="center">Customers’ Use Cases</SubHeading>
				</div>
				<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
					{#each items as item}
						<CaseCard
							imageSrc={item.imageSrc}
							caseTitle={item.caseTitle}
							heading={item.heading}
							link="/knowledge-center"
						/>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div>
		<HcpProvider items={HcpProviderItems} />
	</div>
</div>

<style>
	.caseWrapper {
		background-image: url('../../lib/images/blue-wave-pattern-bg.png');
	}
</style>

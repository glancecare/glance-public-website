<script>
	import FooterCTA from '$lib/components/comonSection/FooterCTA.svelte';
	import Button from '$lib/components/button/index.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import Tooltip from '$lib/components/tooltip/index.svelte';
	import TooltipContent from './TooltipContent.svelte';
	let selectedPlan = 'monthly';

	let plans = {
		monthly: [
			{
				id: 'free',
				name: 'Free',
				price: 'Free'
			},
			{
				id: 'starter',
				name: 'Starter',
				price: '25 SAR'
			},
			{
				id: 'essential',
				name: 'Essential',
				price: '60 SAR'
			},
			{
				id: 'professional',
				name: 'Professional',
				price: '120 SAR'
			}
		],
		yearly: [
			{
				id: 'starter',
				name: 'Starter',
				price: '300 SAR'
			},
			{
				id: 'essential',
				name: 'Essential',
				price: '720 SAR'
			},
			{
				id: 'professional',
				name: 'Professional',
				price: '1440 SAR'
			},
			{
				id: 'unlimited',
				name: 'Unlimited',
				price: '4320 SAR'
			},
			{
				id: 'enterprise',
				name: 'Enterprise',
				price: 'Custom',
				disablePrice: true
			}
		]
	};

	let featuresList = [
		{
			title: 'Monthly Usage Limit',
			description: 'Credit usage limit for each plan.',
			features: {
				free: '4,000',
				starter: '7,500',
				essential: '20,000',
				professional: '45,000',
				unlimited: 'infinite',
				enterprise: 'infinite'
			}
		},
		{
			title: 'Quick Coder',
			subTitle: 'Powered by Moramiz AI',
			description:
				'Automatically and accurately assign ICD-10-AM codes to clinical documentation in real time using advanced AI, streamlining your workflow and reducing administrative burden.',
			features: {
				free: true,
				starter: true,
				essential: true,
				professional: true,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'SOAP Builder',
			subTitle: 'Powered by DocuGen AI',
			description:
				'Automatically standardizes raw clinical notes into structured, searchable SOAP templates for streamlined documentation.',
			features: {
				free: true,
				starter: true,
				essential: true,
				professional: true,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'Patient Engagement',
			subTitle: 'Powered by Sanad AI',
			description:
				'Effortlessly automates patient-doctor engagement by managing follow-ups, distributing visit summaries. ',
			features: {
				free: true,
				starter: true,
				essential: true,
				professional: true,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'Note Taking',
			subTitle: 'Powered by DocuGen & Moramiz AI',
			description:
				'Adaptive note-taking with integrated clinical decision support for efficient documentation during pre-rounds, inpatient, and emergency care, giving you more time for patients.',
			features: {
				free: true,
				starter: true,
				essential: true,
				professional: true,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'Patient Referral',
			subTitle: 'Powered by Sanad AI',
			description:
				'Receive external patient appointment requests tailored to your clinical expertise.',
			features: {
				free: false,
				starter: true,
				essential: true,
				professional: true,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'Data Analytics',
			subTitle: 'Powered by Glance Insights Analytics',
			description:
				'Convert clinical notes and activity data into actionable insights to address your statistical and research queries.',
			features: {
				free: false,
				starter: false,
				essential: false,
				professional: false,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'Cardiology and Oncology CDSS',
			subTitle: 'Powered by Glance MedLogic AI',
			description:
				'An advanced, evidence-based clinical decision support system for cardiology and oncology, offering differential diagnosis, staging, risk stratification, procedural recommendations, and up-to-date pharmacology and chemotherapy protocols.',
			features: {
				free: false,
				starter: false,
				essential: false,
				professional: false,
				unlimited: true,
				enterprise: true
			}
		},
		{
			title: 'FHIR APIs integration',
			subTitle: '',
			description:
				'Integrate with your existing FHIR-based systems to enhance clinical documentation and streamline workflows.',
			features: {
				free: false,
				starter: false,
				essential: false,
				professional: false,
				unlimited: false,
				enterprise: true
			}
		}
	];
</script>

<svelte:head>
	<title>Pricing & Plans | Glance Care</title>
	<meta
		name="description"
		content="Compare pricing and features of Glance Care plans and choose the one that best suits your needs."
	/>
</svelte:head>

<div class="bg-pattern-blue-wave m-6 py-4 rounded-2xl">
	<div class="container mx-auto my-16">
		<div class="flex flex-col px-4 w-full justify-center items-center">
			<h1 class="text-xl md:text-3xl xl:text-5xl">Compare Pricing & Features</h1>
			<div class="flex flex-col md:flex-row gap-10 items-center mt-4">
				<div
					class="flex gap-2 justify-center items-center p-1 rounded-4xl border-2 border-(--glc-primary-300)"
				>
					<Button
						size="xs"
						variant={selectedPlan === 'monthly' ? 'filled' : 'text'}
						fontSize="sm"
						on:click={() => (selectedPlan = 'monthly')}>Monthly</Button
					>
					<Button
						size="xs"
						variant={selectedPlan === 'yearly' ? 'filled' : 'text'}
						fontSize="sm"
						on:click={() => (selectedPlan = 'yearly')}>Yearly</Button
					>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="container mx-auto my-16 px-4">
	<div class="rounded-3xl border-2 border-(--glc-primary-200) overflow-x-auto">
		<table class="table-fixed min-w-full border-collapse">
			<thead>
				<tr>
					<th class="p-2 md:p-4 min-w-[150px] max-w-[250px]"></th>
					{#each plans[selectedPlan] as plan}
						<th
							class="border-x-2 border-(--glc-primary-200) p-2 md:p-4 last:border-r-0 first:border-l-0 min-w-[150px]"
						>
							<h3 class="text-lg font-light mb-2">{plan.name}</h3>
							<p class="text-2xl font-normal {plan.disablePrice ? 'text-gray-400' : 'text-black'}">
								{plan.price}
							</p>
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each featuresList as feature}
					<tr class="border-b-2 border-(--glc-primary-200) last:border-b-0">
						<td
							class="p-2 md:p-4 text-base md:text-lg border-2 border-(--glc-primary-200) first:border-l-0"
						>
							<Tooltip
								title={TooltipContent}
								position="right"
								attrs={{
									subTitle: feature.subTitle,
									description: feature.description
								}}
							>
								{feature.title}
							</Tooltip>
						</td>
						{#each plans[selectedPlan] as plan}
							<td
								class="border-2 border-(--glc-primary-200) p-2 md:p-4 last:border-r-0 first:border-l-0 text-center"
							>
								{#if feature.features[plan.id] === true}
									<span
										class="w-6 h-6 flex justify-center items-center bg-(--glc-primary-500) rounded-full text-white text-xs mx-auto"
									>
										<Icon name="check" />
									</span>
								{:else if feature.features[plan.id] === false}
									-
								{:else if feature.features[plan.id] === 'infinite'}
									<div class="flex justify-center items-center text-3xl text-(--glc-primary-800)">
										<Icon name="infinity" />
									</div>
								{:else}
									{feature.features[plan.id]}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<FooterCTA />

<style lang="scss" scoped>
	table {
		tbody {
			tr:last-child {
				td {
					border-bottom: none;
				}
			}
		}
	}
</style>

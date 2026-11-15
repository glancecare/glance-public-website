<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import TeamBox from '$lib/components/boxes/TeamBox.svelte';
	import Heading from '$lib/components/typography/Heading.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import aboutImg2 from '$lib/images/about2.png';
	import aboutImg3 from '$lib/images/about3.svg';
	import EmbImg from '$lib/images/about3.png';

	const teamItems = [
		{
			title: 'Creative Problem-Solvers',
			description:
				'They love coming up with fresh ideas that make the health/insurance process easier to understand and use.',
			icon: 'check'
		},
		{
			title: 'Healthcare Insiders',
			description:
				'They know the healthcare system inside and out, so they can create solutions that fit your needs perfectly.',
			icon: 'check'
		},
		{
			title: 'Here-to-Help Heroes',
			description:
				"They're passionate about making healthcare better for everyone in Saudi Arabia.",
			icon: 'check'
		},
		{
			title: 'Always on the Lookout',
			description:
				"They're constantly searching for new ways to improve the industry, keeping our clients ahead of the curve.",
			icon: 'check'
		}
	];
</script>

<svelte:head>
	<title>About Glance Care | Redefining Healthcare Technology</title>
	<meta
		name="description"
		content="Discover the vision and mission behind Glance Care, a leader in AI-driven healthcare solutions designed to empower providers and improve clinical operations."
	/>
</svelte:head>

<div>
	<div class="container mx-auto px-6 lg:px-0 lg:py-20 py-10">
		<div class="flex flex-col lg:gap-4 gap-6">
			<div>
				<Breadcrumb />
			</div>
			<div>
				<h1 class="lg:text-[64px] text-[42px] font-medium lg:leading-[72px] leading-[50px]">
					
				</h1>
				<Heading>About Glance</Heading>

			</div>
		</div>
	</div>
	<div>
		<div class="lg:pb-20 pb-10">
			<div
				class="bg-(--glc-primary-100) px-6 lg:px-0 pt-10 lg:pt-0 rounded-3xl
					 container mx-auto overflow-hidden flex flex-col lg:flex-row
					 gap-10 items-center"
			>
				<div class="w-full flex flex-col lg:gap-6 gap-4 lg:w-1/2 lg:px-[60px] lg:py-[60px]">
					<div>
						<SubHeading color="text-(--glance-primary)"
							>Building a Healthier Future for Saudi Arabia</SubHeading
						>
					</div>
					<div>
						<p class="lg:text-lg text-base font-normal !leading-[24px] text-[#343A40]">
							Founded in 2019, Glance Care is a leading health insurance innovator dedicated to
							empowering the Saudi healthcare industry towards a sustainable and thriving future. We
							believe in the transformative power of health insurance and are committed to making
							healthcare accessible and affordable for all residents of the Kingdom.
						</p>
					</div>
				</div>
				<div
					class="w-full flex justify-end lg:w-1/2 feature-bg lg:bg-contain lg:bg-right bg-no-repeat bg-cover"
				>
					<img src={aboutImg2} alt="" class="w-[400px] pt-[60px]" />
				</div>
			</div>
		</div>
	</div>
	<div
		class="container mx-auto px-6 lg:px-0 md:px-0 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[60px] lg:py-20 py-10"
	>
		<div class="w-full lg:w-1/2 overflow-hidden order-2 lg:order-1">
			<img src={EmbImg} alt="" class="rounded-lg object-cover" />
		</div>
		<div class="w-full lg:w-1/2 flex flex-col lg:gap-6 gap-10 order-1 lg:order-2">
			<SubHeading>Embracing Change, Delivering Results</SubHeading>
			<p class="lg:text-lg text-base font-normal !leading-[24px] text-[#343A40]">
				Our dynamic team is at the forefront of the healthcare technology landscape. We are agile
				and adaptable, constantly evolving to meet the ever-changing needs of the market and our
				customers. Our innovative approach ensures we deliver cutting-edge solutions that address
				the unique challenges of the Saudi healthcare system.
			</p>
		</div>
	</div>

	<div class="lg:bg-(--glc-primary-100) overflow-hidden">
		<div
			class="px-6 container mx-auto overflow-hidden flex flex-col lg:flex-row lg:gap-10 items-center"
		>
			<div class="w-full flex flex-col lg:gap-6 gap-4 lg:w-1/2 lg:py-20 py-10">
				<div class="order-1 lg:order-1">
					<SubHeading>A Vision for the Future</SubHeading>
				</div>
				<div class="order-3 lg:order-2 hidden lg:block">
					<p class="text-[#343A40] text-base lg:text-lg font-normal !leading-[24px]">
						Passionate about innovation and excellence, we collaborate closely with our clients and
						stakeholders to craft transformative solutions tailored to unique needs and challenges.
						Our vision is to shape a future where cutting-edge technology, data analytics, and AI
						empower healthcare providers, delivering superior care and outcomes that uplift both
						individuals and communities.
					</p>
				</div>
			</div>
			<div
				class="w-full lg:w-1/2 order-2 feature-bg lg:bg-contain lg:bg-right bg-no-repeat bg-cover lg:h-auto h-[420px]"
			>
				<img src={aboutImg3} alt="" class="w-full lg:h-[590px] h-auto lg:py-20" />
			</div>
			<div class="order-3 lg:order-2 lg:hidden block">
				<p class="text-[#343A40] text-base lg:text-lg font font-normal !leading-[24px]">
					Passionate about innovation and excellence, we collaborate closely with our clients and
					stakeholders to craft transformative solutions tailored to unique needs and challenges.
					Our vision is to shape a future where cutting-edge technology, data analytics, and AI
					empower healthcare providers, delivering superior care and outcomes that uplift both
					individuals and communities.
				</p>
			</div>
		</div>
	</div>
	<div
		class="container mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 items-center lg:py-20 py-10"
	>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 order-2 lg:order-1">
			{#each teamItems as item}
				<TeamBox
					title={item.title}
					description={item.description}
					icon={item.icon}
					subtitleColor="text-[#6C757D]"
					leading="!leading-[24px]"
				/>
			{/each}
		</div>
		<div class="flex flex-col gap-6 order-1 lg:order-2">
			<SubHeading>Glance Team</SubHeading>
			<p class="text-[#343A40] text-base lg:text-lg font font-normal !leading-[24px]">
				The people at Glance Care aren't just average IT folks - they're healthcare superheroes!
				Here's what makes our team awesome:
			</p>
		</div>
	</div>
</div>

<style>
	.feature-bg {
		background-image: url('../../lib/images/about1.png');
	}
	.vision-bg {
		background-image: url('../../lib/images/about1.png');
	}
</style>

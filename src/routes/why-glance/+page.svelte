<script lang="ts">
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import TeamBox from '$lib/components/boxes/TeamBox.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Heading from '$lib/components/typography/Heading.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Button from '$lib/components/button/index.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import MapImg from '$lib/images/map.svg';
	import RevoImg from '$lib/images/g.png';
	import img from '$lib/images/g1.svg';
	import { openDrawer } from '../../store';

	const teamItems = [
		{
			title: 'Localized Standards',
			description:
				'Our products are tailored to meet the unique needs and regulations of your region, ensuring compliance and relevance.',
			icon: 'map'
		},
		{
			title: 'Proven Track Record',
			description:
				'With a history of successful implementations and satisfied clients, Glance Care stands as a trusted partner in healthcare innovation.',
			icon: 'proveCheck'
		},
		{
			title: 'First to Market',
			description:
				'We are pioneers in our field. Our solutions are not only innovative but also the first of their kind, leading the way in healthcare technology.',
			icon: 'award'
		}
	];
</script>

<svelte:head>
	<title>Why Glance? | AI Solutions for Healthcare Innovation</title>
	<meta
		name="description"
		content="Explore the reasons healthcare providers trust Glance Care, a pioneer in AI-powered solutions improving patient outcomes and operational efficiency."
	/>
</svelte:head>

<div>
	<div
		class="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:py-20 py-6 px-6 lg:px-0"
	>
		<div>
			<div class="flex flex-col gap-6">
				<Breadcrumb />
				<div>
					<Heading>Why Glance?</Heading>
				</div>
				<div>
					<Para font="medium">
						Discover how Glance Care pioneers health tech innovation with tailored solutions that
						ensure compliance and success, setting new standards in technology.
					</Para>
				</div>
			</div>
		</div>
		<div class="hidden lg:block">
			<div class="flex justify-end">
				<img src={img} alt="" />
			</div>
		</div>
	</div>
	<div class="container mx-auto lg:py-20 pb-20 px-6 lg:px-0">
		<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
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
	</div>
	<div class="lg:bg-(--glc-primary-100)">
		<div
			class="container mx-auto px-6 lg:px-0 md:px-0 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[60px] lg:py-[60px] py-0"
		>
			<div class="w-full lg:w-1/2 overflow-hidden order-2 lg:order-1 lg:block hidden">
				<img src={RevoImg} alt="" class="rounded-lg object-cover" />
			</div>
			<div class="w-full lg:w-1/2 flex flex-col lg:gap-6 gap-10 order-1 lg:order-2">
				<SubHeading>Revolutionize Your Hospital with Glance Care</SubHeading>
				<div>
					<img src={RevoImg} alt="" class="rounded-lg object-cover lg:hidden block" />
				</div>
				<Para>
					Transform Your Hospital Today Join the ranks of forward-thinking hospitals that trust
					Glance Care to revolutionize their operations. Experience unparalleled innovation and
					efficiency that set new standards in healthcare.
				</Para>
			</div>
		</div>
	</div>

	<div class="container mx-auto py-20 px-6 lg:px-0">
		<div class="flex flex-col lg:gap-20 gap-10">
			<div class="flex flex-col gap-4 items-center text-center">
				<div class="space-y-2 lg:space-y-0">
					<Title className="lg:hidden">Why Choose Us</Title>
					<SubHeading>Why Choose Our Solutions?</SubHeading>
				</div>
				<div>
					<h2 class="lg:text-[22px] text-[20px] text-[#1E1E1E] font-medium">
						Uniquely Saudi, Universally Effective
					</h2>
				</div>
				<div class="max-w-[752px]">
					<Para>
						Experience the only medical analytics engine designed and tailored specifically for
						Saudi healthcare providers. We understand the local needs, regulations, and standards
						like no other.
					</Para>
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 items-center lg:gap-[60px] gap-20">
				<div class="flex flex-col gap-6 order-2 lg:order-1">
					<div class="space-y-2 lg:space-y-0">
						<Title textAlign="start" className="lg:hidden">revolutionize</Title>
						<SubHeading>Uniquely Saudi, Universally Effective</SubHeading>
					</div>
					<div>
						<Para>
							Join the pioneering healthcare leaders who rely on our cutting-edge solution to
							enhance performance, ensure compliance, and boost financial health. Contact us today
							to see how we can take your operations to the next level.
						</Para>
					</div>
					<div>
						<Button
							variant="gradient"
							rounded="full"
							fontSize="lg"
							className="btn"
							on:click={() => openDrawer()}>Contact Us</Button
						>
					</div>
				</div>
				<div class="flex lg:justify-end justify-start order-1 lg:order-2">
					<img src={MapImg} alt="" class="max-w-full max-h-[490.559px]" />
				</div>
			</div>
		</div>
	</div>
</div>

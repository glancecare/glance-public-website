<script lang="ts">
	import { page } from '$app/stores';
	import Heading from '$lib/components/typography/Heading.svelte';
	import blogImg from '$lib/images/blog.png';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Img from '$lib/images/blog2.png';
	import ZoomIcon from '$lib/images/zoom.svg';
	import Button from '$lib/components/button/index.svelte';
	import SummaryCard from '$lib/components/card/SummaryCard.svelte';
	import Avatar from '$lib/components/avatar/index.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import cardImg from '$lib/images/blog1.png';
	import BlogCard from '$lib/components/card/BlogCard.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';

	$: slug = $page.params.slug;

	export let data;

	const { meta } = data;
	
	const socialsIcons = [
		{ name: 'link', link: '', color: '#1E1E1E' },
		{ name: 'facebook', link: 'https://www.facebook.com/GlanceCare', color: '#087AE4' },
		{ name: 'linkedIn', link: 'https://www.linkedin.com/company/glance-care', color: '#087AE4' },
		{ name: 'twitter', link: 'https://twitter.com', color: '#087AE4' }
	];
	const icons = [
		{ name: 'link', link: '', color: '#1E1E1E' },
		{ name: 'facebook', link: 'https://www.facebook.com/GlanceCare', color: '#087AE4' },
		{ name: 'linkedIn', link: 'https://www.linkedin.com/company/glance-care', color: '#087AE4' },
		{ name: 'twitter', link: 'https://x.com/GlanceCare', color: '#087AE4' }
	];
	const webinarDetails = [
		{
			label: 'Webinar',
			value: `${meta.title || ''}${meta.subtitle || ''}`
		},
		{ label: 'Date', value: meta.startDate },
		{ label: 'Time', value: meta.time },
		{ label: 'Location', value: 'Zoom', icon: ZoomIcon, description: meta.location }
	];

	const keyPoints = [
		'We explore the common factors affecting claim health and acceptance',
		'We discuss the psychology of resources working on claim documentation and how this affects the claim workflow',
		'You will learn of solutions that will help drastically reduce your claim rejection rates and improve the revenue generated from claims'
	];
	const webinarData = [
		{
			date: 'Sept 12, 2022 11:00 am - 12:00 pm +03',
			location: 'Online Webinar',
			title: 'Health Claims Rejections: Root Cause Analysis & Solutions | Interactive Free Webinar',
			description:
				"The average healthcare claim rejection rate in Saudi Arabia is 15% - 25%. On this webinar, we will discuss the factors and causes contributing to this along with solutions identified from a 6-month study conducted with 26 HCP's and over 14,000 health claims.",
			imgSrc: cardImg
		},
		{
			title: '9 Reasons Health Claims are being Rejected or Denied by Insurance in Saudi Arabia',
			description:
				'In Saudi Arabia, the average healthcare claims rejection rate is around 20% - 25% for small and medium-sized hospitals. This translates to delays and loss of revenue amounting to 3.5 – 4.5 billion SAR every year. This figure is poised to increase further as the healthcare market gears up to increase its market size to 141 billion SAR by 2030.',
			imgSrc: cardImg
		},
		{
			date: 'Oct 15, 2022 10:00 am - 11:00 am +03',
			location: 'In-Person Seminar',
			title: 'Health Claims Rejections: Root Cause Analysis & Solutions | Interactive Free Webinar',
			description:
				"The average healthcare claim rejection rate in Saudi Arabia is 15% - 25%. On this webinar, we will discuss the factors and causes contributing to this along with solutions identified from a 6-month study conducted with 26 HCP's and over 14,000 health claims. We share how medical institutions can curb their rejection rates and increase",
			imgSrc: cardImg
		}
	];
</script>

<svelte:head>
	<title>{slug}</title>
	<meta name="description" content="blog" />
</svelte:head>

<div class="container mx-auto">
	<div class="pt-20 px-6 lg:px-0">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-4">
				<div>
					<Breadcrumb />
				</div>
				<div>
					<Heading>
						{meta.title}
						{#if meta.subtitle}
							{meta.subtitle}
						{/if}
					</Heading>
				</div>
			</div>
			<div class="flex gap-6 items-center">
				{#each icons as { name, color, link }}
					<a href={link} target="_blank" class="bg-(--glc-primary-100) p-3 rounded-lg cursor-pointer">
						<Icon {name} {color} />
					</a>
				{/each}
			</div>
			<hr class="bg-[#CBD0C8]" />
			<div class="flex items-center justify-between">
				<Avatar name="Glance Team" readTime="5 min read" />
				<p class="text-[#6C757D] text-base font-medium">Mon, 28 Nov 2022</p>
			</div>
		</div>
		<div class="lg:py-[88px] py-10">
			<img src={blogImg} alt="" class="w-full h-full rounded-xl object-cover" />
		</div>
	</div>
	<div class="lg:pr-[310px] lg:pb-20 pb-10 px-6 lg:px-0">
		<div>
			<img src={Img} alt="img" class="lg:h-[185.078px] w-auto w-full" />
		</div>
		<div class="flex flex-col lg:gap-12 gap-6 lg:pt-20 pt-10">
			<div class="flex flex-col lg:gap-6 gap-10">
				<div class="grid grid-cols-[150px_auto] lg:gap-x-10 gap-y-2">
					{#each webinarDetails as detail}
						<div
							class="lg:text-[22px] text-base font-medium lg:leading-[30px] leading-[24px] text-[#1E1E1E]"
						>
							{detail.label}
						</div>
						<div>
							{#if detail.icon}
								<div class="flex items-center gap-2">
									<img src={detail.icon} alt={detail.label} class="w-[59px] h-[22px]" />
									<span class="text-sm text-[#6C757D]">{detail.description}</span>
								</div>
							{:else}
								<div
									class="lg:text-[22px] text-base font-medium lg:leading-[30px] leading-[24px] text-[#1E1E1E]"
								>
									{detail.value}
								</div>
							{/if}
						</div>
					{/each}
				</div>
				<div>
					<p
						class="text-[#3C4238] font-medium lg:text-[22px] text-base lg:leading-[30px] leading-[26px]"
					>
						{meta.description}
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-6">
				<h3
					class="lg:text-[32px] text-[26px] font-medium lg:leading-[40px] leading-[32px] text-[#000]"
				>
					Join us on the FREE webinar where:
				</h3>
				<div class="flex flex-col gap-4">
					<ul class="flex flex-col gap- list-disc">
						{#each keyPoints as point}
							<li class="text-[#3C4238] lg:text-[22px] text-base leading-[30px] ml-6">{point}</li>
						{/each}
					</ul>
					<p class="lg:text-[22px] text-base text-[#3C4238] lg:leading-[30px] leading-[24px]">
						You will receive the webinar link via email upon successfully registering.
					</p>
				</div>
			</div>
			<div class="m-auto lg:m-0 pt-6 lg:pt-0">
				<Button variant="gradient" rounded="full" fontSize="lg">Book your sport today</Button>
			</div>
			<div class="pt-20 lg:pt-0">
				<SummaryCard {meta} />
			</div>
		</div>
		<hr class="bg-[#CBD0C8] lg:my-20 mt-10 mb-4" />
		<div>
			<div class="flex flex-col md:flex-row justify-between gap-6">
				<Avatar name="Glance Team" readTime="5 min read" />
				<div class="flex justify-between items-center gap-4">
					<p class="text-[#6C757D] text-base font-medium">Share on socials:</p>
					<div class="flex gap-4 items-center">
						{#each socialsIcons as { name, color, link }}
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
								class="bg-(--glc-primary-100) p-3 rounded-lg cursor-pointer"
							>
								<Icon {name} {color} />
							</a>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="conaitainer mx-auto lg:py-20 py-10 px-6 lg:px-0">
		<div class="flex flex-col lg:gap-20 gap-6">
			<div>
				<div class="space-y-2 text-center">
					<Title>Related</Title>
					<SubHeading textAlign="text-center">Upcoming Events</SubHeading>
				</div>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-6">
				{#each webinarData as webinar}
					<BlogCard
						date={webinar.date}
						location={webinar.location}
						title={webinar.title}
						description={webinar.description}
						imgSrc={webinar.imgSrc}
						url={$page.url.pathname}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

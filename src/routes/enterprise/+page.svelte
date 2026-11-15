<script lang="ts">
	import { onMount } from 'svelte';
	import Tabs from '$lib/components/tabs/index.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import BlogCard from '$lib/components/card/BlogCard.svelte';
	import Content from '$lib/components/tabs/HomeTabContent.svelte';
	import ServiesBox from '$lib/components/boxes/ServicesBox.svelte';
	import VideoPlayer from '$lib/components/vedioPlayer/index.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import StatisticsBox from '$lib/components/boxes/StatisticsBox.svelte';
	import HomeHeroSection from '$lib/components/comonSection/HomeHero.svelte';
	import LogoSlider from '$lib/components/logoSlider/index.svelte';
	import HeroImg from '$lib/images/hero.png';
	import Pioneerimg1 from '$lib/images/pioneering1.png';
	import Pioneerimg2 from '$lib/images/pioneering2.png';
	import Pioneerimg3 from '$lib/images/pioneering3.png';
	import Pioneerimg4 from '$lib/images/pioneering4.png';
	import serviesImage from '$lib/images/f1.svg';
	import TabImg1 from '$lib/images/blog1.png';
	import TabImg2 from '$lib/images/hometab2.jpg';
	import TabImg3 from '$lib/images/hometab1.jpg';

	import { ChevronRight } from 'lucide-svelte';

	export let data: any;

	const { posts } = data;

	let activeTab = 'tab1';

	function handleTabChange(event: any) {
		// console.log('Active tab:', event.detail.activeTab);
	}

	let animatedIndices: any = [];

	function handleIntersection(entries: any) {
		entries.forEach((entry: any) => {
			if (entry.isIntersecting) {
				const index = parseInt(entry.target.dataset.index);
				if (!animatedIndices.includes(index)) {
					animatedIndices = [...animatedIndices, index];
				}
			}
		});
	}
	onMount(() => {
		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.1
		});

		const boxes = document.querySelectorAll('.statistics-box');
		boxes.forEach((box, index) => {
			box.dataset.index = index;
			observer.observe(box);
		});

		return () => observer.disconnect();
	});

	const images = [
		{ src: Pioneerimg4, alt: 'Image1' },
		{ src: Pioneerimg3, alt: 'Image2' },
		{ src: Pioneerimg2, alt: 'Image3' },
		{ src: Pioneerimg1, alt: 'Image4' }
	];

	const tabs = [
		{
			id: 'tab1',
			title: 'Clinical Care team',
			icon: 'medical',
			content: Content,
			props: {
				heading: 'Clinical Care team',
				link: 'clinical-decision-support-system',
				data: [
					'Empower Clinical Excellence',
					'Operational and Financial Efficiency.',
					'Regulatory Compliance and Risk Mitigation.',
					'Data-Driven Decision Making.'
				],
				imageSrc: TabImg1
			}
		},
		{
			id: 'tab2',
			title: 'Revenue cycle management',
			content: Content,
			icon: 'revenue',
			props: {
				heading: 'Revenue cycle management ',
				link: 'revenue-cycle-management',
				data: [
					'Enhanced Compliance & Reduced Denials',
					'Optimized Operational Efficiency',
					'Cost Savings & Revenue Enhancement',
					'Prior Authorization and Claims Analytics'
				],
				imageSrc: TabImg2
			}
		},
		{
			id: 'tab3',
			title: 'Clinical documentation team',
			content: Content,
			icon: 'team',
			props: {
				heading: 'Clinical documentation team',
				link: 'improve-clinical-documentation',
				data: [
					'Elevated Documentation Accuracy and Compliance',
					'Time and Resource Efficiency',
					'Boosted Revenue Capture',
					'Clinician Satisfaction and Patient Safety',
					'Improved Clinical and Operational Insights'
				],
				imageSrc: TabImg3
			}
		}
	];
</script>

<svelte:head>
	<title>Empowering Saudi Healthcare Professionals | Glance Care</title>
	<meta
		name="description"
		content="Elevate your healthcare practice with Glance's cutting-edge solutions. Improve clinical accuracy, optimize revenue, and empower your medical team today!"
	/>
</svelte:head>

<div>
	<div class="container mx-auto lg:py-20 pt-10 lg:px-0 px-6">
		<HomeHeroSection
			title="Innovative Solutions for a Healthier Tomorrow"
			description="A future of Saudi healthcare empowered by actionable solutions."
			buttonText="Learn More"
			imageSrc={HeroImg}
		/>
	</div>
	<div class="bg-pattern-blue-wave relative pt-[80px] bg-cover bg-no-repeat bg-[#F2F5FCCC]">
		<div class="overlay absolute inset-0 bg-[#F2F5FCCC] opacity-[80%] -z-40"></div>
		<div
			class="flex flex-col gap-10 overflow-y-hidden-hidden md:overflow-y-hidden sm:overflow-y-auto px-6 lg:px-0 container mx-auto"
		>
			<div
				class="text-3xl md:text-5xl font-medium leading-[40px] md:leading-[58px] text-[#121926] flex-grow"
			>
				<h2>
					As a leader in healthcare technology, our AI solutions enhance
					<span class="text-(--glc-primary-600)">decision making</span>, provide
					<span class="text-(--glc-primary-600)">insightful analytics</span>, and ensure
					<span class="text-(--glc-primary-600)">accuracy</span> through rigorous validation systems.
				</h2>
			</div>

			<div
				class="bg-[#FFFFFF4D] backdrop-blur-[44px] rounded-2xl border border-white sm:p-[40px] p-[24px] w-full md:w-[600px] self-end mb-[-20px] pb-10"
			>
				<Para color="#202939">
					Transform your institute with Glance Care: Elevate accuracy, boost efficiency, and ensure
					unparalleled reliability in patient care and operational processes, driven by our
					commitment to innovation and excellence.
				</Para>
			</div>
		</div>
	</div>
	<div class="container mx-auto px-6 lg:px-0 py-20">
		<div class="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[60px]">
			<div class="w-full lg:w-1/2">
				<VideoPlayer videoUrl="https://www.youtube.com/embed/cqYaI-EG1Tc" />
			</div>
			<div class="w-full lg:w-1/2 pl-6">
				<div class="relative">
					<div class="absolute -left-6 top-0 h-full">
						<img src={serviesImage} alt="BackgroundImage" class="h-full" />
					</div>
					<div class="flex flex-col gap-4 relative z-10">
						<ServiesBox
							title="Revolutionize Your Care Delivery."
							icon="donutChart"
							bg="bg-[#F2F5FC4D]"
							borderColor="border-(--glc-primary-200)"
						/>
						<ServiesBox
							title="Reduced Cost."
							icon="cost"
							bg="bg-[#F2F5FC4D]"
							borderColor="border-(--glc-primary-200)"
						/>
						<ServiesBox
							title="Optimized Operation."
							icon="growth"
							bg="bg-[#F2F5FC4D]"
							borderColor="border-(--glc-primary-200)"
						/>
						<ServiesBox
							title="Improved Outcomes."
							icon="improved"
							bg="bg-[#F2F5FC4D]"
							borderColor="border-(--glc-primary-200)"
						/>
						<ServiesBox
							title="Unleash Hidden Potential."
							icon="rocket"
							bg="bg-[#F2F5FC4D]"
							borderColor="border-(--glc-primary-200)"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container mx-auto px-6 lg:px-0 py-20">
		<div class="flex flex-col lg:gap-[60px] gap-10">
			<div class="space-y-2 text-center">
				<Title>Industries</Title>
				<SubHeading textAlign="text-center" color="text-[#121926]">Whom we help</SubHeading>
			</div>

			<Tabs {tabs} bind:activeTab on:tabChange={handleTabChange} />
		</div>
	</div>
	<div class="statisticsWrapper relative py-20 bg-cover bg-center bg-no-repeat">
		<div class="overlay absolute inset-0 bg-[#F2F5FCCC] z-0"></div>
		<div class="container mx-auto px-6 lg:px-0 relative z-10">
			<div class="space-y-20">
				<div class="space-y-2 text-center">
					<Title>Glance Statistics</Title>
					<SubHeading textAlign="text-center" color="text-[#121926]"
						>Transforming Healthcare with Data</SubHeading
					>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-start">
					<div class="statistics-box transition-transform duration-800 ease-out animate-fade-up">
						<StatisticsBox icon="heart" title="500+ M SAR" description="Impacted revenue" />
					</div>
					<div class="statistics-box transition-transform duration-800 ease-out animate-fade-up">
						<StatisticsBox icon="accuracy" title="90%" description="Analytical accuracy" />
					</div>
					<div class="statistics-box transition-transform duration-800 ease-out animate-fade-up">
						<StatisticsBox
							icon="impacted"
							title="1 M"
							description="Medical Records and claim impacted"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container mx-auto px-6 lg:px-0 py-20">
		<div class="flex flex-col lg:gap-[60px] gap-10">
			<div class="text-center sm:w-[60%] w-full m-auto">
				<h1
					class="lg:text-[42px] text-[28px] lg:leading-[50px] leading-[36px] text-black font-medium"
				>
					Pioneering Advanced Medical Analytics Engine
				</h1>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 m-auto">
				{#each images as image}
					<img
						src={image.src}
						alt={image.alt}
						class="w-ful max-h-[247.153px] object-contain rounded-lg"
					/>
				{/each}
			</div>
		</div>
	</div>
	<div class="lg:py-[60px] py-10">
		<div class="flex flex-col lg:gap-[60px] gap-10">
			<div class="space-y-2 text-center">
				<Title>Coverage</Title>
				<SubHeading textAlign="text-center" color="text-[#121926]">Featured On</SubHeading>
			</div>
			<div class="overflow-hidden">
				<LogoSlider />
			</div>
		</div>
	</div>
	<div class="container mx-auto px-6 lg:px-0 py-20">
		<div class="flex flex-col lg:gap-[60px] gap-10">
			<div class="space-y-2 text-center">
				<Title>News & Articles</Title>
				<SubHeading textAlign="text-center" color="text-[#121926]">Insight Hub</SubHeading>
			</div>
			<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
				{#if posts}
					{#each posts as post}
						<BlogCard
							date={post.date}
							time={post.time}
							location={post.location}
							title={post.title}
							description={post.description}
							imgSrc={post.banner}
							slug={post.slug}
							url="knowledge-center"
						/>
					{/each}
				{/if}
			</div>
			<div class="flex justify-center">
				<a
					href="knowledge-center"
					class="flex items-center gap-1.5 px-[20px] w-fit py-3 lg:text-lg text-base text-(--glance-primary) font-medium border border-(--glc-primary-300) rounded-full"
				>
					View More Insights
					<span>
						<ChevronRight class="w-4 h-4" />
					</span>
				</a>
			</div>
		</div>
	</div>
</div>

<style>
	.statisticsWrapper {
		background-image: url('../../lib/images/blue-wave-pattern-bg.png');
	}

	@keyframes fadeUp {
		0% {
			opacity: 0;
			transform: translateY(8rem);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-up {
		animation: fadeUp 0.8s ease-out forwards;
	}
</style>

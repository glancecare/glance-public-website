<script lang="ts">
	import { goto } from '$app/navigation';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Heading from '$lib/components/typography/Heading.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import TeamBox from '$lib/components/boxes/TeamBox.svelte';
	import Heroimg from '$lib/images/g1.svg';

	export let data: any;
	const { posts } = data;
</script>

<svelte:head>
	<title>Explore Careers at Glance | Shape the Future of Healthcare</title>
	<meta
		name="description"
		content="Discover exciting career opportunities at Glance Care and be part of our AI-powered healthcare transformation."
	/>
</svelte:head>

<div>
	<div
		class="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:py-20 py-6 px-6 lg:px-0"
	>
		<div>
			<div class="flex flex-col lg:gap-8 gap-6">
				<div>
					<Breadcrumb />
				</div>
				<div>
					<Heading>Careers at Glance</Heading>
				</div>
			</div>
		</div>
		<div class="hidden lg:block">
			<div class="flex justify-end">
				<img src={Heroimg} alt="" />
			</div>
		</div>
	</div>
	<div class="container mx-auto flex flex-col lg:gap-20 gap-10 lg:py-20 py-10 px-6 lg:px-0">
		<div class="flex flex-col lg:gap-6 gap-2 justify-center items-center">
			<div class="space-y-2">
				<Title>Jobs Categories</Title>
				<SubHeading>Apply at your dream jobs</SubHeading>
			</div>
			<div class="lg:max-w-[718px] lg:text-center text-start w-full">
				<Para>
					Join Glance Care, where your innovative ideas thrive! Experience a dynamic, agile culture,
					collaborate on groundbreaking healthcare solutions, and make a real impact. Innovate and
					grow with Glance Care!</Para
				>
			</div>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
			{#each posts as post}
				<TeamBox
					title={post.title}
					description={post.description}
					icon="file"
					showButton={true}
					link={`/career/${post.slug}`}
					subtitleColor="text-[#6C757D]"
					buttonText="Explore"
					active={post.active}
				/>
			{/each}
		</div>
	</div>
</div>

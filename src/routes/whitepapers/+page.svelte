<script lang="ts">
	import { page } from '$app/stores';
	import Heading from '$lib/components/typography/Heading.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import BlogCard from '$lib/components/card/BlogCard.svelte';
	import img from '$lib/images/g1.svg';

	export let data: any;

	const { posts } = data;
</script>

<svelte:head>
	<title>White Papers | Healthcare News and Insights | Glance Care</title>
	<meta
		name="description"
		content="Research and study papers on healthcare and technology. Stay updated with the latest trends and insights in the healthcare industry."
	/>
	<script src="https://webforms.pipedrive.com/f/loader"></script>
</svelte:head>

<div>
	<div
		class="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] lg:py-20 pt-6 px-6 lg:px-0"
	>
		<div>
			<div class="flex flex-col lg:gap-8 gap-6">
				<div>
					<Breadcrumb />
				</div>
				<div>
					<Heading>White Papers</Heading>
				</div>
				<div>
					<Para font="medium">Deep Insights from Glance Researchs and Studies.</Para>
				</div>
			</div>
		</div>
		<div class="hidden lg:block">
			<div class="flex justify-end">
				<img src={img} alt="" />
			</div>
		</div>
	</div>
	<div class="container mx-auto py-20 px-6 lg:px-0">
		<div class="flex flex-col gap-12">
			<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
				{#each posts as post}
					<BlogCard
						date={post.date}
						title={post.title}
						description={post.description}
						slug={post.slug}
						imgSrc={post.banner}
						url={$page.url.pathname}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

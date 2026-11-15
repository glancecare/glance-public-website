<script lang="ts">
	import { page } from '$app/stores';
	import type { ComponentType } from 'svelte';
	import Heading from '$lib/components/typography/Heading.svelte';
	import Button from '$lib/components/button/index.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import BlogDetailCard from '$lib/components/card/BlogDetailCard.svelte';
	import BlogCard from '$lib/components/card/BlogCard.svelte';
	import img from '$lib/images/g1.svg';

	export let data: any;

	const { posts } = data;
</script>

<svelte:head>
	<title>Learning Center | Healthcare News and Insights | Glance Care</title>
	<meta
		name="description"
		content="Stay informed with healthcare news, trends, and resources. Explore articles and case studies to enhance patient care and boost operational outcomes."
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
					<Heading>Knowledge Centre</Heading>
				</div>
				<div>
					<Para font="medium">Stay Ahead of the Curve: Unlock Exclusive Insights and Updates!</Para>
				</div>
				<div class="hidden lg:block">
					<div
						class="pipedriveWebForms md:max-w-[400px] lg:max-w-[500px]"
						data-pd-webforms="https://webforms.pipedrive.com/f/clNksKXfFO6OTOO8oQr8Ft5tOgno40PAT2C7xSS8vieU8XxHHyHfHRNVlqjMwVWlEL"
					></div>
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
				{#each posts as post, i}
					{#if i % 4 === 0}
						<div class="lg:col-span-3 md:col-span-2 col-span-1">
							<BlogDetailCard
								date={post.date}
								title={post.title}
								description={post.description}
								slug={post.slug}
								imgSrc={post.banner}
								url={$page.url.pathname}
								reverse={i % 8 === 0}
								lang={post.lang}
							/>
						</div>
					{:else}
						<BlogCard
							date={post.date}
							title={post.title}
							description={post.description}
							slug={post.slug}
							imgSrc={post.banner}
							url={$page.url.pathname}
							lang={post.lang}
						/>
					{/if}
				{/each}
			</div>
		</div>
	</div>
</div>

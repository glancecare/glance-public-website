<script lang="ts">
	import BlogCard from '$lib/components/card/BlogCard.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';

	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';

	export let data;

	const { meta } = data;
</script>

<BlogLayout {data}>
	<div class="container mx-auto lg:py-20 py-10 px-6 lg:px-0 lang-{meta.lang || 'en'}">
		<div class="flex flex-col lg:gap-20 gap-6">
			<div>
				<div class="space-y-2 text-center">
					<Title>More</Title>
					<SubHeading textAlign="text-center">Related Articles</SubHeading>
				</div>
			</div>
			<div class="flex flex-col md:flex-row lg:gap-10 gap-6">
				{#if data?.previous}
					<div class="w-full md:w-1/2">
						<BlogCard
							date={data?.previous.date}
							title={data?.previous.title}
							description={data?.previous.description}
							imgSrc={data?.previous.banner}
							url={data?.previous.slug}
						/>
					</div>
				{/if}
				{#if data?.next}
					<div class="w-full md:w-1/2">
						<BlogCard
							date={data?.next.date}
							title={data?.next.title}
							description={data?.next.description}
							imgSrc={data?.next.banner}
							url={data?.next.slug}
						/>
					</div>
				{/if}
			</div>
		</div>
	</div>
</BlogLayout>

<script lang="ts">
	import { page } from '$app/stores';
	import Heading from '$lib/components/typography/Heading.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Button from '$lib/components/button/index.svelte';
	import Badge from '$lib/components/badge/index.svelte';
	import JobCard from '$lib/components/card/JobCard.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import OtherJobCard from '$lib/components/card/OtherJobCard.svelte';

	export let data;

	const { meta, otherJobs } = data;

	const jobData = meta.jobs || [];

	const tags = meta.tags || [];

	const employmentDetails = meta.employmentDetails || ['On-site', 'Full Time', 'Senior'];
	const skills = meta.skills || ['Python', 'Non-SQL', 'Micro-service architecture'];
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description || 'Job listing'} />
</svelte:head>

<div>
	<div class="container mx-auto lg:py-10 pt-10 px-4 lg:px-0">
		<div class="flex flex-col gap-4 md:gap-6 lg:gap-[14px]">
			<div>
				<Breadcrumb />
			</div>
			<div>
				<Heading>{meta.title}</Heading>
			</div>
			<div
				class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8"
			>
				<div class="flex flex-col sm:flex-row items-start md:items-center gap-4 md:gap-8">
					<div class="flex items-center gap-2">
						<Icon name="location" />
						<Para font="medium">{meta.location || 'Riyadh, Saudi Arabia'}</Para>
					</div>
					<div class="flex flex-wrap gap-4 items-center">
						<div class="flex items-center gap-2">
							<Icon name="location" />
						</div>
						<div class="flex items-center gap-2">
							{#each employmentDetails as detail, index}
								{#if index > 0}
									<span class="w-1.5 h-1.5 bg-black rounded-full" />
								{/if}
								<Para font="medium">{detail}</Para>
							{/each}
						</div>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
					{#if meta.active}
					<a 
						class="px-6 lg:py-4 py-3 lg:text-lg text-base text-white font-medium leading-[24px] bg-(--glance-primary) rounded-full"
						href={meta.applyLink || '#'}
						target="_blank"
						rel="noopener noreferrer"
					>
						Apply Now
					</a>
					{:else}
					<button class="px-6 lg:py-4 py-3 lg:text-lg text-base text-white font-medium leading-[24px] bg-neutral-300 rounded-full" disabled>
						Applications Closed
					</button>
					{/if}
				</div>
			</div>
			<hr class="bg-[#CBD0C8]" />
			<div class="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
				<div class="lg:block hidden">
					<div class="flex flex-wrap gap-2 items-center">
						<p class="text-sm font-medium leading-[22px]">Tags</p>
						{#each tags as tag}
							<Badge textColor="text-(--glance-primary)">{tag}</Badge>
						{/each}
					</div>
				</div>
				<div class="lg:m-0 m-auto">
					<p class="text-sm text-[#333] leading-[22px] font-medium">
						Listed on {meta.date || 'Tue, 1 January 2024'}
					</p>
				</div>
			</div>
		</div>
	</div>
	<div class="container mx-auto lg:py-20 py-10 px-6 lg:px-0">
		<div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:gap-[60px] gap-10">
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-6">
					<h3 class="lg:text-[30px] text-[26px] font-medium lg:leading-[38px] leading-[32px]">
						Job Description
					</h3>
					<div class="flex flex-col gap-4 lg:gap-[14px] blog-content">
						<svelte:component this={data.content} />
					</div>
				</div>
				<hr class="bg-[#CBD0C8] hidden lg:block" />
				<div class="hidden lg:block">
					{#if meta.active}
					<a
						href={meta.applyLink || '#'}
						target="_blank"
						rel="noopener noreferrer"
						class="px-6 lg:py-4 py-3 lg:text-lg text-base text-white font-medium leading-[24px] bg-(--glance-primary) rounded-full"
					>
						Apply Now
					</a>
					{:else}
					<button class="px-6 lg:py-4 py-3 lg:text-lg text-base text-white font-medium leading-[24px] bg-neutral-300 rounded-full" disabled>
						Applications Closed
					</button>
					{/if}
				</div>
				<hr class="bg-[#CBD0C8]" />
				<div class="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
					<div class="flex flex-wrap gap-[14px] items-center">
						<p class="text-sm font-medium leading-[22px]">Tags:</p>
						{#each tags as tag}
							<Badge textColor="text-black">{tag}</Badge>
						{/each}
					</div>
					<div>
						<p class="text-sm text-[#333] leading-[22px] font-medium">
							Listed on {meta.date || 'Tue, 8 March 2024'}
						</p>
					</div>
				</div>
			</div>
			<div class="w-full flex lg:justify-end justify-start">
				<JobCard
					location={meta.location || 'Riyadh, Saudi Arabia'}
					{employmentDetails}
					{skills}
					active={meta.active}
					applyLink={meta.applyLink || '#'}
				/>
			</div>
		</div>
		<div class="flex flex-col gap-6 pt-20">
			<div class="flex flex-col gap-6">
				<h1 class="lg:text-[40px] text-[36px] font-medium lg:leading-[48px] leading-[42px]">
					Other Jobs
				</h1>
				<div class="flex flex-col gap-6">
					<Para font="medium"
						>Explore our other positions and let's build a brighter future together.</Para
					>
				</div>
			</div>
			<div class="flex flex-col">
				{#each otherJobs as job, index}
					<div
						class={`
						${index === 0 ? 'lg:pb-6 pb-4' : ''}
						${index > 0 && index < jobData.length - 1 ? 'lg:py-6 py-4' : ''}
						${index === jobData.length - 1 ? 'lg:pt-6 pt-4' : ''}
						${index !== jobData.length - 1 ? 'border-b border-[#DCE0E5]' : ''}
					`}
					>
						<OtherJobCard
							badges={job.badges}
							jobTitle={job.title}
							address={job.location}
							employmentType={job.employmentDetails}
							timeSincePosted={job.date}
							slug={job.slug}
						/>
					</div>
				{/each}
			</div>
			<div class="m-auto">
				<a href="/career" class="px-6 w-fit py-4 lg:text-lg text-base
						 text-(--glance-primary) font-medium border border-(--glance-primary) rounded-full leading-[24px]">See More</a>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import Heading from '$lib/components/typography/Heading.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Avatar from '$lib/components/avatar/index.svelte';
	import Icon from '$lib/components/icons/index.svelte';

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
</script>

<svelte:head>
	<title>{meta.title} | Glance Knowledge Centre</title>
	<meta name="description" content={meta.description} />
</svelte:head>

<div class="container mx-auto lang-{meta.lang || 'en'}">
	<div class="pt-20 px-6 lg:px-0">
		<div class="flex flex-col gap-6">
			<div class="flex flex-col gap-4">
				<div>
					<Breadcrumb />
				</div>
				<div>
					<Heading>
						{meta.title}</Heading
					>
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
				<Avatar name={meta.author} readTime={`${meta.readTime} min read`} />
				<p class="text-[#6C757D] text-base font-medium">{meta.date}</p>
			</div>
		</div>
		<div class="lg:py-[88px] py-10">
			{#if meta.banner && meta.banner !== ''}
				<img src={meta.banner} alt={meta.title} class="w-full h-full rounded-xl object-cover" />
			{/if}
		</div>
	</div>
	<div class="pb-10 px-6 lg:px-0">
		<div class="flex flex-col xl:flex-row justify-between lg:gap-12 gap-6">
			<div class="flex-none w-full xl:w-96">
				<!-- Table of contents -->
				{#if meta.toc}
					<div class="lg:sticky top-[40px]">
						<div class="flex flex-col gap-4">
							<h3 class="text-[#1E1E1E] text-lg font-semibold">Table of Contents</h3>
							<ol>
								{#each meta.toc as toc}
									<li class="mb-2">
										<a href={`#${toc.slug}`} class="px-0 text-blue-500">{toc.text}</a>
										{#if toc.children}
											<ol>
												{#each toc.children as child}
													<li class="mb-2">
														<a href={`#${child.slug}`} class="px-4 text-blue-500">{child.text}</a>
													</li>
												{/each}
											</ol>
										{/if}
									</li>
								{/each}
							</ol>
						</div>
					</div>
				{/if}
			</div>
			<div class="flex flex-1 flex-col lg:gap-6 gap-10 blog-content">
				<svelte:component this={data.content} />
				
				{#if meta.references}
					<hr />
					<div class="flex flex-col gap-4">
						<h3 class="text-[#1E1E1E] text-lg font-semibold">References</h3>
						<ol>
							{#each meta.references as reference}
								<li id={reference.id}>
									{#if reference.link}
									<a href={reference.link} target="_blank" rel="noopener noreferrer">
										{reference.title}
									</a>
									{:else}
									{reference.title}
									{/if}
									<br/>
									<span class="text-base">
									{reference.author}.
									<em class="text-[#aaa]">
									Published on {reference.date} by 
									{reference.publisher}
									</em>
									</span>
								</li>
							{/each}
						</ol>
					</div>
				{/if}
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
		<slot></slot>
	</div>
</div>

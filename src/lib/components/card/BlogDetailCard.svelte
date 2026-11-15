<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { ChevronRight } from 'lucide-svelte';
	import Button from '$lib/components/button/index.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import ZoomImg from '$lib/images/zoom.svg';

	export let imgSrc: string;
	export let date: string;
	export let time: string = '';
	export let title: string;
	export let subtitle: string = '';
	export let description: string;
	export let location: string = '';
	export let url: string = '';
	export let slug: string = '';
	export let reverse: boolean = false;
	export let isEvent: boolean = false;
	export let lang: string = 'en';
</script>

<div
	class="container mx-auto lg:px-0 md:px-0 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[60px] lg:border-none border border-(--glc-primary-200) rounded-2xl mt-6 mb-6 lang-{lang}"
	class:lg:flex-row-reverse={!reverse}
>
	{#if imgSrc}
	<div
		class="w-full flex lg:w-1/2 overflow-hidden rounded-lg border border-[#E3E8EF]"
		class:justify-end={!reverse}
	>
		<img
			src={imgSrc}
			alt="Eventimage"
			class="rounded-lg object-cover lg:h-[504px] h-auto lg:w-auto w-full"
			/>
		</div>
	{/if}

	<div class="w-full lg:w-1/2 flex flex-col gap-6 px-4 lg:px-0 pb-6 lg:pb-0">
		{#if date}
			<div>
				<li class="text-[#AEAEAE]">
					<span class="text-sm font-medium text-[#4B5565]">{date} {time}</span>
				</li>
				{#if isEvent}
					<div class="flex items-center gap-2">
						<div>
							<img src={ZoomImg} alt="Zoom icon" />
						</div>
						{#if location}
							<div>
								<p class="text-sm font-medium text-[#4B5565]">{location}</p>
							</div>
						{/if}
					</div>
				{/if}
			</div>
		{/if}
		<div class="flex flex-col lg:gap-6 gap-2">
			<div class="flex flex-col gap-4">
				<h2 class="lg:text-[32px] text-[20px] font-medium leading-[40px]">{title}</h2>
				{#if subtitle}
					<h3 class="text-[22px] font-medium leading-[30px] lg:block hidden">{subtitle}</h3>
				{/if}
			</div>
			<div>
				<Para className="line-clamp-2">{description}</Para>
			</div>
		</div>
		<div>
			<a
				href={`${url}/${slug}`}
				class="flex items-center gap-1.5 px-[20px] w-fit py-3 lg:text-lg text-base text-(--glance-primary) font-medium border border-(--glance-primary) rounded-full"
			>
				Read More
				<span>
					<ChevronRight class="w-4 h-4" />
				</span>
			</a>
		</div>
	</div>
</div>

<style>
	@media (max-width: 768px) {
		.line-clamp-2 {
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
	}
</style>

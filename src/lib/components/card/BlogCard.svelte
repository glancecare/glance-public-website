<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import ZoomImg from '$lib/images/zoom.svg';

	export let date: string = '';
	export let time: string = '';
	export let location: string = '';
	export let title: string;
	export let description: string;
	export let imgSrc: string;
	export let slug: string = '';
	export let url: any = '';
	export let lang: string = 'en';

	const lineClampClass = date ? 'line-clamp-2' : 'line-clamp-5';
</script>

<div class="flex flex-col border border-[#E3E8EF] mx-auto rounded-2xl overflow-hidden lang-{lang}">
	{#if imgSrc}
	<div class="w-full h-full lg:h-[320px]">
			<img src={imgSrc} alt="Webinarimage" class="w-full h-full object-cover" />
		</div>
	{/if}
	<div class="grid grid-cols-1 gap-6 px-8 py-6">
		<div class="flex flex-col gap-4">
			{#if date}
				<div class="flex flex-col gap-2">
					<li class="text-(--glance-primary)">
						<span class="text-sm font-medium text-[#4B5565] leading-[22px]">{date} {time}</span>
					</li>
					{#if location}
						<div class="flex items-center gap-2">
							<div>
								<img src={ZoomImg} alt="Zoom icon" />
							</div>
							<div>
								<p class="text-sm font-medium text-[#4B5565]">{location}</p>
							</div>
						</div>
					{/if}
				</div>
			{/if}
			<a href={`${url}/${slug}`} data-sveltekit-reload class="flex flex-col gap-2">
				<span>
					<h1
						class="sm:text-[22px] text-[20px] text-[#121926] font-medium lg:leading-[30px] leading-[26px]"
					>
						{title}
					</h1>
				</span>
				<span class="flex-grow">
					<p class={`text-[#697586] text-base font-medium leading-[24px] ${lineClampClass}`}>
						{description}
					</p>
				</span>
			</a>
		</div>
		<div>
			<a
				href={`${url}/${slug}`}
				data-sveltekit-reload
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
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.line-clamp-5 {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
	}
</style>

<script lang="ts">
	import { page } from '$app/stores';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Para from '$lib/components/typography/Para.svelte';

	export let heading: string;
	export let subtitle: string;
	export let bottomtext: string;
	export let imageSrc: string;

	$: slug = $page.params.slug;
</script>

<div
	class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center lg:py-[60px] pt-10 pb-[22px]"
>
	<div class="flex justify-start order-2 lg:order-1 lg:h-[486px] h-full w-full lg:w-[570px]">
		<img src={imageSrc} alt="tabimg" class="object-cover rounded-lg h-full w-full" />
	</div>
	<div class="flex flex-col gap-6 order-1 lg:order-2">
		<div class="text-start">
			<SubHeading>{heading}</SubHeading>
		</div>
		<div>
			<Para color="text-[#1E1E1E]">
				{@html subtitle}
			</Para>
		</div>
	</div>
</div>

{#if bottomtext}
	{#if slug === 'clinical-decision-support-system'}
		<div class="flex justify-center">
			<div class="p-6 rounded-2xl border border-(--glc-primary-200) bg-[#F2F5FC4D]">
				<p
					class="lg:text-lg text-base lg:font-medium font-normal text-[#1E1E1E] lg:leading-[26px] leading-[24px]"
				>
					{@html bottomtext}
				</p>
			</div>
		</div>
	{:else}
		<div class="lg:max-w-[880.421px] w-full mx-auto text-center">
			<p
				class="lg:text-lg text-base lg:font-medium font-normal text-[#1E1E1E] lg:leading-[26px] leading-[24px]"
			>
				{@html bottomtext}
			</p>
		</div>
	{/if}
{/if}

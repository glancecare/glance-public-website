<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';

	export let heading: string;
	export let link: string;
	export let data: string[];
	export let imageSrc: string;
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center lg:py-[60px] pt-10">
	<div class="flex flex-col gap-10">
		<div class="text-start">
			<SubHeading>
				{heading}
			</SubHeading>
		</div>
		<div>
			<ul class="flex flex-col gap-6 list-disc ml-6">
				{#each data as item}
					<li class="text-(--glance-primary)">
						<span
							class="text-base lg:text-[22px] lg:leading-[30px] leading-[20px] font-medium text-[#1E1E1E]"
						>
							{item}
						</span>
					</li>
				{/each}
			</ul>
		</div>
		<div>
			<a
				href={`healthcare-provider/${link}`}
				data-sveltekit-reload
				class="flex items-center gap-1.5 px-[20px] w-fit py-3 lg:text-lg text-base text-(--glance-primary) font-medium border border-(--glance-primary) rounded-full"
			>
				See how<span>
					<ChevronRight class="w-4 h-4" />
				</span>
			</a>
		</div>
	</div>
	<div class="flex lg:justify-end justify-start h-auto">
		<div class="lg:w-[570px] w-full lg:h-[486px] h-full">
			<img src={imageSrc} alt="tabimg" class="h-full w-full object-cover rounded-lg" />
		</div>
	</div>
</div>

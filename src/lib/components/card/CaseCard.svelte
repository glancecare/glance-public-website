<script lang="ts">
	import { ChevronRight } from 'lucide-svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Button from '$lib/components/button/index.svelte';

	export let imageSrc: string = '';
	export let caseTitle: string = '';
	export let heading: string = '';
	export let link: string = '';
</script>

<div class="w-full overflow-hidden rounded-t-2xl border border-b-0 border-b-gray-300">
	<div class="flex flex-col">
		<div>
			<img src={imageSrc} alt={caseTitle} class="w-full h-[331.797px]" />
		</div>
		<div class="border border-white border-t-0 rounded-b-2xl backdrop-blur-[22px]">
			<div class="lg:p-8 p-[28px]">
				<div class="flex flex-col lg:gap-4 gap-[14px]">
					<div class="flex flex-col lg:gap-2 gap-[7px]">
						<Title textAlign="start">CASE STUDY</Title>
						<h2
							class="lg:text-[24px] text-[20px] leading-[28px] lg:leading-[32px] font-medium line-clamp"
						>
							{heading}
						</h2>
					</div>
					<div>
						<a
							href={link}
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
		</div>
	</div>
</div>

<style>
	.line-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
</style>

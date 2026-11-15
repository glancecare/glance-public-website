<script lang="ts">
	import Badge from '$lib/components/badge/index.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Icon from '$lib/components/icons/index.svelte';

	export let badges: string[] = [];
	export let jobTitle: string = '';
	export let address: string = '';
	export let employmentType: string = '';
	export let timeSincePosted: string = '';
	export let slug: string = '';
</script>

<div class="lg:p-4 p-0">
	<a class="flex flex-col gap-4" href="{slug}">
		<div class="flex gap-1">
			{#each badges as badge}
				<Badge textColor="text-(--glance-primary)" textSize="text-xs" className="uppercase">{badge}</Badge>
			{/each}
		</div>
		<div class="flex justify-between items-center">
			<div>
				<Para font="medium" color="black">{jobTitle}</Para>
				<p class="lg:text-xs text-[10px] text-[#454F5F] font-medium leading-[16px]">
					{address}
				</p>
			</div>
			<div class="flex items-center gap-2">
				<!-- <div class="cursor-pointer">
					<Icon name="saveOutline" />
				</div> -->
				<div class="bg-(--glc-primary-100) rounded-full p-2 cursor-pointer">
					<Icon name="share" />
				</div>
			</div>
		</div>
		<div class="flex items-center justify-between">
			<div class="flex items-center gap-2">
				<div>
					<Icon name="jobOutline" />
				</div>
				<p class="lg:text-sm text-xs text-[#22272F] font-medium leading-[20px]">{employmentType}</p>
			</div>
			<p class="lg:text-sm text-sm text-[#7D8BA1] font-medium leading-[20px]">{timeSincePosted}</p>
		</div>
	</a>
</div>

<script lang="ts">
	import SummaryBox from '../boxes/SummaryBox.svelte';
	import ZoomImg from '$lib/images/zoom.svg';

	export let meta;

	const summaryDetails = [
		{
			eventTitle: 'Event',
			eventDescription: `${meta.title || ''}${meta.subtitle || ''}`,
			imgSrc: null
		},
		{
			eventTitle: 'Location',
			eventDescription: meta.location,
			imgSrc: ZoomImg
		},
		{
			eventTitle: 'Starting on',
			eventDescription: meta.startDate,
			imgSrc: null
		},
		{
			eventTitle: 'Ending on',
			eventDescription: meta.endDate,
			imgSrc: null
		},
		{
			eventTitle: 'Time',
			eventDescription: meta.time,
			imgSrc: null
		},
		{
			eventTitle: 'Description',
			eventDescription: meta.description,
			imgSrc: null
		}
	];
</script>

<div class="flex flex-col gap-8 bg-(--glc-primary-100) rounded-2xl p-8">
	<div>
		<h1 class="text-[32px] font-medium lg:leading-[40px]">Summary</h1>
	</div>
	<div class="flex flex-col gap-4">
		{#each summaryDetails as detail}
			<SummaryBox
				eventTitle={detail.eventTitle}
				eventDescription={detail.eventDescription}
				imgSrc={detail.imgSrc}
			/>
		{/each}
	</div>
</div>

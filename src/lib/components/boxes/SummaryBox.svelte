<script lang="ts">
	export let imgSrc: string | null = null;
	export let eventTitle: string = '';
	export let eventDescription: string = '';
</script>

<div
	class="grid lg:grid-cols-[150px_auto] lg:gap-x-10 gap-y-2 bg-white px-6 lg:py-6 py-4 rounded-xl"
>
	<h4 class="lg:text-[22px] text-base text-[#1E1E1E] font-medium leading-[30px]">{eventTitle}</h4>

	<div class="flex items-center gap-2">
		{#if imgSrc}
			<img src={imgSrc} alt="EventImage" class="w-[74px] h-[28px]" />
		{/if}

		<h4 class="lg:text-[22px] text-base text-[#1E1E1E] font-medium leading-[30px]">
			{eventDescription}
		</h4>
	</div>
</div>

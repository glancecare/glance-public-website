<script lang="ts">
	import { fly } from 'svelte/transition';
	import Para from '$lib/components/typography/Para.svelte';
	import Icon from '$lib/components/icons/index.svelte';

	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="grid grid-cols-1 gap-6 justify-between rounded-2xl border border-white bg-[#FFFFFF4D] sm:p-[32px] p-[24px] backdrop-blur-[22px]"
	transition:fly={{ y: 200, duration: 500, delay: 200 }}
>
	<div class="p-2 rounded-lg w-10 mb-2 bg-(--glance-primary)">
		<Icon name={icon} />
	</div>
	<div class="flex flex-col gap-2">
		<h1 class="text-[#121926] font-medium text-[32px] leading-none">
			{title}
		</h1>
		<Para color="#6C757D" font="medium">
			{description}
		</Para>
	</div>
</div>

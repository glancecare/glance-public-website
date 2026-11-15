<script lang="ts">
	import Icon from '$lib/components/icons/index.svelte';

	export let title: string;
	export let icon: string;
	export let blur: boolean = false;
	export let bg: string = 'bg-[#FFFFFF80]';
	export let borderColor: string = 'border-[#FFFFFF7A]';
</script>

<div
	class={`flex items-center gap-4 ${bg} border ${borderColor} rounded-2xl p-6 ${blur ? 'backdrop-blur-[22px]' : ''}`}
>
	<div class="bg-(--glc-primary-100) rounded-lg p-2">
		<Icon name={icon} />
	</div>
	<div>
		<h1 class="font-medium lg:text-2xl text-base text-[#121926] lg:leading-[32px] leading-[24px]">
			{title}
		</h1>
	</div>
</div>

<script lang="ts">
	import Badge from '$lib/components/badge/index.svelte';
	import { ChevronRight } from 'lucide-svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Icon from '$lib/components/icons/index.svelte';

	export let title: string;
	export let description: string = '';
	export let icon: any = '';
	export let className: string = '';
	export let showButton: boolean = false;
	export let type: string = '';
	export let bottomText: string = '';
	export let link: string = '';
	export let subtitleColor: string = 'text-[#1E1E1E]';
	export let leading: string = 'leading-[26px]';
	export let active: boolean = true;
	export let buttonText: string = 'View Jobs';
</script>

<div
	class={`flex flex-col gap-4 overflow-hidden rounded-2xl border border-[#E9ECEF] bg-white p-6 ${className}`}
>
	<div class="flex items-center justify-between">
		<div class="bg-(--glc-primary-100) flex flex-col items-center justify-center p-2 rounded-lg w-10 h-10">
			<Icon name={icon} />
		</div>
		{#if !active}
			<Badge textColor="text-[#6C757D]">Closed</Badge>
		{/if}
	</div>
	<div class="flex flex-col gap-2">
		<div class="flex items-center justify-between">
			<h2 class="lg:text-2xl text-[20px] font-medium leading-[32px] text-black">
				{title}
			</h2>
			{#if type}
				<Badge textColor="text-(--glance-primary)">Web Application</Badge>
			{/if}
		</div>
		{#if description}
			<div class="flex flex-col gap-4">
				<div>
					<Para color={subtitleColor} {leading}>
						{description}
					</Para>
				</div>

				{#if bottomText}
					<div>
						<Para color={subtitleColor}>
							{bottomText}
						</Para>
					</div>
				{/if}
			</div>
		{/if}
	</div>
	{#if showButton}
		<div>
			<a
				href={link}
				class="flex items-center gap-1.5 px-[20px] w-fit py-3 lg:text-lg text-base text-(--glance-primary) font-medium border border-(--glance-primary) rounded-full"
			>
				{buttonText}<span>
					<ChevronRight class="w-4 h-4" />
				</span>
			</a>
		</div>
	{/if}
</div>

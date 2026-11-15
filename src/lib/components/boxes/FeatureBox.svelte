<script lang="ts">
	import F1Img from '$lib/images/features.svg';
	import Icon from '$lib/components/icons/index.svelte';
	export let items: { name: string; new: boolean }[] = [];
</script>

<div class="relative">
	<div class="flex flex-col gap-4 relative z-10">
		{#each items as item (item.name)}
			<div
				class="flex items-center gap-4 bg-[#F2F5FC4D] border border-(--glc-primary-200) rounded-2xl px-6 py-3 box-shadow"
			>
				<div class="text-(--glc-primary-500)">
					<Icon name="check" />
				</div>
				<div>
					<h3
						class="font-medium lg:text-xl text-base lg:leading-[32px] leading-[24px] text-[#121926]"
					>
						{item.name}
						{#if item.new}
							<span class="text-[#EB5757] lg:text-2xl italic text-base font-medium leading-[24px]">
								New
							</span>
						{/if}
					</h3>
				</div>
			</div>
		{/each}
	</div>
	<div class="absolute -right-6 top-0 h-full lg:block hidden">
		<img src={F1Img} alt="F1Image" class="h-full" />
	</div>
</div>

<style>
	.box-shadow {
		box-shadow: 0px 3.448px 20px 0px rgba(0, 0, 0, 0.1);
	}
</style>

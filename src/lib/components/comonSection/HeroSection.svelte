<script lang="ts">
	import {t} from '$lib/i18n';

	import Button from '$lib/components/button/index.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import { openDrawer } from '../../../store';

	export let contactUs = false;
	export let data;
	export let image;
</script>

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-[68px] gap-10 items-start">
	<div class="flex flex-col gap-6">
		<div>
			<Breadcrumb />
		</div>
		{#if data?.products}
			<div class="flex items-center gap-2">
				{#each $t(data?.products) as product}
					<div class="inline-flex items-center px-2 bg-(--glance-primary) rounded-full overflow-hidden">
						<h5 class="text-xs text-white font-medium leading-[22px] uppercase">
							<strong>{product.split(' ')[0]}</strong>
							{product.split(' ').slice(1).join(' ')}
						</h5>
					</div>
				{/each}
			</div>
		{/if}
		{#if data.tabs}
			<div class="hidden lg:block">
				<div class="flex items-center gap-4">
					{#each data?.tabs as tab, i}
						<div
							class={`text-xs font-medium ${
								tab?.active
									? 'text-white bg-(--glance-primary) rounded-full px-2 py-0.5 font-medium'
									: 'text-[#121926]'
							}`}
						>
							{tab.name}
						</div>
						{#if i < data.tabs.length - 1}
							<Icon name="dot" />
						{/if}
					{/each}
				</div>
			</div>
		{/if}
		<div>
			<h1
				class="text-[42px] lg:text-[64px] font-medium leading-[50px] lg:leading-[72px] text-[#121926]"
			>
				{$t(data.title)}
			</h1>
		</div>
		<div>
			<p
				class="text-base lg:text-[22px] lg:leading-[30px] leading-[24px] font-normal text-[#364152]"
			>
				{$t(data.upperDescription)}
			</p>
		</div>
		{#if data.lowerDescription}
			<div>
				<p
					class="text-base lg:text-[22px] lg:leading-[30px] leading-[24px] font-normal text-[#364152]"
				>
					{$t(data.lowerDescription)}
				</p>
			</div>
		{/if}
		{#if contactUs}
			<div>
				<Button variant="gradient" rounded="full" fontSize="lg" on:click={() => openDrawer()}
					>Contact Us</Button
				>
			</div>
		{/if}
	</div>

	<div class="flex lg:justify-center justify-start bg-hero-pattern bg-auto bg-no-repeat bg-right p-16">
		<img src={image} alt="HeroImage" class="object-cover lg:w-3/5 w-3/4" />
	</div>
</div>

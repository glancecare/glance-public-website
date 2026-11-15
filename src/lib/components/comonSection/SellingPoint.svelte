<script lang="ts">
	import {t} from "$lib/i18n";

	import { page } from '$app/stores';
	import Tabs from '$lib/components/tabs/index.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import RcpTabContent from '$lib/components/tabs/RcpTabContent.svelte';
	import Para from '$lib/components/typography/Para.svelte';

	export let data;

	let activeTab = 'tab1';

	$: tabs = Object.keys(data.tabs)?.map((tabId: any) => ({ 
			id: tabId,
			title: data.tabs[tabId].title,
			content: RcpTabContent,
			props: {
				heading: data.tabs[tabId].title,
				subtitle: data.tabs[tabId].subtitle,
				bottomtext: data.tabs[tabId].bottomText,
				imageSrc: data.tabs[tabId].image,
			}
		})) || [];
	

	function handleTabChange(event: CustomEvent) {
		activeTab = event.detail.activeTab;
	}
</script>

<div class="flex flex-col lg:gap-[60px] gap-10">
	<div class="flex flex-col gap-6">
		<div class="space-y-2 text-center">
			<Title>
				{$t(data?.title)}
			</Title>
			<SubHeading textAlign="text-center">{$t(data?.subtitle)}</SubHeading>
		</div>
		{#if data?.description}
			<div class="lg:max-w-[679.428px] text-center mx-auto w-full">
				<Para color="#1E1E1E">
					{$t(data?.description)}
				</Para>
			</div>
		{/if}
	</div>
	<div>
		<Tabs {tabs} bind:activeTab on:tabChange={handleTabChange} />
	</div>
</div>

<script lang="ts">	
	import { createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/icons/index.svelte';

	export let tabs: {
		id: string;
		title: string;
		icon: string;
		content: any;
		src?: string;
		props?: any;
	}[];

	export let activeTab = tabs[0].id;

	const dispatch = createEventDispatcher();

	function setActiveTab(tabId: string) {
		activeTab = tabId;

		dispatch('tabChange', { activeTab });
	}
</script>

<div class="flex flex-col">
	<div class="flex flex-wrap justify-start md:justify-between gap-4">
		{#each tabs as tab (tab.id)}
			<div
				role="button"
				on:keydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						setActiveTab(tab.id);
					}
				}}
				tabindex="0"
				class="flex-1 min-w-[150px] md:min-w-[200px] rounded-2xl p-6 overflow-hidden text-center cursor-pointer {activeTab ===
				tab.id
					? 'active'
					: 'bg-(--glc-primary-100) border border-(--glc-primary-200) text-black'}"
				on:click={() => setActiveTab(tab.id)}
			>
				<div class="flex items-center justify-center gap-4">
					{#if tab?.icon}
						<div class="hidden lg:flex {activeTab === tab.id ? 'p-1 bg-white rounded' : ''}">
							<Icon name={tab?.icon} />
						</div>
					{/if}
					<p class="text-sm lg:text-lg lg:font-medium font-normal !leading-[26px]">
						{tab.title}
					</p>
				</div>
			</div>
		{/each}
	</div>

	<div class="tab-content w-full mt-4">
		{#each tabs as tab (tab.id)}
			<div
				class={activeTab === tab.id ? 'block' : 'hidden'}
				id={`${tab.id}-content`}
				role="tabpanel"
				aria-labelledby={tab.id}
			>
				<svelte:component this={tab.content} {...tab.props || {}} />
			</div>
		{/each}
	</div>
</div>

<style>
	.active {
		background-color: #087ae4;
		color: white;
	}
</style>

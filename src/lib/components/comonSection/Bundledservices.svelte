<script lang="ts">
	import ServiesBox from '$lib/components/boxes/ServicesBox.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';

	export let items;
</script>

<div class="bundledWrapper relative py-20 bg-no-repeat bg-cover bg-center">
	<div class="overlay absolute inset-0 bg-[#F2F5FCCC]"></div>
	<div class="container mx-auto px-6 lg:px-0 relative z-10">
		<div class="flex flex-col lg:gap-20 gap-[60px]">
			<div class="space-y-2 text-center">
				<Title>Solution</Title>
				<SubHeading textAlign="text-center">Bundled services</SubHeading>
			</div>
			<div class="grid lg:grid-cols-2 grid-col-1 gap-6">
				{#each items as item (item.title)}
					<ServiesBox title={item.title} icon={item.icon} blur={true} />
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.bundledWrapper {
		background-image: url('../../images/blue-wave-pattern-bg.png');
	}
</style>

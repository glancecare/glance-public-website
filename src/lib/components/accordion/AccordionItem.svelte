<script>
	import Icon from '$lib/components/icons/index.svelte';
	export let title, index;
	export let active = false;

	function toggleAccordion(event) {
		event.preventDefault();
		active = !active;
	}
</script>

<div
	class="accordion-item bg-white flex flex-col rounded-xl p-4 mb-6 shadow-md"
	data-aos="fade-up"
	data-aos-delay={index * 100}
>
	<div
		class="accordion-item-header flex justify-between items-center cursor-pointer py-4"
		on:click={toggleAccordion}
	>
		<div class="flex items-center gap-2">
			{#if index}
				<span
					class="h-8 md:h-10 w-8 md:w-10 rounded-full bg-(--glc-primary-200) text-(--glc-primary-500) text-lg md:text-xl flex align-center justify-center leading-8 md:leading-10 mr-2"
				>
					{index}
				</span>
			{/if}
			<h3 class="text-lg md:text-xl">{title}</h3>
		</div>
		<Icon name={active ? 'up-arrow' : 'down-arrow'} on:click={toggleAccordion} />
	</div>
	<div
		class="accordion-item-content {active ? 'active' : ''} text-left text-teal-700 {index
			? 'pl-14'
			: ''}"
	>
		<slot />
	</div>
</div>

<style lang="scss" scoped>
	.accordion-item {
		box-shadow: 0px 20px 40px 0px var(--glc-primary-shadow-color);
		.accordion-item-content {
			max-height: 0px;
			overflow: hidden;
			transition: all 0.5s ease-in-out;
			&.active {
				max-height: 1000px;
			}
		}
	}
</style>

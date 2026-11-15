<script>
	import AccordionItem from './AccordionItem.svelte';

	export let items;
</script>

<div class="accordion-wrapper">
	{#each items as item}
		<AccordionItem title={item.title} active={item.active}>
			<p>{item.text}</p>
		</AccordionItem>
	{/each}
</div>

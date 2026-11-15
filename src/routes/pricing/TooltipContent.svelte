<script lang="ts">
	export let subTitle: string | undefined = undefined;
	export let description: string | undefined = undefined;
</script>

<div class="flex flex-col gap-2 text-left w-64">
	{#if subTitle}
		<h3 class="text-sm font-medium mb-1 text-(--glc-primary-500) uppercase">{subTitle}</h3>
	{/if}
	{#if description}
		<p class="text-sm text-gray-500">{description}</p>
	{/if}
</div>

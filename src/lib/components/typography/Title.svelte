<script lang="ts">
	export let color: string = 'text-(--glance-primary)';
	export let size: string = 'text-xs';
	export let uppercase: boolean = true;
	export let textAlign: string = 'text-center';
	export let className: string = '';
</script>

<h5
	class={`font-medium ${textAlign} ${color} ${size} ${uppercase ? 'uppercase' : ''} ${className}`}
>
	<slot />
</h5>

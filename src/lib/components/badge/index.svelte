<script lang="ts">
	export let textColor: string = 'text-(--glc-primary-100)';
	export let className: string = '';
	export let textSize: string = 'text-sm';
	export let bgColor: string = 'bg-(--glc-primary-100)';
</script>

<div
	class={`inline-flex items-center px-2 py-1 rounded-full ${bgColor} overflow-hidden ${className}`}
>
	<h5 class={`${textSize} font-medium leading-[22px] ${textColor}`}>
		<slot />
	</h5>
</div>

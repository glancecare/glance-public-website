<script lang="ts">
	export let color: string = 'text-black';
	export let fontWeight: string = 'font-medium';
	export let className: string = '';
	export let textAlign: string = 'text-start';
</script>

<h1
	class={`text-4xl md:text-[42px] ${textAlign} lg:leading-[50px] leading-[42px] ${color} ${fontWeight} ${className}`}
>
	<slot />
</h1>

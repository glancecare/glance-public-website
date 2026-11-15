<script lang="ts">
	export let color: string = 'text-[#0000]';
	export let fontWeight: string = 'font-medium';
	export let className: string = '';
	export let textAlign: string = 'start';
</script>

<h1
	class={`text-[42px]  text-${textAlign} lg:leading-[72px] leading-[50px] text-[${color}] ${fontWeight} ${className}`}
>
	<slot />
</h1>

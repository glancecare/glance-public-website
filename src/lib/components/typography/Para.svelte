<script lang="ts">
	export let color: string = 'text-[#343A40]';
	export let className: string = '';
	export let font: string = 'normal';
	export let leading: string = 'lg:leading-[26px]';
</script>

<div>
	<p class={`lg:text-lg text-base  ${leading} leading-[24px] font-${font} ${color}  ${className}`}>
		<slot />
	</p>
</div>

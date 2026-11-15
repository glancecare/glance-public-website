<script lang="ts">
	import img from '$lib/images/avatar.svg';
	import Para from '$lib/components/typography/Para.svelte';

	export let name: string = 'Glance Team';
	export let readTime: string = '5 min read';
	export let avatarImg: string = img; 
</script>

<div class="flex items-center gap-3">
	<div class="bg-[#F1F1F1] rounded-full p-3 w-[48px] h-[48px]">
		<img src={avatarImg} alt={name} class="rounded-full" />
	</div>
	<div>
		<Para color="#000000" font="medium">{name}</Para>
		<p class="text-sm text-[#6C757D] font-normal leading-[16px]">{readTime}</p>
	</div>
</div>

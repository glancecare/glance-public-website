<script lang="ts">
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import TeamBox from '$lib/components/boxes/TeamBox.svelte';
	import Img from '$lib/images/slug-1.png';

	export let data;
</script>

<div class="container mx-auto flex flex-col lg:gap-20 gap-10 lg:py-20 py-10 px-6 lg:px-0">
	<div class="space-y-2">
		<Title>{data.subtitle}</Title>
		<SubHeading textAlign="text-center">{data.title}</SubHeading>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 items-center">
		<div>
			<img src={Img} alt="" class="" />
		</div>
		<div class="flex flex-col gap-6">
			{#each data.items as item}
				<TeamBox	
					title={item.title}
					icon={item.icon}
					description={item.description}
					type={item?.type}
					bottomText={item.bottomText}
				/>
			{/each}
		</div>
	</div>
</div>

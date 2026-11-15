<script lang="ts">
	import FeatureBox from '$lib/components/boxes/FeatureBox.svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import img from '$lib/images/feature2.png';

	export let data;
</script>

<div class="flex flex-col items-center lg:gap-[60px] gap-10">
	<div>
		<SubHeading textAlign="text-center">{data.title} Features</SubHeading>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 items-center">
		<div class="order-2 lg:order-none">
			<FeatureBox items={data.items} />
		</div>
		<div class="flex lg:justify-end justify-center order-1 lg:order-none lg:ml-28 lg:mt-20">
			<img src={img} alt="" class="w-full h-full" />
		</div>
	</div>
</div>

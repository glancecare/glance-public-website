<script lang="ts">
	import { ChevronRightIcon } from 'lucide-svelte';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Button from '$lib/components/button/index.svelte';
	import doctorImg from '$lib/images/doctor.png';
	import { openDrawer } from '../../../store';

	const handleOpenDrawer = () => {
		openDrawer();
	};
</script>

<div class="lg:py-20 py-10 px-6 lg:px-0">
	<div
		class="bg-(--glc-primary-700) pt-10 lg:pt-0 rounded-3xl container mx-auto overflow-hidden flex flex-col lg:flex-row gap-10 items-center"
	>
		<div class="w-full flex flex-col gap-6 lg:w-1/2 lg:pl-20 px-6">
			<div class="space-y-2">
				<Title textAlign="start" color="text-[#C2C2C2]">Innovate</Title>
				<SubHeading color="text-white">Ready to Innovate?</SubHeading>
			</div>
			<div>
				<p
					class="text-white lg:text-[22px] text-base lg:leading-[30px] leading-[24px] lg:font-medium font-normal"
				>
					Discover how Glance Care can make a difference in your organization. Contact us today to
					learn more about our revolutionary solutions.
				</p>
			</div>
			<div>
				<Button
					variant="outlined"
					size="md"
					fontSize="lg"
					className="bg-white text-(--glc-primary-700) lg:font-bold font-normal flex items-center gap-1.5"
					on:click={handleOpenDrawer}
				>
					Contact Us
					<span
						class="flex flex-col items-center justify-center lg:bg-(--glc-primary-700) bg-none rounded-full p-0.5"
					>
						<ChevronRightIcon class="w-4 h-4 text-(--glc-primary-700) lg:text-white" />
					</span>
				</Button>
			</div>
		</div>
		<div class="w-full lg:w-1/2 bgImg lg:bg-right bg-no-repeat bg-clip-content bg-cover lg:bg-auto">
			<div class="flex lg:justify-end justify-start">
				<img src={doctorImg} alt="doctorimage" class="max-h-[455px] flip-horizontal" />
			</div>
		</div>
	</div>
</div>

<style>
	.bgImg {
		background-image: url('../../images/partnerbg.png');
	}
	.flip-horizontal {
		transform: scaleX(-1);
	}
</style>

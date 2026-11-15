<script lang="ts">
	import {t} from "$lib/i18n";

	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import TeamBox from '../boxes/TeamBox.svelte';
	import Img from '$lib/images/graphics.png';
</script>

<div class="container mx-auto flex flex-col lg:gap-20 gap-10 lg:py-20 py-10 px-6 lg:px-0">
	<div class="space-y-2">
		<Title>Solutions</Title>
		<SubHeading textAlign="text-center">Solutions for Healthcare Providers</SubHeading>
	</div>
	<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-10 items-center">
		<div class="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-6 order-2 lg:order-1">
			<TeamBox
				title={$t("solution.ba.title")}
				icon="chart"
				showButton={true}
				buttonText={$t("button.exploreMore")}
				link="/healthcare-provider/healthcare-business-analytics"
			/>
			<TeamBox
				title={$t("solution.rcm.title")}
				icon="fileSearch"
				showButton={true}
				buttonText={$t("button.exploreMore")}
				link="/healthcare-provider/revenue-cycle-management"
			/>
			<TeamBox
				title={$t("solution.cdi.title")}
				icon="file"
				showButton={true}
				buttonText={$t("button.exploreMore")}
				link="/healthcare-provider/improve-clinical-documentation"
			/>
			<TeamBox
				title={$t("solution.cds.title")}
				icon="guard"
				showButton={true}
				buttonText={$t("button.exploreMore")}
				link="/healthcare-provider/clinical-decision-support-system"
			/>
		</div>
		<div class="flex lg:justify-end justify-start order-1 lg:order-2">
			<div class="lg:w-[446px] lg:h-[502px] w-full h-full">
				<img src={Img} alt="" class="rounded-lg w-full h-full" />
			</div>
		</div>
	</div>
</div>

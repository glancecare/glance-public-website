<script>
	import {t} from '$lib/i18n';

	import HeroSection from '$lib/components/comonSection/HeroSection.svelte';
	import SellingPoint from '$lib/components/comonSection/SellingPoint.svelte';
	import Features from '$lib/components/comonSection/Features.svelte';
	import Bundledservices from '$lib/components/comonSection/Bundledservices.svelte';
	import Implementation from '$lib/components/comonSection/Implementation.svelte';
	import Innovate from '$lib/components/comonSection/Innovate.svelte';
	import HcpProvider from '$lib/components/comonSection/HcpProvider.svelte';

	import HeroImage from '$lib/images/hcp-analytics.png';
	import Tab1Image from '$lib/images/analytics-strategic-decision-making.png';
	import Tab2Image from '$lib/images/analytics-optimize-resource-utilization.png';
	import Tab3Image from '$lib/images/solutions-optimization.png';
	import Tab4Image from '$lib/images/analytics-revenue-optimization.png';

	const heroLabels = {
		"title": "solution.hcp.analytics.hero.title",
		"upperDescription": "solution.hcp.analytics.hero.upperDescription",
		"lowerDescription": "solution.hcp.analytics.hero.lowerDescription",
		"products": "solution.hcp.analytics.hero.products",
	}

	const uspLabels = {
		"title": "solution.hcp.usp.title",
		"subtitle": "solution.hcp.usp.subtitle",
		// TODO: Move the t function call to the specific template than here
		// This may affect the live translation
		// Not implementing in Tabs right now as Tab is used in multiple places
		// and it may break the existing implementation
		"tabs": {
			"tab1": {
				"title": $t("solution.hcp.analytics.usp.tab1.title"),
				"subtitle": $t("solution.hcp.analytics.usp.tab1.subtitle"),
				"image": Tab1Image,
				"bottomText": $t("solution.hcp.analytics.usp.tab1.bottomText"),
			},
			"tab2": {
				"title": $t("solution.hcp.analytics.usp.tab2.title"),
				"subtitle": $t("solution.hcp.analytics.usp.tab2.subtitle"),
				"image": Tab2Image,
				"bottomText": $t("solution.hcp.analytics.usp.tab2.bottomText"),
			},
			"tab3": {
				"title": $t("solution.hcp.analytics.usp.tab3.title"),
				"subtitle": $t("solution.hcp.analytics.usp.tab3.subtitle"),
				"image": Tab3Image,
				"bottomText": $t("solution.hcp.analytics.usp.tab3.bottomText"),
			},
			"tab4": {
				"title": $t("solution.hcp.analytics.usp.tab4.title"),
				"subtitle": $t("solution.hcp.analytics.usp.tab4.subtitle"),
				"image": Tab4Image,
				"bottomText": $t("solution.hcp.analytics.usp.tab4.bottomText"),
			},
		}
	};

	const newFeaturesIndex = [];
	const getFeatureItems = () => {
		const features = $t("solution.hcp.analytics.features.items");
		return features.map((feature, index) => {
			return {
				"name": feature,
				"new": newFeaturesIndex.includes(index),
			};
		});
	};

	const featuresLabels = {
		"title": $t("solution.hcp.analytics.features.title"),
		"items": getFeatureItems(),
	};

	const serviceLabels = [
		{
			"title": $t("solution.hcp.analytics.services")[0],
			"icon": "pathway",
		},
		{
			"title": $t("solution.hcp.analytics.services")[1],
			"icon": "analysis",
		},
	];

	const accessLabels = {
		"title": $t("solution.hcp.access.title"),
		"subtitle": $t("solution.hcp.access.subtitle"),
		"items": [{
			"title": $t("solution.hcp.analytics.access.item1.title"),
			"description": $t("solution.hcp.analytics.access.item1.description"),
			"icon": "chart",
		}],
	};

</script>
<svelte:head>
	<title>{$t("solution.hcp.analytics.title")}</title>
	<meta name="description" content={ $t("solution.hcp.analytics.description")} />
</svelte:head>

<div>
	<div class="container mx-auto lg:py-[120px] py-10 lg:px-0 px-6">
		<HeroSection data={heroLabels} image={HeroImage} />
	</div>
	<div class="container mx-auto lg:py-20 py-10 lg:px-0 px-6">
		<SellingPoint data={uspLabels} />
	</div>
	<div class="container mx-auto lg:py-20 py-10 lg:px-0 px-6">
		<Features data={featuresLabels} />
	</div>
	<div>
		<Bundledservices items={serviceLabels} />
	</div>
	<div>
		<Implementation data={accessLabels} />
	</div>
	<div>
		<Innovate />
	</div>
	<div>
		<HcpProvider />
	</div>
</div>

<script>
	import {t} from '$lib/i18n';

	import HeroSection from '$lib/components/comonSection/HeroSection.svelte';
	import SellingPoint from '$lib/components/comonSection/SellingPoint.svelte';
	import Features from '$lib/components/comonSection/Features.svelte';
	import Bundledservices from '$lib/components/comonSection/Bundledservices.svelte';
	import Implementation from '$lib/components/comonSection/Implementation.svelte';
	import Innovate from '$lib/components/comonSection/Innovate.svelte';
	import HcpProvider from '$lib/components/comonSection/HcpProvider.svelte';

	import HeroImage from '$lib/images/cdi-hero.png';
	import Tab1Image from '$lib/images/cdi-boosting-revenue.png';
	import Tab2Image from '$lib/images/rcm-improved-quality.png';
	import Tab3Image from '$lib/images/cdi-drive-research.png';
	import Tab4Image from '$lib/images/cdi-records.png';

	const heroLabels = {
		"title": "solution.hcp.cdi.hero.title",
		"upperDescription": "solution.hcp.cdi.hero.upperDescription",
		"lowerDescription": "solution.hcp.cdi.hero.lowerDescription",
		"products": "solution.hcp.cdi.hero.products",
	}
	
	const uspLabels = {
		"title": "solution.hcp.usp.title",
		"subtitle": "solution.hcp.cdi.usp.subtitle",
		"description":"solution.hcp.cdi.usp.tabs.description",
		// TODO: Move the t function call to the specific template than here
		// This may affect the live translation
		// Not implementing in Tabs right now as Tab is used in multiple places
		// and it may break the existing implementation
		"tabs": {
			"tab1": {
				"title": $t("solution.hcp.cdi.usp.tab1.title"),
				"subtitle": $t("solution.hcp.cdi.usp.tab1.subtitle"),
				"image": Tab1Image,
				"bottomText": $t("solution.hcp.cdi.usp.tab1.bottomText"),
			},
			"tab2": {
				"title": $t("solution.hcp.cdi.usp.tab2.title"),
				"subtitle": $t("solution.hcp.cdi.usp.tab2.subtitle"),
				"image": Tab2Image,
				"bottomText": $t("solution.hcp.cdi.usp.tab2.bottomText"),
			},
			"tab3": {
				"title": $t("solution.hcp.cdi.usp.tab3.title"),
				"subtitle": $t("solution.hcp.cdi.usp.tab3.subtitle"),
				"image": Tab3Image,
				"bottomText": $t("solution.hcp.cdi.usp.tab3.bottomText"),
			},
			"tab4": {
				"title": $t("solution.hcp.cdi.usp.tab4.title"),
				"subtitle": $t("solution.hcp.cdi.usp.tab4.subtitle"),
				"image": Tab4Image,
				"bottomText": $t("solution.hcp.cdi.usp.tab4.bottomText"),
			},
		}
	};

	const newFeaturesIndex = [];
	const getFeatureItems = () => {
		const features = $t("solution.hcp.cdi.features.items");
		return features.map((feature, index) => {
			return {
				"name": feature,
				"new": newFeaturesIndex.includes(index),
			};
		});
	};

	const featuresLabels = {
		"title": $t("solution.hcp.cdi.features.title"),
		"items": getFeatureItems(),
	};

	const serviceLabels = [
		{
			"title": $t("solution.hcp.cdi.services")[0],
			"icon": "pathway",
		},
		{
			"title": $t("solution.hcp.cdi.services")[1],
			"icon": "analysis",
		},
	];

	const accessLabels = {
		"title": $t("solution.hcp.access.title"),
		"subtitle": $t("solution.hcp.access.subtitle"),
		"items": [
			{
			"title": $t("solution.hcp.cdi.access.item1.title"),
			"description": $t("solution.hcp.cdi.access.item1.description"),
			"icon": "chart",
			"bottomText": $t("solution.hcp.cdi.access.item1.bottomText"),
			},
			{
			"title": $t("solution.hcp.cdi.access.item2.title"),
			"description": $t("solution.hcp.cdi.access.item2.description"),
			"icon": "chart",
			"bottomText": $t("solution.hcp.cdi.access.item2.bottomText"),
			},
			{
			"title": $t("solution.hcp.cdi.access.item3.title"),
			"description": $t("solution.hcp.cdi.access.item3.description"),
			"icon": "chart",
			"bottomText": $t("solution.hcp.cdi.access.item3.bottomText"),
			}
		],
	};

</script>
<svelte:head>
	<title>{$t("solution.hcp.cdi.title")}</title>
	<meta name="description" content={ $t("solution.hcp.cdi.description")} />
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

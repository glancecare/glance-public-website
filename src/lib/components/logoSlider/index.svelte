<script lang="ts">
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import type { EmblaOptionsType, EmblaPluginType } from 'embla-carousel';

	import logo1 from '$lib/images/lgo1.png';
	import logo2 from '$lib/images/lgo2.png';
	import logo3 from '$lib/images/lgo3.png';
	import logo4 from '$lib/images/lgo4.png';
	import logo5 from '$lib/images/lgo5.png';

	const logos = [logo1, logo2, logo3, logo4, logo5];
	const doubledLogos = [...logos, ...logos];

	let options: EmblaOptionsType = {
		loop: true
	};

	let plugins: EmblaPluginType[] = [
		AutoScroll({
			speed: 1,
			playOnInit: true,
			startDelay: 0
		})
	];
</script>

<div class="embla" use:emblaCarouselSvelte={{ options, plugins }}>
	<div class="embla__container">
		{#each doubledLogos as logo}
			<div class="embla__slide border-r border-[#E4E4E7] px-10">
				<img src={logo} alt="Logo" class="logo-img" />
			</div>
		{/each}
	</div>
</div>

<style>
	.embla {
		margin: auto;
		overflow: hidden;
	}

	.embla__container {
		display: flex;
		touch-action: pan-y pinch-zoom;
		backface-visibility: hidden;
	}

	.embla__slide {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 0 0 50%;
		min-width: 0;
	}

	.logo-img {
		height: 76px;
		width: 76px;
		object-fit: contain;
	}

	@media (min-width: 640px) {
		.embla__slide {
			flex: 0 0 33.333%;
		}
	}

	@media (min-width: 1280px) {
		.embla__slide {
			flex: 0 0 20%;
		}
	}
</style>

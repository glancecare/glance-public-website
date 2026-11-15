<script>
	import Icon from '$lib/components/icons/index.svelte';
	import EmailCTA from '$lib/components/cta/EmailCTA.svelte';
	import seniorDoctor from '$lib/images/senior-doctor.png';
</script>

<div class="m-6 pt-4 rounded-2xl mb-16 end-cta-section overflow-hidden">
	<div class="container mx-auto z-10 relative">
		<div class="flex flex-col md:flex-row gap-4 items-center">
			<div class="w-full md:w-2/3 lg:w-1/2 p-2 p-6 md:p-0">
				<h2 class="text-xl md:text-2xl xl:text-4xl leading-[1.5] mb-4">
					Discover the future of clinical efficiency—<span class="gradient-text">powered by AI</span
					>, designed just for you.
				</h2>
				<p class="text-base md:text-lg lg:text-xl text-teal-700 mb-10">
					Need a custom demo? Contact us!
				</p>
				<EmailCTA />
			</div>
			<div
				class="w-full md:w-1/3 lg:w-1/2 p-2 p-6 md:p-0 relative h-full max-h-96 md:max-h-120 relative"
			>
				<img
					src={seniorDoctor}
					alt="Glance Care Doctor"
					class="w-3/4 mx-auto md:mx-0"
					data-aos="fade-up"
					data-aos-duration="1000"
				/>
				<span
					class="text-xl md:text-2xl lg:text-4xl text-(--glc-secondary-500) bg-(--glc-primary-100) border-1 border-white rounded-full p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center absolute bottom-30 left-10"
					data-aos="zoom-in-up"
					data-aos-duration="1000"
					data-aos-delay="300"
					data-aos-anchor-placement="top-bottom"
				>
					<Icon name="magic" />
				</span>
			</div>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.end-cta-section {
		background-color: var(--glc-primary-100);
		position: relative;
		&:before {
			content: '';
			display: block;
			background-image: url('$lib/images/blue-wave-pattern-bg.png');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			opacity: 0.3;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 0;
		}
	}
</style>

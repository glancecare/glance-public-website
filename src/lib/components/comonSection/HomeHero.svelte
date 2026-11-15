<script lang="ts">
	export let title: string;
	export let description: string;
	export let buttonText: string;
	import Img from '$lib/images/home1.png';
	import Button from '$lib/components/button/index.svelte';
	import ArrowRight from '$lib/components/icons/arrow-right.svelte';
</script>

<div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-[68px] gap-b-10 items-center">
	<div class="flex flex-col gap-6">
		<div>
			<h1
				class="text-[42px] lg:text-[60px] font-medium leading-[50px] lg:leading-[70px] text-[#121926]"
			>
				{title}
			</h1>
		</div>
		<div>
			<p class="text-lg lg:text-[22px] font-medium text-[#364152] lg:leading-[30px] leading-[26px]">
				{description}
			</p>
		</div>
		<div class="flex gap-2 mt-3">
			<Button
				href="https://app.glance.care/signup"
				variant="gradient"
				target="_blank"
				fontSize="lg"
				size="md"
				rounded="full"
			>
				Create a Free Account
				<ArrowRight className="ml-2" />
			</Button>
			<Button href="/healthcare-provider" variant="outlined" size="md" rounded="full" fontSize="lg">
				Learn More
			</Button>
		</div>
	</div>

	<div class="flex lg:justify-end justify-start h-[600px]">
		<div class="main lg:h-[294px] lg:w-[325px] w-[216px] h-[220px] relative">
			<img src={Img} alt="AnimatedImage" class="animated-image lg:h-[503px] absolute bottom-0" />
			<div
				class="opacity-5 top-left lg:w-[83px] lg:h-[83px] w-[57px] h-[57px] absolute top-[-163px] left-[-156px] lg:top-[-192px] lg:left-[-180px] bg-(--glc-primary-300) rounded-lg"
			></div>
			<div
				class="opacity-5 top-right lg:w-[145px] lg:h-[145px] w-[100px] h-[100px] absolute top-[-206px] right-[-178px] lg:top-[-254px] lg:right-[-244px] rounded-lg bg-(--glc-secondary-300)"
			></div>
			<div
				class="opacity-5 bottom-left lg:w-[43px] lg:h-[43px] w-[30px] h-[30px] rounded-lg bg-(--glc-secondary-300) absolute bottom-[-134px] left-[-118px] lg:bottom-[-146px] lg:left-[-141px]"
			></div>
			<div
				class="opacity-5 bottom-right lg:w-[110px] lg:h-[110px] w-[76px] h-[76px] rounded-lg bg-(--glc-primary-300) absolute bottom-[-182px] right-[-157px] lg:bottom-[-215px] lg:right-[-215px]"
			></div>
		</div>
	</div>
</div>

<style>
	.main {
		display: block;
		border-radius: 10px;
		margin: auto;
		background: linear-gradient(45deg, #087ae4 0%, #feb6b6 100%);
	}

	@keyframes move-and-fade {
		0% {
			transform: translateY(20px);
			opacity: 0;
		}
		100% {
			transform: translateY(0);
			opacity: 1;
		}
	}

	.animated-image {
		animation: move-and-fade 2s ease forwards;
		position: absolute;
		bottom: 0;
		left: 20px;
		transform: translateX(-50%);
	}

	@keyframes move-to-corner {
		0% {
			transform: translate(0, 0);
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.top-left {
		animation: move-to-corner 2s ease forwards;
		animation-delay: 0.3s;
		transform: translate(100px, 100px);
	}

	.top-right {
		animation: move-to-corner 2s ease forwards;
		animation-delay: 0.3s;
		transform: translate(-100px, 100px);
	}

	.bottom-left {
		animation: move-to-corner 2s ease forwards;
		animation-delay: 0.3s;
		transform: translate(100px, -100px);
	}

	.bottom-right {
		animation: move-to-corner 2s ease forwards;
		animation-delay: 0.3s;
		transform: translate(-100px, -100px);
	}
</style>

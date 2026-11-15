<script>
	import Button from '$lib/components/button/index.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import EmailCTA from '$lib/components/cta/EmailCTA.svelte';
	import FooterCTA from '$lib/components/comonSection/FooterCTA.svelte';
	import { AccordionItem } from '$lib/components/accordion/index.js';
	import VideoPopup from '$lib/components/videoPopup/index.svelte';

	import heroImg from '$lib/images/glance-doctor-solutions-hero.png';
	import doctorAvatar from '$lib/images/physician-avatar.png';
	import patientAvatar from '$lib/images/patient-avatar.png';
	import trustIcon from '$lib/images/trust-icon.png';
	import careIcon from '$lib/images/medical-heart-icon.png';
	import PlayIcon from '$lib/icons/play.svelte';

	// Import all customer organization images
	import customer1 from '$lib/images/customer-orgs/customer-1.png';
	import customer2 from '$lib/images/customer-orgs/customer-2.png';
	import customer3 from '$lib/images/customer-orgs/customer-3.png';
	import customer4 from '$lib/images/customer-orgs/customer-4.png';
	import customer5 from '$lib/images/customer-orgs/customer-5.png';
	import customer6 from '$lib/images/customer-orgs/customer-6.png';
	import customer7 from '$lib/images/customer-orgs/customer-7.png';
	import customer8 from '$lib/images/customer-orgs/customer-8.png';
	import customer9 from '$lib/images/customer-orgs/customer-9.png';
	import customer10 from '$lib/images/customer-orgs/customer-10.png';
	import customer11 from '$lib/images/customer-orgs/customer-11.png';
	import customer12 from '$lib/images/customer-orgs/customer-12.png';
	import customer13 from '$lib/images/customer-orgs/customer-13.png';
	import customer14 from '$lib/images/customer-orgs/customer-14.png';
	import customer15 from '$lib/images/customer-orgs/customer-15.png';
	import customer16 from '$lib/images/customer-orgs/customer-16.png';
	import customer17 from '$lib/images/customer-orgs/customer-17.png';
	import customer18 from '$lib/images/customer-orgs/customer-18.png';
	import customer19 from '$lib/images/customer-orgs/customer-19.png';
	import customer20 from '$lib/images/customer-orgs/customer-20.png';
	import customer21 from '$lib/images/customer-orgs/customer-21.png';
	import customer22 from '$lib/images/customer-orgs/customer-22.png';
	import customer23 from '$lib/images/customer-orgs/customer-23.png';
	import customer24 from '$lib/images/customer-orgs/customer-24.png';
	import customer25 from '$lib/images/customer-orgs/customer-25.png';
	import customer26 from '$lib/images/customer-orgs/customer-26.png';

	import featureQuickCoder from '$lib/images/feature-quick-coder.png';
	import featureAskGlance from '$lib/images/feature-ask-glance.png';
	import featureSoapBuilder from '$lib/images/feature-soap-builder.png';
	import featureEngage from '$lib/images/feature-engage.png';
	import featureNoteTaking from '$lib/images/feature-note-taking.png';

	import feedback1 from '$lib/images/customer-dr-rauf-qardahi.png';

	import bgPattern from '$lib/images/glance-patterns-checks-5.png';
	import uiPlaceholder from '$lib/images/glance-app-ui-placeholder-1.png';
	import doctorImage from '$lib/images/doctor.png';

	// Create an array of all available customer images
	const customerImages = [
		customer1,
		customer2,
		customer3,
		customer4,
		customer5,
		customer6,
		customer7,
		customer8,
		customer9,
		customer10,
		customer11,
		customer12,
		customer13,
		customer14,
		customer15,
		customer16,
		customer17,
		customer18,
		customer19,
		customer20,
		customer21,
		customer22,
		customer23,
		customer24,
		customer25,
		customer26
	];

	// State for carousel
	let isPaused = false;
	let open = false;
	let videoUrl = '';

	function closeVideoPopup() {
		open = false;
		videoUrl = '';
	}

	function openVideoPopup(url) {
		open = true;
		videoUrl = url;
	}

	// Create duplicated array for seamless infinite scroll
	const duplicatedImages = [...customerImages, ...customerImages];

	let onMouseHover = (e) => {
		e.preventDefault();
		isPaused = true;
	};

	let onMouseLeave = (e) => {
		e.preventDefault();
		isPaused = false;
	};

	let features = [
		{
			title: 'Ask Glance',
			tagline: 'Powered by MultiModal AI & AI Transcriber',
			text: 'evidence you can act on; because medicine is no place for AI hallucinations. Get fast, evidence-based answers to your clinical questions, each backed by citations and clear educational flowcharts, built for point-of-care decisions and teaching. Speed without shortcuts, insight without guesswork.',
			image: featureAskGlance,
			icon: 'magic',
			video: null
		},
		{
			title: 'Quick Coder',
			tagline: 'Powered by Moramiz AI & AI Transcriber',
			text: 'Effortless, Accurate ICD10-AM Coding Instantly. Let Moramiz AI automatically code your clinical notes with precision, no hassle, no wasted time. Spend more time caring for patients and less time searching through 40,000 codes. Just use Quick Coder and simplify your workflow.',
			image: featureQuickCoder,
			icon: 'dna',
			video: null
		},
		{
			title: 'SOAP Builder',
			tagline: 'Powered by DocuGen AI & AI Transcriber',
			text: 'Structured Notes, Standardized Instantly Turn raw clinical notes into clear, consistent SOAP templates in seconds. DocuGen ensures documentation stays smart, searchable, and survey-ready.',
			image: featureSoapBuilder,
			icon: 'pencil',
			video: null
		},
		{
			title: 'Engage',
			tagline: 'Powered by Sanad AI',
			text: 'Effortless Patient-Doctor Engagement and Automation Automate follow-ups, share visit summaries, and connect the right patient to your right specialist, all with your smart health concierge, Sanad.',
			image: featureEngage,
			icon: 'pulse',
			video: null
		},
		{
			title: 'Note Taking',
			tagline: 'Powered by DocuGen & Moramiz AI',
			text: 'Effortless, Accurate ICD10-AM Coding Instantly. Let Moramiz AI automatically code your clinical notes with precision, no hassle, no wasted time. Spend more time caring for patients and less time searching through 40,000 codes. Just use Quick Coder and simplify your workflow.',
			image: featureNoteTaking,
			icon: 'book',
			video: null
		}
	];

	let feedbacks = [
		{
			name: 'Dr. Rauf Qardahi, MD',
			designation: 'Surgeon, Al Olaya Medical Center',
			image: feedback1,
			youtubeLink: 'https://www.youtube.com/embed/xMcTZZK7xqQ?si=l5exZvlhbIgiokG5'
		}
	];

	let faqs = [
		{
			title: 'What is Glance Care and how does it work?',
			text: [
				'Glance Care is a specialized health tech solution focused on medical documentation and clinical decision support systems. It uses advanced technologies to provide streamlined support for healthcare professionals, especially busy doctors.',
				'To get started, simply sign up for free and receive 4,000 complimentary credits. With Glance Care, you can access features such as Quick Coder, SOAP Builder, Clinical Note Taking, and Patient Engagement—all designed to enhance your workflow and improve patient care.'
			],
			active: true
		},
		{
			title: 'How much does it cost?',
			text: [
				'You can sign up for free and receive 4,000 complimentary credits to get started. After you’ve tried and enjoyed the service, you can choose from a variety of subscription plans designed to fit different needs and budgets.'
			],
			active: false
		},
		{
			title: 'What specialties does Glance Care support?',
			text: [
				'Glance Care excels in supporting documentation and decision support for primary and secondary care specialties. For more specialized, tertiary cases, we currently offer dedicated solutions for oncology and cardiology. Our research and development team is actively working on expanding to additional specialty areas in the future.'
			],
			active: false
		},
		{
			title: 'Which countries are supported by Glance Care?',
			text: [
				'Our technology is developed in Saudi Arabia and is designed to be effective worldwide.',
				'Quick Coder: We currently support the Australian modification territory of the ICD-10 coding system. This includes Saudi Arabia, Qatar, Bahrain, Australia, New Zealand, Singapore, Turkey, and Ukraine. Support for the ICD-10 CM territory—including the USA, India, UAE, and the Philippines—will be available soon.',
				'SOAP Builder and Note Taking: These features use English-based documentation standards that are suitable for most countries.',
				'Engage: This feature is specifically localized to comply with Saudi regulations and meet the needs of the Saudi market.'
			],
			active: false
		}
	];
</script>

<svelte:head>
	<title>Glance Care | AI-Powered Clinical Documentation and Decision Support</title>
	<meta
		name="description"
		content="Glance Care is a specialized health tech solution focused on medical documentation and clinical decision support systems. It uses advanced technologies to provide streamlined support for healthcare professionals, especially busy doctors."
	/>
</svelte:head>

<div class="relative w-full overflow-hidden">
	<div class="bg-pattern-blue-wave m-6 py-4 rounded-2xl">
		<div class="container mx-auto my-16">
			<div class="flex flex-col md:flex-row gap-10 items-center">
				<div class="flex flex-col px-4 w-full md:w-1/2">
					<h1 class="text-4xl md:text-6xl xl:text-7xl text-(--glance-primary)">Glance,</h1>
					<h1 class="text-4xl md:text-6xl xl:text-7xl">Click, Care,</h1>
					<h1 class="text-4xl md:text-6xl xl:text-7xl md:mb-16 mb-8">and Organize</h1>
					<p class="text-base md:text-lg lg:text-xl font-medium">
						Turn your insight into clinical documentation and actionable care plans.
					</p>
					<br class="md:mb-4 mb-2" />
					<p class="text-base md:text-lg lg:text-xl font-light">
						Glance into our tailored solutions and discover how your clinic flows and workday can be
						stress-free, efficient, and focused on patient care, not documentation.
					</p>
					<EmailCTA />
				</div>
				<div class="w-full md:w-1/2 flex justify-center relative">
					<div
						class="lg:w-[145px] lg:h-[145px] w-[100px] h-[100px] top-0 right-4 absolute rounded-lg bg-(--glc-secondary-300) entry-fade-in-top-right animate-delay-1000"
					></div>
					<div
						class="lg:w-[110px] lg:h-[110px] w-[76px] h-[76px] bottom-0 left-4 rounded-lg bg-(--glc-primary-300) absolute entry-fade-in-bottom-left animate-delay-1000"
					></div>
					<img
						src={heroImg}
						alt="Glance Doctor Solutions Hero"
						class="entry-move-up-and-fade-in w-4/5 object-cover rounded-3xl mt-10 mb-10 z-10"
					/>
				</div>
			</div>
		</div>
	</div>

	<!-- Community -->
	<div class="bg-white py-16">
		<div class="container mx-auto px-4">
			<div class="text-center mx-auto">
				<p class="mb-4 text-2xl md:text-3xl lg:text-4xl leading-[2]">
					<span>
						Join 1,000+
						<span class="inline-block w-8 md:w-10 lg:w-12 align-middle">
							<img src={doctorAvatar} alt="Physician" />
						</span>
						physicians,
						<span class="inline-block w-8 md:w-10 lg:w-12 align-middle">
							<img src={trustIcon} alt="Trust" />
						</span>
						who trust
						<span class="inline-block w-8 md:w-10 lg:w-12 align-middle">
							<img src={careIcon} alt="Care" />
						</span>
						Glance care to save time, <br />boost accuracy,
						<span class="inline-block w-8 md:w-10 lg:w-12 align-middle">
							<img src={patientAvatar} alt="Patient" />
						</span>
						and elevate patient care, <br />every single day.
					</span>
				</p>
				<hr class="my-10 border-glance-primary max-w-5xl mx-auto" />
				<p class="text-base md:text-lg lg:text-xl leading-[2] font-medium">
					Our users are making an impact at these leading medical institutions.
				</p>
				<div
					class="relative overflow-hidden mt-10"
					on:mouseenter={onMouseHover}
					on:mouseleave={onMouseLeave}
				>
					<div class="flex gap-8 carousel-track" class:paused={isPaused}>
						{#each duplicatedImages as image, i}
							<div
								class="flex items-center justify-center p-4 min-w-[120px] h-[60px] flex-shrink-0 bg-contain bg-center bg-no-repeat saturate-0 hover:saturate-100 transition-all duration-100"
								style="background-image: url({image});"
							></div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Features -->
	<div class="bg-(--glc-primary-100) m-6 py-4 rounded-2xl mb-20">
		<div class="container mx-auto py-20">
			<div class="text-center mx-auto">
				<h2 class="text-2xl md:text-4xl xl:text-6xl leading-[1.2] mb-10">
					Powerful Features,<br />
					<span class="gradient-text">Seamlessly</span> Connected
				</h2>
			</div>
			<div>
				{#each features as feature}
					<div class="flex flex-col md:flex-row gap-4 items-center mb-10 alternate-direction">
						<div class="w-full md:w-1/2 p-2 md:p-4">
							<h3 class="text-lg md:text-3xl xl:text-5xl leading-[1.2] mb-4">{feature.title}</h3>
							<p class="text-base md:text-lg lg:text-xl text-(--glc-primary-500) mb-8">
								{feature.tagline}
							</p>
							<p class="text-base md:text-lg lg:text-xl font-light">{feature.text}</p>
						</div>
						<div class="w-full md:w-1/2 flex justify-center p-2 md:p-4 lg:p-8 relative">
							<img
								src={feature.image}
								alt={feature.title}
								class="w-full h-full object-cover"
								data-aos="fade-up"
								data-aos-duration="1000"
								data-aos-anchor-placement="top-bottom"
							/>
							<span
								class="text-xl md:text-2xl lg:text-4xl text-(--glc-secondary-500) bg-white rounded-full p-4 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center absolute feature-icon"
								data-aos="zoom-in-up"
								data-aos-duration="1000"
								data-aos-delay="300"
								data-aos-anchor-placement="top-bottom"
							>
								<Icon name={feature.icon} />
							</span>
						</div>
					</div>
				{/each}
				<div class="flex justify-center mt-10">
					<Button size="md" variant="outlined">And Much More...</Button>
				</div>
			</div>
		</div>
	</div>

	<!-- Testimonials -->
	<div class="bg-(--glc-primary-900) m-6 py-4 rounded-2xl mb-16">
		<div class="container mx-auto py-20">
			<div class="text-center mx-auto">
				<h2 class="text-2xl md:text-4xl xl:text-6xl leading-[1.2] mb-10 text-white">
					Real <span class="gradient-text">People</span>, Real Results
				</h2>
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left px-4">
					{#each feedbacks as feedback}
						<div
							class="flex flex-col items-left justify-end bg-white rounded-3xl overflow-hidden min-h-96"
							style="background-image: url({feedback.image}); background-size: cover; background-position: center;"
						>
							<div
								class="flex flex-row items-center justify-between p-4 pt-20 bg-gradient-to-t from-(--glc-black-opacity-70) to-transparent text-white gap-1"
							>
								<div class="flex flex-col items-left">
									<p class="text-lg font-medium">{feedback.name}</p>
									<p class="text-base font-light">{feedback.designation}</p>
								</div>
								<div class="flex-none">
									<button
										class="text-[1.2em] flex items-center justify-center border-2 border-white rounded-2xl p-4 hover:bg-white hover:text-(--glc-primary-900) transition-all duration-300 cursor-pointer"
										on:click={() => openVideoPopup(feedback.youtubeLink)}
									>
										<PlayIcon />
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>
				<VideoPopup {open} {videoUrl} onClose={closeVideoPopup} />
			</div>
		</div>
	</div>
	<!-- Middle CTA -->
	<div class="w-full">
		<div class="container mx-auto">
			<div class="flex flex-col md:flex-row gap-4 items-center mb-20">
				<div class="w-full md:w-2/3 lg:w-1/2 p-2 p-6 md:p-0">
					<h5 class="text-sm lg:text-base text-(--glc-primary-500) mb-4 uppercase">
						Unlock your free 4,000 credits—
					</h5>
					<h2 class="text-xl md:text-4xl xl:text-5xl leading-[1.2] mb-4">
						Get a firsthand look at the future of clinical workflow with <span class="gradient-text"
							>Glance Care</span
						>
					</h2>
					<p class="text-base md:text-lg lg:text-xl">
						Discover how Glance Care streamlines documentation, automates coding, supports your
						decisions, and boosts patient engagement, so you can focus on care, not clerical work.
					</p>
					<EmailCTA />
				</div>
				<div
					class="w-full md:w-1/3 lg:w-1/2 p-2 p-6 md:p-0 relative flex justify-center items-center"
				>
					<img
						src={bgPattern}
						alt="Glance Care"
						class="my-auto w-100 h-full object-cover max-w-full"
						data-aos="fade"
					/>
					<img
						src={doctorImage}
						alt="Glance Care"
						class="w-full h-full object-cover absolute top-0"
						data-aos="fade-left"
						data-aos-duration="1000"
						data-aos-delay="100"
						data-aos-anchor-placement="bottom-bottom"
					/>
					<img
						src={uiPlaceholder}
						alt="Glance Care"
						class="w-1/2 object-cover absolute -bottom-16 left-2"
						data-aos="zoom-in-right"
						data-aos-duration="1000"
						data-aos-delay="300"
						data-aos-anchor-placement="bottom-bottom"
					/>
				</div>
			</div>
			<hr class="border-glance-primary" />
		</div>
	</div>

	<!-- FAQ -->
	<div class="m-6 py-4 rounded-2xl mb-16 faq-section">
		<div class="container mx-auto py-10">
			<div class="mx-auto max-w-4xl">
				<h2 class="text-2xl md:text-4xl xl:text-6xl leading-[1.2] mb-10 text-center">
					Frequently Asked Questions
				</h2>
				{#if faqs.length > 0}
					{#each faqs as faq, index}
						<AccordionItem title={faq.title} active={faq.active} index={index + 1}>
							{#each faq.text as text}
								<p class="mb-4">{text}</p>
							{/each}
						</AccordionItem>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
<!-- End CTA -->

<FooterCTA />

<style lang="scss" scoped>
	.aiWrapper {
		background-image: url('../lib/images/bg-2.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
	.statisticsWrapper {
		background-image: url('../lib/images/blue-wave-pattern-bg.png');
	}

	/* Infinite Carousel Styles */
	.carousel-track {
		animation: scroll 45s linear infinite;
		width: max-content;
	}

	.carousel-track.paused {
		animation-play-state: paused;
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}

	/* Ensure smooth scrolling */
	.carousel-track {
		will-change: transform;
	}

	.gradient-text {
		background: linear-gradient(135deg, var(--glc-primary-500) 0%, var(--glc-primary-300) 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-fill-color: transparent;
	}

	.feature-icon {
		left: 0;
		bottom: 0;
		z-index: 1;
		box-shadow: 0px 30px 60px var(--glc-primary-shadow-color-light);
	}

	.alternate-direction:nth-child(odd) {
		@media screen and (min-width: 768px) {
			flex-direction: row-reverse;
		}

		.feature-icon {
			left: auto;
			right: 0;
		}
	}

	.faq-section {
		position: relative;
		&:before,
		&:after {
			content: '';
			display: block;
			position: absolute;
			background-image: url('../lib/images/blue-wave-pattern-bg.png');
			opacity: 0.2;
			filter: blur(100px);
			z-index: -1;
			height: 50vw;
			width: 150%;
		}
		&:before {
			right: 0;
			top: 0;
			transform: translate(50%, -50%);
		}
		&:after {
			left: 0;
			bottom: 0;
			transform: translate(-20%, 0);
		}
	}
</style>

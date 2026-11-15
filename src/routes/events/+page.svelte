<script lang="ts">
	import { page } from '$app/stores';
	import Heading from '$lib/components/typography/Heading.svelte';
	import Button from '$lib/components/button/index.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import Icon from '$lib/components/icons/index.svelte';
	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import BlogCard from '$lib/components/card/BlogCard.svelte';
	import img from '$lib/images/g1.svg';
	import cardImg from '$lib/images/blog1.png';

	export let data: any;

	const { posts } = data;

	let email = '';
	let errorMessage = '';

	function validateEmail() {
		const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

		if (!emailPattern.test(email)) {
			errorMessage = 'Please enter a valid email address.';
			return false;
		}

		errorMessage = '';
		return true;
	}

	function handleSubmit(event: any) {
		event.preventDefault();

		if (validateEmail()) {
			console.log('Email submitted:', email);
		}
	}
</script>

<svelte:head>
	<title>Knowledge Centre</title>
	<meta
		name="description"
		content="Stay Ahead of the Curve: Unlock Exclusive Insights and Updates!"
	/>
</svelte:head>

<div>
	<div
		class="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[60px] lg:py-20 pt-6 px-6 lg:px-0"
	>
		<div>
			<div class="flex flex-col lg:gap-8 gap-6">
				<div>
					<Breadcrumb />
				</div>
				<div>
					<Heading>Events</Heading>
				</div>
				<div>
					<Para font="medium">Stay Ahead of the Curve: Unlock Exclusive Insights and Updates!</Para>
				</div>
				<div class="hidden lg:block">
					<form on:submit|preventDefault={handleSubmit}>
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
							<div class="flex flex-col gap-2 relative">
								<input
									type="email"
									class="rounded-full max-w-[384px] px-12 py-2.5 bg-[#F8F9FA] border
                         border-[#F8F9FA] outline-none font-medium text-base text-[#6C757D]"
									placeholder="Enter Your Email"
								/>
								<div class="absolute top-[5px] left-2 bg-white rounded-full p-2">
									<Icon name="message" />
								</div>
								<label for="email" class="text-[#444] text-xs font-medium p-2">
									*Expect only exceptional emails.
								</label>
							</div>
							<div>
								<Button type="submit" className="whitespace-nowrap"
									>subscribe to email newsletter</Button
								>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="hidden lg:block">
			<div class="flex justify-end">
				<img src={img} alt="" />
			</div>
		</div>
	</div>
	<div class="container mx-auto py-20 px-6 lg:px-0">
		<div class="flex flex-col gap-12">
			<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
				{#each posts as post}
					<BlogCard
						date={post.startDate}
						time={post.time}
						location={post.location}
						title={post.title}
						description={post.description}
						imgSrc={cardImg}
						slug={post.slug}
						url={$page.url.pathname}
					/>
				{/each}
			</div>
		</div>
	</div>
</div>

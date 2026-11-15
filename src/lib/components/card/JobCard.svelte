<script lang="ts">
	import Icon from '$lib/components/icons/index.svelte';
	import Button from '$lib/components/button/index.svelte';
	import Para from '$lib/components/typography/Para.svelte';

	export let location: string = '';
	export let employmentDetails: string[] = [];
	export let skills: string[] = [];
	export let applyLink: string = '';
	export let active: boolean = true;
	export let onApply: () => void = () => {};
</script>

<div
	class="flex flex-col gap-10 border border-[#E9ECEF] rounded-2xl p-6 lg:py-6 lg:max-w-[400px] w-full"
>
	<div>
		<div class="flex flex-col gap-4 border-b border-[#E9ECEF] pb-6">
			<div class="flex items-center flex-wrap gap-2">
				<Icon name="location" />
				<Para font="medium" color="#000000">Location</Para>
			</div>
			<Para font="medium" color="#000000">{location}</Para>
		</div>
		<div class="flex flex-col gap-4 border-b border-[#E9ECEF] py-6">
			<div class="flex items-center gap-2">
				<Icon name="job" />
				<Para font="medium" color="#000000">Job Type</Para>
			</div>
			<div class="flex items-center flex-wrap gap-2">
				{#each employmentDetails as detail}
					<div class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 bg-black rounded-full" />
						<Para font="medium" color="#000000">{detail}</Para>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex flex-col gap-4 border-b border-[#E9ECEF] py-6">
			<div class="flex items-center gap-2">
				<Icon name="skill" />
				<Para font="medium" color="#000000">Skills</Para>
			</div>
			<div class="flex flex-wrap items-center gap-2">
				{#each skills as skill}
					<div class="flex items-center gap-2">
						<span class="w-1.5 h-1.5 bg-black rounded-full" />
						<p class="text-base font-medium leading-[24px]">{skill}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div>
		{#if active}
			<a href={applyLink || "#"}
				class="px-6 lg:py-4 py-3 lg:text-lg text-base text-white font-medium leading-[24px] bg-(--glance-primary) rounded-full w-full text-center"
				target="_blank"
				rel="noopener noreferrer"
			>
				Apply Now
			</a>
		{:else}
			<button class="px-6 lg:py-4 py-3 lg:text-lg text-base text-white font-medium leading-[24px] bg-neutral-300 rounded-full w-full text-center" disabled>
				Applications Closed
			</button>
		{/if}
	</div>
</div>

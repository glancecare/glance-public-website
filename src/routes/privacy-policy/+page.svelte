<script lang="ts">
    import Breadcrumb from '$lib/components/Breadcrumb.svelte';
    import Heading from '$lib/components/typography/Heading.svelte';
	import Para from '$lib/components/typography/Para.svelte';
    import img from '$lib/images/g1.svg';

    export let data;
</script>

<svelte:head>
	<title>Privacy Policy | Glance Care</title>
	<meta
		name="description"
		content="Glance Care Prica Policy"
	/>
</svelte:head>

<div>
    <div class="container flex justify-between items-center mx-auto lg:py-10 pt-10 px-4 lg:px-0">
        <div class="flex flex-col gap-4 md:gap-6 lg:gap-[14px]">
            <div>
                <Breadcrumb />
            </div>
            <div>
                <Heading>Privacy Policy</Heading>
            </div>
            <div>
                <Para font="medium">
                    Glance Care Privacy Policy
                </Para>
            </div>
        </div>
        <div class="hidden lg:block">
			<div class="flex justify-end">
				<img src={img} alt="" />
			</div>
		</div>
    </div>

    <div class="container mx-auto lg:py-20 pb-20 px-6 lg:px-0">
        <div class="w-full max-w-[75ch] blog-content">
            <svelte:component this={data.content} />
        </div>
    </div>
</div>
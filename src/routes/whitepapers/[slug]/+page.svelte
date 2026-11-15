<script lang="ts">
	import BlogLayout from '$lib/components/layouts/BlogLayout.svelte';
	import HcpProvider from '$lib/components/comonSection/HcpProvider.svelte';

	export let data;
</script>

<BlogLayout data={data}>
	<HcpProvider />
</BlogLayout>


<script>
	import { onMount } from 'svelte';

	import { locale, handleLocaleSwitch } from '$lib/i18n';
	import Header from '$lib/components/header/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import Drawer from '$lib/components/drawer/index.svelte';
	import Analytics from '$lib/components/analytics/index.svelte';
	import '$lib/style/app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';

	onMount(() => {
		// This makes sure the rendering related logic related to
		// translation does not run on server.
		locale.set(localStorage.getItem('locale') || 'en');
		locale.subscribe(handleLocaleSwitch);
		AOS.init(
			{
				disable: 'phone'
			}
		);
	});
</script>

<Analytics />

<div class="flex flex-col min-h-screen">
	<Header />
	<main class="flex-grow">
		<slot />
		<Drawer />
	</main>
	<Footer />
</div>

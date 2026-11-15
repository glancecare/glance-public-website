<script>
	import { onMount } from 'svelte';
	import { env } from '$env/dynamic/public';
	import { page } from '$app/stores';

	onMount(() => {
		if (!env.PUBLIC_GTM_ID) {
			return;
		}

		window.dataLayer = window.dataLayer = [];
		window.dataLayer.push({
			'gtm.start': new Date().getTime(),
			event: 'gtm.js'
		});
		window.dataLayer.push({
			event: 'page_view',
			page: {
				path: window.location.pathname,
				title: document.title
			}
		});

		const gtmScript = document.createElement('script');
		gtmScript.src = 'https://www.googletagmanager.com/gtm.js?id=' + env.PUBLIC_GTM_ID;
		gtmScript.async = true;
		document.head.appendChild(gtmScript);
	});

	$: page.subscribe((value) => {
		// Google Analytics
		// send page view event to Google Analytics
		//
		if (typeof window == 'undefined') {
			return;
		}

		if (window && window?.dataLayer) {
			window.dataLayer.push({
				event: 'page_view',
				page: {
					path: value.url.pathname,
					title: document.title
				}
			});
		}
	});
</script>

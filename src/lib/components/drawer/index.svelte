<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { closeDrawer, isDrawerOpen } from '../../../store';
	import Icon from '$lib/components/icons/index.svelte';

	let isOpen: boolean = false;
	let formContainer: HTMLElement | null = null;

	isDrawerOpen.subscribe((value) => {
		isOpen = value;
		if (isOpen) {
			initializePipedriveForm();
			disableScroll();
		} else {
			enableScroll();
		}
	});

	onMount(() => {
		if (isOpen) {
			disableScroll();
		}
	});

	function disableScroll() {
		if (typeof document !== 'undefined') {
			document.body.classList.add('overflow-hidden');
		}
	}

	function enableScroll() {
		if (typeof document !== 'undefined') {
			document.body.classList.remove('overflow-hidden');
		}
	}

	onDestroy(() => {
		enableScroll();
	});

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeDrawer();
		}
	}

	function handleClose() {
		closeDrawer();
	}

	function initializePipedriveForm() {
		const script = document.createElement('script');
		script.src = 'https://webforms.pipedrive.com/f/loader';
		script.async = true;
		document.head.appendChild(script);

		script.onload = () => {
			if (typeof window.PipedriveWebForms !== 'undefined' && formContainer) {
				try {
					window.PipedriveWebForms.init();
				} catch (error) {
					console.error('Failed to initialize Pipedrive WebForms:', error);
				}
			}
		};
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity z-40"
		on:click={handleBackdropClick}
		transition:fly={{ duration: 300, easing: cubicOut }}
		role="button"
		tabindex="0"
		on:keydown={(e) => e.key === 'Enter' && handleBackdropClick}
	>
		<div
			class="fixed inset-y-0 right-0 max-w-full flex"
			transition:fly={{ x: 100, duration: 300, easing: cubicOut }}
		>
			<div
				class="flex flex-col justify-between h-screen bg-white shadow-xl overflow-y-scroll rounded-l-lg rounded-b-lg w-[528px]"
			>
				<div>
					<button
						class="absolute lg:hidden block top-4 right-4 text-gray-600 hover:text-gray-800 closeButton z-[999]"
						on:click={handleClose}
						aria-label="Close"
					>
						&times;
					</button>

					<div
						bind:this={formContainer}
						class="pipedriveWebForms p-10"
						data-pd-webforms="https://webforms.pipedrive.com/f/ccHPDNuwJvm3vMzFCa2hsHNYqu3p6deBWrp8xhON89YWny5qkEfLDAIeIs7zViXlUD"
					></div>
				</div>
				<div class="flex flex-col gap-3 items-center bg-(--glance-primary) py-10 px-2.5 text-center">
					<h2 class="text-[24px] font-medium leading-[32px] text-white">
						Speak with Glance Business Team
					</h2>
					<div>
						<button
							class="flex items-center gap-2.5 py-2 pl-2 pr-4 rounded-full bg-white text-black text-lg font-medium leading-[24px] text-center"
						>
							<span class="bg-(--glc-primary-100) p-2 rounded-full">
								<Icon name="phone" />
							</span>
							+966505655750
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.closeButton {
		font-size: 30px;
	}
</style>

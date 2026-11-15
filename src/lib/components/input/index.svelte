<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import Icon from '$lib/components/icons/index.svelte';

	export let id: string = '';
	export let label: string = '';
	export let value: string = '';
	export let type: 'text' | 'email' | 'password' | 'number' = 'text';
	export let placeholder: string = '';
	export let required: boolean = false;
	export let disabled: boolean = false;
	export let icon: string = '';

	let inputElement: HTMLInputElement;

	const dispatch = createEventDispatcher();

	onMount(() => {
		if (inputElement) {
			inputElement.type = type;
		}
	});

	$: if (inputElement && inputElement.type !== type) {
		inputElement.type = type;
	}

	function handleInput(event: Event) {
		value = (event.target as HTMLInputElement).value;
		dispatch('input', value);
	}

	function handleChange(event: Event) {
		dispatch('change', (event.target as HTMLInputElement).value);
	}
</script>

<div class="flex flex-col gap-2.5">
	{#if label}
	<label for={id} class="block text-sm font-medium text-[#1E1E1E] capitalize">
		{label}
			{required ? '*' : ''}
		</label>
	{/if}
	<div class="relative">
		<span class="absolute inset-y-0 left-0 flex items-center pl-3">
			<Icon name={icon} />
		</span>
		<input
			bind:this={inputElement}
			{id}
			{placeholder}
			{required}
			{disabled}
			bind:value
			on:input={handleInput}
			on:change={handleChange}
			class="bg-white border outline-none border-[#E9ECEF] font-medium text-[#1E1E1E] text-sm
			rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-6
			py-3 h-12 font-poppins disabled:bg-gray-100 disabled:cursor-not-allowed"
		/>
	</div>

</div>

<script>
  import { writable } from 'svelte/store';
  import { onMount } from 'svelte';

  import SunIcon from '$lib/icons/sun.svelte';
  import MoonIcon from '$lib/icons/moon.svelte';

  export const darkMode = writable(false);
  export const toggleDarkMode = () => darkMode.update((mode) => !mode);

  // on mount set the theme
  onMount(() => {
    const isDarkMode = localStorage.getItem('darkMode');
    if (isDarkMode) {
      darkMode.set(isDarkMode === 'true');
    }

    const html = document.querySelector('html');
    if (html) {
      darkMode.subscribe((mode) => {
        localStorage.setItem('darkMode', mode);
        if (mode) {
          html.dataset.theme = 'dark';
        } else {
          html.dataset.theme = 'light';
        }
      });
    }
  });
</script>

<button on:click={toggleDarkMode} class={$darkMode ? "has-text-info" : "has-text-warning"}>
  {#if $darkMode}
    <svelte:component this={MoonIcon} />
  {:else}
    <svelte:component this={SunIcon} />
  {/if}
</button>
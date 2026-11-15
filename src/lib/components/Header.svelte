<script>
  import { locale, locales } from "$lib/i18n";

  import glanceLogo from '$lib/images/glance-logo.svelte';
  import SwitchMode from '$lib/components/SwitchMode.svelte';
</script>

<nav class="navbar" aria-label="main navigation">
  <div class="container is-justify-content-space-between">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <svelte:component this={glanceLogo} />
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="#">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div class="navbar-item">
      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item" href="/solutions">
        Solutions
      </a>

      <a class="navbar-item" href="/about-us">
        About Us
      </a>

      <a class="navbar-item" href="/knowledge-center">
        Knowledge Center
      </a>
    </div>
  
    <div class="navbar-item">
      <div class="navbar-item">
        <SwitchMode />
      </div>
      <div class="navbar-item">
        <select bind:value={$locale}>
          {#each locales as l}
            <option value={l}>{l}</option>
          {/each}
        </select>
      </div>
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-outline is-rounded" href="#">
            Log in
          </a>
          <a class="button is-primary is-rounded is-cta" href="#">
            <strong>Contact US</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>

<style lang="scss" scoped>
  .navbar-brand {
    .navbar-item {
      color: var(--glance-primary);
    }
  }

  .navbar-item {
    a {
      font-weight: var(--bulma-weight-medium);
    }
  }
</style>

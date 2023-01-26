<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { nav } from '$lib/conf';
</script>

<Header/>

<main>
  <slot></slot>
</main>

<Footer navItems={nav}/>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

</style>
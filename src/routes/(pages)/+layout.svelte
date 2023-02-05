<script>
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import HamburgerMenuButton from '$lib/components/HamburgerMenuButton.svelte';
  import MainNav from '$lib/components/MainNav.svelte';
  
  import { isMenuOpen } from '$lib/stores/menu';
  
  import { nav } from '$lib/conf';
</script>

<Header/>

<main>
  <slot></slot>
</main>

<Footer navItems={nav}/>


{#if $isMenuOpen}
  <MainNav navItems={nav} />
{/if}

<div class="ham-wrapper">
  <HamburgerMenuButton/>
</div>


<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }


  .ham-wrapper {
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
  }


</style>
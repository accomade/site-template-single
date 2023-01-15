<script lang="ts">
  import HamburgerMenuButton from '$lib/components/HamburgerMenuButton.svelte';
  import MainNav from '$lib/components/MainNav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PhotoDispatcher from '$lib/components/PhotoDispatcher.svelte';
  import PhotoGallery from '$lib/components/PhotoGallery.svelte';

  import { translations, nav, landing } from '$lib/conf.js'
  import { currentLang } from '$lib/stores/lang';
  import { isMenuOpen } from '$lib/stores/menu';
  import type { I18n } from '$lib/types/i18n';

  let i18n:I18n = translations;
  $: title = i18n.translations[$currentLang].title;
  $: impressions = i18n.translations[$currentLang].landing.impressions;
</script>

<header class="header-image">
  <PhotoDispatcher photoNumber={landing.headerPhoto} alt="Header Image"/>
</header>

<div class="floating-title">
  <h1>{ title }</h1>
</div>

{#if $isMenuOpen}
  <MainNav navItems={nav} />
{/if}

<div class="ham-wrapper">
  <HamburgerMenuButton/>
</div>

<main>

  <section>
    <h2>{ impressions }</h2>
    <PhotoGallery photoGrid={landing.photoGrid}/>
  </section>
</main>

<Footer/>

<style>

  header {
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height: calc(100vh - 2rem);
  }

  main {
    margin-top: calc(100vh - 1rem);
  }

  .floating-title {
    width: calc(100vw - 4rem);
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    /* mix-blend-mode: difference; */
    text-align: center;
  }

  .floating-title h1 {
    font-weight: bolder;
    font-size: 2.8rem;
    font-variant: small-caps;
    color: var(--title-font-color);
    filter: drop-shadow(0.2rem 0.3rem 0.2rem black);
  }
  
  @media( max-width: 300px ) {
    .floating-title h1 {
      font-size: 1.6rem;
    }
  }

  .ham-wrapper {
    position: fixed;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    height: 3rem;
  }

  .span-2 {
    grid-column: span 2;
  }

  .span-3 {
    grid-column: span 3;
  }


  .photo-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    grid-auto-flow: dense;
  }

  @media( max-width: 500px ) {
    .span-2 {
      grid-column: span 1;
    }
    .span-3 {
      grid-column: span 1;
    }
    .photo-container {
      grid-template-columns: 1fr;
    }
  }

  @media ( max-width: 800px) and ( min-width: 500px ) {
    .span-2 {
      grid-column: span 1;
    }
    .span-3 {
      grid-column: span 2;
    }
    .photo-container {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
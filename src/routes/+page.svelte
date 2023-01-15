<script lang="ts">
  import HamburgerMenuButton from '$lib/components/HamburgerMenuButton.svelte';
  import MainNav from '$lib/components/MainNav.svelte';
  import Footer from '$lib/components/Footer.svelte';

  import { translations } from '$lib/conf.js'
  import { currentLang } from '$lib/stores/lang';
  import { nav } from '$lib/conf.js';
  import { isMenuOpen } from '$lib/stores/menu';
  import type { I18n } from '$lib/types/i18n';

  import Photo001 from '$lib/components/photos/Photo001.svelte';
  import Photo002 from '$lib/components/photos/Photo002.svelte';
  import Photo003 from '$lib/components/photos/Photo003.svelte'
  import Photo004 from '$lib/components/photos/Photo004.svelte';
  import Photo005 from '$lib/components/photos/Photo005.svelte';
  import Photo006 from '$lib/components/photos/Photo006.svelte';
  import Photo007 from '$lib/components/photos/Photo007.svelte';
  import PhotoGallery from '$lib/components/PhotoGallery.svelte';
  
  let i18n:I18n = translations;
  $: title = i18n.translations[$currentLang].title;
</script>

<header class="header-image">
  <Photo001 alt="Koserower Strand"></Photo001>
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
  <PhotoGallery>
    <Photo002 alt="Koserower Strand"/>
    <Photo003 alt="Something"/>
    <Photo004 alt="Something"/>
    <Photo005 alt="Something"/>
    <Photo006 alt="Something"/>
    <Photo007 alt="placeholder"/>
  </PhotoGallery>


</main>

<Footer/>

<style>

  header {
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    height:100vh;
  }

  main {
    margin-top: calc(100vh + 1rem);
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
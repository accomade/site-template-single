<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { i18n } from '$lib/conf';
  import Logo from '$lib/components/svg/LogoSVG.svelte';
  
  $: trans = i18n.translations[$currentLang] 
  
</script>

<header>
  <div class="logo"><Logo/></div>
  <div class="text-wrapper">
    <div class="header"><h1>{trans.header.title}</h1></div>
    <div class="slug">{trans.header.slug}</div>
  </div>
</header>

<style>
  header {
    position: relative;
    display: flex;

    margin: 0;
    width: 100vw;
    color: var(--header-font-color);
    background-color: var(--header-bg-color);
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .slug {
    font-size: 1.6rem;
    font-family: var(--header-font-family, 'sans-serif');
    font-variant: var(--header-font-variant, 'small-caps');
  }

  .header h1 {
    margin-top: 0.6rem;
    margin-bottom: 0.3rem;
    font-family: var(--page-title-font-family, 'sans-serif');
    font-variant: var(--page-title-font-variant, 'small-caps');
  }

  .logo {
    margin-left: 0.6rem;
    margin-top: 0.6rem;
    width: 10rem;
  }

  @media (max-width: 500px) {
    .slug {
      display: none;
    }
    .logo {
      width: 5rem;
    }
    .header h1 {
      font-size: 2.2rem;
    }
  }

  @media (max-width: 300px) {
    .logo {
      display: none;
    }
    .header h1 {
      padding-left: 1rem;
    }
  }

</style>

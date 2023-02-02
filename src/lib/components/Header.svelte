<script lang="ts">
  import "@fontsource/arizonia"

  import { currentLang } from '$lib/stores/lang';
  import { i18n } from '$lib/conf';
  import Logo from '$lib/components/svg/LogoSVG.svelte';
  
  $: trans = i18n.translations[$currentLang] 
  
  export let headerHeight = '12rem'
  
</script>

<header style="height: {headerHeight};">
  <div class="logo" style="width: calc({headerHeight} - 2rem);"><Logo/></div>
  <div class="header"><h1>{trans.header.title}</h1></div>
  <div class="slug">{trans.header.slug}</div>
</header>

<style>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
    width: 100vw;
    color: var(--header-font-color);
    background-color: var(--header-bg-color);
  }

  .slug {
    font-size: 1.8rem;
  }

  .header h1 {
    font-family: var(--header-font-family, 'sans-serif');
  }

  .logo {
    position: absolute;
    left: 0;
  }


</style>

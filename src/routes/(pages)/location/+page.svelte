<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 

  const importLocation = async (lang: string) => {
    return import(`../../../lib/content/${lang}/location.svelte`)
  }
  
</script>

<svelte:head>
  <title>{trans.nav.location ? trans.nav.location : 'Location'}</title>
</svelte:head>

<h1>{trans.dict['location'] ? trans.dict['location'] : 'Location'}</h1>

<div class="wrapper">
  {#await importLocation($currentLang) then mod}

    <svelte:component this={mod.default}></svelte:component>
  {/await}
</div>


<style>
  .wrapper {
    max-width: 100rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

</style>
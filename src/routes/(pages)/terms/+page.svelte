<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  
  const importTOS = async (lang: string) => {
    return import(`../../../lib/conf/content/${lang}/tos.svelte`)
  }
</script>

<svelte:head>
  <title>{trans.dict.terms ? trans.dict.terms : 'Terms'}</title>
</svelte:head>

<div class="terms-wrapper">
  {#await importTOS($currentLang) then mod}

    <svelte:component this={mod.default}></svelte:component>
  {/await}
</div>


<style>
  .terms-wrapper {
    max-width: 100rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

</style>
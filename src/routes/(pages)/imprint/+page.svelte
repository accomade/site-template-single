<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  
  const importImprint = async (lang: string) => {
    return import(`../../../lib/conf/content/${lang}/imprint.svelte`)
  }
</script>


<svelte:head>
  <title>{trans.dict.imprint ? trans.dict.imprint : 'Imprint'}</title>
</svelte:head>



<div class="terms-wrapper">
  {#await importImprint($currentLang) then mod}

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
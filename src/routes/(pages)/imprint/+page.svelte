<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { dictEntry } from '$lib/conf/translations';

  const importImprint = async (lang: string) => {
    return import(`../../../lib/conf/content/${lang}/imprint.svelte`)
  }
</script>


<svelte:head>
  <title>{dictEntry($currentLang,'imprint')}</title>
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
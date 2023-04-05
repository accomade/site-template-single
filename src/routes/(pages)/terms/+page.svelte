<script lang="ts">
  import { dictEntry } from '$lib/conf/translations';
  import { currentLang } from '$lib/stores/lang';
  
  const importTOS = async (lang: string) => {
    return import(`../../../lib/conf/content/${lang}/tos.svelte`)
  }
</script>

<svelte:head>
  <title>{dictEntry($currentLang, 'terms')}</title>
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
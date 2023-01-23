<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: currentTranslation = i18n.translations[$currentLang]

  
  export let ref:string
  const importContent = async (lang: string) => {
    return import(`../../content/${lang}/${ref}.svelte`)
  }
  
  /*
  const importFooter = async (lang: string) => {
    return import(`../../content/${lang}/footer.svelte`)
  }
  */

</script>

<div class="content">
{#await importContent( $currentLang ) then mod}
  <svelte:component this={mod.default}/>
{/await}
</div>

<style>
  .content {
    text-align: left;
  }
</style>
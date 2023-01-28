<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  
  export let ref:string
  const importContent = async (lang: string) => {
    return import(`../../content/${lang}/${ref}.svelte`)
  }
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
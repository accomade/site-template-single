<script lang="ts">
  import type { Block } from '$lib/types/blocks'
  import BlockBlock from '$lib/components/blocks/Block.svelte'
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  
  $: dict = i18n.translations[$currentLang].dict

  export let header: string | undefined = undefined;
  export let columnCount = 2;
  export let maxWidth = "80rem";
  export let blocks: Block[] = [];
  
  let gridTemplateColumns = "1fr";
  $: {
    if(!!columnCount && columnCount > 1) {
      gridTemplateColumns = `repeat(${columnCount}, 1fr)`
    }
  }

  let clientWidth = Number.MAX_SAFE_INTEGER;
  $: {
    if(clientWidth  < 500) {
      gridTemplateColumns = "1fr"
    }
    else if (
      clientWidth < 800 && clientWidth >= 500 &&
      !!columnCount && columnCount > 2
    )  {
      gridTemplateColumns = "1fr 1fr"
    }
    else {
      if(!!columnCount && columnCount > 1) {
        gridTemplateColumns = `repeat(${columnCount}, 1fr)`
      }
    }
  }
  
</script>

<svelte:window bind:innerWidth={clientWidth}/>

<section style="max-width: {maxWidth};">
  {#if header} 
  <h2>{ dict[header] ? dict[header] : header } </h2>
  {/if}
  <div 
    class="content"
    style="grid-template-columns: {gridTemplateColumns}"
    >
    {#each blocks as b}
      <div class="block-container">
        <BlockBlock spec={b}/>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .content {
    display: grid;
    width: 100%;
    gap: 1rem;
    grid-auto-flow: dense;
  }

  h2 {
    padding-left: 0.5rem;
    font-weight: bolder;
    font-size: 2.2rem;
    font-variant: small-caps;
  }
</style>
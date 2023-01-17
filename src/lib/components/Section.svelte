<script lang="ts">
  import type { Block } from '$lib/types/blocks'
  import BlockBlock from '$lib/components/blocks/Block.svelte'

  export let header: string|undefined;
  export let columnCount: number|undefined;
  
  export let blocks: Block[]
  
  let gridTemplateColumns = "1fr";
  $: {
    if(!!columnCount && columnCount > 1) {
      gridTemplateColumns = `repeat(${columnCount}, max-content)`
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
        gridTemplateColumns = `repeat(${columnCount}, max-content)`
      }
    }
  }
  
</script>

<svelte:body bind:clientWidth={clientWidth}></svelte:body>

<section>
  {#if header} 
  <h2>{header}</h2>
  {/if}
  <div 
    class="section-content"
    style="grid-template-columns: ${gridTemplateColumns}"
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
    display: grid;
    width: 100%;
    display: grid;
    gap: 1rem;
    grid-auto-flow: dense;
  }
  
  h2 {
    font-weight: bolder;
    font-size: 2.2rem;
    font-variant: small-caps;
  }
</style>
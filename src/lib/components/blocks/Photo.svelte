<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';

  import type { PhotoNumber } from '$lib/types/photos';
  
  export let alt:string;
  export let photo:PhotoNumber;
  export let link:string = "";
  export let attribution:string = "";
  export let maxHeight:string = "100%"
  export let maxWidth:string = "100%"

  $: dict = i18n.translations[$currentLang].dict
    
  const importPhoto = () => import(`../photos/Photo${photo}.svelte`);
</script>

{#await importPhoto() then module }
  {#if link}
    <a href="{link}">
      <svelte:component 
        this={module.default} 
        {maxWidth}
        {maxHeight}
        alt={dict[alt] ? dict[alt] : alt} />
    </a>
  {:else}
    <svelte:component 
      this={module.default} 
      {maxHeight}
      {maxWidth}
      alt={dict[alt] ? dict[alt] : alt} />
  {/if}

  {#if attribution}
  <div class="attribution-container"><div class="attribution-wrapper">{@html attribution}</div></div>
  {/if}
{/await}

<style>

  .attribution-wrapper {
    color: var(--main-font-color);
    background-color: rgba(225,225,225, 0.6);
    font-size: 0.7rem;
    font-weight: bolder;
    padding: 0.2rem 0.7rem 0.1rem 0.7rem;
    margin-right: 0.2rem;
    border-radius: 1rem;
  }

  .attribution-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    height: calc(100% - 0.5rem);
    width: 100%;
  }

</style>
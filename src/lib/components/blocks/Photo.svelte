<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';

  import LinkSvg from '$lib/components/svg/LinkSVG.svelte';
  import type { PhotoNumber } from '$lib/types/photos';
  
  export let alt:string;
  export let photo:PhotoNumber;
  export let eager:boolean = false;
  export let link:string = "";
  export let attribution:string = "";
  export let maxHeight:string = "100%"
  export let maxWidth:string = "100%"

  $: dict = i18n.translations[$currentLang].dict
    
  let photoHeight = 0;

  const importPhoto = () => import(`../photos/Photo${photo}.svelte`);
</script>

{#await importPhoto() then module }
  {#if link}
    <a href="{link}">
      <svelte:component 
        bind:clientHeight={photoHeight}
        this={module.default} 
        {maxWidth}
        {maxHeight}
        {eager}
        alt={dict[alt] ? dict[alt] : alt} />
    
        {#if attribution}
        <div 
            style="height:calc({photoHeight}px - 0.5rem);"
            class="attribution-container">
          <div class="attribution-wrapper">
            {@html attribution}
          </div>
        </div>
        {/if}
    </a>
    <div class="link-icon-wrapper"><LinkSvg /></div>
  {:else}
    <svelte:component 
      bind:clientHeight={photoHeight}
      this={module.default} 
      {maxHeight}
      {maxWidth}
      {eager}
      alt={dict[alt] ? dict[alt] : alt} />
    {#if attribution}
    <div 
        style="height:{photoHeight};"
        class="attribution-container">
      <div class="attribution-wrapper">
        {@html attribution}
      </div>
    </div>
    {/if}
      
  {/if}

  
{/await}

<style>

  a {
    display: block;
  }

  .link-icon-wrapper {
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    background-color: var(--picture-link-bg-color);
    padding: 0.4rem;
    border-radius: 1rem;
  }

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
    padding-bottom: 0.2rem;
    top: 0;
    left: 0;
    width: 100%;
  }

</style>
<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';

  import type { PhotoNumber } from '$lib/types/photos';
  
  export let alt:string;
  export let photo:PhotoNumber;
  export let link:string = "";
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
{/await}
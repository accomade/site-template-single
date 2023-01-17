<script lang="ts">
  import { translations } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';

  import type { PhotoNumber } from '$lib/types/photos';
  
  export let alt:string;
  export let photo:PhotoNumber;
  export let link:string = "";

  $: dict = translations.translations[$currentLang].dict
    
  const importPhoto = () => import(`../photos/Photo${photo}.svelte`);
</script>

{#await importPhoto() then module }
  {#if link}
    <a href="{link}">
      <svelte:component this={module.default} alt={dict[alt] ? dict[alt] : alt}></svelte:component>
    </a>
  {:else}
    <svelte:component this={module.default} alt={dict[alt] ? dict[alt] : alt}></svelte:component>
  {/if}
{/await}
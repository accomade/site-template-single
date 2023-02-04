<script lang="ts">
  import type { Acco } from '$lib/types/accos';
  import PhotoBlock from './Photo.svelte';
  import Section from './Section.svelte';

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.dict;

  export let acco:Acco

  const t = ( d:string ) => dict[d] ? dict[d] : d

</script>

<div class="accocard-wrapper">
  {#if acco && acco.cardContent }
    {#if acco.cardContent?.coverPhoto}
    <div class="cover-image-container">
      <PhotoBlock {...acco.cardContent.coverPhoto} />
    </div>
    {/if}
    {#if acco.cardContent.sections}
    <div class=content-wrapper>
      <h2>{acco.displayName}</h2>
      {#each acco.cardContent.sections as s}
      <Section {...s}/>
      {/each}
    </div>
    {/if}
  {/if}
</div>

<style>
  .accocard-wrapper {
    position: relative;
    display: flex;
    gap: 1rem;
    padding: 2rem;
    margin: 2rem;
    border-radius: 2rem;
    box-shadow:
      -1.2px -3.7px 4.5px rgba(0, 0, 0, 0.017),
      -1.4px -4.4px 8.9px rgba(0, 0, 0, 0.024),
      -0.4px -1.3px 13.3px rgba(0, 0, 0, 0.03),
      1.7px 5.5px 17.9px rgba(0, 0, 0, 0.035),
      4.9px 15.5px 23.3px rgba(0, 0, 0, 0.04),
      8.9px 28.2px 30.7px rgba(0, 0, 0, 0.046),
      13.7px 43.1px 43.8px rgba(0, 0, 0, 0.053),
      19px 60px 80px rgba(0, 0, 0, 0.07)
    ;
    
  }

  .accocard-wrapper h2 {
    margin-top: 0;
    text-align: right;
  }

  .content-wrapper {
    flex: 1;
  }
  .cover-image-container {
    flex: 1;
  }

</style>
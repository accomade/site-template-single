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
    border: var(--main-border);
    border-radius: 2rem;
    box-shadow:
      1.4px 4.4px 6px rgba(0, 0, 0, 0.02),
      2.7px 8.6px 11.8px rgba(0, 0, 0, 0.028),
      4.1px 13px 17.9px rgba(0, 0, 0, 0.035),
      5.7px 18.1px 25.5px rgba(0, 0, 0, 0.042),
      8.4px 26.6px 38.4px rgba(0, 0, 0, 0.05),
      19px 60px 80px rgba(0, 0, 0, 0.07)
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
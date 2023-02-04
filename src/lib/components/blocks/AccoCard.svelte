<script lang="ts">
  import type { Acco } from '$lib/types/accos';
  import PhotoBlock from './Photo.svelte';
  import BlockBlock from './Block.svelte';

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.dict;

  export let acco:Acco

  const t = ( c:string, d:typeof dict ) => d[c] ? d[c] : c
</script>

<div class="accocard-wrapper">
  {#if acco && acco.cardContent } 
    <div class="title-with-slug">
      <h2>{acco.displayName}</h2>
      <div class="slug">{t(acco.cardContent.slug, dict)}</div>
    </div>
    {#if acco.cardContent.coverPhoto}
    <div class="photo">
      <PhotoBlock {...acco.cardContent.coverPhoto} />
    </div>
    {/if}
    {#if acco.cardContent.blocks}
      {#each acco.cardContent.blocks as b,i}
      <div class="block-container-{i}">
        <BlockBlock spec={b}/>
      </div>
      {/each}
    {/if}
  {/if}
</div>

<style>
  .title-with-slug {
    grid-area: first-row-line / middle-line / second-row-line / end-line;
  }

  .photo {
    grid-area: first-row-line / start-line / fifth-row-line / middle-line;
  }

  .block-container-0 {
    grid-area: second-row-line / middle-line / third-row-line / end-line;
    position: relative;
  }

  .block-container-1 {
    grid-area: third-row-line / middle-line / fourth-row-line / end-line;
    position: relative;
  }

  .block-container-2 {
    grid-area: fourth-row-line / middle-line / fifth-row-line / end-line;
    position: relative;
  }

  .accocard-wrapper {
    width: calc(100% - 8rem);
    position: relative;
    display: grid;
    grid-template-columns: [start-line] 1fr  [middle-line] 1fr [end-line];
    grid-template-rows: [first-row-line] auto [second-row-line] auto [third-row-line] auto [fourth-row-line] auto [fifth-row-line];
    
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
    margin-bottom: 0;
    text-align: right;
  }

  .slug {
    text-align: right;
    font-style: italic;
    margin-bottom: 1rem;
  }


  @media (max-width: 999px) {
    .accocard-wrapper {
      grid-template-rows: [first-row-line] auto [second-row-line] auto [third-row-line] auto [fourth-row-line];
    }

    .title-with-slug {
      grid-area: first-row-line / middle-line / second-row-line / end-line;
    }

    .photo {
      grid-area: first-row-line / start-line / third-row-line / middle-line;
    }

    .block-container-0 {
      grid-area: second-row-line / middle-line / third-row-line / end-line;
    }

    .block-container-1 {
      grid-area: third-row-line / start-line / fourth-row-line / middle-line;
    }

    .block-container-2 {
      grid-area: third-row-line / middle-line / fourth-row-line / end-line;
    }
  }


  @media (max-width: 750px) {
    .accocard-wrapper {
      grid-template-rows: repeat(auto);
      grid-template-columns: 1fr;
    }

    .title-with-slug {
      grid-row: auto;
      grid-column: 1;
    }

    .photo {
      grid-row: auto;
      grid-column: 1;
    }

    .block-container-0 {
      grid-row: auto;
      grid-column: 1;
    }

    .block-container-1 {
      grid-row: auto;
      grid-column: 1;
    }

    .block-container-2 {
      grid-row: auto;
      grid-column: 1;
    }

    .accocard-wrapper h2 {
      text-align: center;
    }

    .slug {
      text-align: center;
    }
  }

  @media (max-width: 750px) {
    .accocard-wrapper {
      width: calc(100% - 2rem);
    
      gap: 0.5rem;
      padding: 0.5rem;
      margin: 0.5rem;
      
      border-radius: 0.5rem;
    }
  }
</style>
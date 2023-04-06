<script lang="ts">
  import AccoCard from "$lib/components/blocks/AccoCard.svelte";
  import { accos } from "$lib/conf";
  export let maxWidth:string = "100rem";
  import { currentLang } from '$lib/stores/lang';
  import { dictEntry } from "$lib/conf/translations";

</script>

<svelte:head>
  <title>{dictEntry($currentLang,"accomodations")}</title>
</svelte:head>

<h1>{dictEntry($currentLang, "accomodations")}</h1>

<main style="max-width: {maxWidth};">
  {#each accos as a}
    {#if a.cardContent}
    <a href="/accomodations/{a.path}">
    <AccoCard 
      cardContent={a.cardContent}
      displayName={a.displayName}
      path={a.path}/>
    </a>
    {/if}
  {/each}
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    text-decoration: initial;
    color: var(--main-font-color);
  }

  h1 {
    margin-top: 1rem;
    margin-bottom: 0;
  }

</style>
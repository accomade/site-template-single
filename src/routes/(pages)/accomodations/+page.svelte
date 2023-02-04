<script lang="ts">
  import AccoCard from "$lib/components/blocks/AccoCard.svelte";
  import { accos } from "$lib/conf";
  export let maxWidth:string = "100rem";

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.dict;

  const t = ( d:string ) => dict[d] ? dict[d] : d
</script>

<h1>{t("accomodations")}</h1>

<main style="max-width: {maxWidth};">
  {#each accos as a}
    <a href="/accomodations/{a.path}">
    <AccoCard acco={a}/>
    </a>
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
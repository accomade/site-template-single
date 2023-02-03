<script lang="ts">
  import { goto } from '$app/navigation';
  import Section from '$lib/components/blocks/Section.svelte';
  import { accos } from '$lib/conf';
  
  export let data: App.PageData & Record<string, any>;
  let acco = accos.find( (a) => a.path == data.accoHandle )
  $: {
    if( !acco ) {
      goto('/accomodations')
    }
  }

</script>

{#if acco}
  {#if acco.displayName }
  <h2>{acco.displayName}</h2>
  {/if}
  {#each acco.sections as s}
  <Section {...s}/>
  {/each}
{/if}

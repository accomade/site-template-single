<script lang="ts">
  import { OccuPlanAvailableInfo } from 'occuplan'
  import { DateTime } from 'luxon'
  import { i18n } from '$lib/conf';
  import Spinner from '$lib/components/Spinner.svelte';

  import { currentLang } from '$lib/stores/lang';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.dict;
  $:formatAvailability = trans.formatAvailability;
  $: fromFun = ( from:DateTime|null, forDays:number):string => {
    return formatAvailability(from, forDays, maxFutureDate)
  }
    
  export let calUrl:string;
  export let search = [3,7,14];
  export let maxFutureDate=DateTime.now().plus({years: 2})
  let calLoading = true;

  const t = (c:string, d:typeof dict) => d[c] ? d[c] : c
</script>

<div class="cal-wrapper">
  <h3>{t("availability", dict)}</h3>
  <OccuPlanAvailableInfo
      let:available={av}
      {search}
      bind:loading={calLoading}
      {calUrl}>

      <ul>
        {#each search as s} 
        <li>{fromFun( av[s], s)}</li>
        {/each}
      </ul>

  </OccuPlanAvailableInfo>
  {#if calLoading}
  <Spinner size="5rem"/>
  {/if}
</div>

<style>
  .cal-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-content: center;
  }

  h3 {
    margin: 0
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    list-style: none;
    font-size: 1.2rem;
  }
</style>
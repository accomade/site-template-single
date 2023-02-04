<script lang="ts">
  import { OccuPlanAvailableInfo } from 'occuplan'
  import { DateTime } from 'luxon'
  import { i18n } from '$lib/conf';
  import Spinner from '$lib/components/Spinner.svelte';

  import { currentLang } from '$lib/stores/lang';
  $:formatAvailability = i18n.translations[$currentLang].formatAvailability;
  const fromFun = ( from:DateTime|null, forDays:number):string => {
    return formatAvailability(from, forDays, maxFutureDate)
  }
    
  export let calUrl:string;
  export let search = [3,7,14];
  export let maxFutureDate=DateTime.now().plus({years: 2})
  let calLoading = true;

</script>

<div class="cal-wrapper">
  {#if calLoading}
  <Spinner />
  {/if}

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
</div>

<style>
  .cal-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
  }
</style>
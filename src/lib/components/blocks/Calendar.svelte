<script lang="ts">
  import { OccuPlanWrapper } from 'occuplan';
  import { i18n } from '$lib/conf';
  import Spinner from '$lib/components/Spinner.svelte';

  import { currentLang } from '$lib/stores/lang';
  $: calendar = i18n.translations[$currentLang].calendar;
  
  //bind:loading={calLoading}
    
  export let calUrl:string;
  let calLoading = true;

</script>

<div class="cal-wrapper">
  {#if calLoading}
  <Spinner />
  {/if}
  <OccuPlanWrapper 
    calUrl={calUrl} 
    translations={calendar}
    />
</div>

<style>
  .cal-wrapper {
    position: relative;
  }
</style>
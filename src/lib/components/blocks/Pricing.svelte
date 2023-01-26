<script lang="ts">
  import type { PricingRange, PricingEntry, PricingColumn} from "$lib/types/accos";
  
  import PricingNucleus from './PricingNucleus.svelte'

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: t = i18n.translations[$currentLang];

  export let global:PricingEntry|undefined = undefined;
  export let entries:PricingRange[] = [];
  export let columns:PricingColumn[] = [];
  export let footnote:string = "";

  const colHeaderStyle = {
    timeRange: 'width: 10%;', 
    firstNight: 'width: 10%',
    eachNight: 'width: 10%',
    peopleNum: 'width: 25%',
    extraPerson: 'width: 35%',
    minNumNights: 'width: 10%'
  }

  const colCellStyle = {
    timeRange: 'text-align:center;', 
    firstNight: '',
    eachNight: '',
    peopleNum: '',
    extraPerson: '',
    minNumNights: ''
  }
</script>

<figure class="pricing-wrapper">
  <table class="pricing-table">
    <thead>
      {#if global}
      <tr>
        {#each columns as h}
        <td>  
          <PricingNucleus pricingSpec={global} pricingColumn={h} />
        </td>
        {/each}
      </tr>
      {/if}
      <tr>
      {#each columns as h} 
        <th scope="col" style="{colHeaderStyle[h]}">{t.dict[h] ? t.dict[h] : h}</th>
      {/each}
      </tr>
    </thead>
    <tbody>
    {#each entries as e}
      <tr>
        {#each columns as h}
        <td style="{colCellStyle[h]}">  
          <PricingNucleus pricingSpec={e} pricingColumn={h} />
        </td>
        {/each}
      </tr>
    {/each}
    </tbody>
    {#if footnote}
    <tfoot>
      <tr>
        <td colspan="{columns.length}">
          { t.dict[footnote] ? t.dict[footnote] : footnote }
        </td>
      </tr>
    </tfoot>
    {/if}
  </table>
</figure>

<style>
  figure {
    width: calc(100% - 2rem);
    margin: 0;
    border: var(--main-border);
    padding: 1rem;
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  th {
    text-overflow: ellipsis;
    overflow: clip;
  }


</style>
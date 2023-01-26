<script lang="ts">
  import type { PricingRange, PricingEntry, PricingColumn} from "$lib/types/accos";
  import { DateTime } from 'luxon';
  import PricingNucleus from './PricingNucleus.svelte'

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: t = i18n.translations[$currentLang];

  export let global:PricingEntry|undefined = undefined;
  export let entries:PricingRange[] = [];

  let filteredEntries:PricingRange[] = [];
  $: {
    let now = DateTime.now()
    filteredEntries = entries.filter( e => {
      if (! e.to) return true
      return e.to > now 
    })
  }



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
    firstNight: 'text-align:right;',
    eachNight: 'text-align:right;',
    peopleNum: 'text-align:center;',
    extraPerson: 'text-align:left;',
    minNumNights: 'text-align:left;'
  }

  let w:number = 801;


</script>

<figure bind:clientWidth={w} class="pricing-wrapper">
  {#if w > 799}
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
          <th scope="col" style="{colHeaderStyle[h]}">{@html t.dict[h] ? t.dict[h] : h}</th>
        {/each}
        </tr>
      </thead>
      <tbody>
      {#each filteredEntries as e}
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
            {@html t.dict[footnote] ? t.dict[footnote] : footnote }
          </td>
        </tr>
      </tfoot>
      {/if}
    </table>
  {:else if w > 400 && w < 800 }
    <table class="pricing-table">
      <thead>
        {#if global}
          {#each columns as h}
          <tr>
            <th colspan="2" scope="col">  
              <PricingNucleus pricingSpec={global} pricingColumn={h} />
            </th>
          </tr>
          {/each}
        {/if}
      </thead>
      {#each filteredEntries as e}
        <thead>
          <tr>
            <th colspan="2" scope="col">
              <PricingNucleus pricingSpec={e} pricingColumn="timeRange" />
            </th>
          </tr>
        </thead>
        <tbody>
          {#each columns as h}
            {#if h !== "timeRange"}
            <tr>
              <th scope="row">{@html t.dict[h] ? t.dict[h] : h}</th>
              <td><PricingNucleus pricingSpec={e} pricingColumn={h} /></td>
            </tr>
            {/if}
          {/each}
        </tbody>
      {/each}
      {#if footnote}
      <tfoot>
        <tr>
          <td colspan="2">
            {@html t.dict[footnote] ? t.dict[footnote] : footnote }
          </td>
        </tr>
      </tfoot>
      {/if}
    </table>
  {:else}
  <table class="pricing-table">
    <thead>
      {#if global}
        {#each columns as h}
        <tr>
          <th>  
            <PricingNucleus pricingSpec={global} pricingColumn={h} />
          </th>
        </tr>
        {/each}
      {/if}
    </thead>
    {#each filteredEntries as e}
      <thead>
        <tr>
          <th scope="col" class="main-header">
            <PricingNucleus pricingSpec={e} pricingColumn="timeRange" />
          </th>
        </tr>
      </thead>
      <tbody>
        {#each columns as h}
          {#if h !== "timeRange"}
          <tr>
            <th scope="row">{@html t.dict[h] ? t.dict[h] : h}</th>
          </tr>
          <tr>
            <td><PricingNucleus pricingSpec={e} pricingColumn={h} /></td>
          </tr>
          {/if}
        {/each}
      </tbody>
    {/each}
    {#if footnote}
    <tfoot>
      <tr>
        <td>
          {@html t.dict[footnote] ? t.dict[footnote] : footnote }
        </td>
      </tr>
    </tfoot>
    {/if}
  </table>
  {/if}
</figure>


<style>
  figure {
    width: 100%;
    margin: 0;
    border: var(--main-border);
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
  }

  th {
    text-overflow: ellipsis;
    overflow: clip;
    letter-spacing: 2px;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  td {
    padding-top: 0.2rem;
    padding-bottom: 0.1rem;
    padding-right: 1rem;
    padding-left: 0.2rem;
  }

  thead {
    background-color: var(--table-header-bg-color);
    color: var(--table-header-font-color);
  }

  tbody tr:nth-child(odd) {
    background-color: var(--table-bg-color-odd, white);
    color: var(--table-font-color-odd, black)
  }

  tbody tr:nth-child(even) {
    background-color: var(--table-bg-color-even, black);
    color: var(--table-font-color-even, white)
  }

  .main-header {
    font-weight: bolder;
  }

</style>
<script lang="ts">
  import type { PricingEntry, PricingColumn } from "$lib/types/accos";
  import { format } from '$lib/pricing';

  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: t = i18n.translations[$currentLang];

  export let entries:PricingEntry[];
  export let use:PricingColumn[];
  export let footnote:string = "";



</script>

<figure class="pricing-wrapper">
  <table class="pricing-table">
    <thead>
      <tr>
      {#each use as h} 
        <td>{t.dict[h] ? t.dict[h] : h}</td>
      {/each}
      </tr>
    </thead>
    <tbody>
    {#each entries as e}
      <tr>
        {#each use as h}
        <td>  
          { format(e, h, t) }
        </td>
        {/each}
      </tr>
    {/each}
    </tbody>
    {#if footnote}
    <tfoot>
      <tr>
        <td colspan="{use.length}">
          { t.dict[footnote] ? t.dict[footnote] : footnote }
        </td>
      </tr>
    </tfoot>
    {/if}
  </table>
</figure>
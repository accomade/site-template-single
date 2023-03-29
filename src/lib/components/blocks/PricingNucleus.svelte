<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: t = i18n.translations[$currentLang];

  import type { PricingEntry, PricingRange, PricingColumn} from "$lib/types/accos";
  
  export let pricingSpec:PricingEntry|PricingRange
  $: pricingEntry = pricingSpec?.kind == "entry" ? pricingSpec : pricingSpec?.entry;


  export let pricingColumn:PricingColumn
  let formattedContent = ""
  $: {
    switch(pricingColumn) {
      case "timeRange":
        if( pricingSpec?.kind == "range" ) {
            
          if(pricingSpec.from && pricingSpec.to) {
            formattedContent = `${t.formatDate(pricingSpec.from)} - ${t.formatDate(pricingSpec.to)}`
            break;
          }
          if(pricingSpec.from) {
            formattedContent = `${t.dict.from} ${t.formatDate(pricingSpec.from)}}`
            break;
          }
          if(pricingSpec.to) {
            formattedContent = `${t.dict.to} ${t.formatDate(pricingSpec.to)}`
            break;
          }
        }
        break;
      case "firstNight":
        //console.log("firstNight", pricingEntry)
        if(pricingEntry?.firstNightPrice) {
          formattedContent = t.formatMoney(pricingEntry.firstNightPrice)
        }
        break;
      case "eachNight":
        if(pricingEntry?.perNightPrice) {
          formattedContent = t.formatMoney(pricingEntry.perNightPrice)
        }
        break;
      case "extraPerson":
        formattedContent = '<div style="display:flex; column-gap: 2rem; padding-left:1rem;flex-wrap: wrap;">';
        if(pricingEntry && pricingEntry.additionalPersonPrice1) {
          formattedContent += `<span>${t.formatAdditionalPersonPrice(pricingEntry.additionalPersonPrice1, pricingEntry.additionalPersonText1)}</span>`
        }
        if(pricingEntry && pricingEntry.additionalPersonPrice2) {
          formattedContent += `<span>${t.formatAdditionalPersonPrice(pricingEntry.additionalPersonPrice2, pricingEntry.additionalPersonText2)}</span>`
        }
        if(pricingEntry && pricingEntry.additionalPersonPrice3) {
          formattedContent += `<span>${t.formatAdditionalPersonPrice(pricingEntry.additionalPersonPrice3, pricingEntry.additionalPersonText3)}</span>`
        }
        formattedContent+="</div>"

        break;
      case "minNumNights":
        if(pricingEntry && pricingEntry.minNumberOfNights) {
          formattedContent = t.formatMinNumberOfNights(pricingEntry.minNumberOfNights)
        }
        break;
      default:
        formattedContent = ``
    }
  }

</script>

<span class="cell-wrapper">{@html formattedContent}</span>
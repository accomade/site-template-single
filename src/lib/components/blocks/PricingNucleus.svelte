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
            formattedContent = `${t.formatDate(pricingSpec.from)}<br>-<br>${t.formatDate(pricingSpec.to)}`
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
      case "peopleNum":
        if(pricingEntry) {
          if(pricingEntry.minNumberOfPeople &&
              pricingEntry.baseNumberOfPeople &&
              pricingEntry.maxNumberOfPeople
            ) 
            {

              formattedContent = t.formatNumberOfGuests3(
                pricingEntry.minNumberOfPeople,
                pricingEntry.baseNumberOfPeople,
                pricingEntry.maxNumberOfPeople,
              )
              break;
            }

            if(pricingEntry.baseNumberOfPeople &&
              pricingEntry.maxNumberOfPeople
            ) 
            {

              formattedContent = t.formatNumberOfGuests2(
                pricingEntry.baseNumberOfPeople,
                pricingEntry.maxNumberOfPeople,
              )
              break;
            }
            if(pricingEntry.baseNumberOfPeople) {
              formattedContent = t.formatNumberOfGuests1(pricingEntry.baseNumberOfPeople)
              break;
            }
        }

        break;
      case "extraPerson":
        if(
          pricingEntry &&
          pricingEntry.additionalPersonPrice1 &&
          pricingEntry.additionalPersonPrice2 &&
          pricingEntry.additionalPersonPrice3
        ){
          formattedContent = t.formatAdditionalPersonPrices3(
            pricingEntry.additionalPersonPrice1,
            pricingEntry.additionalPersonPrice2,
            pricingEntry.additionalPersonPrice3
          )
          break;
        }
        if(
          pricingEntry &&
          pricingEntry.additionalPersonPrice1 &&
          pricingEntry.additionalPersonPrice2
        ){
          formattedContent = t.formatAdditionalPersonPrices2(
            pricingEntry.additionalPersonPrice1,
            pricingEntry.additionalPersonPrice2
          )
          break;
        }
        if(
          pricingEntry &&
          pricingEntry.additionalPersonPrice1
        ){
          formattedContent = t.formatAdditionalPersonPrices1(
            pricingEntry.additionalPersonPrice1
          )
          break;
        }

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
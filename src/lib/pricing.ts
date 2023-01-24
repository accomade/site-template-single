import type { PricingEntry, PricingColumn} from "$lib/types/accos";
import type { Translation } from "$lib/types/i18n";

export const format = (p:PricingEntry, c:PricingColumn, t:Translation):string => {
  let result = ""
  switch(c) {
    case "timeRange":
      if(p.from && p.to) {
        result = `${t.formatDate(p.from)} - ${t.formatDate(p.to)}`
        break;
      }
      if(p.from) {
        result = `${t.dict.from} ${t.formatDate(p.from)}}`
        break;
      }
      if(p.to) {
        result = `${t.dict.to} ${t.formatDate(p.to)}`
        break;
      }
      break;
    case "firstNight":
      break;
    case "eachNight":
      break;
    case "peopleNum":
      break;
    case "extraPerson":
      break;
    case "minNumNights":
      break;
    default:
      ""
  }

  return result
}

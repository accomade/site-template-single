import type { I18n as CalI18n} from 'occuplan/types/i18n'
import type { Translation as CookieTrans } from 'gdpr-cooco-banner'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'

export interface Translation {
  title: string,
  dict: {
    [key: string]: string 
  }
  calendar: CalI18n,
  cookies: CookieTrans,
  nav: { 
    [key: string]: string 
  },
  formatDate(d:DateTime): string,
  formatMoney(c:Dinero<number>): string,
  formatNumberOfGuests3(min:number, def:number, max:number):string
  formatNumberOfGuests2(def:number, max:number):string
  formatNumberOfGuests1(def:number):string
  formatAdditionalPersonPrices3(one:Dinero<number>, two:Dinero<number>, three:Dinero<number>):string
  formatAdditionalPersonPrices2(one:Dinero<number>, two:Dinero<number>):string
  formatAdditionalPersonPrices1(one:Dinero<number>):string   
  formatMinNumberOfNights(num:number):string
  formatSeating(n:number): string
  formatNumberOf(n:number): string
  formatSize(n: number): string
  formatBed(n: number): string
  // Don't have this requirement
  //parseDate(s:string): DateTime,
  //parseMoney(s:string): Dinero<number>,
}

export interface I18n { 
  defaultLang: string,
  preferBrowserLang: boolean,
  translations: {
    [key: string]: Translation
  } 
}
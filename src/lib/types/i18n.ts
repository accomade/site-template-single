import type { I18n as CalI18n} from 'occuplan/types/i18n'
import type { Translation as CookieTrans } from 'gdpr-cooco-banner'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'
import type { BedKind } from './accos'

export interface Translation {
  title: string
  header: {
    title: string
    slug: string
  }
  dict: {
    [key: string]: string 
  }
  calendar: CalI18n,
  cookies: CookieTrans,
  formatDate(d:DateTime): string
  formatAvailability(from:DateTime|null, forDays:number, maxFutureDate:DateTime):string
  formatMoney(c:Dinero<number>): string
  formatMinimumPrice(c:Dinero<number>): string
  formatMaximumPrice(c:Dinero<number>): string
  formatAdditionalPersonPrice(price:Dinero<number>, terms:string|undefined):string
  formatMinNumberOfNights(num:number):string
  formatSeating(n:number): string
  formatNumberOf(n:number): string
  formatSize(n: number): string
  formatBed(n: number, kind: BedKind): string
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
import type { I18n as CalI18n} from 'occuplan/types/i18n'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'

export interface Translation {
  title: string,
  dict: {
    [key: string]: string 
  }
  calendar: CalI18n,
  nav: { 
    [key: string]: string 
  },
  formatDate(d:DateTime): string,
  formatMoney(c:Dinero<number>): string,
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
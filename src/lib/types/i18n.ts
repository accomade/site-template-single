import type { I18n  as CalI18n} from "occuplan/types/i18n"

export interface Translation {
  title: string,
  dict: {
    [key: string]: string 
  }
  calendar: CalI18n,
  nav: { 
    [key: string]: string 
  },
}

export interface I18n { 
  defaultLang: string,
  preferBrowserLang: boolean,
  translations: {
    [key: string]: Translation
  } 
}
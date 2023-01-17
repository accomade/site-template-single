export interface Translation {
  title: string,
  dict: {
    [key: string]: string 
  }
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
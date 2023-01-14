import { translations } from "$lib/conf.js";
import { writable } from "svelte/store";
import { browser } from '$app/environment'

let defaultLang = translations.defaultLang;
if(browser) {
  if( translations?.preferBrowserLang ) {
    const browserLang = navigator.language;
    const shortCode = browserLang.slice(0,2)
    if( !!translations.translations[shortCode] ) {
      defaultLang = shortCode;
    }
  }
}

export  const currentLang = writable(translations.defaultLang)


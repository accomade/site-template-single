import { i18n } from "$lib/conf";
import { writable } from "svelte/store";
import { browser } from '$app/environment'

let defaultLang = i18n.defaultLang;
if(browser) {
  if( i18n?.preferBrowserLang ) {
    const browserLang = navigator.language;
    const shortCode = browserLang.slice(0,2)
    console.log("Discoverd browser lang: ", shortCode)

    if( !!i18n.translations[shortCode] ) {
      defaultLang = shortCode;
    }
  }
}

export  const currentLang = writable(i18n.defaultLang)


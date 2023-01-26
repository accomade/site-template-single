import type { I18n } from '$lib/types/i18n'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'

import { toDecimal } from 'dinero.js' 

const formatMoney = (countryCode: string, d: Dinero<number>) => {
  return toDecimal<number,string>(d, ({value, currency}) => {
    
    let f = parseFloat(value)
    return new Intl.NumberFormat(
      countryCode, 
      { style: 'currency', currency: currency.code }).format(f)
  })
}


const i18n:I18n = {
  defaultLang: 'de',
  preferBrowserLang: true,
  translations: {
    en: {
      title: 'Welcome to your holidays',
      dict: {
        impressions: 'More Impressions',
        directions: 'Directions',
        apartments: 'Apartments',
        town: 'Koserow',
        koserow: 'Koserow',
        weather: 'Weather',
        town_church: 'Old church in Koserow',
        apartment_1_alt: 'View on Apartment 1',
        apartment_2_alt: 'View on Apartment 2',
        apartment_3_alt: 'View on Apartment 3',
        beach_alt: 'Beach',
        pricing: 'Dates and Prices',
        from: 'From',
        to: 'To',
        timeRange: 'Dates',
        firstNight: 'First Night',
        eachNight: 'Follow&shy;ing Nights',
        peopleNum: 'Number of Guests',
        extraPerson: 'Addi&shy;tional Guest',
        minNumNights: 'Shor&shy;test Period',
        'pricing-footnote-acco-cornflower': 'Bedding and Towels are included',
      },
      calendar: {
        weekdayLabels: {
          1: 'Mo',
          2: 'Tu',
          3: 'We',
          4: 'Th',
          5: 'Fr',
          6: 'Sa',
          7: 'Su'
        },
        monthLabels: {
          1: 'Jan',
          2: 'Feb',
          3: 'Mar',
          4: 'Apr',
          5: 'May',
          6: 'Jun',
          7: 'Jul',
          8: 'Aug',
          9: 'Sep',
          10: 'Oct',
          11: 'Nov',
          12: 'Dec',
        },
        monthHeaderFormatFun: ( monthLabel:string, year:string) => `${monthLabel} / ${year}`,
        weekendLabel: 'Weekend',
      },
      nav: {
        home: 'Home',
        location: 'Location',
        accomodations: 'Apartments',
        lang: 'Language',
        imprint: 'Imprint',
        terms: 'Terms',
        de: 'Deutsch',
        en: 'English',
      
      },
      formatDate(d:DateTime):string {
        return d.setLocale('en').toFormat('MM/dd/yy')
      },
      formatMoney(d:Dinero<number>):string {
        return formatMoney('en-US', d)
      },
      formatNumberOfGuests3(min:number, def:number, max:number):string {
        return `min: ${min} / standard: ${def} / max: ${max}`
      },
      formatNumberOfGuests2(def:number, max:number):string {
        return `Guests ${def}<br>Maximum ${max}`
      },
      formatNumberOfGuests1(def:number):string {
        return `Guests: ${def}`
      },
      formatAdditionalPersonPrices3(one:Dinero<number>, two:Dinero<number>, three:Dinero<number>):string {
        return `<ul>
          <li>Adults: ${ formatMoney('en-US', one) } per night</li>
          <li>7 - 18: ${ formatMoney('en-US', two) } per night</li> 
          <li>less than 7: ${ formatMoney('en-US', three) } per night</li> 
        </ul>
        `
      },
      formatAdditionalPersonPrices2(one:Dinero<number>, two:Dinero<number>):string {
        return `${ formatMoney('en-US', one) } per night <br>
          Discounted: ${ formatMoney('en-US', two) } per night
          (Children age 14 and younger, People with disabilities)
        </ul>
        `
      },
      formatAdditionalPersonPrices1(one:Dinero<number>):string {
        return `${ formatMoney('en-US', one) } per night`
      },
      formatMinNumberOfNights(num:number):string {
        return `${num} nights`
      }
     
    },
    de: {
      title: 'Willkommen in Ihrem Urlaub',
      dict: {
        impressions: 'Weitere Eindrücke',
        directions: 'Ihre Anreise',
        apartments: 'Ferienwohnungen',
        town: 'Koserow',
        koserow: 'Koserow',
        weather: 'Wetter',
        town_church: 'Backsteinkirche in Koserow',
        apartment_1_alt: 'Blick auf Wohnung 1',
        apartment_2_alt: 'Blick auf Wohnung 2',
        apartment_3_alt: 'Blick auf Wohnung 3',
        beach_alt: 'Strand',
        pricing: 'Preisaufstellung',
        from: 'Von',
        to: 'Bis',
        timeRange: 'Zeit&shy;raum',
        firstNight: 'Erste Über&shy;nach&shy;tung',
        eachNight: 'Jede weitere Nacht',
        peopleNum: 'Anzahl der Gäste',
        extraPerson: 'Wei&shy;terer Gast',
        minNumNights: 'Mindest&shy;aufent&shy;halt',
        'pricing-footnote-acco-cornflower': 'Hand&shy;tücher und Bett&shy;wäsche sind in&shy;klu&shy;sive',
      },
      calendar: {
        weekdayLabels: {
          1: 'Mo',
          2: 'Di',
          3: 'Mi',
          4: 'Do',
          5: 'Fr',
          6: 'Sa',
          7: 'So'
        },
        monthLabels: {
          1: 'Jan',
          2: 'Feb',
          3: 'Mär',
          4: 'Apr',
          5: 'Mai',
          6: 'Jun',
          7: 'Jul',
          8: 'Aug',
          9: 'Sep',
          10: 'Okt',
          11: 'Nov',
          12: 'Dez',
        },
        monthHeaderFormatFun: ( monthLabel:string, year:string) => `${monthLabel} / ${year}`,
        weekendLabel: 'Wochenende',
      },
      nav: {
        home: 'Startseite',
        location: 'Der Ort',
        accomodations: 'Ferienwohnungen',
        lang: 'Sprache',
        imprint: 'Impressum',
        terms: 'AGB',
        de: 'Deutsch',
        en: 'English',
      },
      formatDate(d:DateTime):string {
        return d.setLocale('de').toFormat('dd.MM.yyyy')
      },
      formatMoney(d:Dinero<number>):string {
        return formatMoney('de-DE', d)
      },
      formatNumberOfGuests3(min:number|undefined, def:number|undefined, max:number|undefined):string {
        return `Minimale Belegung: ${min} <br>Normale Belegung: ${def} <br>Maximale Belegung: ${max}`
      },
      formatNumberOfGuests2(def:number|undefined, max:number|undefined):string {
        return `Normale Belegung: ${def} <br>Maximale Belegung: ${max}`
      },
      formatNumberOfGuests1(def:number|undefined):string {
        return `Belegung: ${def} Gäste`
      },
      formatAdditionalPersonPrices3(one:Dinero<number>, two:Dinero<number>, three:Dinero<number>):string {
        return `<ul style="padding-inline-start: 0; padding-left: 1rem;">
          <li>Erwachsene: ${ formatMoney('de-DE', one) } pro Nacht</li>
          <li>7 - 18: ${ formatMoney('de-DE', two) } pro Nacht</li> 
          <li>Jünger als 7: ${ formatMoney('de-DE', three) } pro Nacht</li> 
        </ul>
        `
      },
      formatAdditionalPersonPrices2(one:Dinero<number>, two:Dinero<number>):string {
        return `${ formatMoney('de-DE', one) } pro Nacht<br>
          Ermäßigt: ${ formatMoney('de-DE', two) } pro Nacht
          (Kinder bis 14 inklusive, Menschen mit Behinderung)
        </ul>
        `
      },
      formatAdditionalPersonPrices1(one:Dinero<number>):string {
        return `${ formatMoney('de-DE', one) } pro Nacht`
      },
      formatMinNumberOfNights(num:number):string {
        return `${num} Nächte`
      }

    }
  }
}

export default i18n;
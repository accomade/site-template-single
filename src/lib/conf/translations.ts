import type { I18n } from '$lib/types/i18n'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'
import { format } from './formats.js'

import { toDecimal } from 'dinero.js' 
import type { BedKind } from '$lib/types/accos'
import * as dict from './dict.json'

const formatMoney = (countryCode: string, d: Dinero<number>) => {
  return toDecimal<number,string>(d, ({value, currency}) => {
    
    let f = parseFloat(value)
    return new Intl.NumberFormat(
      countryCode, 
      { style: 'currency', currency: currency.code }).format(f)
  })
}

const formatDate = (d:DateTime, format:string):string => {
  return d.setLocale('en').toFormat(format)
}

const i18n:I18n = {
  defaultLang: 'de',
  preferBrowserLang: true,
  translations: {
    en: {
      title: 'Welcome to your holidays',
      header: {
        title: 'Holiday Apartments by Schumachers',
        slug: 'THE place where you always wanted to spend your holidays.',
      },
      dict: dict.en.site,
      cookies: dict.en.cookies,
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
        monthHeaderFormatFun: (month:string, year:string) => {
          return format('monthHeader','en', {month, year})
        },
        weekendLabel: 'Weekend',
        typeNames: {
          defaultOccupationTypeName: 'Occupied'
        },
      },
      formatDate(d:DateTime):string {
        return d.setLocale('en').toFormat('MM/dd/yy')
      },
      formatAvailability(from:DateTime|null, forDays:number, maxFutureDate:DateTime):string {
        if(from == null) {
          return `No availability for ${forDays} days until ${maxFutureDate.toFormat('dd.MM.yyyy')}`
        }
        return `Min. ${forDays} days from ${from.toFormat('dd.MM.yyyy')} available`
      },

      formatMoney(d:Dinero<number>):string {
        return formatMoney('en-US', d)
      },
      formatMinimumPrice(d:Dinero<number>): string {
        const mo = formatMoney('en-US', d)
        return `From ${mo} per night`
      },
      formatMaximumPrice(d:Dinero<number>): string {
        const mo = formatMoney('en-US', d)
        return `To ${mo} per night`
      },
      formatAdditionalPersonPrice(price:Dinero<number>, terms:string|undefined):string {
        return `${ formatMoney('en-US', price) } (${ terms ? terms : 'contact us'})`
      },
      formatMinNumberOfNights(num:number):string {
        return `${num} nights`
      },
      formatSeating(n:number):string {
        return `Seating for ${n} people`
      }, 
      formatNumberOf(n: number):string {
        return `${n} pieces`
      },
      formatSize(n: number): string {
        return `${n}&nbsp;m²`
      },
      formatBed(n: number, kind: BedKind): string {
        return `for ${n}`
      }
     
    },
    de: {
      title: 'Willkommen in Ihrem Urlaub',
      header: {
        title: 'Ferienwohnungen von Schumachers',
        slug: 'Hier wollten sie schon immer ihre Ferien verbringen.',
      },
      dict: dict.de.site,
      cookies: dict.de.cookies,
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
        typeNames: {
          defaultOccupationTypeName: 'Belegt'
        },
      },
      formatDate(d:DateTime):string {
        return d.setLocale('de').toFormat('dd.MM.yyyy')
      },

      formatAvailability(from:DateTime|null, forDays:number, maxFutureDate:DateTime):string {
        if(from == null) {
          return `Nichts frei für ${forDays} Tage bis ${maxFutureDate.toFormat('dd.MM.yyyy')}`
        }
        return `Mindestens ${forDays} Tage ab dem ${from.toFormat('dd.MM.yyyy')} verfügbar`
      },

      formatMoney(d:Dinero<number>):string {
        return formatMoney('de-DE', d)
      },
      formatMinimumPrice(d:Dinero<number>): string {
        const mo = formatMoney('de-DE', d)
        return `Ab ${mo} pro Nacht`
      },
      formatMaximumPrice(d:Dinero<number>): string {
        const mo = formatMoney('de-DE', d)
        return `Maximal ${mo} pro Nacht`
      },

      formatAdditionalPersonPrice(price:Dinero<number>, terms:string|undefined):string {
        return `${ formatMoney('de-DE', price) } (${ terms ? terms : 'auf Anfrage'})`
      },
      formatMinNumberOfNights(num:number):string {
        return `${num} Nächte`
      },
      formatSeating(n:number):string {
        return `Sitzplätze für ${n} Erwachsene`
      },
      formatNumberOf(n: number):string {
        return `Anzahl ${n}`
      },
      formatSize(n: number): string {
        return `${n}&nbsp;m²`
      },
      formatBed(n: number, kind: BedKind): string {
        return `für ${n} Person(en)`
      }
    }
  }
}

export default i18n;
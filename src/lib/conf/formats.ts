import * as Sqrl from 'squirrelly'
import formats from './formats.json'
import type { Dinero } from 'dinero.js'
import { toDecimal } from 'dinero.js' 
import type { DateTime } from 'luxon'

const fTemplates = {}

for( const entry of Object.entries(formats)) {
  const [lang, format] = entry;
  if(lang !== 'default') {

    for( const fEntry of Object.entries(format)) {
      const [templateName, formatTemplate] = fEntry;
      const fullTemplateName = `${lang}_${templateName}`
      //@ts-ignore
      fTemplates[fullTemplateName] = Sqrl.compile(formatTemplate, {useWith: true})
    }
  }
}

//@ts-ignore
export const format = (templateName, lang, data) => {
  const fullTemplateName = `${lang}_${templateName}`
  console.log(fullTemplateName)
  
  //@ts-ignore
  const templFun = fTemplates[fullTemplateName]
  console.log(templFun)
  if(!templFun) return '[UNDEFINED]'

  return templFun(data, Sqrl.defaultConfig)
}


export const formatMonthHeader = (lang: string, month:string, year:string) => {
  return format('monthHeader', lang, {
    month,
    year,
  })
}

export const formatMoney = (lang: string, d: Dinero<number>) => {
  //@ts-ignore
  const locale = formats[lang].locale

  return toDecimal<number,string>(d, ({value, currency}) => {
    
    let f = parseFloat(value)
    return new Intl.NumberFormat(
      locale, 
      { style: 'currency', currency: currency.code }).format(f)
  })
}

export const formatDate = (lang: string, d:DateTime):string => {
  //@ts-ignore
  const df = formats[lang].dateFormat
  return d.setLocale(lang).toFormat(df)
}

export const formatAvailability = (
    lang: string, 
    from:DateTime|null, 
    forDays:number, 
    maxFutureDate:DateTime
  ):string => {

  if(from == null) {
    const mfd = formatDate(lang, maxFutureDate)
    return format('nothingAvailable', lang, {
      forDays,
      maxFutureDate
    })
  }
  const fr = formatDate(lang, from)
  return format('availabelFromFor', lang, {
    from: fr,
    forDays
  })
}


/*
formatMinimumPrice(c:Dinero<number>): string
formatMaximumPrice(c:Dinero<number>): string
formatAdditionalPersonPrice(price:Dinero<number>, terms:string|undefined):string
formatMinNumberOfNights(num:number):string
formatSeating(n:number): string
formatNumberOf(n:number): string
formatSize(n: number): string
formatBed(n: number, kind: BedKind): string
*/
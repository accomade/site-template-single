import type { Section } from './blocks'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'


export type PricingColumn = 
  | "timeRange"
  | "firstNight"
  | "eachNight"
  | "peopleNum" //includes min-def-max
  | "extraPerson"
  | "minNumNights"
  


export type PricingEntry = {
  from?: DateTime;
  to?: DateTime;
  
  firstNightPrice?: Dinero<number>,
  perNightPrice: Dinero<number>,
  
  minNumberOfNights?: number,
  
  minNumberOfPeople?: number,
  baseNumberOfPeople?: number,
  maxNumberOfPeople?: number,
  
  additionalPersonPrice1?: Dinero<number>,
  additionalPersonDesc1?: string,

  additionalPersonPrice2?: Dinero<number>,
  additionalPersonDesc2?: string,
  
  additionalPersonPrice3?: Dinero<number>,
  additionalPersonDesc3?: string;
}


export interface Pricing {
  use: PricingColumn[]
  entries: PricingEntry[]
  footnote: string
}

export interface Amneties {

}


export interface Acco {
  path: string
  displayName: string
  sections: Section[] 
}
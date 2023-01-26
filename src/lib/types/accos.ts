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
  kind: "entry",
  firstNightPrice?: Dinero<number>
  perNightPrice: Dinero<number>
  
  minNumberOfNights?: number
  
  minNumberOfPeople?: number
  baseNumberOfPeople?: number
  maxNumberOfPeople?: number
  
  additionalPersonPrice1?: Dinero<number>
  additionalPersonPrice2?: Dinero<number>
  additionalPersonPrice3?: Dinero<number>
}

export type PricingRange = {
  kind: "range"
  from?: DateTime
  to?: DateTime
  entry?: PricingEntry
}


export interface Pricing {
  global?: PricingEntry
  columns?: PricingColumn[]
  entries?: PricingRange[]
  footnote?: string
}

export interface Amneties {

}


export interface Acco {
  path: string
  displayName: string
  sections: Section[] 
}
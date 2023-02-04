import type { Section } from './blocks'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'
import type { Photo } from './photos'


export type PricingColumn = 
  | 'timeRange'
  | 'firstNight'
  | 'eachNight'
  | 'peopleNum' //includes min-def-max
  | 'extraPerson'
  | 'minNumNights'
  

export type PricingEntry = {
  kind: 'entry',
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
  kind: 'range'
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

export interface PricingShort {
  global?: PricingEntry
  entries?: PricingEntry[]
  footnote?: string
  showMaximum?: boolean
  showMinimum?: boolean
}


export type CoffeeMachine = 
  | 'nespresso'
  | 'beans'
  | 'portafilter'
  | 'filter'
  | 'capsules'
  | 'none'

export type BedKind = 'kings' | 'queens' | 'solo' | 'bunkbed' | 'baby' | 'sleepingSofa'
export interface Bed {
  kind: BedKind
  optional: boolean
  heads: number
}

export type AmnetyNucleusType = 'longDesc' | 'string' | 'check' | 'checkWithDesc' | 'list' | 'numValue' | 'beds' | 'size' | 'seats' | 'coffeeMachine'

export interface Amneties {
  size?: number
  
  descriptions?: LabeledDesc[]
  sections: AmnetiesSection[]

  rooms: RoomsSection[]
  outdoors: OutdoorsSection[]
}


export interface AmnetiesSection {
  header?: string
  hr?: boolean
  specs: AmnetyNucleusSpec[]
}

export interface RoomsSection {
  header: string
  specs: AmnetyNucleusSpec[]
  desc?: string
}

export interface OutdoorsSection {
  header: string
  specs: AmnetyNucleusSpec[]
  desc?: string
}


export interface AmnetyNucleusSpec {
  label: string
  kind: AmnetyNucleusType
  value?: boolean | number| string | Bed[] | CoffeeMachine[] | undefined
  desc?: string
}

export interface LabeledDesc {
  label: string
  desc: string
}


export interface Acco {
  path: string
  displayName: string
  cardContent: {
    coverPhoto: Photo
    sections: Section[]
  }
  siteContent: Section[] 
}
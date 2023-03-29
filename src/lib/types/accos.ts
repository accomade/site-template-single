import type { Section, Block } from './blocks'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'
import type { Photo } from './photos'


export type PricingColumn = 
  | 'timeRange'
  | 'firstNight'
  | 'eachNight'
  | 'extraPerson'
  | 'minNumNights'
  

export type PricingEntry = {
  kind: 'entry',
  firstNightPrice?: Dinero<number>
  perNightPrice: Dinero<number>
  
  minNumberOfNights?: number
  
  additionalPersonPrice1?: Dinero<number>
  additionalPersonPrice2?: Dinero<number>
  additionalPersonPrice3?: Dinero<number>

  additionalPersonText1?: string
  additionalPersonText2?: string
  additionalPersonText3?: string
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
  entries?: PricingRange[]
  showMaximum?: boolean
  showMinimum?: boolean
  footnote?: string
}


export type CoffeeMachine = 
  | 'nespresso'
  | 'beans'
  | 'portafilter'
  | 'filter'
  | 'capsules'
  | 'none'

export type BedKind = 'kings' | 'queens' | 'solo' | 'bunkbed' | 'baby' | 'sleepingSofa'

export type BedSpec = {
  kind: BedKind
  optional?: boolean
  heads: number
}

export interface Beds {
  specs: BedSpec[]
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
  label?: string
  kind: AmnetyNucleusType
  value?: boolean | number | string | Beds | CoffeeMachine[] | undefined
  desc?: string
}


export interface AmnetiesCore {
  peopleMin: number
  peopleMax: number
  size: number
  bedRooms: number
  bathRooms: number
  pets: boolean
  wifi: boolean
  smoking: boolean
  ac: boolean
  tv: boolean
  parking: boolean

}

export interface LabeledDesc {
  label: string
  desc: string
}

export interface AccoCard {
  acco: Acco
}

export interface Acco {
  path: string
  displayName: string
  cardContent?: {
    coverPhoto: Photo
    slug: string
    blocks: Block[]
  }
  siteContent?: Section[] 
}
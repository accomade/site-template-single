import type { Section } from './blocks'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'


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

export interface Bed {
  kind: 'kings' | 'queens' | 'solo' | 'bunkbed' | 'baby' | 'sleepingSofa'
  optional: boolean
  heads: number
}

export interface Bedroom {
  beds?: Bed[]
  separated?: boolean
  tv?: boolean
  ac?: boolean
  beddingAvailable?: boolean
  beddingInclusive?: boolean
  desc?: string
}

export type CoffeeMachine = 
  | 'nespresso'
  | 'beans'
  | 'portafilter'
  | 'filter'
  | 'capsules'
  | 'none'

export interface Kitchen {
  microwave?: boolean
  oven?: boolean
  fridge?: boolean
  freezer?: boolean
  integrated?: boolean
  dishwasher?: boolean
  coffeeMachines?: CoffeeMachine[]
  towels?: boolean
  chairs?: number
  eatingTable?: boolean
  desc?: string
}

export interface LivingRoom {
  beds?: Bed[]
  tv?: boolean
  stereo?: boolean
  sofa?: boolean
  lounge?: boolean
  chairs?: number
  sofaTable?: boolean
  eatingTable?: boolean
  ac?: boolean
}

export interface Bathroom {
  shower?: boolean
  bathtub?: boolean
  hairDryer?: boolean
  towelsAvailable?: boolean
  towelsIncluded?: boolean
  bathrobeAvailable?: boolean
  bathrobeIncluded?: boolean
  window?: boolean
}


export interface Outdoors {
  kind: 'backyard' | 'terrace' | 'balcony'
  size?: number
  eatingTable?: boolean
  sofaTable?: boolean
  chairs?: number
  lounge?: number
  barbecueType?: 'gas' | 'charcoal' | 'electric'
  barbecueDesc?: string
  shed?: boolean
  shedDesc?: string
  bicycles?: number
  bicyclesDesc?: string
  pool?: boolean
  poolDesc?: string
  desc?: string
}

export interface Amneties {
  size?: number
  pets?: boolean
  petsDesc?: string
  vaccuum?: boolean
  iron?: boolean

  outdoors?: Outdoors[]
  bedrooms?: Bedroom[]
  bathrooms?: Bathroom[]
  kitchens?: Kitchen[]
  livingRooms?: LivingRoom[]

  ac?: boolean

  shopping?: string
  beach?: string
  culture?: string
  sightSeeing?: string

  quiet?: boolean
  busy?: boolean

  onSiteContact?: boolean

  desc?: string
}


export interface Acco {
  path: string
  displayName: string
  sections: Section[] 
}
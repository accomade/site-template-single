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



export type CoffeeMachine = 
  | 'nespresso'
  | 'beans'
  | 'portafilter'
  | 'filter'
  | 'capsules'
  | 'none'


export interface Bed {
  kind: 'kings' | 'queens' | 'solo' | 'bunkbed' | 'baby' | 'sleepingSofa'
  optional: boolean
  heads: number
}


export interface Bedroom {
  size?: number
  beds?: Bed[]
  separated?: boolean
  tv?: boolean
  ac?: boolean
  beddingAvailable?: boolean
  beddingInclusive?: boolean
  desc?: string
}


export interface Kitchen {
  size?: number
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
  size?: number
  beds?: Bed[]
  tv?: boolean
  stereo?: boolean
  sofa?: boolean
  lounge?: number
  chairs?: number
  sofaTable?: boolean
  eatingTable?: boolean
  ac?: boolean
  desc?: string
}

export interface Bathroom {
  size?: number
  shower?: boolean
  bathtub?: boolean
  hairDryer?: boolean
  towelsAvailable?: boolean
  towelsIncluded?: boolean
  bathrobeAvailable?: boolean
  bathrobeIncluded?: boolean
  window?: boolean
  desc?: string
}


export interface Outdoors {
  kind: 'backyard' | 'terrace' | 'balcony'
  fenced?: boolean
  size?: number
  eatingTable?: boolean
  sofaTable?: boolean
  chairs?: number
  lounge?: number
  barbecue: boolean
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
  
  outdoors?: Outdoors[]
  bedrooms?: Bedroom[]
  bathrooms?: Bathroom[]
  kitchens?: Kitchen[]
  livingRooms?: LivingRoom[]


  parkingLots?: number
  parkingOnSite: boolean
  parkingNearby: boolean
  airportShuttle?: boolean,
  trainStation?: boolean,

  pets?: boolean
  petsDesc?: boolean
  ac?: boolean
  vaccuum?: boolean
  iron?: boolean

  //TODO add this options
  washingMashine?: boolean
  clothesDryer?: boolean
  dryingRack?: boolean
  sauna?: boolean
  solarium?: boolean
  whirlpool?: boolean

  shopping?: boolean
  beach?: boolean
  culture?: boolean
  sightSeeing?: boolean

  quiet?: boolean
  busy?: boolean
  onSiteContact?: boolean

  desc?: boolean
}


export interface Acco {
  path: string
  displayName: string
  sections: Section[] 
}
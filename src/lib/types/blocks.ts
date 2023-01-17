import type { Photo, PhotoGallery } from './photos'
import type { Calendar } from './calendar'
import type { Maps } from './maps'
import type { PricingTable } from './pricingTable'
import type { Weather } from './weather'

export interface Section {
  header: string | undefined
  columnCount: number | undefined
  blocks: Block[]
}

export interface TextBlock {
  kind: 'text'
  content: {
    ref:string
  }
}

export interface PhotoBlock {
  kind: 'photo'
  content: Photo
}

export interface PhotoGalleryBlock {
  kind: 'photo-gallery'
  content: PhotoGallery
}

export interface CalendarBlock {
  kind: 'calendar'
  content: Calendar
}

export interface MapBlock {
  kind: 'map'
  content: Maps
}

export interface PricingTableBlock {
  kind: 'pricing-table'
  content: PricingTable
}

export interface WeatherBlock {
  kind: 'weather'
  content: Weather
}

export type Block =
  TextBlock |
  PhotoBlock | 
  PhotoGalleryBlock | 
  TextBlock | 
  CalendarBlock |
  PricingTableBlock |
  WeatherBlock |
  MapBlock |
  undefined
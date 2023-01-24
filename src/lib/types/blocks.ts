import type { Photo, PhotoGallery } from './photos'
import type { Calendar } from './calendar'
import type { Maps } from './maps'
import type { Weather } from './weather'
import type { Amneties, Pricing } from './accos'

export interface Section {
  header?: string | undefined
  columnCount?: number | undefined
  maxWidth?: string
  blocks?: Block[]
}

export interface TextBlock {
  kind: 'text'
  content: {
    ref: string
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

export interface PricingBlock {
  kind: 'pricing'
  content: Pricing
}

export interface WeatherBlock {
  kind: 'weather'
  content: Weather
}

export interface AmnetiesBlock {
  kind: 'amneties'
  conent: Amneties
}

export type Block =
  TextBlock |
  PhotoBlock | 
  PhotoGalleryBlock | 
  TextBlock | 
  CalendarBlock |
  PricingBlock |
  WeatherBlock |
  MapBlock |
  undefined
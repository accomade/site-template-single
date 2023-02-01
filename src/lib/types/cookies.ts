import type { CookieType } from 'gdpr-cooco-banner'

export type CookieSettings = {
  types: CookieType[]
}

export type CookieSelection = {
  [key in CookieType]: boolean
}
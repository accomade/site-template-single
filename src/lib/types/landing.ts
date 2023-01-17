import type { PhotoNumber } from './photos'
import type { Section } from './blocks'


export interface Landing {
  headerPhoto: PhotoNumber,
  sections: Section[],
}
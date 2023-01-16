import type { PhotoNumber, GridPhoto } from './photos'
import type { ContentBlock } from './content'

export interface Landing {
  headerPhoto: PhotoNumber,
  content: ContentBlock[],
  photoGrid: GridPhoto[],
}
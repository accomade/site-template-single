
export interface Photo {
  photoPath: string,
  alt: string,
  attribution?: string,
  link?: string,
  external?: boolean,
  maxHeight?: string|undefined
  maxWidth?: string|undefined
}

export interface GridPhoto extends Photo {
  cols: number,
}

export interface PhotoGallery {
  photos: GridPhoto[]
} 
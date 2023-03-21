
export interface Photo {
  photoPath: string,
  alt: string,
  attribution?: string,
  link?: string,
  external?: boolean,
  maxHeight?: string|undefined
  maxWidth?: string|undefined
}

export interface GridPhoto {
  photo: Photo,
  zoomed: boolean,
  id: string,
}

export interface PhotoGallery {
  gridPhotoWidth?: number;
  photos: Photo[]
} 
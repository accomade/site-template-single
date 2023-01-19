import type { Landing } from '$lib/types/landing';

const landing:Landing = {
  headerPhoto: '001',
  sections: [
    {
      header: 'town',
      columnCount: 3,
      blocks: [
        {
          kind: 'text',
          content: {
            ref: 'landing_town'
          }
        },
        {
          kind: 'weather',
          content: {
            header1: 'koserow',
            header2: 'weather',
            location: '/54d0514d00/koserow/',
          }

        },
        {
          kind: 'photo',
          content:{
            photo: '020',
            alt: 'town_church',
            link: 'http://www.koserow.de',
            maxHeight: '15rem',
          }
        }

      ]
    },
    {
      header: 'apartments',
      columnCount: 2,
      maxWidth: '40rem',
      blocks: [
        {
          kind: 'text',
          content: {
            ref: 'landing_apartments'
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '010',
            alt: "apartment_1_alt",
            link: "/accomodations/acco_cornflower"
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '011',
            alt: "apartment_2_alt",
            link: "/accomodations/acco_sunflower"
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '012',
            alt: "apartment_3_alt",
            link: "/accomodations/acco_rosebush"
          }
        }
      ]
    },
    {
      header: 'impressions',
      columnCount: 1,
      blocks: [  
        {
          kind: 'photo-gallery',
          content: {
            photos: [
              {
                photo: '003',
                alt: 'beach_alt',
                cols: 2
              },
              {
                photo: '004',
                alt: 'beach_alt',
                cols: 1
              },
              {
                photo: '005',
                alt: 'beach_alt',
                cols: 2
              },
              {
                photo: '006',
                alt: 'beach_alt',
                cols: 1
              }
            ]
          }
        }
      ]
    },
    {
      header: 'directions',
      columnCount: 2,
      blocks: [
        {
          kind: 'map',
          content: {
            lat: 54.0483609,
            long:13.9965374,
            zoom: 16,
          }
        },
        {
          kind: 'text',
          content: {
            ref: 'directions'
          }
        }
      ]
    },
  ]
}

export default landing;
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
          }

        },
        {
          kind: 'photo',
          content:{
            photo: '020',
            alt: 'town'
          }
        }

      ]
    },
    {
      header: 'apartments',
      columnCount: 2,
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
            alt: "apartment_1",
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '011',
            alt: "apartment_2",
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '012',
            alt: "apartment_3",
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
                alt: 'beach_1',
                cols: 3
              },
              {
                photo: '004',
                alt: 'beach_2',
                cols: 2
              },
              {
                photo: '005',
                alt: 'beach_3',
                cols: 1
              },
              {
                photo: '006',
                alt: 'beach_4',
                cols: 2
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
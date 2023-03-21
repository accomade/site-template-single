import type { Landing } from '$lib/types/landing';

import { PUBLIC_PHOTOS_BASE_PATH } from '$env/static/public';
import { PUBLIC_USER_ID } from '$env/static/public';

const basePath = `${PUBLIC_PHOTOS_BASE_PATH}/users/${PUBLIC_USER_ID}`


const landing:Landing = {
  headerPhoto: `${basePath}/981040dd-d193-42d6-a10d-44dcda4f0019`,
  sections: [
    {
      columnCount: 1,
      blocks: [
        {
          kind: 'acco-card',
          content: {
            acco: {
              path: 'acco_cornflower',
              displayName: 'Wohnung: Kornblume',
              cardContent: {
                coverPhoto: {
                  photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
                  alt: 'apartment_1_alt',
                  link: '/accomodations/acco_cornflower',
                },
                slug: 'cornflower_card_slug',
                blocks: [
                  {
                    kind: 'amneties-core',
                    content: {
                      core: {
                        peopleMin: 1,
                        peopleMax: 4,
                        size: 55, //?? 
                        bedRooms: 2, //??
                        bathRooms: 1,
                        pets: true,
                        wifi: true,
                        smoking: true,
                        ac: false,
                        tv: false,
                        parking: false,
                      }
                    }
                  },
                ]
              }
            }
          }
        }
      ]
    },
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
            photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
            alt: 'town_church',
            attribution: '<a href="https://commons.wikimedia.org/wiki/File:Koserowkirche.jpg">Unukorno</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
            link: 'http://www.koserow.de',
            external: true,
            maxHeight: '15rem',
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
            photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
            alt: "apartment_1_alt",
            link: "/accomodations/acco_cornflower"
          }
        },
        {
          kind: 'photo',
          content: {
            photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
            alt: "apartment_2_alt",
            link: "/accomodations/acco_sunflower"
          }
        },
        {
          kind: 'photo',
          content: {
            photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
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
                photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/bb347d9b-0969-4d10-9150-bc92820add17`,
                alt: 'beach_alt',
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
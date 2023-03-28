import type { Landing } from '$lib/types/landing';

import { PUBLIC_PHOTOS_BASE_PATH } from './settings';
import { PUBLIC_USER_ID } from './settings';

const basePath = `${PUBLIC_PHOTOS_BASE_PATH}/users/${PUBLIC_USER_ID}`


const landing:Landing = {
  headerPhoto: `${basePath}/hero.jpg`,
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
            photoPath: `${basePath}/church_koserow.jpg`,
            alt: 'town_church',
            attribution: '<a href="https://commons.wikimedia.org/wiki/File:Koserowkirche.jpg">Unukorno</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0">CC BY-SA 3.0</a>, via Wikimedia Commons',
            link: 'http://www.koserow.de',
            external: true,
            height: '15rem',
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
            photoPath: `${basePath}/building_1`,
            alt: "apartment_1_alt",
            link: "/accomodations/acco_cornflower",
            height: "30vh",
          }
        },
        {
          kind: 'photo',
          content: {
            photoPath: `${basePath}/building_2`,
            alt: "apartment_2_alt",
            link: "/accomodations/acco_sunflower",
            height: "40vh",
          }
        },
        {
          kind: 'photo',
          content: {
            photoPath: `${basePath}/building_3`,
            alt: "apartment_3_alt",
            link: "/accomodations/acco_rosebush",
            height: "40vh",
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
                photoPath: `${basePath}/beach_1.jpg`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/beach_2.jpg`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/beach_3.jpg`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/beach_4.jpg`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/beach_5.jpg`,
                alt: 'beach_alt',
              },
              {
                photoPath: `${basePath}/beach_6.jpg`,
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
            address: 'Achterstr. 3, 17459 Koserows',
            lat: 54.0483609,
            long: 13.9965374,
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
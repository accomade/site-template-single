import { DateTime } from 'luxon'
import { EUR } from '@dinero.js/currencies'
import { dinero } from 'dinero.js'
/*

*/
const accos = [
  {
    path: "acco_cornflower",
    displayName: "Wohnung: Kornblume",
    sections: [
      {
        header: 'pricing',
        columnCount: 1,
        blocks: [
          {
            kind: 'pricing',
            content: {
              use: [
                "timeRange", "firstNight", "eachNight", "peopleNum", "extraPerson1", "extraPerson2", "extraPerson3", "minNumNights"
              ],
              entries: [
                {
                  "from": DateTime.fromISO("2023-01-01"),
                  "to": DateTime.fromISO("2023-03-24"),
                  "base-number-of-people": 2,
                  "first-night-price": dinero({amount: 5500, currency: EUR}),
                  "per-night-price": dinero({amount: 3500, currency: EUR}),
                  "additional-person-price-1": dinero({amount: 1000, currency: EUR}),
                  "additional-person-desc-1": "additional-person-text",
                  "min-number-of-nights": 3,
                },
                {
                  "from": DateTime.fromISO("2023-03-25"),
                  "to": DateTime.fromISO("2023-06-30"),
                  "base-number-of-people": 2,
                  "first-night-price": dinero({amount: 4500, currency: EUR}),
                  "per-night-price": dinero({amount: 3000, currency: EUR}),
                  "additional-person-price-1": dinero({amount: 1000, currency: EUR}),
                  "additional-person-desc-1": "additional-person-text",
                  "min-number-of-nights": 3,
                },
                {
                  "from": DateTime.fromISO("2023-07-01"),
                  "to": DateTime.fromISO("2023-08-31"),
                  "base-number-of-people": 2,
                  "first-night-price": dinero({amount: 8500, currency: EUR}),
                  "per-night-price": dinero({amount: 5500, currency: EUR}),
                  "additional-person-price-1": dinero({amount: 1500, currency: EUR}),
                  "additional-person-desc-1": "additional-person-text",
                  "min-number-of-nights": 7,
                },
                {
                  "from": DateTime.fromISO("2023-09-01"),
                  "to": DateTime.fromISO("2023-12-20"),
                  "base-number-of-people": 2,
                  "first-night-price": dinero({amount: 4500, currency: EUR}),
                  "per-night-price": dinero({amount: 3000, currency: EUR}),
                  "additional-person-price-1": dinero({amount: 1000, currency: EUR}),
                  "additional-person-desc-1": "additional-person-text",
                  "min-number-of-nights": 3,
                },
                {
                  "from": DateTime.fromISO("2023-12-21"),
                  "to": DateTime.fromISO("2024-01-05"),
                  "base-number-of-people": 2,
                  "first-night-price": dinero({amount: 8500, currency: EUR}),
                  "per-night-price": dinero({amount: 5500, currency: EUR}),
                  "additional-person-price-1": dinero({amount: 1500, currency: EUR}),
                  "additional-person-desc-1": "additional-person-text",
                  "min-number-of-nights": 5,
                },

              ],
              footnote: "pricing-footnote-acco-cornflower"
            }
          }
        ]
      },
      {
        columnCount: 2,
        blocks: [
      
          {
            kind: 'calendar',
            content: {
              calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics'
            }

          },
          {
            kind: 'photo',
            content: {
              photo: '011',
              alt: "apartment_1_alt"
            }

          }
        ]  
      }
    ]
  },
  {
    path: "acco_sunflower",
    displayName: "Wohnung: Sonnenblume",
    sections: [
      {
        columnCount: 2,
        blocks: [
          {
            kind: 'calendar',
            content: {
              calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics'
            }

          },
          {
            kind: 'photo',
            content: {
              photo: '012',
              alt: "apartment_1_alt"
            }

          }
        ]  
      }
    ]
  },
  {
    path: "acco_rosebush",
    displayName: "Wohnung: Buschwindröschen",
    sections: [
      {
        columnCount: 2,
        blocks: [
          {
            kind: 'calendar',
            content: {
              calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics'
            }

          },
          {
            kind: 'photo',
            content: {
              photo: '012',
              alt: "apartment_1_alt"
            }

          }
        ]  
      }
    ]
  }
]

export default accos
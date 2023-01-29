import { DateTime } from 'luxon'
import { EUR } from '@dinero.js/currencies'
import { dinero } from 'dinero.js'
/*

*/
const accos = [
  {
    path: 'acco_cornflower',
    displayName: 'Wohnung: Kornblume',
    sections: [
      {
        header: 'amneties',
        columnCount: 1,
        blocks: [
          {
            kind: 'amneties',
            content: {
              accoName: 'cornflower',
              amneties: {
                size: 55,
                quiet: true,
                desc: true,
                shopping: true,
                sightSeeing: true,
                beach: true,
                culture: true,
                parkingLots: 2,
                parkingOnSite: true,
                trainStation: true,
                onSiteContact: true,
                pets: true,
                petsDesc: true,
                ac: true,
                iron: true,
                vaccuum: true,

                bedrooms: [
                  {
                    size: 14,
                    separated: true,
                    tv: true,
                    ac: true,
                    beddingInclusive: true,
                    beds: [
                      {
                        kind: 'kings',
                        heads: 2
                      }
                    ]
                  },
                  {
                    size: 22,
                    beddingAvailable: true,
                    beds: [
                      {
                        kind: 'solo',
                        heads: 1,
                        optional: true
                      },
                      {
                        kind: 'bunkbed',
                        heads: 2
                      }
                    ],
                    desc: 'cornflower_bedroom_2_desc'
                  }
                ],

                livingRooms: [
                  {
                    size: 16,
                    beds: [
                      {
                        kind: 'sleepingSofa',
                        heads: 2,
                        optional: true,
                      }
                    ],
                    tv: true,
                    stereo: true,
                    sofa: true,
                    lounge: 4,
                    chairs: 4,
                    sofaTable: true,
                    eatingTable: true,
                    desc: 'cornflower_living_desc'
                  }
                ],

                kitchens: [
                  {
                    size: 14,
                    microwave: true,
                    oven: true,
                    fridge: true,
                    freezer: true,
                    dishwascher: true,
                    integrated: true,
                    coffeeMachines: [
                      'nespresso', 'filter', 'beans'
                    ],
                    towels: true,
                    chairs: 4,
                    eatingTable: true,
                    desc: 'cornflower_kitchen_desc'
                  }
                ],

                bathrooms: [
                  {
                    size: 6,
                    shower: true,
                    bathtub: true,
                    hairDryer: true,
                    towelsIncluded: true,
                    bathrobeAvailable: true,
                    window: true,
                    desc: 'cornflower_bathroom_desc'
                  }
                ],

                outdoors: [
                  {
                    kind: 'terrace',
                    fenced: true,
                    size: 32,

                  },
                  {
                    kind: 'backyard',
                    fenced: true,
                    size: 60,
                    eatingTable: true,
                    sofaTable: true,
                    chairs: 6,
                    lounge: 4,
                    barbecue: true,
                    barbecueType: 'charcoal',
                    barbecueDesc: 'cornflower_barbecue_desc',
                    shed: true,
                    shedDesc: 'cornflower_shed_desc',
                    bicycles: 2,
                    bicyclesDesc: 'cornflower_bicycles_desc',
                    pool: true,
                    desc: 'cornflower_backyard_desc'
                  }
                ]
              }
            }
          }
        ],
      },
      {
        header: 'pricing',
        columnCount: 1,
        blocks: [
          {
            kind: 'pricing',
            content: {
              columns: [
                'timeRange', 'firstNight', 'eachNight', 'peopleNum', 'extraPerson', 'minNumNights'
              ],
              entries: [
                {
                  kind: 'range',
                  from: DateTime.fromISO('2022-12-20'),
                  to: DateTime.fromISO('2023-01-06'),
                  
                  entry: {
                    firstNightPrice: dinero({amount: 8000, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-01-01'),
                  to: DateTime.fromISO('2023-03-24'),
                  
                  entry: {
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-03-25'),
                  to: DateTime.fromISO('2023-06-30'),
                  entry: {
                    
                    firstNightPrice: dinero({amount: 5000, currency: EUR}),
                    perNightPrice: dinero({amount: 3000, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-07-01'),
                  to: DateTime.fromISO('2023-08-31'),
                  entry: {
                    
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 7,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-09-01'),
                  to: DateTime.fromISO('2023-12-20'),
                  entry: {
                    
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-12-21'),
                  to: DateTime.fromISO('2024-01-05'),
                  entry: {
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 5,
                  }
                },

              ],
              footnote: 'pricing-footnote-acco-cornflower'
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
              alt: 'apartment_1_alt'
            }

          }
        ]  
      }
    ]
  },
  {
    path: 'acco_sunflower',
    displayName: 'Wohnung: Sonnenblume',
    sections: [
      {
        header: 'pricing',
        columnCount: 1,
        blocks: [
          {
            kind: 'pricing',
            content: {
              global: {
                kind: 'entry',
                firstNightPrice: dinero({amount: 8500, currency: EUR}),
                perNightPrice: dinero({amount: 5500, currency: EUR}),
                additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                
                minNumberOfPeople: 1,
                baseNumberOfPeople: 2,
                maxNumberOfPeople: 4,
                
                minNumberOfNights: 5,
              },
            }
          },  
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
              photo: '012',
              alt: 'apartment_1_alt'
            }

          }
        ]  
      }
    ]
  },
  {
    path: 'acco_rosebush',
    displayName: 'Wohnung: Buschwindröschen',
    sections: [
      {
        header: 'pricing',
        columnCount: 1,
        blocks: [
          {
            kind: 'pricing',
            content: {
              global: {
                kind: 'entry',
                firstNightPrice: dinero({amount: 8500, currency: EUR}),
                perNightPrice: dinero({amount: 5500, currency: EUR}),
                additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                
                minNumberOfPeople: 1,
                baseNumberOfPeople: 2,
                maxNumberOfPeople: 4,
                
                minNumberOfNights: 5,
              },
              columns: [
                'timeRange', 'firstNight', 'eachNight', 'peopleNum', 'extraPerson', 'minNumNights'
              ],
              entries: [
                {
                  kind: 'range',
                  from: DateTime.fromISO('2022-12-20'),
                  to: DateTime.fromISO('2023-01-06'),
                  
                  entry: {
                    firstNightPrice: dinero({amount: 8000, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-01-01'),
                  to: DateTime.fromISO('2023-03-24'),
                  
                  entry: {
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-03-25'),
                  to: DateTime.fromISO('2023-06-30'),
                  entry: {
                    
                    firstNightPrice: dinero({amount: 5000, currency: EUR}),
                    perNightPrice: dinero({amount: 3000, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-07-01'),
                  to: DateTime.fromISO('2023-08-31'),
                  entry: {
                    
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 7,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-09-01'),
                  to: DateTime.fromISO('2023-12-20'),
                  entry: {
                    
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-12-21'),
                  to: DateTime.fromISO('2024-01-05'),
                  entry: {
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    minNumberOfPeople: 1,
                    baseNumberOfPeople: 2,
                    maxNumberOfPeople: 4,
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    minNumberOfNights: 5,
                  }
                },

              ],
              footnote: 'pricing-footnote-acco-cornflower'
            }
          },  
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
              photo: '012',
              alt: 'apartment_1_alt'
            }

          }
        ]  
      }
    ]
  }
]

export default accos
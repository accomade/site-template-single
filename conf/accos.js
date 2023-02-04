import { DateTime } from 'luxon'
import { EUR } from '@dinero.js/currencies'
import { dinero } from 'dinero.js'
/*

*/
const accos = [
  {
    path: 'acco_cornflower',
    displayName: 'Wohnung: Kornblume',
    cardContent: {
      coverPhoto: {
          photo: '010',
          alt: 'apartment_1_alt',
          link: "/accomodations/acco_cornflower",
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
        {
          kind: 'pricing-short',
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

            ]
          }
        },  
        {
          kind: 'calendar-available',
          content: {
            calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics',
            search: [3, 14, 21]
          }
        },

      ]
    },
    siteContent: [
      {
        header: 'amneties',
        columnCount: 1,
        blocks: [
          {
            kind: 'amneties',
            content: {
              amneties: {
                size: 55,
                descriptions: [
                  {
                    label: 'quiet',
                    desc: 'cornflower_quiet',
                  },
                  {
                    label: 'shopping',
                    desc: 'cornflower_shopping',
                  },
                  {
                    label: 'sightseeing',
                    desc: 'cornflower_sightseeing',
                  },
                  {
                    label: 'beach',
                    desc: 'cornflower_beach',
                  },
                  {
                    label: 'culture',
                    desc: 'cornflower_culture',
                  },
                  {
                    label: 'desc',
                    desc: 'cornflower_desc',
                  },
                ], 
                sections: [
                  {
                    hr: true,
                    specs: [
                      {
                        label: 'size',
                        kind: 'size',
                        value: 55,
                      },
                      {
                        label: 'parkingLots',
                        kind: 'numValue',
                        value: 2
                      },
                      {
                        label: 'parkingOnSite',
                        kind: 'check',
                        value: true,
                      },
                      {
                        label: 'trainStation',
                        kind: 'check',
                        value: true,
                      },
                      {
                        label: 'airportShuttle',
                        kind: 'check',
                        value: true,
                      },
                      {
                        label: 'onSiteContact',
                        kind: 'checkWithDesc',
                        value: true,
                        desc: 'onSiteContact_desc',
                      },
                      {
                        label: 'pets',
                        desc: 'cornflower_pets_desc',
                        kind: 'checkWithDesc',
                        value: true,
                      }
                    ]
                  },
                  {
                    hr: true,
                    header: 'Features',
                    specs: [
                      {
                        label: 'wifi',
                        kind: 'check',
                        value: true,
                      },
                      {
                        label: 'vaccuum',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'ac',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'iron',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'washingMachine',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'dryingRack',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'clothesDryer',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'sauna',
                        kind: 'checkWithDesc',
                        desc: 'cornflower_sauna_desc',
                        value: true
                      },
                      {
                        label: 'whirlpool',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'solarium',
                        kind: 'check',
                        value: true
                      },
                    ]
                  }
                ],

                rooms: [
                  {
                    header: 'bedroom_1_label',
                    specs: [
                      {
                        kind: 'beds',
                        value: [
                          {
                            kind: 'king',
                            heads: 2
                          },
                          {
                            kind: 'solo',
                            heads: 1,
                            optional: true
                          }
                        ]
                      },

                      {
                        label: 'tv',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'ac',
                        kind: 'check',
                        value: true
                      },
                    ],
                    desc: 'cornflower_bedroom_1_desc'
                  },
                  {
                    header: 'bedroom_2_label',
                    specs: [
                      {
                        kind: 'beds',
                        value: [
                          {
                            kind: 'bunkbed',
                            heads: 2
                          }
                        ]
                      },

                      {
                        label: 'tv',
                        kind: 'check',
                        value: true
                      },
                      {
                        label: 'ac',
                        kind: 'check',
                        value: true
                      },
                    ]
                    
                  },
                  {
                    header: 'kitchen',
                    specs: [
                      {
                        label: 'coffemachine',
                        kind: 'coffeeMachine',
                        value: [
                          'nespresso', 'beans', 'filter'
                        ]
                      },
                      {
                        label: 'eatingTable',
                        kind: 'seats',
                        value: 6
                      },
                      {
                        label: 'microwave',
                        kind: 'check',
                        value: true
                      }
                    ],
                    desc: 'cornflower_kitchen_desc'
                  }
                ],

                outdoors: [
                  {
                    header: 'backyard',
                    specs: [
                      {
                        label: 'size',
                        kind: 'size',
                        value: 32,
                      },
                      {
                        label: 'fenced',
                        kind: 'check',
                        value: false,
                      }
                    ],
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
    siteContent: [
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
    siteContent: [
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
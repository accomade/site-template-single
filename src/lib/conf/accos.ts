import type { Acco } from '$lib/types/accos';
import { mapJsonBlock, type Block, type Section } from '$lib/types/blocks';
import accosJson from './accos.json' assert {type: 'json'};

//let basePath:string='prev/users/template1'

const accos:Acco[] = accosJson.map( (aj) => {
  const a:Acco = {
    displayName: aj.displayName,
    path: aj.path
  }
  a.cardContent = {
    coverPhoto: aj.cardContent.coverPhoto,
    slug: aj.cardContent.slug,
    blocks: aj.cardContent.blocks.map( bj => {
      //@ts-ignore
      const b:Block = mapJsonBlock(bj)
      console.log(bj)
      return b;
    }),
  }
  
  
  a.siteContent = aj.siteContent.map( sj => {
    const s:Section = {
      header: sj.header,
      columnCount: sj.columnCount,
    }
    if(sj.blocks) {
      s.blocks = sj.blocks.map(bj => {
        //@ts-ignore
        const b:Block = mapJsonBlock(bj)
        //console.log(bj)
        return b;
      })
    }

    return s 
  })
  return a
});
export default accos;


/*
const accos:Acco[] = [
  {
    path: 'acco_cornflower',
    displayName: 'Wohnung: Kornblume',
    cardContent: {
      coverPhoto: {
          photoPath: `${basePath}/building_1.jpg`,
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
            entries: [
              {
                kind: 'range',
                from: DateTime.fromISO('2022-12-20',{zone:'utc'}),
                to: DateTime.fromISO('2023-01-06',{zone:'utc'}),
                
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 8000, currency: EUR}),
                  perNightPrice: dinero({amount: 3500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',
                  
                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-01-01',{zone:'utc'}),
                to: DateTime.fromISO('2023-03-24',{zone:'utc'}),
                
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 5500, currency: EUR}),
                  perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',
                  
                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-03-25',{zone:'utc'}),
                to: DateTime.fromISO('2023-06-30',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 5000, currency: EUR}),
                  perNightPrice: dinero({amount: 3000, currency: EUR}),
                  
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-07-01',{zone:'utc'}),
                to: DateTime.fromISO('2023-08-31',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  
                  firstNightPrice: dinero({amount: 8500, currency: EUR}),
                  perNightPrice: dinero({amount: 5500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 7,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-09-01',{zone:'utc'}),
                to: DateTime.fromISO('2023-12-20',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  
                  firstNightPrice: dinero({amount: 5500, currency: EUR}),
                  perNightPrice: dinero({amount: 3500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-12-21',{zone:'utc'}),
                to: DateTime.fromISO('2024-01-05',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  
                  firstNightPrice: dinero({amount: 8500, currency: EUR}),
                  perNightPrice: dinero({amount: 5500, currency: EUR}),
                  
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 5,
                }
              },

            ],
            footnote: 'pricing-footnote-acco-cornflower'
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
                    label: 'sightSeeing',
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
                        value: {
                          specs: [
                            {
                              kind: 'kings',
                              heads: 2
                            },
                            {
                              kind: 'solo',
                              heads: 1,
                              optional: true
                            }
                          ]
                        }
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
                        value: {
                          specs: [
                            {
                              kind: 'bunkbed',
                              heads: 2
                            }
                          ]
                        }
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
                        label: 'coffeeMachine',
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
                'timeRange', 'firstNight', 'eachNight', 'extraPerson', 'minNumNights'
              ],
              entries: [
                {
                  kind: 'range',
                  from: DateTime.fromISO('2022-12-20',{zone:'utc'}),
                  to: DateTime.fromISO('2023-01-06',{zone:'utc'}),
                  
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 8000, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-01-01',{zone:'utc'}),
                  to: DateTime.fromISO('2023-03-24',{zone:'utc'}),
                  
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-03-25',{zone:'utc'}),
                  to: DateTime.fromISO('2023-06-30',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 5000, currency: EUR}),
                    perNightPrice: dinero({amount: 3000, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-07-01',{zone:'utc'}),
                  to: DateTime.fromISO('2023-08-31',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    minNumberOfNights: 7,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-09-01',{zone:'utc'}),
                  to: DateTime.fromISO('2023-12-20',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',

                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-12-21',{zone:'utc'}),
                  to: DateTime.fromISO('2024-01-05',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
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
        columnCount: 1,
        blocks: [
          {
            kind: 'calendar',
            content: {
              calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics'
            }

          },
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
                  photoPath: `${basePath}/kitchen_1.jpg`,
                  alt: 'kitchen',
                },
                {
                  photoPath: `${basePath}/living_1.jpg`,
                  alt: 'living',
                },
                {
                  photoPath: `${basePath}/bed_1.jpg`,
                  alt: 'bed',
                },
              ]
            }
          }
        ]
      },
    ]
  },
  {
    path: 'acco_sunflower',
    displayName: 'Wohnung: Sonnenblume',
    cardContent: {
      coverPhoto: {
          photoPath: `${basePath}/building_2.jpg`,
          alt: 'apartment_1_alt',
          link: "/accomodations/acco_sunflower",
      },
      slug: 'cornflower_card_slug',
      blocks: [
        {
          kind: 'amneties-core',
          content: {
            core: {
              peopleMin: 2,
              peopleMax: 5,
              size: 65, //?? 
              bedRooms: 2, //??
              bathRooms: 2,
              pets: false,
              wifi: true,
              smoking: false,
              ac: true,
              tv: true,
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
              additionalPersonText1: 'adults',
              additionalPersonText2: '7-14',
              additionalPersonText3: '0-6',
              
              minNumberOfNights: 5,
            },
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
                additionalPersonText1: 'adults',
                additionalPersonText2: '7-14',
                additionalPersonText3: '0-6',
                
                minNumberOfNights: 5,
              },
            }
          },  
        ]
      },
      {
        columnCount: 1,
        blocks: [
          {
            kind: 'calendar',
            content: {
              calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics'
            }

          },
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
                  photoPath: `${basePath}/kitchen_2.jpg`,
                  alt: 'kitchen',
                },
                {
                  photoPath: `${basePath}/living_2.jpg`,
                  alt: 'living',
                },
                {
                  photoPath: `${basePath}/bed_4.jpg`,
                  alt: 'bed',
                },
              ]
            }
          }
        ]
      },
    ]
  },
  {
    path: 'acco_rosebush',
    displayName: 'Wohnung: Buschwindröschen',
    cardContent: {
      coverPhoto: {
          photoPath: `${basePath}/building_3.jpg`,
          alt: 'apartment_1_alt',
          link: "/accomodations/acco_rosebush",
      },
      slug: 'cornflower_card_slug',
      blocks: [
        {
          kind: 'amneties-core',
          content: {
            core: {
              peopleMin: 2,
              peopleMax: 6,
              size: 80, //?? 
              bedRooms: 3, //??
              bathRooms: 2,
              pets: false,
              wifi: true,
              smoking: false,
              ac: true,
              tv: true,
              parking: true,
            }
          }
        },
        {
          kind: 'pricing-short',
          content: {
            global: {
              kind: 'entry',
              firstNightPrice: dinero({amount: 9500, currency: EUR}),
              perNightPrice: dinero({amount: 7500, currency: EUR}),
              additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
              additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
              additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
              additionalPersonText1: 'adults',
              additionalPersonText2: '7-14',
              additionalPersonText3: '0-6',
              
              minNumberOfNights: 5,
            },
            entries: [
              {
                kind: 'range',
                from: DateTime.fromISO('2022-12-20',{zone:'utc'}),
                to: DateTime.fromISO('2023-01-06',{zone:'utc'}),
                
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 8000, currency: EUR}),
                  perNightPrice: dinero({amount: 3500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-01-01',{zone:'utc'}),
                to: DateTime.fromISO('2023-03-24',{zone:'utc'}),
                
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 5500, currency: EUR}),
                  perNightPrice: dinero({amount: 3500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',
                  
                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-03-25',{zone:'utc'}),
                to: DateTime.fromISO('2023-06-30',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 5000, currency: EUR}),
                  perNightPrice: dinero({amount: 3000, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-07-01',{zone:'utc'}),
                to: DateTime.fromISO('2023-08-31',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 8500, currency: EUR}),
                  perNightPrice: dinero({amount: 5500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',
                  
                  minNumberOfNights: 7,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-09-01',{zone:'utc'}),
                to: DateTime.fromISO('2023-12-20',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 5500, currency: EUR}),
                  perNightPrice: dinero({amount: 3500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 3,
                }
              },
              {
                kind: 'range',
                from: DateTime.fromISO('2023-12-21',{zone:'utc'}),
                to: DateTime.fromISO('2024-01-05',{zone:'utc'}),
                entry: {
                  kind: 'entry',
                  firstNightPrice: dinero({amount: 8500, currency: EUR}),
                  perNightPrice: dinero({amount: 5500, currency: EUR}),
                  
                  additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                  additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                  additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                  additionalPersonText1: 'adults',
                  additionalPersonText2: '7-14',
                  additionalPersonText3: '0-6',

                  minNumberOfNights: 5,
                }
              },

            ],
            footnote: 'pricing-footnote-acco-cornflower'
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
        header: 'pricing',
        columnCount: 1,
        blocks: [
          {
            kind: 'pricing',
            content: {
              global: {
                kind: 'entry',
                firstNightPrice: dinero({amount: 9500, currency: EUR}),
                perNightPrice: dinero({amount: 7500, currency: EUR}),
                additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                additionalPersonText1: 'adults',
                additionalPersonText2: '7-14',
                additionalPersonText3: '0-6',
                
                minNumberOfNights: 5,
              },
              columns: [
                'timeRange', 'firstNight', 'eachNight', 'extraPerson', 'minNumNights'
              ],
              entries: [
                {
                  kind: 'range',
                  from: DateTime.fromISO('2022-12-20',{zone:'utc'}),
                  to: DateTime.fromISO('2023-01-06',{zone:'utc'}),
                  
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 8000, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-01-01',{zone:'utc'}),
                  to: DateTime.fromISO('2023-03-24',{zone:'utc'}),
                  
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-03-25',{zone:'utc'}),
                  to: DateTime.fromISO('2023-06-30',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 5000, currency: EUR}),
                    perNightPrice: dinero({amount: 3000, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',

                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-07-01',{zone:'utc'}),
                  to: DateTime.fromISO('2023-08-31',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',

                    minNumberOfNights: 7,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-09-01',{zone:'utc'}),
                  to: DateTime.fromISO('2023-12-20',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 5500, currency: EUR}),
                    perNightPrice: dinero({amount: 3500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',

                    minNumberOfNights: 3,
                  }
                },
                {
                  kind: 'range',
                  from: DateTime.fromISO('2023-12-21',{zone:'utc'}),
                  to: DateTime.fromISO('2024-01-05',{zone:'utc'}),
                  entry: {
                    kind: 'entry',
                    firstNightPrice: dinero({amount: 8500, currency: EUR}),
                    perNightPrice: dinero({amount: 5500, currency: EUR}),
                    
                    additionalPersonPrice1: dinero({amount: 1000, currency: EUR}),
                    additionalPersonPrice2: dinero({amount: 500, currency: EUR}),
                    additionalPersonPrice3: dinero({amount: 0, currency: EUR}),
                    additionalPersonText1: 'adults',
                    additionalPersonText2: '7-14',
                    additionalPersonText3: '0-6',
                    
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
        columnCount: 1,
        blocks: [
          {
            kind: 'calendar',
            content: {
              calUrl: 'https://calendar.google.com/calendar/ical/0512a05fa900ee7118de13a14d5244d3ebe2eba056af845e76996e6b9c4f885c%40group.calendar.google.com/public/basic.ics'
            }

          },
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
                  photoPath: `${basePath}/kitchen_3.jpg`,
                  alt: 'kitchen',
                },
                {
                  photoPath: `${basePath}/living_3.jpg`,
                  alt: 'living',
                },
                {
                  photoPath: `${basePath}/bed_3.jpg`,
                  alt: 'bed',
                },
              ]
            }
          }
        ]
      },
    ]
  }
]

export default accos

*/
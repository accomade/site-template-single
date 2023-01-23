import type { Acco } from '$lib/types/accos';


const accos:Acco[] = [
  {
    path: "acco_cornflower",
    displayName: "Wohnung: Kornblume",
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
              photo: '011',
              alt: "apartment_1_alt"
            }

          }
        ]  
      }
    ]
  }
]

export default accos
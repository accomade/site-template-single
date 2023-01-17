import type { Landing } from '$lib/types/landing';

const landing:Landing = {
  headerPhoto: '001',
  sections: [
    {
      header: 'town',
      columnCount: 2,
      blocks: [
        {
          kind: 'text',
          content: {
            ref: 'landing_town'
          }
        },
        {
          kind: 'photo',
          content:{
            photo: '020',
            alt: 'Town'
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
            alt: "Wohnung 1",
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '011',
            alt: "Wohnung 2",
          }
        },
        {
          kind: 'photo',
          content: {
            photo: '012',
            alt: "Wohnung 3",
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
                photo: '002',
                alt: 'Alt Text',
                cols: 1
              },
              {
                photo: '003',
                alt: 'Alt Text',
                cols: 3
              },
              {
                photo: '004',
                alt: 'Alt Text',
                cols: 2
              },
              {
                photo: '005',
                alt: 'Alt Text',
                cols: 1
              },
              {
                photo: '006',
                alt: 'Alt Text',
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

    /*
    'landing_town',
    {
      photo: '008',
      alt: 'Alt Text'
    },
    {
      photo: '009',
      alt: 'Alt Text'
    },
    'landing_apartments',
    {
      photo: '010',
      alt: 'Wohnung 1',
    },
    {
      photo: '011',
      alt: 'Wohnung 2',
    },
    {
      photo: '012',
      alt: 'Wohnung 3',
    },
    'landing_directions',
    'landing_contact',
  ],
  photoGrid: [
    {
      photo: '002',
      alt: 'Alt Text',
      cols: 1
    },
    {
      photo: '003',
      alt: 'Alt Text',
      cols: 3
    },
    {
      photo: '004',
      alt: 'Alt Text',
      cols: 2
    },
    {
      photo: '005',
      alt: 'Alt Text',
      cols: 1
    },
    {
      photo: '006',
      alt: 'Alt Text',
      cols: 1
    }
  ]

}
*/

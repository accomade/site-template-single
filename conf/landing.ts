import type { Landing } from '$lib/types/landing';

const landing:Landing = {
  headerPhoto: "001",
  sections: [
    {
      header: 'impressions',
      columnCount: 1,
      blocks: [
        {
          kind: 'photo-gallery',
          content:
          {
            photos: [
              {
                photo: "002",
                alt: "Alt Text",
                cols: 1
              },
              {
                photo: "003",
                alt: "Alt Text",
                cols: 3
              },
              {
                photo: "004",
                alt: "Alt Text",
                cols: 2
              },
              {
                photo: "005",
                alt: "Alt Text",
                cols: 1
              },
              {
                photo: "006",
                alt: "Alt Text",
                cols: 1
              }
            ]
          }
        }
      ]
    }
  ]
}

export default landing;

    /*
    "landing_town",
    {
      photo: "008",
      alt: "Alt Text"
    },
    {
      photo: "009",
      alt: "Alt Text"
    },
    "landing_apartments",
    {
      photo: "010",
      alt: "Wohnung 1",
    },
    {
      photo: "011",
      alt: "Wohnung 2",
    },
    {
      photo: "012",
      alt: "Wohnung 3",
    },
    "landing_directions",
    "landing_contact",
  ],
  photoGrid: [
    {
      photo: "002",
      alt: "Alt Text",
      cols: 1
    },
    {
      photo: "003",
      alt: "Alt Text",
      cols: 3
    },
    {
      photo: "004",
      alt: "Alt Text",
      cols: 2
    },
    {
      photo: "005",
      alt: "Alt Text",
      cols: 1
    },
    {
      photo: "006",
      alt: "Alt Text",
      cols: 1
    }
  ]

}
*/

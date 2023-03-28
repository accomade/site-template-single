import type { Nav } from "$lib/types/nav";

const nav:Nav = {
  main: [
    {
      key: 'home',
      path: '/',
      external: false,
    },
    {
      key: 'accomodations',
      path: '/accomodations',
      external: false,
    },
    {
      key: 'koserow',
      path: 'http://www.koserower.de',
      external: true, 
    },
    {
      key: 'usedom',
      path: 'http://inselusedom.de',
      external: true,
    },
  ],
  footer: [
    {
      key: 'home',
      path: '/',
      external: false,
    },
    {
      key: 'imprint',
      path: '/imprint',
      external: false,
    },
    {
      key: 'terms',
      path: '/terms',
      external: false,
    }
  ]
}

export default nav
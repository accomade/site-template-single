import type { I18n } from '$lib/types/i18n'

const i18n:I18n = {
  defaultLang: 'de',
  preferBrowserLang: true,
  translations: {
    en: {
      title: 'Welcome to your holidays',
      dict: {
        impressions: 'More Impressions',
        directions: 'Directions',
        apartments: 'Apartments',
        town: 'Koserow',
        koserow: 'Koserow',
        weather: 'Weather'
      },
      nav: {
        home: 'Home',
        location: 'Location',
        accomodations: 'Apartments',
        lang: 'Language',
        imprint: 'Imprint',
        terms: 'Terms',
      
      }
    },
    de: {
      title: 'Willkommen in Ihrem Urlaub',
      dict: {
        impressions: 'Weitere Eindrücke',
        directions: 'Ihre Anreise',
        apartments: 'Ferienwohnungen',
        town: 'Koserow',
        koserow: 'Koserow',
        weather: 'Wetter',
      },
      nav: {
        home: 'Startseite',
        location: 'Der Ort',
        accomodations: 'Ferienwohnungen',
        lang: 'Sprache',
        imprint: 'Impressum',
        terms: 'AGB',
      }
    }
  }
}

export default i18n;
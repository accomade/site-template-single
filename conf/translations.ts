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
        weather: 'Weather',
        town_church: 'Old church in Koserow',
        apartment_1_alt: 'View on Apartment 1',
        apartment_2_alt: 'View on Apartment 2',
        apartment_3_alt: 'View on Apartment 3',
        beach_alt: 'Beach',
      },
      calendar: {
        weekdayLabels: {
          1: 'Mo',
          2: 'Tu',
          3: 'We',
          4: 'Th',
          5: 'Fr',
          6: 'Sa',
          7: 'Su'
        },
        monthLabels: {
          1: 'Jan',
          2: 'Feb',
          3: 'Mar',
          4: 'Apr',
          5: 'May',
          6: 'Jun',
          7: 'Jul',
          8: 'Aug',
          9: 'Sep',
          10: 'Oct',
          11: 'Nov',
          12: 'Dec',
        },
        monthHeaderFormatFun: ( monthLabel:string, year:string) => `${monthLabel} / ${year}`,
        weekendLabel: 'Weekend',
      },
      nav: {
        home: 'Home',
        location: 'Location',
        accomodations: 'Apartments',
        lang: 'Language',
        imprint: 'Imprint',
        terms: 'Terms',
        de: 'Deutsch',
        en: 'English',
      
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
        town_church: 'Backsteinkirche in Koserow',
        apartment_1_alt: 'Blick auf Wohnung 1',
        apartment_2_alt: 'Blick auf Wohnung 2',
        apartment_3_alt: 'Blick auf Wohnung 3',
        beach_alt: 'Strand',

      },
      calendar: {
        weekdayLabels: {
          1: 'Mo',
          2: 'Di',
          3: 'Mi',
          4: 'Do',
          5: 'Fr',
          6: 'Sa',
          7: 'So'
        },
        monthLabels: {
          1: 'Jan',
          2: 'Feb',
          3: 'Mär',
          4: 'Apr',
          5: 'Mai',
          6: 'Jun',
          7: 'Jul',
          8: 'Aug',
          9: 'Sep',
          10: 'Okt',
          11: 'Nov',
          12: 'Dez',
        },
        monthHeaderFormatFun: ( monthLabel:string, year:string) => `${monthLabel} / ${year}`,
        weekendLabel: 'Wochenende',
      },
      nav: {
        home: 'Startseite',
        location: 'Der Ort',
        accomodations: 'Ferienwohnungen',
        lang: 'Sprache',
        imprint: 'Impressum',
        terms: 'AGB',
        de: 'Deutsch',
        en: 'English',
      }
    }
  }
}

export default i18n;
import type { I18n } from '$lib/types/i18n'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'

import { toDecimal } from 'dinero.js' 

const formatMoney = (countryCode: string, d: Dinero<number>) => {
  return toDecimal<number,string>(d, ({value, currency}) => {
    
    let f = parseFloat(value)
    return new Intl.NumberFormat(
      countryCode, 
      { style: 'currency', currency: currency.code }).format(f)
  })
}


const i18n:I18n = {
  defaultLang: 'de',
  preferBrowserLang: true,
  translations: {
    en: {
      title: 'Welcome to your holidays',
      header: {
        title: 'Holiday Apartments by Schumachers',
        slug: 'THE place where you always wanted to spend your holidays.',
      },
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
        pricing: 'Dates and Prices',
        globalPricing: 'Default rates and conditions',
        globalNightlyRate: 'Per Night',
        globalMinimumStay: 'Minimum Stay',
        globalPeopleCount: 'Number of People',
        globalAdditionalPerson: 'Additional Guest',
        from: 'From',
        to: 'To',
        timeRange: 'Dates',
        firstNight: 'First Night',
        eachNight: 'Follow&shy;ing Nights',
        peopleNum: 'Number of Guests',
        extraPerson: 'Addi&shy;tional Guest',
        minNumNights: 'Shor&shy;test Period',
        'pricing-footnote-acco-cornflower': 'Bedding and Towels are included',
        
        amneties: 'Appartment Information',
        amnetiesDesc: '<a>Very cosy apartment ...</a>',
        parkingLots: 'Parking lots',
        parkingOnSite: 'Parking on site',
        parkingNearby: 'Parking in close proximity',
        pets: 'Pets allowed',
        vaccum: 'Vaccum',
        iron: 'Iron',
        airportShuttle: 'Airport shuttle can be arranged',
        trainStation: 'Train station',
        onSiteContact: 'Contact person resides close by',
        quiet: 'Very quiet location to relax',
        busy: 'In the heart of town, bustling live',

        bedroomHeader: 'Bedroom',
        bedOptional: '(extra)',
        kings: 'Kingsize Bed',
        queens: 'Queensize Bed',
        solo: 'Single Bed',
        bunkbed: 'Bunk Bed',
        baby: 'Baby Bed',
        bedroomSeparated: 'Separated',
        tv: 'TV',
        ac: 'AC',
        beddingAvailable: 'Bedding available',
        beddingInclusive: 'Bedding inclusive',

        livingRoomHeader: 'Living Room',
        stereo: 'Stereo',
        lounge: 'Lounge Sofa',
        
        sofaTable: 'Sofa Table',
        eatingTable: 'Eating Table',

        kitchenHeader: 'Kitchen',
        microwave: 'Microwave',
        oven: 'Oven',
        fridge: 'Fridge',
        freezer: 'Freezer',
        dishwascher: 'Dishwasher',
        coffeeMachine: 'Coffee Machine',
        towelsKitchen: 'Towels & Dishwashing Set',

        nespresso: 'Nespresso Machine',
        beans: 'Grinding Coffeemachine',
        portafilter: 'Portafilter Coffeemaker',
        filter: 'Drip Coffeemaker',
        capsules: 'Other Capsules',
        none: 'No Coffeemachine',

        kitchenIntegrated: 'Kitchen integrated in Living Area',

        bathroomHeader: 'Bathroom',
        shower: 'Shower',
        bathtub: 'Bathtub',
        hairDryer: 'Hairdryer',
        towelsAvailable: 'Towels Available',
        towelsIncluded: 'Towels Included',
        bathrobeAvailable: 'Bathrobe Available',
        bathrobeIncluded: 'Bathrobe Included',
        window: 'Window',

        backyard: 'Backyard',
        terrace: 'Terrace',
        balcony: 'Balcony',
        fenced: 'Fenced',
        size: 'Approx. Size',
        barbecue: 'Barbecue',
        barbecueType: 'Barbecue type',
        gas: 'Gas',
        charcoal: 'Charcoal',
        electric: 'Electric',
        shed: 'Shed',
        bicycles: 'Bicycles',
        pool: 'Pool',


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
      cookies: {
        heading: 'This site uses cookies',
        description: 'We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you\’ve provided to them or that they\’ve collected from your use of their services.',
        acceptLabel: 'Accept all cookies',
        rejectLabel: 'Only necessary cookies',
        settingsLabel: 'Cookie settings',
        closeLabel: 'Save & closen settings',
        editLabel: 'Edit cookie settings',
        
        cookieDescriptions: {
          necessary: 'Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.',
          preferences: 'Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.',
          analytics: 'Analytics cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.',
          marketing: 'Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'
        },
        cookieLabels: {
          necessary: 'Necessary cookies',
          preferences: 'Preference cookies',
          analytics: 'Analytics cookies',
          marketing: 'Marketing cookies'
        }
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
      
      },
      formatDate(d:DateTime):string {
        return d.setLocale('en').toFormat('MM/dd/yy')
      },
      formatMoney(d:Dinero<number>):string {
        return formatMoney('en-US', d)
      },
      formatNumberOfGuests3(min:number, def:number, max:number):string {
        return `min: ${min} / standard: ${def} / max: ${max}`
      },
      formatNumberOfGuests2(def:number, max:number):string {
        return `Guests ${def}<br>Maximum ${max}`
      },
      formatNumberOfGuests1(def:number):string {
        return `Guests: ${def}`
      },
      formatAdditionalPersonPrices3(one:Dinero<number>, two:Dinero<number>, three:Dinero<number>):string {
        return `<style scoped>
          ul {
            padding-inline-start: 0; 
            padding-left: 1rem;
            margin-block-start: 0; 
            margin-block-end: 0;
          }
          @media(max-width: 400px) {
            ul {
              list-style-type: none;
            }
          }
        </style>
        <ul>
          <li>Adults: ${ formatMoney('en-US', one) } per night</li>
          <li>7 - 18: ${ formatMoney('en-US', two) } per night</li> 
          <li>less than 7: ${ formatMoney('en-US', three) } per night</li> 
        </ul>
        `
      },
      formatAdditionalPersonPrices2(one:Dinero<number>, two:Dinero<number>):string {
        return `${ formatMoney('en-US', one) } per night <br>
          Discounted: ${ formatMoney('en-US', two) } per night
          (Children age 14 and younger, People with disabilities)
        </ul>
        `
      },
      formatAdditionalPersonPrices1(one:Dinero<number>):string {
        return `${ formatMoney('en-US', one) } per night`
      },
      formatMinNumberOfNights(num:number):string {
        return `${num} nights`
      },
      formatSeating(n:number):string {
        return `Seating for ${n} people`
      }, 
      formatNumberOf(n: number):string {
        return `${n} pieces`
      },
      formatSize(n: number): string {
        return `${n}&nbsp;m²`
      },
      formatBed(n: number): string {
        return `for ${n}`
      }
     
    },
    de: {
      title: 'Willkommen in Ihrem Urlaub',
      header: {
        title: 'Ferienwohnungen von Schumachers',
        slug: 'Hier wollten sie schon immer ihre Ferien verbringen.',
      },
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
        pricing: 'Preisaufstellung',
        globalPricing: 'Allgemeine Angaben',
        globalNightlyRate: 'Übernachtung',
        globalMinimumStay: 'Mindestzeitraum',
        globalPeopleCount: 'Personenanzahl',
        globalAdditionalPerson: 'Zusätzlicher Gast',
        from: 'Von',
        to: 'Bis',
        timeRange: 'Zeit&shy;raum',
        firstNight: 'Erste Über&shy;nach&shy;tung',
        eachNight: 'Jede weitere Nacht',
        peopleNum: 'Anzahl der Gäste',
        extraPerson: 'Wei&shy;terer Gast',
        minNumNights: 'Mindest&shy;aufent&shy;halt',
        'pricing-footnote-acco-cornflower': 'Hand&shy;tücher und Bett&shy;wäsche sind in&shy;klu&shy;sive',
        
        amneties: 'Informationen',

        cornflower_quiet: 'Very quiet location to relax. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',

        cornflower_busy: 'In the heart of town, bustling live. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua',

        cornflower_desc: '<p>Sehr gemütliches Apartment ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        
        cornflower_beach: '<p>Strandnah ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',

        cornflower_sightSeeing: '<p>Ausflugsziele ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed</p>',
        cornflower_culture: '<p>Kulturelles Angebot ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        cornflower_shopping: '<p>Sehr gemütliches Apartment ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        
        cornflower_petsDesc: 'Kleine Hunde und Katzen sind in Ordnung gegen Aufpreis von 10,- € für den gesamten Zeitraum',

        cornflower_bedroom_2_desc: 'Die zusätzliche Aufbettung versteht sich als Service, falls Ihre Kinder nicht alleine schlafen können oder wollen. Es ist nicht gestattet mit mehr als 4 Personen in der Wohnung zu übernachten.',

        cornflower_living_desc: 'Die zusätzliche Aufbettung versteht sich als Service, falls jemand mal ausquartiert werden muss, wegen Schnarchen oder Ähnlichem. Es ist nicht gestattet mit mehr als 4 Personen in der Wohnung zu übernachten.',

        cornflower_backyard_desc: 'Großer Garten nach Süden. Nicht einsehbar. Eignet sich also besonders zum Sonnen und ungestörte Zeit verbringen.',

        cornflower_bathroom_desc: 'Die Bademäntel können Sie gegen einen Pfand bei der Verwaltung erhalten.',

        cornflower_kitchen_desc: 'Bitte achten Sie darauf, dass der Geschirrspüler nicht ohne Spezialsalz läuft. Im Zweifel wenden Sie sich an die Verwaltung.',

        cornflower_barbecue_desc: 'Holzohle und Grillanzünder sind vorhanden',

        cornflower_shed_desc: 'Gartenschuppen mit Sandspielzeug für Kleinkinder, einer Tischtennisplatte und Unterstellmöglichkeit für bis zu 4 Fahrrädern',

        cornflower_bicycles_desc: 'Ein Damenrad und ein Herrenrad',


        cornflower_pool_desc: 'Größe: 8x4m; mit Gegenstromanlage; beheizt; von Mai bis September nutzbar',

        beach: "Strand",
        sightSeeing: "Sehenswürdigkeiten",
        culture: "Kulturelles Angebot",
        shopping: "Einkaufsmöglichkeiten",
        desc: "Allgemeine Informationen",
        quiet: "Ruhig Gelegen",
        busy: "Zentral Gelegen",

        parkingLots: 'Parking lots',
        parkingOnSite: 'Parking on site',
        parkingNearby: 'Parking in close proximity',
        pets: 'Pets allowed',
        vaccum: 'Vaccum',
        iron: 'Iron',
        airportShuttle: 'Airport shuttle can be arranged',
        trainStation: 'Train station',
        onSiteContact: 'Contact person resides close by',
        
        roomsHeader: 'Zimmer',
        
        bedroomHeader: 'Schlafzimmer',
        bedOptional: '(extra)',
        kings: 'Großes Doppelbett',
        queens: 'Doppelbett',
        solo: 'Einzelbett',
        bunkbed: 'Etagenbett',
        baby: 'Kinderbett',
        bedroomSeparated: 'Separiert',
        tv: 'TV',
        ac: 'AC',
        beddingAvailable: 'Bedding available',
        beddingInclusive: 'Bedding inclusive',

        livingRoomHeader: 'Wohnbereich',
        stereo: 'Stereo',
        lounge: 'Lounge Sofa',
        
        sofaTable: 'Sofa Table',
        eatingTable: 'Esstisch',
        
        kitchenHeader: 'Kitchen',
        microwave: 'Microwave',
        oven: 'Oven',
        fridge: 'Fridge',
        freezer: 'Freezer',
        dishwascher: 'Geschirrspüler',
        coffeeMachine: 'Kaffee',
        towelsKitchen: 'Towels & Dishwashing Set',

        nespresso: 'Nespresso Maschine',
        beans: 'Kaffeevollautomat',
        portafilter: 'Siebträgermaschine & Mühle',
        filter: 'Filtermaschine',
        capsules: 'Kapselmaschine',
        none: 'Keine Kaffeemaschine',

        kitchenIntegrated: 'Kitchen integrated in Living Area',

        bathroomHeader: 'Bad',
        shower: 'Shower',
        bathtub: 'Bathtub',
        hairDryer: 'Hairdryer',
        towelsAvailable: 'Towels Available',
        towelsIncluded: 'Towels Included',
        bathrobeAvailable: 'Bathrobe Available',
        bathrobeIncluded: 'Bathrobe Included',
        window: 'Window',

        outdoorsHeader: 'Außenbereich',
        
        backyard: 'Garten',
        terrace: 'Terrasse',
        balcony: 'Balkon',
        fenced: 'Eingezäunt',
        size: 'Fläche ca.',
        barbecue: 'Grill',
        barbecueType: 'Grilltyp',
        gas: 'Gas',
        charcoal: 'Holzkohle',
        electric: 'Elektrisch',
        shed: 'Gartenhaus',
        bicycles: 'Fahrräder',
        pool: 'Swimming Pool',

      
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
      cookies: 
      {
        heading: 'Diese Webseite verwendet Cookies',
        description: 'Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anbieten zu können und die Zugriffe auf unsere Website zu analysieren. Außerdem geben wir Informationen zu Ihrer Verwendung unserer Website an unsere Partner für soziale Medien, Werbung und Analysen weiter. Unsere Partner führen diese Informationen möglicherweise mit weiteren Daten zusammen, die Sie ihnen bereitgestellt haben oder die sie im Rahmen Ihrer Nutzung der Dienste gesammelt haben.',
        acceptLabel: 'Alle akzeptieren',
        rejectLabel: 'Nur Essentielle',
        settingsLabel: 'Cookie Einstellungen',
        closeLabel: 'Schließen & Speichern',
        editLabel: 'Einstellungen anpassen',
        
        cookieDescriptions: {
          necessary: 'Notwendige Cookies helfen dabei, eine Webseite nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Webseite ermöglichen. Die Webseite kann ohne diese Cookies nicht richtig funktionieren.',
          preferences: 'Präferenz-Cookies ermöglichen einer Webseite sich an Informationen zu erinnern, die die Art beeinflussen, wie sich eine Webseite verhält oder aussieht, wie z. B. Ihre bevorzugte Sprache oder die Region in der Sie sich befinden.',
          analytics: 'Analyse-Cookies helfen Webseiten-Besitzern zu verstehen, wie Besucher mit Webseiten interagieren, indem Informationen anonym gesammelt und gemeldet werden.',
          marketing: 'Marketing-Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind und daher wertvoller für Publisher und werbetreibende Drittparteien sind.'
        },
        cookieLabels: {
          necessary: 'Notwendige Cookies',
          preferences: 'Präferenz-Cookies',
          analytics: 'Analyse-Cookies',
          marketing: 'Marketing-Cookies'
        }
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
      },
      formatDate(d:DateTime):string {
        return d.setLocale('de').toFormat('dd.MM.yyyy')
      },
      formatMoney(d:Dinero<number>):string {
        return formatMoney('de-DE', d)
      },
      formatNumberOfGuests3(min:number|undefined, def:number|undefined, max:number|undefined):string {
        return `Minimale&nbsp;Belegung:&nbsp;${min} Normale&nbsp;Belegung:&nbsp;${def} Maximale&nbsp;Belegung:&nbsp;${max}`
      },
      formatNumberOfGuests2(def:number|undefined, max:number|undefined):string {
        return `Normale Belegung: ${def} <br>Maximale Belegung: ${max}`
      },
      formatNumberOfGuests1(def:number|undefined):string {
        return `Belegung: ${def} Gäste`
      },
      formatAdditionalPersonPrices3(one:Dinero<number>, two:Dinero<number>, three:Dinero<number>):string {
        return `<style scoped>
        ul {
          padding-inline-start: 0; 
          padding-left: 1rem;
           margin-block-start: 0; 
           margin-block-end: 0;
        }
        @media(max-width: 400px) {
          ul {
            list-style-type: none;
          }
        }
        </style>
        <ul>
          <li>Erwachsene: ${ formatMoney('de-DE', one) } pro Nacht</li>
          <li>7 - 18: ${ formatMoney('de-DE', two) } pro Nacht</li> 
          <li>Jünger als 7: ${ formatMoney('de-DE', three) } pro Nacht</li> 
        </ul>
        `
      },
      formatAdditionalPersonPrices2(one:Dinero<number>, two:Dinero<number>):string {
        return `${ formatMoney('de-DE', one) } pro Nacht<br>
          Ermäßigt: ${ formatMoney('de-DE', two) } pro Nacht
          (Kinder bis 14 inklusive, Menschen mit Behinderung)
        </ul>
        `
      },
      formatAdditionalPersonPrices1(one:Dinero<number>):string {
        return `${ formatMoney('de-DE', one) } pro Nacht`
      },
      formatMinNumberOfNights(num:number):string {
        return `${num} Nächte`
      },
      formatSeating(n:number):string {
        return `Sitzplätze für ${n} Erwachsene`
      },
      formatNumberOf(n: number):string {
        return `Anzahl ${n}`
      },
      formatSize(n: number): string {
        return `${n}&nbsp;m²`
      },
      formatBed(n: number): string {
        return `für ${n} Person(en)`
      }
    }
  }
}

export default i18n;
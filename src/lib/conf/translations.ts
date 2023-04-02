import type { I18n } from '$lib/types/i18n'
import type { DateTime } from 'luxon'
import type { Dinero } from 'dinero.js'
import { format } from './formats.js'

import { toDecimal } from 'dinero.js' 
import type { BedKind } from '$lib/types/accos'

const formatMoney = (countryCode: string, d: Dinero<number>) => {
  return toDecimal<number,string>(d, ({value, currency}) => {
    
    let f = parseFloat(value)
    return new Intl.NumberFormat(
      countryCode, 
      { style: 'currency', currency: currency.code }).format(f)
  })
}

const formatDate = (d:DateTime, format:string):string => {
  return d.setLocale('en').toFormat(format)
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
        home: 'Home',
        location: 'Location',
        accomodations: 'Apartments',
        accoCornflower: 'Cornflower',
        accoSunflower: 'Sunflower',
        accoRosebush: 'Rosebush',

        lang: 'Language',
        imprint: 'Imprint',
        terms: 'Terms',
        de: 'Deutsch',
        en: 'English',
        usedom: 'Isle of Usedom',

        impressions: 'Some Impressions',
        directions: 'Directions',
        apartments: 'Apartments',
        town: 'Koserow',
        weather: 'Weather',
        calendarHeader: 'Booking Plan',

        pricing: 'Dates and Prices',
        shortPriceLabel: 'Price range',
        cornflower_card_slug: 'For details please visit the apartments page',

        availability: 'Availability',

        globalPricing: 'Common Prices',
        globalNightlyRate: 'Per Night',
        globalMinimumStay: 'Minimum Nights to Stay',
        globalPeopleCount: 'Number Of Guests',
        globalAdditionalPerson: 'Additional Guest',
        from: 'From',
        to: 'To',
        timeRange: 'Range',
        firstNight: 'First Night',
        eachNight: 'Every Other Night',
        peopleNum: 'Number Of Guests',
        extraPerson: 'Add. Guest',
        minNumNights: 'Min. Stay',
        
        amneties: 'All You Need To Know',
        roomsHeader: 'Rooms',
        outdoorsHeader: 'Outdoors',
        
        
        size: 'Size',
        bedOptional: '(extra)',
        kings: 'Kingsize Bed',
        queens: 'Queensize Bed',
        solo: 'Single Bed',
        bunkbed: 'Bunk Bed',
        baby: 'Cot',

        coffeeMachine: 'Coffee',
        nespresso: 'Nespresso',
        beans: 'fully automatic coffee machine',
        portafilter: 'Portafilter',
        filter: 'filter coffee machine',
        capsules: 'Other Capsule Machine',
        none: 'No Coffee Machine',
        
        koserow: 'Koserow',
        town_church: 'Felssteinkirche in Koserow',
        apartment_1_alt: 'View on Appartment 1',
        apartment_2_alt: 'View on Appartment 2',
        apartment_3_alt: 'View on Appartment 3',
        beach_alt: 'Beach',
        'pricing-footnote-acco-cornflower': 'Towels and bedding are included.',
        
        quiet: "Quiet Environment",
        cornflower_quiet: 'Very quiet location to relax. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        shopping: "Shopping",
        cornflower_shopping: '<p>Sehr gemütliches Apartment ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        sightSeeing: "Sightseeing",
        cornflower_sightseeing: '<p>Ausflugsziele ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed</p>',
        beach: "Beach",
        cornflower_beach: '<p>Strandnah ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        culture: "Culture",
        cornflower_culture: '<p>Kulturelles Angebot ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        desc: "Further Information",
        cornflower_desc: '<p>Sehr gemütliches Apartment ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        

        parkingLots: 'Parking Lots',
        parkingOnSite: 'On site parking',
        pets: 'Pets allowed',
        cornflower_pets_desc: 'Small cats and dogs are allowed. But cost additional 10€ per whole vacation.',
        airportShuttle: 'Airport shuttle can be arranged',
        trainStation: 'Trainstaion shuttle can be arranged',
        onSiteContact: 'Contact Person available',
        onSiteContact_desc: 'Weekdays from 7:00 - 17:00',
        
        wifi: 'Free WIFI',
        vaccuum: 'Vaccuum',
        iron: 'Iron',
        washingMachine: 'Washing machine',
        dryingRack: 'Drying Rack',
        clothesDryer: 'Clothes Dryer',
        
        sauna: 'Sauna',
        cornflower_sauna_desc: 'The saune can be used whole year around',
        whirlpool: 'Whirlpool',
        solarium: 'Solarium',

        
        bedroom_1_label: 'Bed Room 1',
        cornflower_bedroom_1_desc: 'The additional bed can be used in case your kids don\'t like or want to sleep alone in new environment. It\'s prohibited to sleep with more than 5 people in this apartment.',
        bedroom_2_label: 'Bed Room 2',

        tv: 'TV',
        ac: 'AC',

        kitchenHeader: 'Kitchen',
        eatingTable: 'Table',
        microwave: 'Microwave',
        
        
        cornflower_backyard_desc: 'Big shielded garden pointing south wards. Ideal for sunbathing and relaxing.',
        cornflower_kitchen_desc: 'Please make sure to always have enough salt in the dishes washer, otherwise it might break.',

        backyard: 'Backyard',
        fenced: 'Fenced',

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
        monthHeaderFormatFun: (month:string, year:string) => {
          return format('monthHeader','en', {month, year})
        },
        weekendLabel: 'Weekend',
        typeNames: {
          defaultOccupationTypeName: 'Occupied'
        },
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
      formatDate(d:DateTime):string {
        return d.setLocale('en').toFormat('MM/dd/yy')
      },
      formatAvailability(from:DateTime|null, forDays:number, maxFutureDate:DateTime):string {
        if(from == null) {
          return `No availability for ${forDays} days until ${maxFutureDate.toFormat('dd.MM.yyyy')}`
        }
        return `Min. ${forDays} days from ${from.toFormat('dd.MM.yyyy')} available`
      },

      formatMoney(d:Dinero<number>):string {
        return formatMoney('en-US', d)
      },
      formatMinimumPrice(d:Dinero<number>): string {
        const mo = formatMoney('en-US', d)
        return `From ${mo} per night`
      },
      formatMaximumPrice(d:Dinero<number>): string {
        const mo = formatMoney('en-US', d)
        return `To ${mo} per night`
      },
      formatAdditionalPersonPrice(price:Dinero<number>, terms:string|undefined):string {
        return `${ formatMoney('en-US', price) } (${ terms ? terms : 'contact us'})`
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
      formatBed(n: number, kind: BedKind): string {
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
        home: 'Startseite',
        location: 'Der Ort',
        accomodations: 'Ferienwohnungen',
        accoCornflower: 'Kornblume',
        accoSunflower: 'Sonnenblume',
        accoRosebush: 'Buschwindröschen',

        lang: 'Sprache',
        imprint: 'Impressum',
        terms: 'AGB',
        de: 'Deutsch',
        en: 'English',
        usedom: 'Insel Usedom',

        impressions: 'Weitere Eindrücke',
        directions: 'Ihre Anreise',
        apartments: 'Ferienwohnungen',
        town: 'Koserow',
        weather: 'Wetter',
        
        calendarHeader: 'Belegungsplan',

        pricing: 'Preisaufstellung',
        shortPriceLabel: 'Übernachtungskosten',
        cornflower_card_slug: 'Für Details gehen Sie auf die Seite der Ferienwohnung',

        availability: 'Verfügbarkeit',

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
        
        amneties: 'Informationen',
        roomsHeader: 'Zimmer',
        outdoorsHeader: 'Außenbereich',
        
        
        size: 'Fläche ca.',
        bedOptional: '(extra)',
        kings: 'Großes Doppelbett',
        queens: 'Doppelbett',
        solo: 'Einzelbett',
        bunkbed: 'Etagenbett',
        baby: 'Kinderbett',

        coffeeMachine: 'Kaffee',
        nespresso: 'Nespresso Maschine',
        beans: 'Kaffeevollautomat',
        portafilter: 'Siebträgermaschine & Mühle',
        filter: 'Filtermaschine',
        capsules: 'Kapselmaschine',
        none: 'Keine Kaffeemaschine',
        
        koserow: 'Koserow',
        town_church: 'Felssteinkirche in Koserow',
        apartment_1_alt: 'Blick auf Wohnung 1',
        apartment_2_alt: 'Blick auf Wohnung 2',
        apartment_3_alt: 'Blick auf Wohnung 3',
        beach_alt: 'Strand',
        'pricing-footnote-acco-cornflower': 'Hand&shy;tücher und Bett&shy;wäsche sind in&shy;klu&shy;sive',
        
        quiet: "Ruhig Gelegen",
        cornflower_quiet: 'Very quiet location to relax. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
        shopping: "Einkaufsmöglichkeiten",
        cornflower_shopping: '<p>Sehr gemütliches Apartment ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        sightSeeing: "Sehenswürdigkeiten",
        cornflower_sightseeing: '<p>Ausflugsziele ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed</p>',
        beach: "Strand",
        cornflower_beach: '<p>Strandnah ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        culture: "Kulturelles Angebot",
        cornflower_culture: '<p>Kulturelles Angebot ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        desc: "Allgemeine Informationen",
        cornflower_desc: '<p>Sehr gemütliches Apartment ... Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
        

        parkingLots: 'Parkplätze',
        parkingOnSite: 'Parkplätze auf dem Gelände',
        pets: 'Haustiere gestattet',
        cornflower_pets_desc: 'Kleine Hunde und Katzen sind in Ordnung gegen Aufpreis von 10,- € für den gesamten Zeitraum',
        airportShuttle: 'Flughafen-Transit kann organisiert werden',
        trainStation: 'Transit von der Bahnstation kann organsiert werden',
        onSiteContact: 'Kontaktperson vor Ort',
        onSiteContact_desc: 'Wochentags von 7:00 - 17:00',
        
        wifi: 'Kostenloses WLAN',
        vaccuum: 'Staubsauger',
        iron: 'Bügeleisen und Bügelbrett',
        washingMachine: 'Waschmaschine',
        dryingRack: 'Wäscheständer',
        clothesDryer: 'Wäschetrockner',
        
        sauna: 'Sauna',
        cornflower_sauna_desc: 'Die Sauna kann ganzjährig verwendet werden',
        whirlpool: 'Whirlpool',
        solarium: 'Solarium',

        
        bedroom_1_label: 'Schlafzimmer 1',
        cornflower_bedroom_1_desc: 'Die zusätzliche Aufbettung versteht sich als Service, falls Ihre Kinder nicht alleine schlafen können oder wollen. Es ist nicht gestattet mit mehr als 4 Personen in der Wohnung zu übernachten.',
        bedroom_2_label: 'Schlafzimmer 2',

        tv: 'TV',
        ac: 'Klimaanlage',

        kitchenHeader: 'Küche',
        eatingTable: 'Esstisch',
        microwave: 'Mikrowelle',
        
        
        cornflower_backyard_desc: 'Großer Garten nach Süden. Nicht einsehbar. Eignet sich also besonders zum Sonnen und ungestörte Zeit verbringen.',
        cornflower_kitchen_desc: 'Bitte achten Sie darauf, dass der Geschirrspüler nicht ohne Spezialsalz läuft. Im Zweifel wenden Sie sich an die Verwaltung.',

       
        backyard: 'Garten',
        fenced: 'Eingezäunt',
        
        /* TODO possible values integrate in Editor

        living_desc: 'Die zusätzliche Aufbettung versteht sich als Service, falls jemand mal ausquartiert werden muss, wegen Schnarchen oder Ähnlichem. Es ist nicht gestattet mit mehr als 4 Personen in der Wohnung zu übernachten.',
        bathroom_desc: 'Die Bademäntel können Sie gegen einen Pfand bei der Verwaltung erhalten.',
        barbecue_desc: 'Holzohle und Grillanzünder sind vorhanden',
        shed_desc: 'Gartenschuppen mit Sandspielzeug für Kleinkinder, einer Tischtennisplatte und Unterstellmöglichkeit für bis zu 4 Fahrrädern',
        bicycles_desc: 'Ein Damenrad und ein Herrenrad',
        pool_desc: 'Größe: 8x4m; mit Gegenstromanlage; beheizt; von Mai bis September nutzbar',
        
        stereo: 'Stereo',
        lounge: 'Lounge Sofa',
        
        sofaTable: 'Sofa Table',
        
        oven: 'Oven',
        fridge: 'Fridge',
        freezer: 'Freezer',
        dishwascher: 'Geschirrspüler',
        towelsKitchen: 'Towels & Dishwashing Set',

        
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

        terrace: 'Terrasse',
        balcony: 'Balkon',
        fenced: 'Eingezäunt',
        barbecue: 'Grill',
        barbecueType: 'Grilltyp',
        gas: 'Gas',
        charcoal: 'Holzkohle',
        electric: 'Elektrisch',
        shed: 'Gartenhaus',
        bicycles: 'Fahrräder',
        pool: 'Swimming Pool',
        */
      
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
        typeNames: {
          defaultOccupationTypeName: 'Belegt'
        },
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
      formatDate(d:DateTime):string {
        return d.setLocale('de').toFormat('dd.MM.yyyy')
      },

      formatAvailability(from:DateTime|null, forDays:number, maxFutureDate:DateTime):string {
        if(from == null) {
          return `Nichts frei für ${forDays} Tage bis ${maxFutureDate.toFormat('dd.MM.yyyy')}`
        }
        return `Mindestens ${forDays} Tage ab dem ${from.toFormat('dd.MM.yyyy')} verfügbar`
      },

      formatMoney(d:Dinero<number>):string {
        return formatMoney('de-DE', d)
      },
      formatMinimumPrice(d:Dinero<number>): string {
        const mo = formatMoney('de-DE', d)
        return `Ab ${mo} pro Nacht`
      },
      formatMaximumPrice(d:Dinero<number>): string {
        const mo = formatMoney('de-DE', d)
        return `Maximal ${mo} pro Nacht`
      },

      formatAdditionalPersonPrice(price:Dinero<number>, terms:string|undefined):string {
        return `${ formatMoney('de-DE', price) } (${ terms ? terms : 'auf Anfrage'})`
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
      formatBed(n: number, kind: BedKind): string {
        return `für ${n} Person(en)`
      }
    }
  }
}

export default i18n;
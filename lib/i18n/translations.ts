export type Locale = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      books: 'Books',
      poeticImpulses: 'Poetic Impulses',
      contact: 'Contact',
      // sub items
      counseling: 'Counseling & Therapy',
      integration: 'Integration Support',
      ceremonies: 'Healing Ceremonies',
      sacredExperiences: 'Sacred Experiences',
      newMoon: 'New Moon Meditations',
      womenWild: 'Women Wild And Wise',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
    },
    common: {
      bookSession: 'Book a session',
      learnMore: 'Learn more',
      getInTouch: 'Get in touch',
    },
    contact: {
      formName: 'Your name',
      formEmail: 'Your email',
      formMessage: 'Your message',
      formSend: 'Send message',
      phone: 'Phone',
      email: 'Email',
    },
    products: {
      buy: 'Buy Now',
      price: 'Price',
      download: 'Download',
    },
    blog: {
      readMore: 'Read More',
      back: 'Back',
      publishedOn: 'Published on',
    },
    checkout: {
      title: 'Checkout',
      total: 'Total',
      pay: 'Pay Now',
      processing: 'Processing...',
      success: 'Payment Successful!',
      error: 'Payment Failed',
    },
  },
  de: {
    nav: {
      about: 'Über mich',
      services: 'Angebote',
      books: 'Bücher',
      poeticImpulses: 'Poetische Impulse',
      contact: 'Kontakt',
      //sub items
      counseling: 'Beratung & Therapie',
      integration: 'Integrationsbegleitung',
      ceremonies: 'Heilzeremonien',
      sacredExperiences: 'Heilige Erfahrungen',
      newMoon: 'Neumond-Meditationen',
      womenWild: 'Women Wild And Wise',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutz',
    },
    common: {
      bookSession: 'Termin buchen',
      learnMore: 'Mehr erfahren',
      getInTouch: 'Kontakt aufnehmen',
    },
    contact: {
      formName: 'Dein Name',
      formEmail: 'Deine E-Mail',
      formMessage: 'Deine Nachricht',
      formSend: 'Nachricht senden',
      phone: 'Telefon',
      email: 'E-Mail',
    },
    products: {
      buy: 'Jetzt kaufen',
      price: 'Preis',
      download: 'Herunterladen',
    },
    blog: {
      readMore: 'Mehr lesen',
      back: 'Zurück',
      publishedOn: 'Veröffentlicht am',
    },
    checkout: {
      title: 'Kasse',
      total: 'Gesamt',
      pay: 'Jetzt bezahlen',
      processing: 'Wird bearbeitet...',
      success: 'Zahlung erfolgreich!',
      error: 'Zahlung fehlgeschlagen',
    },
  },
};

// Helper function to get translations
export function getTranslations(locale: Locale) {
  return translations[locale];
}
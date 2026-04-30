export type Locale = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      // sub items
      counseling: 'Counseling & Therapy',
      guidance: 'Spiritual Guidance',
      cacao: 'Cacao Meditations',
      integration: 'Medicine Integration Support',
      ceremonies: 'Shamanic Healing Ceremonies',
      matrimony: 'Shamanic Matrimony',
      international: 'Distance Energy Healing',
      // ... end services
      publications: 'Publications',
      testimonials: 'Testimonials',
      soulScibe: 'Soulscribe',
      contact: 'Contact',
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
    home: {
      tagline: 'sArAh from eArth to heArt:',
      description: 'Psycho-spiritual guidance & healing',
      hero: 'Come home to your soul, your truth, your light',
      book: 'Book a Consultation',
      life: [
        'The foundation of life is freedom',
        'The result of life is expansion',
        'The purpose of life is joy'
      ]
    }
  },
  de: {
    nav: {
      about: 'Über',
      team: 'Sarah, Team, & Soulwayo',
      philosophy: 'Philosophy',
      testimonials: 'Testimonials',
      // ... end about
      services: 'Angebote',
      //sub items
      counseling: 'Beratung & Therapie',
      guidance: 'Spiritual Guidance',
      ceremonies: 'Heilzeremonien',
      integration: 'Integrationsbegleitung',
      cacao: 'Cacao Meditations',
      international: 'International Energy Work',
      matrimony: 'Shamanic Matrimony',
      //
      publications: 'Bücher',
      soulScibe: 'Soul Scribe',
      contact: 'Kontakt',
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
    home: {
      tagline: 'sArAh from eArth to heArt:',
      description: 'Psycho-spiritual guidance & healing',
      hero: 'Come home to your soul, your truth, your light',
      book: 'Book a Consultation',
      life: [
        'The foundation of life is freedom',
        'The result of life is expansion',
        'The purpose of life is joy'
      ]
    }
  },
};

// Helper function to get translations
export function getTranslations(locale: Locale) {
  return translations[locale];
}
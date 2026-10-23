export type Locale = 'en' | 'de';

export type Service = {
  label: string;
  slug: string;
  description: string;
  dot: string;
  cta: string;
};

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      counseling: 'Counseling & Therapy',
      guidance: 'Spiritual Guidance',
      cacao: 'Cacao Meditation',
      integration: 'Medicine Integration Support',
      retreats: 'Retreats',
      matrimony: 'Shamanic Matrimony',
      international: 'Healing Across Distance',
      publications: 'Publications',
      testimonials: 'Testimonials',
      soulScribe: 'Soulscribe',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
    },
    common: {
      bookSession: 'Book a session',
      startConversation: 'Start a conversation',
      learnMore: 'Explore Services',
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
      tagline: 'sArAh from eArth to heArt',
      description: 'Psycho-Spiritual Counseling & Healing',
      hero: 'Come home to your soul, your truth, your light',
      book: 'Book a session',
      sacredGuidance: 'Sacred guidance to help you remember your light',
      intro: 'I’m a psychotherapist, yoga teacher, author, and shamanic practitioner, working in the place where the psychological and the spiritual meet. I’ve accompanied children and adults — individually and in groups — with presence, strength, and peace.',
      introQuote: 'Fifteen years walking this path with others. I’d be honored to walk it with you.',
      introSign: '— Sarah',
      ceremonyLabel: 'Retreats',
      ceremonyHeadline: 'Reconnect with yourself, your spirit, and your purpose',
      ceremonyBody: 'Multi-day ceremonial retreats in nature with Sarah & Johannes',
      ceremonyCta: 'View next retreat',
      manifestoLabel: 'Soulshine',
      manifestoCta: 'Read our story',
      manifesto: [
        { type: 'lead', lines: ['Soulshine is a sacred space for people longing to come home to themselves.'] },
        { type: 'sub', lines: [
          'Where healing meets spirituality.',
          'Where science meets ancient wisdom.',
        ] },
      ],
      offeringsEyebrow: 'Offerings',
      homeQuote: 'She helped me free myself from fears that had blocked me since my childhood, so that I could close the door on the past.',
      homeQuoteLink: 'Read more testimonials',
      life: [
        'The foundation of life is freedom',
        'The result of life is expansion',
        'The purpose of life is joy',
      ],
      services: [
        {
          label: 'Counseling & Therapy',
          slug: 'counseling',
          description: 'Psycho-spiritual support rooted in compassion and self-truth.',
          dot: '#e60000',
          cta: 'Begin your path',
        },
        {
          label: 'Spiritual Guidance',
          slug: 'spiritual-guidance',
          description: 'Find clarity on your soul path with loving, grounded guidance.',
          dot: '#e66400',
          cta: 'Find your clarity',
        },
        {
          label: 'Retreats',
          slug: 'retreats',
          description: 'Multi-day ceremonial retreats in nature with Sarah & Johannes.',
          dot: '#e6e200',
          cta: 'Journey with us',
        },
        {
          label: 'Medicine Integration Support',
          slug: 'medicine-integration',
          description: 'Integrate plant-medicine and psychedelic experiences into lasting change.',
          dot: '#28aa0e',
          cta: 'Integrate & grow',
        },
        {
          label: 'Cacao Meditation',
          slug: 'cacao-meditations',
          description: 'Heart-opening ceremony with ritual cacao and healing frequencies.',
          dot: '#0096e6',
          cta: 'Open your heart',
        },
        {
          label: 'Healing Across Distance',
          slug: 'distance-work',
          description: 'Soul readings, frequency medicine, and smudging — wherever you are.',
          dot: '#1b05ac',
          cta: 'Connect from anywhere',
        },
        {
          label: 'Shamanic Matrimony',
          slug: 'shamanic-matrimony',
          description: 'Sacred union ceremonies woven with ritual and spiritual intention.',
          dot: '#7301d0',
          cta: 'Celebrate your union',
        },
      ] as Service[],
    },
  },

  de: {
    nav: {
      about: 'Über uns',
      services: 'Angebote',
      counseling: 'Beratung & Therapie',
      guidance: 'Spirituelle Begleitung',
      cacao: 'Cacao Meditation',
      integration: 'Integrationsbegleitung',
      retreats: 'Retreats',
      matrimony: 'Schamanische Trauung',
      international: 'Heilung über Distanz',
      publications: 'Bücher',
      testimonials: 'Referenzen',
      soulScribe: 'Soulscribe',
      contact: 'Kontakt',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutz',
    },
    common: {
      bookSession: 'Termin buchen',
      startConversation: 'Gespräch beginnen',
      learnMore: 'Angebote entdecken',
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
      tagline: 'sArAh from eArth to heArt',
      description: 'Psycho-spirituelle Beratung & Heilung',
      hero: 'Komm nach Hause — zu deiner Seele, deiner Wahrheit, deinem Licht',
      book: 'Termin buchen',
      sacredGuidance: 'Heilige Begleitung, um dein Licht wieder zu erinnern',
      intro: 'Ich bin Psychotherapeutin, Yogalehrerin, Autorin und schamanische Praktikerin und arbeite dort, wo sich das Psychologische und das Spirituelle begegnen. Ich begleite Kinder und Erwachsene — einzeln und in Gruppen — mit Präsenz, Stärke und Frieden.',
      introQuote: 'Seit fünfzehn Jahren gehe ich diesen Weg mit anderen. Es wäre mir eine Ehre, ihn mit Ihnen zu gehen.',
      introSign: '— Sarah',
      ceremonyLabel: 'Retreats',
      ceremonyHeadline: 'Verbinde dich wieder mit dir selbst, deinem Geist, deinem Zweck',
      ceremonyBody: 'Mehrtägige zeremonielle Retreats in der Natur mit Sarah & Johannes',
      ceremonyCta: 'Nächstes Retreat ansehen',
      manifestoLabel: 'Soulshine',
      manifestoCta: 'Unsere Geschichte lesen',
      manifesto: [
        { type: 'lead', lines: ['Soulshine ist ein heiliger Raum für Menschen, die sich danach sehnen, bei sich selbst anzukommen.'] },
        { type: 'sub', lines: [
          'Wo Heilung auf Spiritualität trifft.',
          'Wo Wissenschaft auf altes Wissen trifft.',
        ] },
      ],
      offeringsEyebrow: 'Angebote',
      homeQuote: 'Sie hat mir geholfen, mich von Ängsten zu befreien, die mich bereits seit meiner Kindheit blockiert hatten, sodass ich mit der Vergangenheit abschliessen konnte.',
      homeQuoteLink: 'Weitere Stimmen lesen',
      life: [
        'Die Grundlage des Lebens ist Freiheit',
        'Das Ergebnis des Lebens ist Expansion',
        'Der Zweck des Lebens ist Freude',
      ],
      services: [
        {
          label: 'Beratung & Therapie',
          slug: 'counseling',
          description: 'Psycho-spirituelle Unterstützung, verwurzelt in Mitgefühl und Selbstwahrheit.',
          dot: '#e60000',
          cta: 'Deinen Weg beginnen',
        },
        {
          label: 'Spirituelle Begleitung',
          slug: 'spiritual-guidance',
          description: 'Klarheit auf deinem Seelenweg mit liebevoller, geerdeter Begleitung.',
          dot: '#e66400',
          cta: 'Deine Klarheit finden',
        },
        {
          label: 'Retreats',
          slug: 'retreats',
          description: 'Mehrtägige zeremonielle Retreats in der Natur mit Sarah & Johannes.',
          dot: '#e6e200',
          cta: 'Reisen Sie mit uns',
        },
        {
          label: 'Integrationsbegleitung',
          slug: 'medicine-integration',
          description: 'Erfahrungen mit Pflanzenmedizin und Psychedelika in nachhaltige Veränderung integrieren.',
          dot: '#28aa0e',
          cta: 'Integrieren & wachsen',
        },
        {
          label: 'Cacao Meditation',
          slug: 'cacao-meditations',
          description: 'Herzöffnende Zeremonie mit rituellem Cacao und Heilfrequenzen.',
          dot: '#0096e6',
          cta: 'Dein Herz öffnen',
        },
        {
          label: 'Heilung über Distanz',
          slug: 'distance-work',
          description: 'Seelenlesungen, Frequenzmedizin und Räucherrituale — wo auch immer Sie sind.',
          dot: '#1b05ac',
          cta: 'Von überall verbinden',
        },
        {
          label: 'Schamanische Trauung',
          slug: 'shamanic-matrimony',
          description: 'Heilige Trauzeremonien, gewoben aus Ritual und spiritueller Absicht.',
          dot: '#7301d0',
          cta: 'Eure Verbindung feiern',
        },
      ] as Service[],
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale];
}

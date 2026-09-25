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
      international: 'Distance Energy Healing',
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
      description: 'Psycho-Spiritual Guidance and Healing',
      hero: 'Come home to your soul, your truth, your light',
      book: 'Book a consultation',
      sacredGuidance: 'Sacred guidance to help you remember your light',
      intro: 'Sarah is a psychologist, shamanic practitioner, and medicine woman. Soulshine offers a sacred space to dissolve old patterns, reconnect with your essence, and walk your path with love.',
      ceremonyLabel: 'Retreats',
      ceremonyHeadline: 'Reconnect with yourself, your spirit, and your purpose',
      ceremonyBody: 'Multi-day ceremonial retreats in nature with Sarah & Johannes',
      ceremonyCta: 'Explore retreats',
      manifestoLabel: 'Soulshine',
      manifestoCta: 'Read our story',
      manifesto: [
        { type: 'lead', lines: ['Soulshine was created as a sacred space for people who feel the longing to come home to themselves.'] },
        { type: 'sub', lines: [
          'A space where healing meets spirituality.',
          'Where science meets ancient wisdom.',
        ] },
      ],
      offeringsEyebrow: 'Offerings',
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
          cta: 'Explore retreats',
        },
        {
          label: 'Medicine Integration Support',
          slug: 'medicine-integration',
          description: 'Integrate profound experiences into lasting transformation.',
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
          label: 'Distance Energy Healing',
          slug: 'distance-work',
          description: 'Soul readings, frequency medicine, and smudging — offered globally.',
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
      international: 'Energieheilung auf Distanz',
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
      book: 'Beratung buchen',
      sacredGuidance: 'Heilige Begleitung, um dein Licht wieder zu erinnern',
      intro: 'Sarah ist Psychologin, schamanische Praktikerin und Medicine Woman. Durch Soulshine bieten sie und das Soulwayo-Duo einen heiligen Raum, um alte Muster aufzulösen, dich mit deinem Wesen zu verbinden und deinen Weg in Liebe zu gehen.',
      ceremonyLabel: 'Retreats',
      ceremonyHeadline: 'Verbinde dich wieder mit dir selbst, deinem Geist, deinem Zweck',
      ceremonyBody: 'Mehrtägige zeremonielle Retreats in der Natur mit Sarah & Johannes',
      ceremonyCta: 'Retreats entdecken',
      manifestoLabel: 'Soulshine',
      manifestoCta: 'Unsere Geschichte lesen',
      manifesto: [
        { type: 'lead', lines: ['Soulshine wurde als heiliger Raum für Menschen geschaffen, die die Sehnsucht spüren, bei sich selbst anzukommen.'] },
        { type: 'sub', lines: [
          'Ein Raum, in dem Heilung auf Spiritualität trifft.',
          'In dem Wissenschaft auf altes Wissen trifft.',
        ] },
      ],
      offeringsEyebrow: 'Angebote',
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
          cta: 'Retreats entdecken',
        },
        {
          label: 'Integrationsbegleitung',
          slug: 'medicine-integration',
          description: 'Tiefe Erfahrungen in dauerhafte Transformation integrieren.',
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
          label: 'Energieheilung auf Distanz',
          slug: 'distance-work',
          description: 'Seelenlesungen, Frequenzmedizin und Räucherrituale — weltweit.',
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

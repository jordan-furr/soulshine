export type ServiceContent = {
  label: string
  headline: string
  imageAlt: string
  intro: string
  body: string[]
  supports?: string[]
  quote?: string
  subSections?: { heading: string; text: string }[]
  pricing: { label: string; cost: string }[]
  pricingNote?: string
}

type ServiceContentMap = {
  en: ServiceContent
  de: ServiceContent
}

export const counselingContent: ServiceContentMap = {
  en: {
    label: 'Counseling & Therapy',
    headline: 'The direction is always more important than the speed.',
    imageAlt: 'Counseling and therapy with Sarah',
    intro: 'People come to this work for many reasons — a crisis, a quiet knowing that something needs to change, or simply a longing to understand themselves more deeply. Whatever brings you here, this work meets you exactly where you are.',
    body: [
      'This is not about fixing what is broken. It is about remembering your own wholeness. Sessions work with the full picture — your story, your body, your energy, your patterns — addressing root causes rather than symptoms alone.',
      'The goal is to live with more authenticity, clarity, and love. To walk your own path — with courage, forgiveness, and deep trust in yourself.',
      'Sessions are offered in German and English, in person and remotely.',
    ],
    supports: [
      'Stress, depression, and anxiety',
      'Trauma processing',
      'Breaking old patterns',
      'Building self-trust and healthy relationships',
      'Living with presence and purpose',
    ],
    quote: 'When we go through life with an open heart, the darkness shines in the light, the illusions dissipate, and we see the true reality.',
    pricing: [
      { label: 'Individual session — adults (60 min)', cost: '300 CHF' },
      { label: 'Individual session — under 18 (60 min)', cost: '250 CHF' },
      { label: 'Phone / Zoom / Skype (60 min)', cost: '300 CHF' },
    ],
    pricingNote: 'Social and trainee rates available on request.',
  },
  de: {
    label: 'Beratung & Therapie',
    headline: 'Die Richtung ist immer wichtiger als die Geschwindigkeit.',
    imageAlt: 'Beratung und Therapie mit Sarah',
    intro: 'Menschen kommen aus vielen Gründen zu dieser Arbeit — eine Krise, ein leises Wissen, dass sich etwas verändern muss, oder einfach die Sehnsucht, sich selbst tiefer zu verstehen. Was auch immer Sie hierher führt, diese Arbeit begegnet Ihnen genau dort, wo Sie sind.',
    body: [
      'Es geht nicht darum, etwas Kaputtes zu reparieren. Es geht darum, sich an die eigene Ganzheit zu erinnern. Die Sitzungen arbeiten mit dem gesamten Bild — Ihrer Geschichte, Ihrem Körper, Ihrer Energie, Ihren Mustern — und sprechen Ursachen statt nur Symptome an.',
      'Das Ziel ist, mit mehr Authentizität, Klarheit und Liebe zu leben. Den eigenen Weg zu gehen — mit Mut, Vergebung und tiefem Vertrauen in sich selbst.',
      'Sitzungen werden auf Deutsch und Englisch angeboten, persönlich und online.',
    ],
    supports: [
      'Stress, Depression und Angst',
      'Traumaverarbeitung',
      'Alte Muster durchbrechen',
      'Selbstvertrauen und gesunde Beziehungen aufbauen',
      'Mit Präsenz und Sinn leben',
    ],
    quote: 'Wenn wir mit offenem Herzen durchs Leben gehen, leuchtet die Dunkelheit im Licht, die Illusionen lösen sich auf und wir sehen die wahre Wirklichkeit.',
    pricing: [
      { label: 'Einzelsitzung — Erwachsene (60 Min)', cost: '300 CHF' },
      { label: 'Einzelsitzung — unter 18 (60 Min)', cost: '250 CHF' },
      { label: 'Telefon / Zoom / Skype (60 Min)', cost: '300 CHF' },
    ],
    pricingNote: 'Sozial- und Ausbildungstarife auf Anfrage.',
  },
}

export const spiritualGuidanceContent: ServiceContentMap = {
  en: {
    label: 'Spiritual Guidance',
    headline: 'Find your integrity. Live your gifts. Walk your soul path.',
    imageAlt: 'Spiritual guidance with Sarah',
    intro: 'Spiritual guidance is for those who feel the call to go deeper — whether at a crossroads, seeking more meaning, or ready to live more fully aligned with who they truly are.',
    body: [
      'Each session is shaped entirely around you. There is no map to follow, no belief system to adopt. Only the honest, supported work of discovering your own truth.',
      'Spirituality is the power of authenticity — the daily choice to show up genuinely, live your values, and trust the quiet knowing of your own soul.',
      'Sessions are offered in German and English, in person and remotely.',
    ],
    quote: 'Being spiritual is not something you must achieve. It is who you already are.',
    pricing: [
      { label: 'Individual session — adults (60 min)', cost: '300 CHF' },
      { label: 'Phone / Zoom / Skype (60 min)', cost: '300 CHF' },
    ],
    pricingNote: 'Social and trainee rates available on request.',
  },
  de: {
    label: 'Spirituelle Begleitung',
    headline: 'Finde deine Integrität. Lebe deine Gaben. Geh deinen Seelenweg.',
    imageAlt: 'Spirituelle Begleitung mit Sarah',
    intro: 'Spirituelle Begleitung ist für Menschen, die den Ruf verspüren, tiefer zu gehen — ob an einem Scheideweg, auf der Suche nach mehr Bedeutung oder bereit, vollständiger im Einklang mit dem zu leben, wer sie wirklich sind.',
    body: [
      'Jede Sitzung ist vollständig auf Sie zugeschnitten. Es gibt keine Karte zu folgen, kein Glaubenssystem anzunehmen. Nur die ehrliche, unterstützte Arbeit, die eigene Wahrheit zu entdecken.',
      'Spiritualität ist die Kraft der Authentizität — die tägliche Wahl, aufrichtig aufzutreten, die eigenen Werte zu leben und dem stillen Wissen der eigenen Seele zu vertrauen.',
      'Sitzungen werden auf Deutsch und Englisch angeboten, persönlich und online.',
    ],
    quote: 'Spirituell zu sein ist nichts, das du erreichen musst. Es ist, wer du bereits bist.',
    pricing: [
      { label: 'Einzelsitzung — Erwachsene (60 Min)', cost: '300 CHF' },
      { label: 'Telefon / Zoom / Skype (60 Min)', cost: '300 CHF' },
    ],
    pricingNote: 'Sozial- und Ausbildungstarife auf Anfrage.',
  },
}

export const integrationContent: ServiceContentMap = {
  en: {
    label: 'Medicine Integration Support',
    headline: 'Integration is where the real transformation begins.',
    imageAlt: 'Medicine integration support with Sarah',
    intro: 'A ceremony, a plant medicine journey, or a profound spiritual opening can bring a great deal to the surface. Without support, even the most powerful experience can fade — or leave you feeling ungrounded and unsure what to do with what arose.',
    body: [
      'Sessions follow your timeline, your language, your pace. There is no rushing. There is no formula.',
    ],
    supports: [
      'Making sense of what surfaced',
      'Grounding insights into daily life',
      'Processing emotions and memories with care',
      'Releasing patterns the journey brought to light',
      'Building practices that anchor the healing over time',
    ],
    pricing: [
      { label: 'Individual session — adults (60 min)', cost: '300 CHF' },
      { label: 'Phone / Zoom / Skype (60 min)', cost: '300 CHF' },
    ],
    pricingNote: 'Social and trainee rates available on request.',
  },
  de: {
    label: 'Integrationsbegleitung',
    headline: 'Integration ist der Ort, wo die echte Transformation beginnt.',
    imageAlt: 'Integrationsbegleitung mit Sarah',
    intro: 'Eine Zeremonie, eine Pflanzenmedizinreise oder eine tiefe spirituelle Öffnung kann vieles an die Oberfläche bringen. Ohne Unterstützung kann selbst die kraftvollste Erfahrung verblassen — oder Sie unbehaglich zurücklassen.',
    body: [
      'Die Sitzungen folgen Ihrem Zeitplan, Ihrer Sprache, Ihrem Tempo. Es gibt keine Eile. Es gibt keine Formel.',
    ],
    supports: [
      'Sinn finden in dem, was aufgetaucht ist',
      'Erkenntnisse im Alltag verankern',
      'Emotionen und Erinnerungen mit Sorgfalt verarbeiten',
      'Muster lösen, die die Reise ans Licht gebracht hat',
      'Praktiken aufbauen, die die Heilung festigen',
    ],
    pricing: [
      { label: 'Einzelsitzung — Erwachsene (60 Min)', cost: '300 CHF' },
      { label: 'Telefon / Zoom / Skype (60 Min)', cost: '300 CHF' },
    ],
    pricingNote: 'Sozial- und Ausbildungstarife auf Anfrage.',
  },
}

export const shamanicHealingContent: ServiceContentMap = {
  en: {
    label: 'Shamanic Healing Ceremonies',
    headline: 'A sacred space for healing, liberation, and return to your true essence.',
    imageAlt: 'Shamanic healing ceremony with Sarah and Johannes',
    intro: 'We are not just physical beings — we are energetic beings. When life force becomes blocked through trauma, grief, or old wounds, it can show up as emotional pain, physical illness, or a deep sense of disconnection.',
    body: [
      'Shamanic healing works at the root of these imbalances, addressing the energetic body and the soul — what ordinary approaches often cannot reach. Each ceremony is created specifically for you. Nothing is templated. Sarah accompanies you with loving presence and deep knowledge across all levels of your being.',
    ],
    supports: [
      'Release of long-held emotional burdens',
      'Clarity and a renewed sense of direction',
      'Freedom from limiting beliefs and repeating patterns',
      'Deeper connection to your soul\'s purpose',
      'A feeling of coming home to yourself',
    ],
    subSections: [
      {
        heading: 'Smudging, Essential Oils & Healing Stones',
        text: 'Ancient tools for energetic cleansing and alignment. Smudging clears stagnant energy from your environment and your field. Essential oils work on the subtle body, supporting emotional balance and inner clarity. Healing stones carry their own vibrations — each chosen for what your energy system needs.',
      },
      {
        heading: 'Frequency Medicine',
        text: 'Everything is energy and vibration. When these fall out of balance, the effects are felt on every level. Through crystal tuning forks, healing frequencies, and sound, the body\'s own frequencies are stabilized and healing is supported — physically, emotionally, mentally, and spiritually.',
      },
      {
        heading: 'Soul Readings',
        text: 'An energetic reading of your soul field — exploring blockages, unresolved themes, and untapped potential. Delivered in writing, with space for follow-up questions. Many people describe a Soul Reading as a turning point.',
      },
      {
        heading: 'Spiritual Detachments',
        text: 'Energetic attachments — influences from past experiences, trauma, or difficult encounters — can settle into the energy body and quietly affect daily life. A detachment is a loving, careful process of recognizing and releasing what no longer belongs.',
      },
    ],
    pricing: [
      { label: 'Shamanic work', cost: 'Contact for custom offer' },
      { label: 'Earth Pulsing — Individual (full day)', cost: '1,000 CHF' },
      { label: 'Earth Pulsing — Group / Retreat', cost: 'Upon request' },
    ],
  },
  de: {
    label: 'Schamanische Heilzeremonien',
    headline: 'Ein heiliger Raum für Heilung, Befreiung und Rückkehr zu Ihrem wahren Wesen.',
    imageAlt: 'Schamanische Heilzeremonie mit Sarah und Johannes',
    intro: 'Wir sind nicht nur physische Wesen — wir sind energetische Wesen. Wenn die Lebensenergie durch Trauma, Trauer oder alte Wunden blockiert wird, kann sie sich als emotionaler Schmerz, körperliche Krankheit oder tiefes Gefühl der Trennung zeigen.',
    body: [
      'Schamanische Heilung arbeitet an der Wurzel dieser Ungleichgewichte und spricht den energetischen Körper und die Seele an. Jede Zeremonie wird speziell für Sie gestaltet. Nichts ist vorgefertigt. Sarah begleitet Sie mit liebevoller Präsenz und tiefem Wissen auf allen Ebenen Ihres Seins.',
    ],
    supports: [
      'Befreiung von lang gehaltenen emotionalen Lasten',
      'Klarheit und ein erneuertes Gefühl der Richtung',
      'Freiheit von einschränkenden Überzeugungen und sich wiederholenden Mustern',
      'Tiefere Verbindung mit dem Zweck Ihrer Seele',
      'Das Gefühl, zu sich selbst nach Hause zu kommen',
    ],
    subSections: [
      {
        heading: 'Räuchern, Ätherische Öle & Heilsteine',
        text: 'Alte Werkzeuge zur energetischen Reinigung und Ausrichtung. Räuchern klärt stagnierende Energie aus Ihrer Umgebung und Ihrem Feld. Ätherische Öle wirken auf den subtilen Körper und unterstützen emotionales Gleichgewicht und innere Klarheit.',
      },
      {
        heading: 'Frequenzmedizin',
        text: 'Alles ist Energie und Schwingung. Durch Kristallstimmgabeln, Heilfrequenzen und Klang werden die körpereigenen Frequenzen stabilisiert und die Heilung auf allen Ebenen unterstützt.',
      },
      {
        heading: 'Seelenlesungen',
        text: 'Eine energetische Lesung Ihres Seelenfeldes — Blockaden, ungelöste Themen und ungenutztes Potenzial. Schriftlich geliefert, mit Raum für Folgefragen.',
      },
      {
        heading: 'Spirituelle Ablösungen',
        text: 'Energetische Anhaftungen können sich in den Energiekörper setzen und das tägliche Leben still beeinflussen. Eine Ablösung ist ein liebevoller Prozess des Erkennens und Loslassens dessen, was nicht mehr dazugehört.',
      },
    ],
    pricing: [
      { label: 'Schamanische Arbeit', cost: 'Kontakt für individuelles Angebot' },
      { label: 'Earth Pulsing — Einzeln (ganzer Tag)', cost: '1.000 CHF' },
      { label: 'Earth Pulsing — Gruppe / Retreat', cost: 'Auf Anfrage' },
    ],
  },
}

export const matrimonyContent: ServiceContentMap = {
  en: {
    label: 'Shamanic Matrimony',
    headline: 'A sacred union — witnessed by the earth, the elements, and the unseen.',
    imageAlt: 'Shamanic matrimony ceremony',
    intro: 'A Shamanic Matrimony honors the coming together of two souls at the deepest level — beyond legal formality, into the realm of spirit, nature, and conscious intention.',
    body: [
      'Each ceremony is created entirely for the couple: their story, their prayers, their vision. Elements may include smudging, the invocation of the four directions, medicine songs, offerings to the earth, and vows spoken from the heart.',
      'Whether standalone or alongside a civil ceremony, this creates something that cannot be manufactured — a moment truly lived in the body and the spirit.',
    ],
    quote: 'Contact Sarah to begin a conversation about your ceremony.',
    pricing: [
      { label: 'Shamanic Matrimony', cost: 'Contact for custom offer' },
    ],
  },
  de: {
    label: 'Schamanische Trauung',
    headline: 'Eine heilige Verbindung — bezeugt von der Erde, den Elementen und dem Unsichtbaren.',
    imageAlt: 'Schamanische Trauzeremonie',
    intro: 'Eine Schamanische Trauung ehrt das Zusammenkommen zweier Seelen auf tiefster Ebene — jenseits rechtlicher Formalität, im Reich des Geistes, der Natur und der bewussten Absicht.',
    body: [
      'Jede Zeremonie wird vollständig für das Paar gestaltet: ihre Geschichte, ihre Gebete, ihre Vision. Elemente können Räuchern, die Anrufung der vier Richtungen, Medizinlieder, Opfergaben an die Erde und von Herzen gesprochene Gelübde umfassen.',
      'Ob als eigenständige oder neben einer standesamtlichen Zeremonie schafft dies etwas, das nicht hergestellt werden kann.',
    ],
    quote: 'Kontaktieren Sie Sarah, um ein Gespräch über Ihre Zeremonie zu beginnen.',
    pricing: [
      { label: 'Schamanische Trauung', cost: 'Kontakt für individuelles Angebot' },
    ],
  },
}

export const cacaoContent: ServiceContentMap = {
  en: {
    label: 'Cacao Meditation',
    headline: 'An ancient teacher, offered by the earth.',
    imageAlt: 'Cacao meditation ceremony',
    intro: 'Ritual cacao has been used ceremonially by indigenous peoples of Central and South America for centuries. It is heart-opening — gently releasing emotional blockages, deepening self-knowledge, and restoring the connection to one\'s own truth.',
    body: [
      'People often describe feeling a warmth in the chest, a softening of the inner critic, and a quiet clarity about what truly matters. Cacao strengthens access to intuition, creativity, and presence.',
    ],
    subSections: [
      {
        heading: 'The Cacao Spirit',
        text: 'For many indigenous peoples, a feminine power resides in Cacao. As a teacher plant, it carries knowledge it wishes to share. Before each ceremony, the Cacao Spirit is invited to guide the space. It speaks through the heart. It invites connection — with yourself, with others, with nature.',
      },
      {
        heading: 'MoonTime — New Moon Cacao Meditation',
        text: 'A monthly gathering to slow down, feel deeply, and remember. We work with new moon energy, healing mantras, the body, the breath, and the spirit of Cacao.',
      },
    ],
    pricing: [
      { label: 'New Moon Meditation', cost: '88 CHF' },
      { label: 'Venue', cost: 'In der Au 1, 8604 Volketswil' },
      { label: 'Time', cost: '7:30 PM – 9:00 PM' },
    ],
    pricingNote: 'Includes ceremony with Cacao and dinner. Registration required.',
  },
  de: {
    label: 'Cacao Meditation',
    headline: 'Ein alter Lehrer, von der Erde geschenkt.',
    imageAlt: 'Cacao Meditationszeremonie',
    intro: 'Rituelles Cacao wurde seit Jahrhunderten von indigenen Völkern Mittel- und Südamerikas zeremoniell genutzt. Es öffnet das Herz — löst sanft emotionale Blockaden, vertieft Selbsterkenntnis und stellt die Verbindung zur eigenen Wahrheit wieder her.',
    body: [
      'Menschen beschreiben oft eine Wärme in der Brust, eine Sanftheit des inneren Kritikers und eine stille Klarheit über das, was wirklich zählt. Cacao stärkt den Zugang zu Intuition, Kreativität und Präsenz.',
    ],
    subSections: [
      {
        heading: 'Der Cacao-Geist',
        text: 'Für viele indigene Völker wohnt eine feminine Kraft im Cacao. Als Lehrerpflanze trägt er Wissen, das er teilen möchte. Vor jeder Zeremonie wird der Cacao-Geist eingeladen, den Raum zu führen.',
      },
      {
        heading: 'MoonTime — Neumond Cacao Meditation',
        text: 'Ein monatliches Treffen, um innezuhalten, tief zu fühlen und sich zu erinnern. Wir arbeiten mit Neumond-Energie, Heilmantras, dem Körper, dem Atem und dem Geist des Cacao.',
      },
    ],
    pricing: [
      { label: 'Neumond Meditation', cost: '88 CHF' },
      { label: 'Ort', cost: 'In der Au 1, 8604 Volketswil' },
      { label: 'Zeit', cost: '19:30 – 21:00 Uhr' },
    ],
    pricingNote: 'Beinhaltet Zeremonie mit Cacao und Abendessen. Anmeldung erforderlich.',
  },
}

export const distanceEnergyContent: ServiceContentMap = {
  en: {
    label: 'Distance Energy Healing',
    headline: 'Healing has no boundaries.',
    imageAlt: 'Distance energy healing',
    intro: 'Energy, intention, and spirit move freely beyond physical location. Distance sessions draw on the same tools and care as in-person work — and many people find that working remotely opens something equally, or differently, powerful.',
    body: [
      'Before each session, Sarah will invite you to share what you are carrying. From there, a customized approach is shaped around your needs.',
    ],
    supports: [
      'Soul Readings — written energetic reading of your soul field, with space for follow-up questions',
      'Frequency Medicine — transmission of healing frequencies to harmonize and restore your energetic body',
      'Spiritual Detachments — remote clearing of energetic attachments and old patterns',
      'Energetic Clearing — cleansing of your personal field and environment',
    ],
    quote: 'After a session, rest. Drink water. Give yourself time. Healing continues to unfold long after the work ends.',
    pricing: [
      { label: 'Distance session (60 min)', cost: '300 CHF' },
      { label: 'Soul Reading (written)', cost: 'Contact for details' },
    ],
    pricingNote: 'Contact Sarah to arrange a distance session.',
  },
  de: {
    label: 'Energiearbeit auf Distanz',
    headline: 'Heilung kennt keine Grenzen.',
    imageAlt: 'Energiearbeit auf Distanz',
    intro: 'Energie, Absicht und Geist bewegen sich frei jenseits des physischen Standorts. Fernsitzungen schöpfen aus denselben Werkzeugen und der gleichen Fürsorge wie persönliche Arbeit.',
    body: [
      'Vor jeder Sitzung lädt Sarah Sie ein, zu teilen, was Sie bewegt. Davon ausgehend wird ein individueller Ansatz um Ihre Bedürfnisse herum gestaltet.',
    ],
    supports: [
      'Seelenlesungen — schriftliche energetische Lesung Ihres Seelenfeldes',
      'Frequenzmedizin — Übertragung von Heilfrequenzen zur Harmonisierung',
      'Spirituelle Ablösungen — Fernreinigung energetischer Anhaftungen',
      'Energetische Reinigung — Reinigung Ihres persönlichen Feldes',
    ],
    quote: 'Nach einer Sitzung ausruhen. Wasser trinken. Sich Zeit geben. Die Heilung entfaltet sich noch lange nach der Arbeit.',
    pricing: [
      { label: 'Fernsitzung (60 Min)', cost: '300 CHF' },
      { label: 'Seelenlesung (schriftlich)', cost: 'Kontakt für Details' },
    ],
    pricingNote: 'Kontaktieren Sie Sarah, um eine Fernsitzung zu vereinbaren.',
  },
}

export const serviceContent = {
  en: {
    hero: 'Healing at the energetic, soul, and human level — in thinking, feeling, and being.',
    title: 'Services',
    description: 'Soulshine offers healing at the energetic, soul, and human level. Every session is shaped entirely around you.',
    unsure: 'Not sure where to begin?',
    book: 'Book a Consultation',
    explore: 'Explore more',
    pricing: 'Pricing',
    pricingNote: 'Social and trainee rates available on request. 24 hours notice required for cancellations.',
    confidentiality: 'All personal information is held in strict confidence.',
    counseling: 'Counseling & Therapy',
    counselingDescription: 'People come to this work for many reasons — a crisis, a quiet knowing that something needs to change, or simply a longing to understand themselves more deeply.',
    counselingSlug: 'counseling',
    guidance: 'Spiritual Guidance',
    guidanceDescription: 'For those who feel the call to go deeper — whether at a crossroads, seeking more meaning, or ready to live more fully aligned with who they truly are.',
    guidanceSlug: 'spiritual-guidance',
    ceremonies: 'Shamanic Healing Ceremonies',
    ceremoniesDescription: 'A sacred space for healing, liberation, and return to your true essence. Each ceremony is created specifically for you.',
    ceremoniesSlug: 'shamanic-ceremonies',
    integration: 'Medicine Integration Support',
    integrationDescription: 'Integration is where the real transformation begins. Support for making sense of what surfaced and grounding it into daily life.',
    integrationSlug: 'medicine-integration',
    cacao: 'Cacao Meditation',
    cacaoDescription: 'Ritual cacao is heart-opening — gently releasing emotional blockages, deepening self-knowledge, and restoring connection to your own truth.',
    cacaoSlug: 'cacao-meditations',
    energy: 'Distance Energy Healing',
    energyDescription: 'Energy, intention, and spirit move freely beyond physical location. Soul readings, frequency medicine, and energetic clearing — offered globally.',
    energySlug: 'distance-work',
    matrimony: 'Shamanic Matrimony',
    matrimonyDescription: 'A sacred union witnessed by the earth, the elements, and the unseen. Each ceremony is created entirely for the couple.',
    matrimonySlug: 'shamanic-matrimony',
    priceTable: [
      { service: 'Individual session — adults (60 min)', cost: '300 CHF' },
      { service: 'Individual session — under 18 (60 min)', cost: '250 CHF' },
      { service: 'Phone / Zoom / Skype (60 min)', cost: '300 CHF' },
      { service: 'Earth Pulsing — Individual (full day)', cost: '1,000 CHF' },
      { service: 'Earth Pulsing — Group / Retreat', cost: 'Upon request' },
      { service: 'New Moon Meditation', cost: '88 CHF' },
      { service: 'Shamanic work', cost: 'Contact for custom offer' },
    ],
  },
  de: {
    hero: 'Heilung auf energetischer, seelischer und menschlicher Ebene — im Denken, Fühlen und Sein.',
    title: 'Angebote',
    description: 'Soulshine bietet Heilung auf energetischer, seelischer und menschlicher Ebene. Jede Sitzung wird vollständig um Sie herum gestaltet.',
    unsure: 'Nicht sicher, wo Sie anfangen sollen?',
    book: 'Beratung buchen',
    explore: 'Mehr erfahren',
    pricing: 'Preise',
    pricingNote: 'Sozial- und Ausbildungstarife auf Anfrage. 24 Stunden Vorlaufzeit für Absagen erforderlich.',
    confidentiality: 'Alle persönlichen Informationen werden streng vertraulich behandelt.',
    counseling: 'Beratung & Therapie',
    counselingDescription: 'Menschen kommen aus vielen Gründen zu dieser Arbeit — eine Krise, ein leises Wissen, dass sich etwas verändern muss, oder einfach die Sehnsucht, sich selbst tiefer zu verstehen.',
    counselingSlug: 'counseling',
    guidance: 'Spirituelle Begleitung',
    guidanceDescription: 'Für Menschen, die den Ruf verspüren, tiefer zu gehen — ob an einem Scheideweg, auf der Suche nach mehr Bedeutung oder bereit, vollständiger im Einklang mit sich selbst zu leben.',
    guidanceSlug: 'spiritual-guidance',
    ceremonies: 'Schamanische Heilzeremonien',
    ceremoniesDescription: 'Ein heiliger Raum für Heilung, Befreiung und Rückkehr zu Ihrem wahren Wesen. Jede Zeremonie wird speziell für Sie gestaltet.',
    ceremoniesSlug: 'shamanic-ceremonies',
    integration: 'Integrationsbegleitung',
    integrationDescription: 'Integration ist der Ort, wo die echte Transformation beginnt. Unterstützung beim Verstehen dessen, was aufgetaucht ist.',
    integrationSlug: 'medicine-integration',
    cacao: 'Cacao Meditation',
    cacaoDescription: 'Rituelles Cacao öffnet das Herz — löst sanft emotionale Blockaden und stellt die Verbindung zur eigenen Wahrheit wieder her.',
    cacaoSlug: 'cacao-meditations',
    energy: 'Energiearbeit auf Distanz',
    energyDescription: 'Energie, Absicht und Geist bewegen sich frei jenseits des physischen Standorts. Seelenlesungen, Frequenzmedizin — weltweit.',
    energySlug: 'distance-work',
    matrimony: 'Schamanische Trauung',
    matrimonyDescription: 'Eine heilige Verbindung, bezeugt von der Erde, den Elementen und dem Unsichtbaren.',
    matrimonySlug: 'shamanic-matrimony',
    priceTable: [
      { service: 'Einzelsitzung — Erwachsene (60 Min)', cost: '300 CHF' },
      { service: 'Einzelsitzung — unter 18 (60 Min)', cost: '250 CHF' },
      { service: 'Telefon / Zoom / Skype (60 Min)', cost: '300 CHF' },
      { service: 'Earth Pulsing — Einzeln (ganzer Tag)', cost: '1.000 CHF' },
      { service: 'Earth Pulsing — Gruppe / Retreat', cost: 'Auf Anfrage' },
      { service: 'Neumond Meditation', cost: '88 CHF' },
      { service: 'Schamanische Arbeit', cost: 'Kontakt für individuelles Angebot' },
    ],
  },
};
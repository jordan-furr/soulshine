export type ServiceContent = {
  label: string
  headline: string
  imageAlt: string
  intro: string
  body: string[]
  supports?: string[]
  quote?: string
  subSections?: { heading: string; text: string }[]
  closingNote?: string
  closingNoteLink?: { text: string; href: string }
  pricing: { label: string; cost: string }[]
  pricingNote?: string
  ctaOverride?: { label: string; href: string; external?: boolean }
}

type ServiceContentMap = {
  en: ServiceContent
  de: ServiceContent
}

export const retreatData = {
  en: {
    name: 'Return to Soul: A Winter Retreat',
    dates: '3–6 December 2026',
    location: 'Schwarzenberg, Austria',
    description: 'Four days to slow down, reconnect with your body, let go of old patterns, and step into what’s next with clarity and presence.',
    futureDates: ['24–27 March 2027', '24–27 June 2027', '24–27 September 2027'],
    bookingUrl: 'https://www.soulwayo.com/retreats',
    bookingLabel: 'Details & booking',
    futureLabel: 'Future dates',
  },
  de: {
    name: 'Return to Soul: Ein Winter-Retreat',
    dates: '3.–6. Dezember 2026',
    location: 'Schwarzenberg, Österreich',
    description: 'Vier Tage zum Innehalten, zur Rückverbindung mit dem Körper, zum Loslassen alter Muster und zum klaren, präsenten Schritt in das, was kommt.',
    futureDates: ['24.–27. März 2027', '24.–27. Juni 2027', '24.–27. September 2027'],
    bookingUrl: 'https://www.soulwayo.com/retreats',
    bookingLabel: 'Details & Buchung',
    futureLabel: 'Weitere Termine',
  },
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
    quote: 'When we go through life with an open heart, the light shines in the darkness, illusions dissolve, and we see what is truly real.',
    closingNote: 'Sessions complement, but do not replace, medical or psychiatric care. If you are in crisis, please contact your doctor or local emergency services.',
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
    quote: 'Wenn wir mit offenem Herzen durchs Leben gehen, scheint das Licht in die Dunkelheit, Illusionen lösen sich auf und wir sehen, was wirklich wahr ist.',
    closingNote: 'Sitzungen ergänzen, ersetzen aber nicht medizinische oder psychiatrische Betreuung. In einer Krise wenden Sie sich bitte an Ihren Arzt oder den örtlichen Notdienst.',
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
    subSections: [
      {
        heading: 'From experience to everyday life',
        text: 'A powerful experience is not yet transformation. An insight becomes meaningful when it starts to shape how we live. Integration asks simple, honest questions: What does my body need? What boundary am I ready to honour? What am I ready to stop carrying? What small choice can carry this insight into my life?\n\nFeeling → Healing → Integration\n\nNot a formula, but an orientation: feel what is here, meet it consciously, and bring what matters back into your life.',
      },
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
    subSections: [
      {
        heading: 'Von der Erfahrung zum Alltag',
        text: 'Eine kraftvolle Erfahrung ist noch keine Transformation. Eine Erkenntnis wird bedeutsam, wenn sie beginnt, unser Leben zu formen. Integration stellt einfache, ehrliche Fragen: Was braucht mein Körper? Welche Grenze bin ich bereit zu achten? Was bin ich bereit, nicht mehr zu tragen? Welche kleine Entscheidung kann diese Erkenntnis in mein Leben bringen?\n\nFühlen → Heilen → Integration\n\nKeine Formel, sondern eine Orientierung: fühlen, was da ist, dem bewusst begegnen und das Wesentliche zurück ins Leben tragen.',
      },
    ],
    pricing: [
      { label: 'Einzelsitzung — Erwachsene (60 Min)', cost: '300 CHF' },
      { label: 'Telefon / Zoom / Skype (60 Min)', cost: '300 CHF' },
    ],
    pricingNote: 'Sozial- und Ausbildungstarife auf Anfrage.',
  },
}

export const retreatsContent: ServiceContentMap = {
  en: {
    label: 'Retreats with Sarah & Johannes',
    headline: 'A space to return to yourself.',
    imageAlt: 'Retreat in nature with Sarah and Johannes',
    intro: 'Sarah’s retreats are held together with Johannes through Soulwayo, their shared practice. Over several days in nature, we slow down, come back into the body, and make room for what wants to be felt, released, and remembered — through ceremony, cacao, breathwork, movement, meditation, and time in silence.\n\nYou are not asked to perform, fix, or achieve anything. You are simply invited to arrive, as you are.',
    body: [],
    subSections: [
      {
        heading: 'What the days hold',
        text: '',
      },
    ],
    closingNote: 'Retreats support self-exploration, embodiment, and reflection. They are not a substitute for medical, psychological, or psychiatric care. You are always free to go at your own pace, to pause, or to say no.',
    pricing: [
      { label: 'Shamanic work', cost: 'Contact for custom offer' },
      { label: 'Earth Pulsing — Individual (full day)', cost: '1,000 CHF' },
      { label: 'Earth Pulsing — Group / Retreat', cost: 'Upon request' },
    ],
    ctaOverride: {
      label: 'See retreat details on Soulwayo',
      href: 'https://www.soulwayo.com/retreats',
      external: true,
    },
  },
  de: {
    label: 'Retreats mit Sarah & Johannes',
    headline: 'Ein Raum, um zu dir selbst zurückzukehren.',
    imageAlt: 'Retreat in der Natur mit Sarah und Johannes',
    intro: 'Sarahs Retreats werden gemeinsam mit Johannes durch Soulwayo, ihre geteilte Praxis, gehalten. Über mehrere Tage in der Natur verlangsamen wir, kommen zurück in den Körper und machen Raum für das, was gefühlt, losgelassen und erinnert werden will — durch Zeremonie, Cacao, Atemarbeit, Bewegung, Meditation und Stille.\n\nDu wirst nicht gebeten, etwas zu leisten, zu reparieren oder zu erreichen. Du bist einfach eingeladen, anzukommen — so wie du bist.',
    body: [],
    subSections: [
      {
        heading: 'Was die Tage bereithalten',
        text: '',
      },
    ],
    closingNote: 'Retreats unterstützen Selbsterforschung, Verkörperung und Reflexion. Sie sind kein Ersatz für medizinische, psychologische oder psychiatrische Betreuung. Es steht dir jederzeit frei, in deinem eigenen Tempo zu gehen, eine Pause zu machen oder Nein zu sagen.',
    pricing: [
      { label: 'Schamanische Arbeit', cost: 'Kontakt für individuelles Angebot' },
      { label: 'Earth Pulsing — Einzeln (ganzer Tag)', cost: '1.000 CHF' },
      { label: 'Earth Pulsing — Gruppe / Retreat', cost: 'Auf Anfrage' },
    ],
    ctaOverride: {
      label: 'Retreat-Details auf Soulwayo ansehen',
      href: 'https://www.soulwayo.com/retreats',
      external: true,
    },
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
    intro: 'Ritual cacao has been used ceremonially by indigenous peoples of Central and South America for centuries. In ceremony, it is often described as heart-opening — not as a promise, but as an invitation to slow down, feel more deeply, and reconnect with your own truth.',
    body: [
      'People often describe feeling a warmth in the chest, a softening of the inner critic, and a quiet clarity about what truly matters. Cacao strengthens access to intuition, creativity, and presence.',
    ],
    subSections: [
      {
        heading: 'The Cacao Spirit',
        text: 'For many indigenous peoples, a feminine power resides in Cacao. As a teacher plant, it carries knowledge it wishes to share. Before each ceremony, the Cacao Spirit is invited to guide the space. It speaks through the heart. It invites connection — with yourself, with others, with nature.',
      },
      {
        heading: 'What happens in a ceremony',
        text: 'Every ceremony is different, shaped by the group and the moment. We begin by arriving: slowing down and connecting with the body and breath. The cacao is introduced along with the intention of the ceremony, then shared with awareness and gratitude. From there, the journey may include guided meditation, breathwork, gentle movement, music and sound, silence, journaling, and sharing. There is no particular experience you are expected to have. Some people feel deeply emotional, some find clarity, some simply become still. Your experience is allowed to be your own.',
      },
      {
        heading: 'MoonTime — New Moon Cacao Meditation',
        text: 'A monthly gathering to slow down, feel deeply, and remember. We work with new moon energy, healing mantras, the body, the breath, and the spirit of Cacao.',
      },
    ],
    closingNote: 'Cacao ceremonies support self-reflection and connection. They are not a substitute for medical or psychological care.',
    closingNoteLink: {
      text: 'Read the cacao guidance',
      href: 'https://www.soulwayo.com/cacao',
    },
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
    intro: 'Rituelles Cacao wurde seit Jahrhunderten von indigenen Völkern Mittel- und Südamerikas zeremoniell genutzt. In der Zeremonie wird es oft als herzöffnend beschrieben — nicht als Versprechen, sondern als Einladung, langsamer zu werden, tiefer zu fühlen und sich mit der eigenen Wahrheit zu verbinden.',
    body: [
      'Menschen beschreiben oft eine Wärme in der Brust, eine Sanftheit des inneren Kritikers und eine stille Klarheit über das, was wirklich zählt. Cacao stärkt den Zugang zu Intuition, Kreativität und Präsenz.',
    ],
    subSections: [
      {
        heading: 'Der Cacao-Geist',
        text: 'Für viele indigene Völker wohnt eine feminine Kraft im Cacao. Als Lehrerpflanze trägt er Wissen, das er teilen möchte. Vor jeder Zeremonie wird der Cacao-Geist eingeladen, den Raum zu führen.',
      },
      {
        heading: 'Was in einer Zeremonie geschieht',
        text: 'Jede Zeremonie ist anders, geformt durch die Gruppe und den Moment. Wir beginnen mit dem Ankommen: langsamer werden und sich mit dem Körper und dem Atem verbinden. Der Cacao wird zusammen mit der Intention der Zeremonie vorgestellt und dann mit Achtsamkeit und Dankbarkeit geteilt. Von dort kann die Reise geführte Meditation, Atemarbeit, sanfte Bewegung, Musik und Klang, Stille, Journaling und Austausch umfassen. Es gibt keine bestimmte Erfahrung, die von dir erwartet wird. Manche Menschen fühlen sich tief bewegt, manche finden Klarheit, manche werden einfach still. Deine Erfahrung darf deine eigene sein.',
      },
      {
        heading: 'MoonTime — Neumond Cacao Meditation',
        text: 'Ein monatliches Treffen, um innezuhalten, tief zu fühlen und sich zu erinnern. Wir arbeiten mit Neumond-Energie, Heilmantras, dem Körper, dem Atem und dem Geist des Cacao.',
      },
    ],
    closingNote: 'Cacao-Zeremonien unterstützen Selbstreflexion und Verbindung. Sie sind kein Ersatz für medizinische oder psychologische Betreuung.',
    closingNoteLink: {
      text: 'Cacao-Hinweise lesen',
      href: 'https://www.soulwayo.com/cacao',
    },
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
    intro: 'Energy, intention, and spirit move freely beyond physical location. Sessions draw on the same tools and care as in-person work — and many people find that working remotely opens something equally, or differently, powerful. Sessions are offered both in person and remotely.',
    body: [
      'Before each session, Sarah will invite you to share what you are carrying. From there, a customized approach is shaped around your needs.',
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
    quote: 'After a session, rest. Drink water. Give yourself time. Healing continues to unfold long after the work ends.',
    pricing: [
      { label: 'Distance session (60 min)', cost: '300 CHF' },
      { label: 'Soul Reading (written)', cost: 'Contact for details' },
    ],
    pricingNote: 'Contact Sarah to arrange a session.',
  },
  de: {
    label: 'Energieheilung auf Distanz',
    headline: 'Heilung kennt keine Grenzen.',
    imageAlt: 'Energieheilung auf Distanz',
    intro: 'Energie, Absicht und Geist bewegen sich frei jenseits des physischen Standorts. Sitzungen schöpfen aus denselben Werkzeugen und der gleichen Fürsorge wie persönliche Arbeit — und viele Menschen erleben, dass die Fernarbeit etwas gleichermassen oder auf andere Weise Kraftvolles öffnet. Sitzungen werden sowohl persönlich als auch aus der Ferne angeboten.',
    body: [
      'Vor jeder Sitzung lädt Sarah Sie ein, zu teilen, was Sie bewegt. Davon ausgehend wird ein individueller Ansatz um Ihre Bedürfnisse herum gestaltet.',
    ],
    subSections: [
      {
        heading: 'Räuchern, Ätherische Öle & Heilsteine',
        text: 'Alte Werkzeuge zur energetischen Reinigung und Ausrichtung. Räuchern klärt stagnierende Energie aus Ihrer Umgebung und Ihrem Feld. Ätherische Öle wirken auf den subtilen Körper und unterstützen emotionales Gleichgewicht und innere Klarheit. Heilsteine tragen ihre eigenen Schwingungen — jeder wird nach dem ausgewählt, was Ihr Energiesystem braucht.',
      },
      {
        heading: 'Frequenzmedizin',
        text: 'Alles ist Energie und Schwingung. Wenn diese aus dem Gleichgewicht geraten, sind die Auswirkungen auf jeder Ebene spürbar. Durch Kristallstimmgabeln, Heilfrequenzen und Klang werden die körpereigenen Frequenzen stabilisiert und die Heilung auf allen Ebenen unterstützt — körperlich, emotional, mental und spirituell.',
      },
      {
        heading: 'Seelenlesungen',
        text: 'Eine energetische Lesung Ihres Seelenfeldes — Blockaden, ungelöste Themen und ungenutztes Potenzial. Schriftlich geliefert, mit Raum für Folgefragen. Viele Menschen beschreiben eine Seelenlesung als Wendepunkt.',
      },
      {
        heading: 'Spirituelle Ablösungen',
        text: 'Energetische Anhaftungen — Einflüsse aus vergangenen Erfahrungen, Traumata oder schwierigen Begegnungen — können sich im Energiekörper festsetzen und das tägliche Leben still beeinflussen. Eine Ablösung ist ein liebevoller, sorgfältiger Prozess des Erkennens und Loslassens dessen, was nicht mehr dazugehört.',
      },
    ],
    quote: 'Nach einer Sitzung ausruhen. Wasser trinken. Sich Zeit geben. Die Heilung entfaltet sich noch lange nach der Arbeit.',
    pricing: [
      { label: 'Fernsitzung (60 Min)', cost: '300 CHF' },
      { label: 'Seelenlesung (schriftlich)', cost: 'Kontakt für Details' },
    ],
    pricingNote: 'Kontaktieren Sie Sarah, um eine Sitzung zu vereinbaren.',
  },
}

export const serviceContent = {
  en: {
    hero: 'Healing at the energetic, soul, and human level — in thinking, feeling, and being.',
    title: 'Services',
    description: 'Every session is shaped entirely around you.',
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
    retreats: 'Retreats',
    retreatsDescription: 'Multi-day ceremonial retreats in nature with Sarah & Johannes.',
    retreatsSlug: 'retreats',
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
    description: 'Jede Sitzung wird vollständig um Sie herum gestaltet.',
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
    retreats: 'Retreats',
    retreatsDescription: 'Mehrtägige zeremonielle Retreats in der Natur mit Sarah & Johannes.',
    retreatsSlug: 'retreats',
    integration: 'Integrationsbegleitung',
    integrationDescription: 'Integration ist der Ort, wo die echte Transformation beginnt. Unterstützung beim Verstehen dessen, was aufgetaucht ist.',
    integrationSlug: 'medicine-integration',
    cacao: 'Cacao Meditation',
    cacaoDescription: 'Rituelles Cacao öffnet das Herz — löst sanft emotionale Blockaden und stellt die Verbindung zur eigenen Wahrheit wieder her.',
    cacaoSlug: 'cacao-meditations',
    energy: 'Energieheilung auf Distanz',
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
}

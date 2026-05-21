export type Publication = {
  id: string
  title: string
  subtitle?: string
  description: string
  type: 'book' | 'journal' | 'card-deck' | 'pdf'
  image: string
  imageDe?: string
  buyLink?: string
  downloadLink?: string
  price?: string
  comingSoon?: boolean
}

export const publicationsContent = {
  en: {
    pageLabel: 'Publications',
    pageHeadline: 'Words, tools, and companions for the path.',
    intro: 'Each of these offerings was created with the same attention Sarah brings to her healing work — presence, curiosity, and love for what is real.',
    buyLabel: 'Buy Now',
    downloadLabel: 'Download',
    comingSoonLabel: 'Coming Soon',
    moreLabel: 'More to come.',
    publications: [
      {
        id: 'liah-zoe-chocolate',
        title: 'Liah & Zoe Make Chocolate',
        description: 'An educational short story about making chocolate from bean to bar — dedicated to Sarah\'s two children and all the sweet-toothed seekers who want to know where their chocolate truly comes from. Sarah is originally from Trinidad & Tobago, one of the birthplaces of fine cacao. Her journey into small-batch chocolate making in Switzerland grew from that same connection to the plant.',
        type: 'book',
        image: '/images/publications/chocolate.png',
        price: 'Contact for details',
      },
      {
        id: 'self-discovery-journal',
        title: 'Soulshine Self-Discovery Journal',
        subtitle: 'Your digital companion for 6 months of mindfulness, self-love, and inner transformation.',
        description: 'A compass for the heart. A gentle guide from the mind back to the heart — one honest page at a time. Each month opens around a new theme and chakra focus, from Grounding & Safety through to Trust & Soul. Inside you\'ll find reflection questions, body and yoga exercises, monthly meditations, and rituals for everyday life. Accessible on any device. Suitable for beginners and those already on the path.',
        type: 'pdf',
        image: '/images/publications/journal-en.png',
        imageDe: '/images/publications/journal-de.png',
        price: 'Contact for details',
      },
    ] as Publication[],
  },
  de: {
    pageLabel: 'Bücher & Materialien',
    pageHeadline: 'Worte, Werkzeuge und Begleiter für den Weg.',
    intro: 'Jedes dieser Angebote wurde mit derselben Aufmerksamkeit gestaltet, die Sarah in ihre Heilarbeit einbringt — Präsenz, Neugier und Liebe für das Echte.',
    buyLabel: 'Jetzt kaufen',
    downloadLabel: 'Herunterladen',
    comingSoonLabel: 'Demnächst',
    moreLabel: 'Mehr folgt.',
    publications: [
      {
        id: 'liah-zoe-chocolate',
        title: 'Liah & Zoe Make Chocolate',
        description: 'Eine pädagogische Kurzgeschichte über die Herstellung von Schokolade von der Bohne bis zur Tafel — gewidmet Sarahs zwei Kindern und allen Naschkatzen, die wissen möchten, woher ihre Schokolade wirklich kommt. Sarah stammt ursprünglich aus Trinidad & Tobago, einem der Ursprungsländer des feinen Kakaos.',
        type: 'book',
        image: '/images/publications/chocolate.png',
        price: 'Kontakt für Details',
      },
      {
        id: 'self-discovery-journal',
        title: 'Soulshine Selbstentdeckungs-Journal',
        subtitle: 'Dein digitaler Begleiter für 6 Monate Achtsamkeit, Selbstliebe und innere Transformation.',
        description: 'Ein Kompass für das Herz. Eine sanfte Führung vom Verstand zurück zum Herzen — eine ehrliche Seite nach der anderen. Jeder Monat öffnet sich um ein neues Thema und einen Chakra-Fokus, von Erdung & Sicherheit bis Vertrauen & Seele. Mit Reflexionsfragen, Körper- und Yogaübungen, monatlichen Meditationen und Ritualen für den Alltag.',
        type: 'pdf',
        image: '/images/publications/journal-en.png',
        imageDe: '/images/publications/journal-de.png',
        price: 'Kontakt für Details',
      },
    ] as Publication[],
  },
}
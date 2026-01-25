export type Locale = 'en' | 'de';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      blog: 'Blog',
      products: 'Products',
      contact: 'Contact',
    },
    footer: {
      rights: 'All rights reserved',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
    },
    products: {
      buy: 'Buy Now',
      price: 'Price',
      download: 'Download',
      addToCart: 'Add to Cart',
    },
    blog: {
      readMore: 'Read More',
      backToBlog: 'Back to Blog',
      publishedOn: 'Published on',
      author: 'Author',
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
      home: 'Startseite',
      about: 'Über',
      blog: 'Blog',
      products: 'Produkte',
      contact: 'Kontakt',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      privacy: 'Datenschutz',
      terms: 'AGB',
    },
    products: {
      buy: 'Jetzt kaufen',
      price: 'Preis',
      download: 'Herunterladen',
      addToCart: 'In den Warenkorb',
    },
    blog: {
      readMore: 'Mehr lesen',
      backToBlog: 'Zurück zum Blog',
      publishedOn: 'Veröffentlicht am',
      author: 'Autor',
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
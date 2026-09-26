import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato, Cinzel } from 'next/font/google';
import { LocaleProvider } from '@/lib/i18n/LocaleContext';
import './styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-lato',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel-face',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Soulshine Sarah — Psycho-Spiritual Counseling & Healing',
    template: '%s | Soulshine Sarah',
  },
  description:
    'Psycho-spiritual counseling and healing with Sarah Preisig. Sessions in German and English.',
  keywords: [
    'psycho-spiritual counseling',
    'soul reading',
    'cacao ceremony',
    'spiritual counseling Zurich',
    'Medicine Woman',
    'retreats',
    'Sarah Preisig',
    'Soulshine',
  ],
  authors: [{ name: 'Sarah Preisig' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'de_CH',
    siteName: 'Soulshine Sarah',
    title: 'Soulshine Sarah — Psycho-Spiritual Counseling & Healing',
    description: 'Psycho-spiritual counseling and healing with Sarah Preisig.',
    images: [{ url: '/images/og-image.png', width: 707, height: 365 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soulshine Sarah',
    description: 'Psycho-spiritual counseling & healing with Sarah Preisig.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${lato.variable} ${cinzel.variable}`}
    >
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
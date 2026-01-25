'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

export default function Footer() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <footer>
      <div>
        <div>
          {/* Column 1: Brand */}
          <div>
            <h3>Portfolio</h3>
            <p>
              {locale === 'en'
                ? 'Your digital products and insights'
                : 'Ihre digitalen Produkte und Einblicke'}
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3>
              {locale === 'en' ? 'Quick Links' : 'Schnellzugriff'}
            </h3>
            <ul>
              <li>
                <Link href="/">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href="/products">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/privacy">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  {t.footer.terms}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Portfolio. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
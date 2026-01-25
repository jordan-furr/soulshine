'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

export default function Header() {
  const { locale, setLocale } = useLocale();
  const t = getTranslations(locale);

  return (
    <header>
      <nav>
        <Link href="/">
          Soulshine Sarah
        </Link>

        <ul>
          <li>
            <Link href="/">
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link href="/about">
              {t.nav.about}
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

        {/* Language Toggle */}
        <div>
          <button
            onClick={() => setLocale('en')}
            className={`pa3 ${
              locale === 'en'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLocale('de')}
            className={`pa3 ${
              locale === 'de'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            DE
          </button>
        </div>
      </nav>
    </header>
  );
}
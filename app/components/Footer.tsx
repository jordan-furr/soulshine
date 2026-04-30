'use client';

import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

export default function Footer() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <footer>
      <div className='footer'>
        <div className='flex-row'>
          <div>
            <h3 className='soulshine'>Soulshine</h3>
            <p>
              {locale === 'en'
                ? 'From eArth to heArt is my Art'
                : 'From eArth to heArt is my Art'}
            </p>
            <p>
              {locale === 'en'
                ? 'Guiding souls into presence, power, and peace.'
                : 'Guiding souls into presence, power, and peace.'}
            </p>
          </div>
          <div>
            <h3>
              {locale === 'en' ? 'Services' : 'Services'}
            </h3>
            <ul>
              <li>
                <Link href="/services/counseling">
                  {t.nav.counseling}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  {t.nav.guidance}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  {t.nav.integration}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  {t.nav.ceremonies}
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  {t.nav.matrimony}
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  {t.nav.cacao}
                </Link>
              </li>
              <li>
                <Link href="/products">
                  {t.nav.international}
                </Link>
              </li>
              
              
            </ul>
          </div>
          <div>
            <h3>Begin</h3>
            <ul>
              <li>
                <Link href="/contact">
                  {t.common.bookSession}
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  {t.common.getInTouch}
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  {t.nav.testimonials}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>Legal</h3>
            <ul>
              <li>
                <Link href="/privacy">
                  {t.footer.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Soulshine. {t.footer.rights}.</p>
        </div>
      </div>
    </footer>
  );
}
'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

export default function Contact() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div className="page-container">
      <div className="page-hero">
        <h2>...</h2>
      </div>
      <div className='section-container'>
        <h1>Contact</h1>
      </div>
    </div>
  );
}

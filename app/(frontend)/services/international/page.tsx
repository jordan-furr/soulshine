'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { InternationalContent } from '@/lib/content/international';

export default function International() {
  const { locale } = useLocale();
  const t = InternationalContent[locale];

  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>{t.title}</h1>
      </div>
      <div className='section-container'>
        <h1>{t.description}</h1>
      </div>
    </div>
  );
}

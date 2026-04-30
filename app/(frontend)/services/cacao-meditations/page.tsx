'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { CacaoContent } from '@/lib/content/cacao';

export default function Cacao() {
  const { locale } = useLocale();
  const t = CacaoContent[locale];

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

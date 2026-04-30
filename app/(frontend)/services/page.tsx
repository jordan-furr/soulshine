'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { serviceContent } from '@/lib/content/services';

export default function Services() {
  const { locale } = useLocale();
  const t = serviceContent[locale];
  return (
    <div className="page-container">
      <div className="page-hero">
        <h1>{t.hero}</h1>
      </div>
      <div className='section-container'>
        <h2>{t.title}</h2>
        <p>{t.description}</p>
        <h3>{t.counseling}</h3>
        <p>{t.counselingDescription}</p>
        <button className="button2">{t.explore}</button>
        <h3>{t.guidance}</h3>
        <p>{t.guidanceDescription}</p>
        <button className="button2">{t.explore}</button>
      </div>
    </div>
  );
}

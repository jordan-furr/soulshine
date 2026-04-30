'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { CounselingContent } from '@/lib/content/counseling';

export default function Counseling() {
  const { locale } = useLocale();
  const t = CounselingContent[locale];

  return (
    <div className="page-container">
      <div className="page-hero">
        <h2>{t.quote}</h2>
      </div>
      <div className='section-container'>
        <h1>{t.title}</h1>
        <h3 className='mb5'>{t.description}</h3>
        <h3 className='mb5'>{t.description2}</h3>
        <button className="button2">{t.contact}</button>
      </div>
    </div>
  );
}

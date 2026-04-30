'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { MatrimonyContent } from '@/lib/content/matrimony';

export default function Matrimony() {
  const { locale } = useLocale();
  const t = MatrimonyContent[locale];

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

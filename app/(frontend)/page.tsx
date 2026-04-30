'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

export default function Home() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <div className="page-container home">
      <main>
        <div className="home-hero">
          <h3>{t.home.description}</h3>
          <h1>{t.home.hero}</h1>
          <button className="button1">{t.home.book}</button>
        </div>
        <div className='section-container'>

        </div>
        <div className='section-container'>
          <div>
            {t.home.life.map((paragraph, index) => (
              <h4 key={index}>
                {paragraph}
              </h4>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

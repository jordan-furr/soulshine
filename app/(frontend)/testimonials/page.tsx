'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { philoContent } from '@/lib/content/philo';

export default function AboutPage() {
  const { locale } = useLocale();
  const t = philoContent[locale];

  return (
    <div className="page-container">
      <div className="section-container">
        <h1>{t.title}</h1>
        <div>
          {t.main.map((paragraph, index) => (
            <p key={index} className="">
              {paragraph}
            </p>
          ))}
        </div>
        <button className="button1">Explore Services</button>
      </div>
    </div>
  );
}
'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { publicationContent } from '@/lib/content/publications';

export default function Publications() {
    const { locale } = useLocale();
    const t = publicationContent[locale];

    return (
        <div className="page-container">
            <div className="page-hero">
                <h2>...</h2>
            </div>
            <div className='section-container'>
                <h1>{t.title}</h1>
                <p>{t.description}</p>
                <h3>{t.book1}</h3>
                <p>{t.book1Descript}</p>
                <p>{t.readMore}</p>
            </div>
        </div>
    );
}

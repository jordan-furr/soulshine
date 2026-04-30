'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { SoulScribeContent } from '@/lib/content/soulscribe';

export default function SoulScribe() {
    const { locale } = useLocale();
    const t = SoulScribeContent[locale];

    return (
        <div className="page-container">
            <div className="page-hero">
                <h2>...</h2>
            </div>
            <div className='section-container'>
                <h1>{t.title}</h1>
                <p>{t.description}</p>
            </div>
        </div>
    );
}

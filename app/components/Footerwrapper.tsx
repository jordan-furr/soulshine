'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';
import Footer from './Footer';

export default function FooterWrapper() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <Footer
      locale={locale}
      rights={t.footer.rights}
      servicesHeading={t.nav.services}
      soulshinHeading="Soulshine"
      contactHeading={t.nav.contact}
      services={t.home.services.map(s => ({ label: s.label, slug: s.slug }))}
      bookLabel={t.common.bookSession}
      testimonialsLabel={t.nav.testimonials}
      publicationsLabel={t.nav.publications}
      soulscribeLabel={t.nav.soulScribe}
      aboutLabel={t.nav.about}
    />
  );
}
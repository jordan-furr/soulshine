'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';
import TriptychHero from '../components/Triptychhero';
import LogoSection from '../components/Logosection';
import CeremonySection from '../components/Ceremonysection';
import ManifestoSection from '../components/Manifestosection';
import PrayerSection from '../components/Prayersection';
import ServiceCards from '../components/Servicecards';

export default function Home() {
  const { locale } = useLocale();
  const t = getTranslations(locale);

  return (
    <>
      <TriptychHero
        eyebrow={t.home.description}
        headline={t.home.hero}
        cta={t.home.book}
      />
      <LogoSection
        tagline={t.home.tagline}
        headline={t.home.sacredGuidance}
        text={t.home.intro}
        cta={t.common.learnMore}
      />
      <CeremonySection
        label={t.home.ceremonyLabel}
        headline={t.home.ceremonyHeadline}
        body={t.home.ceremonyBody}
        cta={t.home.ceremonyCta}
      />
      <ManifestoSection
        label={t.home.manifestoLabel}
        blocks={t.home.manifesto}
        cta={{ label: t.home.manifestoCta, href: '/about' }}
      />
      <ServiceCards
        eyebrow={t.home.offeringsEyebrow}
        services={t.home.services}
      />
      <PrayerSection />
      
    </>
  );
}
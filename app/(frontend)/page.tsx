'use client';

import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';
import TriptychHero from '../components/Triptychhero';
import LogoSection from '../components/Logosection';
import IntroSection from '../components/Introsection';
import CeremonySection from '../components/Ceremonysection';
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
        cta={t.common.learnMore}
      />
      <IntroSection text={t.home.intro} />
      <CeremonySection
        label={t.home.ceremonyLabel}
        headline={t.home.ceremonyHeadline}
        cta={t.home.ceremonyCta}
      />
      <PrayerSection />
      <ServiceCards
        eyebrow={t.home.offeringsEyebrow}
        services={t.home.services}
      />
    </>
  );
}
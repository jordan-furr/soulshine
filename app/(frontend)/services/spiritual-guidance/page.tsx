'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { spiritualGuidanceContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function SpiritualGuidancePage() {
  const { locale } = useLocale();
  return <ServiceLayout content={spiritualGuidanceContent[locale]} image="/images/services/spiritual-guidance.jpeg" />;
}
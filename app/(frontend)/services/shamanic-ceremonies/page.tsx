'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { shamanicHealingContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function ShamanicCeremoniesPage() {
  const { locale } = useLocale();
  return <ServiceLayout content={shamanicHealingContent[locale]} image="/images/services/shamanic-ceremonies.jpeg" />;
}
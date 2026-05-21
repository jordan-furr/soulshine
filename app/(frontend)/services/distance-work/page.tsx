'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { distanceEnergyContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function DistanceWorkPage() {
  const { locale } = useLocale();
  return <ServiceLayout content={distanceEnergyContent[locale]} image="/images/services/distance-work.jpeg" />;
}
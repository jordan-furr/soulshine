 'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { matrimonyContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function ShamanicMatrimonyPage() {
  const { locale } = useLocale();
  return <ServiceLayout content={matrimonyContent[locale]} image="/images/services/shamanic-matrimony.jpeg" />;
}
'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { integrationContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function MedicineIntegrationPage() {
  const { locale } = useLocale();
  return <ServiceLayout content={integrationContent[locale]} image="/images/services/medicine-integration.jpeg" />;
}
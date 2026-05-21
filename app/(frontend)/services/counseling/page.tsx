'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { counselingContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function CounselingPage() {
  const { locale } = useLocale();
  return <ServiceLayout content={counselingContent[locale]} image="/images/services/counseling.jpeg" />;
}
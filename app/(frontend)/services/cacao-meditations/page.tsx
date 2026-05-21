'use client';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { cacaoContent } from '@/lib/content/services';
import ServiceLayout from '@/app/components/Servicelayout';

export default function CacaoMeditationsPage() {
  const { locale } = useLocale();
  return <ServiceLayout content={cacaoContent[locale]} image="/images/services/cacao-meditations.jpeg" />;
}
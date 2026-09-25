'use client';

import { useState } from 'react';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

const SERVICES_EN = [
  'Counseling & Therapy',
  'Spiritual Guidance',
  'Retreats',
  'Medicine Integration Support',
  'Cacao Meditation',
  'Distance Energy Healing',
  'Shamanic Matrimony',
];

const SERVICES_DE = [
  'Beratung & Therapie',
  'Spirituelle Begleitung',
  'Retreats',
  'Integrationsbegleitung',
  'Cacao Meditation',
  'Energieheilung auf Distanz',
  'Schamanische Trauung',
];

export default function ContactPage() {
  const { locale } = useLocale();
  const t = getTranslations(locale);
  const services = locale === 'de' ? SERVICES_DE : SERVICES_EN;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function toggleService(service: string) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, services: selectedServices }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-header">
        <p className="contact-header__label">{t.nav.contact}</p>
        <h1 className="contact-header__headline reveal">
          {locale === 'de' ? 'Beginne das Gespräch.' : 'Begin the conversation.'}
        </h1>
        <p className="contact-header__sub">
          {locale === 'de'
            ? 'Sitzungen auf Deutsch und Englisch — persönlich und online.'
            : 'Sessions in German and English — in person and remotely.'}
        </p>
      </section>

      <section className="contact-body">
        <div className="contact-body__inner">
          {status === 'sent' ? (
            <div className="contact-success">
              <p className="contact-success__headline">
                {locale === 'de' ? 'Nachricht gesendet.' : 'Message sent.'}
              </p>
              <p className="contact-success__sub">
                {locale === 'de'
                  ? 'Sarah wird sich bald bei dir melden.'
                  : 'Sarah will be in touch soon.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form__field">
                <label htmlFor="name" className="contact-form__label">
                  {t.contact.formName}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  className="contact-form__input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email" className="contact-form__label">
                  {t.contact.formEmail}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="contact-form__input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label">
                  {locale === 'de' ? 'Interesse an' : 'Interested in'}
                </label>
                <div className="contact-form__services">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`contact-form__chip${
                        selectedServices.includes(service) ? ' contact-form__chip--active' : ''
                      }`}
                      onClick={() => toggleService(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="message" className="contact-form__label">
                  {t.contact.formMessage}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="contact-form__input contact-form__textarea"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="contact-form__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending'
                  ? locale === 'de'
                    ? 'Senden...'
                    : 'Sending...'
                  : t.contact.formSend}
              </button>

              {status === 'error' && (
                <p className="contact-form__error">
                  {locale === 'de'
                    ? 'Etwas ist schiefgelaufen. Bitte versuche es erneut.'
                    : 'Something went wrong. Please try again.'}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

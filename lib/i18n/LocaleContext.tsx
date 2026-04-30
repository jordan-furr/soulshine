'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale } from './translations';

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  setLocale: () => { },
});

function detectLocale(): Locale {
  // 1. Check if user has previously chosen
  const saved = localStorage.getItem('locale') as Locale | null;
  if (saved === 'en' || saved === 'de') return saved;

  // 2. Fall back to browser language
  const browser = navigator.language.toLowerCase();
  return browser.startsWith('de') ? 'de' : 'en';
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    // Runs on client only — safe to access localStorage and navigator
    setLocaleState(detectLocale());

  }, []);

  const setLocale = (newLocale: Locale) => {
    localStorage.setItem('locale', newLocale);
    setLocaleState(newLocale);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
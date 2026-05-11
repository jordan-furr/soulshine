'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';

type NavChild = {
  label: string;
  href: string;
  dot?: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const Chevron = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="7" cy="7" rx="2.2" ry="5.5" stroke="currentColor" strokeWidth="1" />
    <line x1="1.5" y1="7" x2="12.5" y2="7" stroke="currentColor" strokeWidth="1" />
  </svg>
);

function Dot({ color }: { color: string }) {
  return (
    <span
      className="nav-dot"
      style={{ background: color }}
      aria-hidden="true"
    />
  );
}

function DropdownItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <li className="nav-item">
        <Link href={item.href} className="nav-link">
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li className="nav-item nav-item--has-dropdown">
      <Link href={item.href} className="nav-link">
        {item.label}
        <span className="nav-link__chevron"><Chevron /></span>
      </Link>
      <ul className="nav-dropdown" role="menu">
        {item.children.map((child, i) => (
          <li
            key={child.href}
            role="none"
            style={{ '--stagger': i } as React.CSSProperties}
            className="nav-dropdown__item"
          >
            <Link href={child.href} className="nav-dropdown__link" role="menuitem">
              {child.dot && <Dot color={child.dot} />}
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function LangGlobe({
  locale,
  setLocale,
}: {
  locale: string;
  setLocale: (l: 'en' | 'de') => void;
}) {
  const next = locale === 'en' ? 'de' : 'en';
  return (
    <button
      className="lang-globe"
      aria-label={`Switch to ${next === 'en' ? 'English' : 'Deutsch'}`}
      onClick={() => setLocale(next)}
    >
      <span className="lang-globe__icon"><GlobeIcon /></span>
      <span className="lang-globe__label">{locale.toUpperCase()}</span>
    </button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = getTranslations(locale);

  const navItems: NavItem[] = [
    { label: t.nav.about, href: '/about' },
    {
      label: t.nav.services,
      href: '/services',
      children: [
        { label: t.nav.counseling,   href: '/services/counseling',         dot: '#e60000' },
        { label: t.nav.guidance,     href: '/services/spiritual-guidance',  dot: '#e66400' },
        { label: t.nav.ceremonies,   href: '/services/shamanic-healing',    dot: '#e6e200' },
        { label: t.nav.integration,  href: '/services/integration-support', dot: '#28aa0e' },
        { label: t.nav.cacao,        href: '/services/cacao-meditations',   dot: '#0096e6' },
        { label: t.nav.international,href: '/services/distance-energy',     dot: '#1b05ac' },
        { label: t.nav.matrimony,    href: '/services/matrimony',           dot: '#7301d0' },
      ],
    },
    { label: t.nav.publications, href: '/publications' },
    { label: t.nav.testimonials, href: '/testimonials' },
    { label: t.nav.contact,      href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>

        {/* ── Logo row — always visible ── */}
        <div className="navbar__logo-row">
          <Link href="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
            {/* Symbol — hidden when scrolled */}
            <span className="navbar__logo-symbol" aria-hidden="true">
              <Image
                src="/images/soulshine-symbol.svg"
                alt=""
                width={36}
                height={36}
                priority
              />
            </span>
            {/* Wordmark — rainbow default, solid on hover */}
            <span className="navbar__logo-wordmark">
              <span className="navbar__logo-rainbow" aria-hidden="true">Soulshine</span>
              <span className="navbar__logo-hover">Soulshine</span>
            </span>
          </Link> 
        </div>

        {/* ── Nav row ── */}
        <div className="navbar__nav-row">
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <DropdownItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>
          <div className="navbar__actions">
            <LangGlobe locale={locale} setLocale={setLocale} />
            <button
              className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile overlay ── */}
      <div
        className={`mobile-overlay${mobileOpen ? ' mobile-overlay--visible' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.href} className="mobile-nav-item">
                {item.children ? (
                  <>
                    <div className="mobile-nav-row">
                      <Link
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <button
                        className={`mobile-nav-toggle${mobileExpanded === item.href ? ' mobile-nav-toggle--open' : ''}`}
                        onClick={() =>
                          setMobileExpanded(mobileExpanded === item.href ? null : item.href)
                        }
                        aria-label="Expand submenu"
                      >
                        <Chevron />
                      </button>
                    </div>
                    <ul className={`mobile-sub-list${mobileExpanded === item.href ? ' mobile-sub-list--open' : ''}`}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="mobile-sub-link"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.dot && <Dot color={child.dot} />}
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="mobile-nav-link"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mobile-lang">
            <span className="mobile-lang-label">Language</span>
            {(['en', 'de'] as const).map((l) => (
              <button
                key={l}
                className={`mobile-lang-btn${locale === l ? ' mobile-lang-btn--active' : ''}`}
                onClick={() => setLocale(l)}
              >
                {l === 'en' ? 'EN' : 'DE'}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
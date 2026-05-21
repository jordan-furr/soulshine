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
  return <span className="nav-dot" style={{ background: color }} aria-hidden="true" />;
}

function DropdownItem({ item }: { item: NavItem }) {
  if (!item.children) {
    return (
      <li className="nav-item">
        <Link href={item.href} className="nav-link">{item.label}</Link>
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

function LangGlobe({ locale, setLocale }: { locale: string; setLocale: (l: 'en' | 'de') => void }) {
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

interface MenuOverlayProps {
  navItems: NavItem[];
  onClose: () => void;
  isClosing: boolean;
}

function MenuOverlay({ navItems, onClose, isClosing }: MenuOverlayProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isClosing) {
      setAnimate(false);
    } else {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [isClosing]);

  return (
    <div className={`mobile-overlay ${animate && !isClosing ? 'mobile-overlay--open' : ''}`}>
      <nav className="mobile-overlay__nav">
        {navItems.map((item, i) => (
          <div key={item.href} className="mobile-overlay__item-wrap">
            <Link
              href={item.href}
              className={`mobile-overlay__link ${animate && !isClosing ? 'mobile-overlay__link--visible' : ''}`}
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={onClose}
            >
              {item.label}
            </Link>
            {item.children && (
              <div className="mobile-overlay__subitems">
                {item.children.map((child, j) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`mobile-overlay__sublink ${animate && !isClosing ? 'mobile-overlay__link--visible' : ''}`}
                    style={{ animationDelay: `${(i + j + 1) * 0.05}s` }}
                    onClick={onClose}
                  >
                    {child.dot && <Dot color={child.dot} />}
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { locale, setLocale } = useLocale();
  const t = getTranslations(locale);

  const navItems: NavItem[] = [
    { label: t.nav.about, href: '/about' },
    {
      label: t.nav.services,
      href: '/services',
      children: [
        { label: t.nav.counseling,    href: '/services/counseling',          dot: '#e60000' },
        { label: t.nav.guidance,      href: '/services/spiritual-guidance',  dot: '#e66400' },
        { label: t.nav.ceremonies,    href: '/services/shamanic-ceremonies',    dot: '#e6e200' },
        { label: t.nav.integration,   href: '/services/medicine-integration', dot: '#28aa0e' },
        { label: t.nav.cacao,         href: '/services/cacao-meditations',   dot: '#0096e6' },
        { label: t.nav.international, href: '/services/distance-work',     dot: '#1b05ac' },
        { label: t.nav.matrimony,     href: '/services/shamanic-matrimony',           dot: '#7301d0' },
      ],
    },
    { label: t.nav.publications, href: '/publications' },
    { label: t.nav.testimonials, href: '/testimonials' },
    { label: t.nav.contact,      href: '/contact' },
  ];

  const handleOpen = () => {
    setIsClosing(false);
    setMobileOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileOpen(false);
      setIsClosing(false);
    }, 200);
  };

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

        {/* ── Logo row ── */}
        <div className="navbar__logo-row">
          {/* Desktop: stacked centered */}
          <Link href="/" className="navbar__logo navbar__logo--desktop" onClick={() => mobileOpen && handleClose()}>
            <span className="navbar__logo-symbol" aria-hidden="true">
              <Image src="/images/soulshine-three.png" alt="" width={40} height={40} priority />
            </span>
            <span className="navbar__logo-wordmark">
              <span className="navbar__logo-rainbow" aria-hidden="true">Soulshine</span>
              <span className="navbar__logo-hover">Soulshine</span>
            </span>
          </Link>
          {/* Mobile: horizontal lockup */}
          <Link href="/" className="navbar__logo navbar__logo--mobile" onClick={() => mobileOpen && handleClose()}>
            <span className="navbar__logo-symbol" aria-hidden="true">
              <Image src="/images/soulshine-three.png" alt="" width={28} height={28} priority />
            </span>
            <span className="navbar__logo-wordmark">
              <span className="navbar__logo-rainbow" aria-hidden="true">Soulshine</span>
              <span className="navbar__logo-hover">Soulshine</span>
            </span>
          </Link>
          {/* Mobile actions — right side */}
          <div className="navbar__mobile-actions">
            <LangGlobe locale={locale} setLocale={setLocale} />
            <button
              className={`hamburger${mobileOpen ? ' hamburger--open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={mobileOpen ? handleClose : handleOpen}
            >
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
            </button>
          </div>
        </div>

        {/* ── Nav row — desktop only ── */}
        <div className="navbar__nav-row">
          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <DropdownItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>
          {/* Desktop globe — right */}
          <div className="navbar__actions">
            <LangGlobe locale={locale} setLocale={setLocale} />
          </div>
        </div>

      </header>

      {/* ── Mobile overlay ── */}
      {(mobileOpen || isClosing) && (
        <MenuOverlay
          navItems={navItems}
          onClose={handleClose}
          isClosing={isClosing}
        />
      )}
    </>
  );
}
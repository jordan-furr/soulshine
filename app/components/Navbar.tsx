'use client';
import { useState, useEffect, useCallback } from 'react';
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

function LangPill({ locale, setLocale }: { locale: string; setLocale: (l: 'en' | 'de') => void }) {
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

function MobileDrawerItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link href={item.href} className="navbar__drawer-link" onClick={onClose}>
        {item.label}
      </Link>
    );
  }

  return (
    <div className="navbar__drawer-group">
      <button
        className={`navbar__drawer-link navbar__drawer-toggle${open ? ' navbar__drawer-toggle--open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {item.label}
        <span className="navbar__drawer-chevron"><Chevron /></span>
      </button>
      <div className={`navbar__drawer-sub${open ? ' navbar__drawer-sub--open' : ''}`}>
        <Link href={item.href} className="navbar__drawer-sublink" onClick={onClose}>
          All {item.label}
        </Link>
        {item.children.map((child) => (
          <Link key={child.href} href={child.href} className="navbar__drawer-sublink" onClick={onClose}>
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
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
        { label: t.nav.retreats,       href: '/services/retreats',            dot: '#e6e200' },
        { label: t.nav.integration,   href: '/services/medicine-integration', dot: '#28aa0e' },
        { label: t.nav.cacao,         href: '/services/cacao-meditations',   dot: '#0096e6' },
        { label: t.nav.international, href: '/services/distance-work',       dot: '#1b05ac' },
        { label: t.nav.matrimony,     href: '/services/shamanic-matrimony',  dot: '#7301d0' },
      ],
    },
    { label: t.nav.publications, href: '/publications' },
    { label: t.nav.testimonials, href: '/testimonials' },
    { label: t.nav.contact,      href: '/contact' },
  ];

  const leftNav = navItems.slice(0, 3);
  const rightNav = navItems.slice(3);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  useEffect(() => {
    if (!drawerOpen) return;
    document.body.style.overflow = 'hidden';
    const onResize = () => { if (window.innerWidth > 900) setDrawerOpen(false); };
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', onResize);
    };
  }, [drawerOpen]);

  return (
    <header className={`navbar${stuck ? ' navbar--stuck' : ''}${drawerOpen ? ' navbar--drawer-open' : ''}`}>
      <div className="navbar__grid">
        {/* Left nav (desktop) */}
        <nav className="navbar__nav navbar__nav--left" aria-label="Main navigation">
          <ul className="nav-list">
            {leftNav.map((item) => (
              <DropdownItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        {/* Mobile: lang toggle (left side) */}
        <div className="navbar__mobile-left">
          <LangPill locale={locale} setLocale={setLocale} />
        </div>

        {/* Center lockup */}
        <Link href="/" className="navbar__lockup">
          <Image
            className="navbar__symbol"
            src="/images/soulshine.png"
            alt="Soulshine"
            width={56}
            height={56}
            priority
          />
          <div className="navbar__wordmark-wrap">
            <span className="navbar__wordmark">
              <span className="navbar__wordmark-rainbow" aria-hidden="true">Soulshine</span>
              <span className="navbar__wordmark-hover">Soulshine</span>
            </span>
          </div>
        </Link>

        {/* Right nav (desktop) + lang pill (desktop) */}
        <div className="navbar__right">
          <nav className="navbar__nav navbar__nav--right" aria-label="Secondary navigation">
            <ul className="nav-list">
              {rightNav.map((item) => (
                <DropdownItem key={item.href} item={item} />
              ))}
            </ul>
          </nav>
          <LangPill locale={locale} setLocale={setLocale} />
        </div>

        {/* Hamburger (mobile, right side) */}
        <button
          className={`hamburger${drawerOpen ? ' hamburger--open' : ''}`}
          aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(!drawerOpen)}
        >
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
          <span className="hamburger__bar" />
        </button>
      </div>

      {/* Mobile overlay */}
      {drawerOpen && (
        <div className="navbar__overlay">
          <nav className="navbar__overlay-nav">
            {navItems.map((item) => (
              <MobileDrawerItem key={item.href} item={item} onClose={closeDrawer} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

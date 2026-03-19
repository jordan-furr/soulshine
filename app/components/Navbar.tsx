'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from '@/lib/i18n/LocaleContext';
import { getTranslations } from '@/lib/i18n/translations';


type NavItem = {
    label: string;
    href: string;
    children?: { label: string; href: string }[];
};

const Chevron = () => (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


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
                {item.children.map((child) => (
                    <li key={child.href} role="none">
                        <Link href={child.href} className="nav-dropdown__link" role="menuitem">
                            {child.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const { locale, setLocale } = useLocale();
    const t = getTranslations(locale);

    const navItems = [
    { label: t.nav.about, href: '/about' },

    {
        label: 'Services',
        href: '/services',
        children: [
            { label: 'Counseling & Therapy', href: 'services/counseling' },
            { label: 'Integration Support', href: 'services/integration' },
            { label: 'Healing Ceremonies', href: '/services/healing-ceremonies' },
            { label: 'Sacred Experiences', href: '/services/sacred-experiences' },
            { label: 'New Moon Meditations', href: '/services/new-moon-meditations' },
            { label: 'Women Wild And Wise', href: '/services/women-wild' },
        ],
    },
    { label: 'Books', href: '/books' },
    { label: 'Poetic Impulses', href: '/poetic-impulses' },
    { label: 'Contact', href: '/contact' },
];



    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Lock body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    return (
        <>
            <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
                <div className="navbar__inner">
                    {/* Logo / Wordmark */}
                    <Link href="/" className="navbar__logo" onClick={() => setMobileOpen(false)}>
                        <span className="navbar__logo-soul">Soulshine</span>
                        <span className="navbar__logo-sarah">sArAh</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="navbar__nav" aria-label="Main navigation">
                        <ul className="nav-list">
                            {navItems.map((item) => (
                                <DropdownItem key={item.href} item={item} />
                            ))}
                        </ul>
                    </nav>

                    {/* Language + Hamburger */}
                    <div className="navbar__actions">
                        <div className="lang-toggle" role="group" aria-label="Language selection">
                            <button
                                className={`lang-toggle__btn${locale === 'en' ? ' lang-toggle__btn--active' : ''}`}
                                onClick={() => setLocale('en')}
                                aria-pressed={locale === 'en'}

                            >
                                EN
                            </button>
                            <span className="lang-toggle__divider" aria-hidden="true" />
                            <button
                                className={`lang-toggle__btn${locale === 'de' ? ' lang-toggle__btn--active' : ''}`}
                                onClick={() => setLocale('de')}
                                aria-pressed={locale === 'de'}

                            >
                                DE
                            </button>
                        </div>


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

            {/* Mobile Menu Overlay */}
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
                                            <Link href={item.href} className="mobile-nav-link" onClick={() => setMobileOpen(false)}>

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
                                        <ul
                                            className={`mobile-sub-list${mobileExpanded === item.href ? ' mobile-sub-list--open' : ''}`}
                                        >
                                            {item.children.map((child) => (
                                                <li key={child.href}>
                                                    <Link
                                                        href={child.href}
                                                        className="mobile-sub-link"
                                                        onClick={() => setMobileOpen(false)}
                                                    >
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
                        <div className="lang-toggle" role="group">
                            <button
                                className={`lang-toggle__btn${locale === 'en' ? ' lang-toggle__btn--active' : ''}`}
                                onClick={() => setLocale('en')}
                                aria-pressed={locale === 'en'}

                            >EN</button>
                            <span className="lang-toggle__divider" aria-hidden="true" />
                            <button
                                className={`lang-toggle__btn${locale === 'de' ? ' lang-toggle__btn--active' : ''}`}
                                onClick={() => setLocale('de')}
                                aria-pressed={locale === 'de'}

                            >DE</button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
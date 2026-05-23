'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useApp } from '@/contexts/AppContext';

export default function Header() {
    const { t, theme, lang, toggleTheme, toggleLang } = useApp();
    const navItems = [
        { id: 'about',    label: t.nav.about },
        { id: 'timeline', label: t.nav.timeline },
        { id: 'projects', label: t.nav.projects },
        { id: 'contrib',  label: t.nav.activity },
        { id: 'skills',   label: t.nav.skills },
        { id: 'contact',  label: t.nav.contact },
    ];

    const activeId = useScrollSpy(['hero', ...navItems.map((n) => n.id)], 200);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const btnBase: React.CSSProperties = {
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        padding: '5px 10px',
        background: 'transparent',
        border: '1px solid var(--border)',
        color: 'var(--text-muted)',
        cursor: 'pointer',
        letterSpacing: '0.5px',
        transition: 'all 0.2s ease',
    };

    return (
        <header
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: scrolled ? 'rgba(var(--bg-rgb, 255,255,255),0.92)' : 'transparent',
                backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 92%, transparent)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                transition: 'all 0.3s ease',
            }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '64px',
                }}
            >
                {/* Logo */}
                <a
                    href="#hero"
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '16px',
                        fontWeight: 700,
                        color: 'var(--accent)',
                        textDecoration: 'none',
                    }}
                >
                    {'<'}
                    <span style={{ color: 'var(--text)' }}>masaBa-13</span>
                    {' />'}
                </a>

                {/* Desktop nav */}
                <nav
                    style={{ display: 'flex', gap: '4px', alignItems: 'center' }}
                    className="desktop-nav"
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                padding: '6px 12px',
                                color: activeId === item.id ? 'var(--accent)' : 'var(--text-muted)',
                                textDecoration: 'none',
                                borderBottom: activeId === item.id
                                    ? '1px solid var(--accent)'
                                    : '1px solid transparent',
                                transition: 'all 0.2s ease',
                                letterSpacing: '0.5px',
                            }}
                        >
                            {item.label}
                        </a>
                    ))}

                    <Link
                        href="/skills"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            padding: '5px 12px',
                            marginLeft: '8px',
                            border: '1px solid var(--accent)',
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {t.nav.skillSheet}
                    </Link>

                    {/* Theme toggle */}
                    <button onClick={toggleTheme} style={btnBase} title="Toggle theme">
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: '1px solid var(--border)',
                        padding: '8px',
                        cursor: 'pointer',
                        color: 'var(--text)',
                    }}
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                        {menuOpen ? (
                            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                        ) : (
                            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" fill="none" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        position: 'absolute',
                        top: '64px',
                        left: 0,
                        right: 0,
                        background: 'var(--bg)',
                        borderBottom: '1px solid var(--border)',
                        padding: '16px 24px',
                    }}
                >
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMenuOpen(false)}
                            style={{
                                display: 'block',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '14px',
                                padding: '10px 0',
                                color: activeId === item.id ? 'var(--accent)' : 'var(--text-muted)',
                                textDecoration: 'none',
                                borderBottom: '1px solid var(--border)',
                            }}
                        >
                            {item.label}
                        </a>
                    ))}
                    <div style={{ display: 'flex', gap: '8px', paddingTop: '12px' }}>
                        <button onClick={toggleTheme} style={{ ...btnBase, flex: 1 }}>
                            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
                        </button>
                    </div>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
        </header>
    );
}

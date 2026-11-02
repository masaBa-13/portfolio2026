'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { useApp } from '@/contexts/AppContext';
import Toggles from '@/components/layout/Toggles';

const SECTION_IDS = ['hero', 'about', 'timeline', 'projects', 'contrib', 'skills', 'contact'];

export default function Header() {
    const { t } = useApp();
    const navItems = [
        { id: 'about',    label: t.nav.about },
        { id: 'timeline', label: t.nav.timeline },
        { id: 'projects', label: t.nav.projects },
        { id: 'contrib',  label: t.nav.activity },
        { id: 'skills',   label: t.nav.skills },
        { id: 'contact',  label: t.nav.contact },
    ];

    const activeId = useScrollSpy(SECTION_IDS, 200);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuButton = useRef<HTMLButtonElement>(null);
    const sheet = useRef<HTMLDivElement>(null);
    const pastIntro = activeId !== '' && activeId !== 'hero';
    const current = navItems.find((n) => n.id === activeId);

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMenuOpen(false);
                menuButton.current?.focus();
            }
        };
        // 幅が広がると閉じるボタンごと隠れるので、回転やリサイズでは閉じておく
        const wide = window.matchMedia('(min-width: 900px)');
        const onWide = (e: MediaQueryListEvent) => {
            if (e.matches) setMenuOpen(false);
        };
        document.addEventListener('keydown', onKey);
        wide.addEventListener('change', onWide);
        document.documentElement.style.overflow = 'hidden';
        sheet.current?.querySelector('a')?.focus();
        return () => {
            document.removeEventListener('keydown', onKey);
            wide.removeEventListener('change', onWide);
            document.documentElement.style.overflow = '';
        };
    }, [menuOpen]);

    return (
        <>
            <header className="topbar">
                <div className="container topbar-in">
                    {pastIntro && <a className="topbar-name" href="#hero">祐川 雅治</a>}
                    <nav aria-label={t.nav.menu}>
                        {navItems.map((item) => (
                            <a key={item.id} href={`#${item.id}`} aria-current={activeId === item.id ? 'true' : undefined}>
                                {item.label}
                            </a>
                        ))}
                        <Link href="/skills">{t.nav.skillSheet}</Link>
                    </nav>
                    <Toggles />
                </div>
            </header>

            {menuOpen && <div className="scrim" onClick={() => setMenuOpen(false)} />}

            <div id="site-menu" ref={sheet} className={`sheet${menuOpen ? ' is-open' : ''}`}>
                <nav aria-label={t.nav.menu}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-current={activeId === item.id ? 'true' : undefined}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <Link href="/skills">{t.nav.skillSheet}</Link>
                </nav>
                <Toggles />
            </div>

            <div className="bar">
                <a className="bar-now" href="#hero">
                    {current ? current.label : '祐川 雅治'}
                </a>
                <button
                    ref={menuButton}
                    type="button"
                    className="bar-menu"
                    aria-expanded={menuOpen}
                    aria-controls="site-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? t.nav.close : t.nav.menu}
                </button>
            </div>
        </>
    );
}

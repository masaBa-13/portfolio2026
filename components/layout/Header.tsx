'use client';

import { useState, useEffect } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';

const navItems = [
    { id: 'about', label: 'About' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'contrib', label: 'Activity' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
];

export default function Header() {
    const activeId = useScrollSpy(
        ['hero', ...navItems.map((n) => n.id)],
        200
    );
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[1000] transition-all duration-300"
            style={{
                background: scrolled ? 'rgba(8,11,15,0.92)' : 'transparent',
                borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
            }}
        >
            <div className="container flex justify-between items-center h-16">
                {/* Logo */}
                <a href="#hero" className="font-mono text-base font-bold text-accent">
                    {'<'}
                    <span className="text-fg">masaBa-13</span>
                    {' />'}
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex gap-1 items-center">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={[
                                'font-mono text-xs px-3 py-[6px] transition-all duration-200 tracking-[0.5px] border-b',
                                activeId === item.id
                                    ? 'text-accent border-accent'
                                    : 'text-muted border-transparent',
                            ].join(' ')}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden bg-transparent border border-border p-2 cursor-pointer text-fg"
                    onClick={() => setMenuOpen(!menuOpen)}
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
                <div className="absolute top-16 left-0 right-0 bg-[rgba(8,11,15,0.98)] border-b border-border px-6 py-4">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            onClick={() => setMenuOpen(false)}
                            className={[
                                'block font-mono text-sm py-[10px] border-b border-border',
                                activeId === item.id ? 'text-accent' : 'text-muted',
                            ].join(' ')}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
}

'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations, { Lang, Translations } from '@/lib/i18n';

interface AppContextType {
    theme: 'light' | 'dark';
    lang: Lang;
    toggleTheme: () => void;
    toggleLang: () => void;
    t: Translations;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [lang, setLang] = useState<Lang>('ja');

    // Restore saved preferences
    useEffect(() => {
        const savedTheme = localStorage.getItem('pf-theme') as 'light' | 'dark' | null;
        const savedLang = localStorage.getItem('pf-lang') as Lang | null;
        if (savedTheme) setTheme(savedTheme);
        if (savedLang) setLang(savedLang);
    }, []);

    // Apply theme to <html> and persist
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('pf-theme', theme);
    }, [theme]);

    // Persist lang
    useEffect(() => {
        localStorage.setItem('pf-lang', lang);
    }, [lang]);

    return (
        <AppContext.Provider value={{
            theme,
            lang,
            toggleTheme: () => setTheme(p => p === 'light' ? 'dark' : 'light'),
            toggleLang:  () => setLang(p => p === 'ja' ? 'en' : 'ja'),
            t: translations[lang] as Translations,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be used within AppProvider');
    return ctx;
}

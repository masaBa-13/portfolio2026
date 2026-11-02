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

    // 読み込み時の配色は layout の先行スクリプトが当てている。
    // ここで初期値を書き戻すと夜の配色の人に一瞬昼の配色が見えるので、切り替えたときだけ反映する
    const toggleTheme = () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        document.documentElement.setAttribute('data-theme', next);
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'light' ? '#fdfdfc' : '#161615');
        localStorage.setItem('pf-theme', next);
    };

    const toggleLang = () => {
        const next = lang === 'ja' ? 'en' : 'ja';
        setLang(next);
        localStorage.setItem('pf-lang', next);
    };

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return (
        <AppContext.Provider value={{
            theme,
            lang,
            toggleTheme,
            toggleLang,
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

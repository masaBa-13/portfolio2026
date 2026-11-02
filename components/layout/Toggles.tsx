'use client';

import { useApp } from '@/contexts/AppContext';

export default function Toggles() {
    const { t, theme, toggleTheme, toggleLang } = useApp();

    return (
        <div className="toggles">
            <button type="button" className="tgl" onClick={toggleLang} aria-label={t.ui.langLabel}>
                {t.ui.langButton}
            </button>
            <button
                type="button"
                className="tgl"
                onClick={toggleTheme}
                aria-label={theme === 'light' ? t.ui.themeToDarkLabel : t.ui.themeToLightLabel}
            >
                {theme === 'light' ? t.ui.themeToDark : t.ui.themeToLight}
            </button>
        </div>
    );
}

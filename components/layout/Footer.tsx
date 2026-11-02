'use client';

import { useApp } from '@/contexts/AppContext';

export default function Footer() {
    const { t } = useApp();

    return (
        <footer className="foot">
            <div className="container">
                <div className="foot-links">
                    {[
                        { label: 'RemeMore', url: 'https://reme-more.com/plate/e30f6d05-4544-448f-a724-64c267f17be4' },
                        { label: 'GitHub',   url: 'https://github.com/masaBa-13' },
                        { label: 'TackMore', url: 'https://tackmore.jp' },
                    ].map(({ label, url }) => (
                        <a key={label} href={url} target="_blank" rel="noopener noreferrer">
                            {label}
                        </a>
                    ))}
                </div>
                <p className="foot-copy">
                    © {t.footer.copyright} — {t.footer.builtWith} Next.js
                </p>
            </div>
        </footer>
    );
}

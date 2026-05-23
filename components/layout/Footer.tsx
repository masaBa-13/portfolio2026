'use client';

import { useApp } from '@/contexts/AppContext';

export default function Footer() {
    const { t } = useApp();

    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                padding: '40px 0',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <div
                className="container"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '16px',
                }}
            >
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                    }}
                >
                    <span style={{ color: 'var(--accent)' }}>©</span> {t.footer.copyright} — {t.footer.builtWith}{' '}
                    <span style={{ color: 'var(--text)' }}>Next.js</span>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    {[
                        { label: 'RemeMore', url: 'https://reme-more.com/plate/e30f6d05-4544-448f-a724-64c267f17be4' },
                        { label: 'GitHub',   url: 'https://github.com/masaBa-13' },
                        { label: 'TackMore', url: 'https://tackmore.jp' },
                    ].map(({ label, url }) => (
                        <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '12px',
                                color: 'var(--text-muted)',
                                textDecoration: 'none',
                                transition: 'color 0.2s',
                            }}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

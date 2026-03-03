export default function Footer() {
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
                    <span style={{ color: 'var(--accent)' }}>©</span> 2026 祐川雅治 — Built with{' '}
                    <span style={{ color: 'var(--text)' }}>Next.js</span>
                </div>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <a
                        href="https://reme-more.com/plate/e30f6d05-4544-448f-a724-64c267f17be4"
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
                        RemeMore
                    </a>
                    <a
                        href="https://github.com/masaBa-13"
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
                        GitHub
                    </a>
                    <a
                        href="https://tackmore.jp"
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
                        TackMore
                    </a>
                </div>
            </div>
        </footer>
    );
}

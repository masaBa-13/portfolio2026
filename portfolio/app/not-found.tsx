export default function NotFound() {
    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)',
                background: 'var(--bg)',
                color: 'var(--text)',
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <div
                    style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        marginBottom: '16px',
                    }}
                >
                    <span style={{ color: 'var(--accent)' }}>visitor@portfolio</span>
                    <span style={{ color: 'var(--text-muted)' }}>:</span>
                    <span style={{ color: 'var(--accent-2)' }}>~</span>
                    <span>$ find . -name &quot;page&quot;</span>
                </div>
                <div
                    style={{
                        fontSize: '72px',
                        fontWeight: 700,
                        color: 'var(--danger)',
                        lineHeight: 1,
                        marginBottom: '16px',
                    }}
                >
                    404
                </div>
                <div
                    style={{
                        fontSize: '16px',
                        color: 'var(--text-muted)',
                        marginBottom: '32px',
                    }}
                >
                    <span style={{ color: 'var(--danger)' }}>ERROR</span>: PAGE_NOT_FOUND
                </div>
                <a
                    href="/"
                    style={{
                        display: 'inline-block',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        padding: '10px 24px',
                        color: 'var(--accent)',
                        border: '1px solid var(--accent)',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                    }}
                >
                    {'>'} cd /home
                </a>
            </div>
        </div>
    );
}

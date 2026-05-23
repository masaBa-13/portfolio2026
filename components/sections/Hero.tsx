'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import { useApp } from '@/contexts/AppContext';

export default function Hero() {
    const { t } = useApp();
    const { displayText } = useTypewriter({
        texts: t.hero.roles as unknown as string[],
        speed: 70,
        deleteSpeed: 35,
        pauseTime: 2500,
    });

    return (
        <section
            id="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Grid background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.05,
                    backgroundImage:
                        'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Terminal prompt */}
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '14px',
                        color: 'var(--accent)',
                        marginBottom: '16px',
                    }}
                >
                    <span style={{ color: 'var(--text-muted)' }}>visitor@portfolio</span>
                    <span style={{ color: 'var(--accent)' }}>:</span>
                    <span style={{ color: 'var(--accent-2)' }}>~</span>
                    <span style={{ color: 'var(--text)' }}>$ </span>
                    <span style={{ color: 'var(--accent)' }}>cat intro.txt</span>
                </div>

                {/* Name */}
                <h1
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 'clamp(40px, 6vw, 72px)',
                        fontWeight: 700,
                        color: 'var(--text)',
                        letterSpacing: '-1px',
                        marginBottom: '4px',
                    }}
                >
                    祐川 雅治
                </h1>
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(20px, 3vw, 36px)',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginTop: '-4px',
                        marginBottom: '24px',
                        letterSpacing: '-0.5px',
                    }}
                >
                    <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>// </span>
                    SUKEKAWA MASAHARU
                </div>

                {/* Typewriter role */}
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '18px',
                        color: 'var(--accent)',
                        minHeight: '28px',
                        marginBottom: '32px',
                    }}
                >
                    <span style={{ color: 'var(--text-muted)' }}>{'> '}</span>
                    {displayText}
                    <span
                        style={{
                            display: 'inline-block',
                            width: '2px',
                            height: '20px',
                            background: 'var(--accent)',
                            marginLeft: '2px',
                            verticalAlign: 'text-bottom',
                            animation: 'cursor-blink 1s infinite',
                        }}
                    />
                </div>

                {/* Status indicators */}
                <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                    {t.hero.status.map((item, i) => (
                        <div key={item.label} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>{item.label}: </span>
                            <span style={{
                                color: i === 0 ? 'var(--accent)' : i === 2 ? 'var(--accent-2)' : 'var(--text)',
                            }}>
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '80px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    zIndex: 2,
                }}
            >
                <div style={{ marginBottom: '8px' }}>SCROLL_DOWN</div>
                <div
                    style={{
                        width: '1px',
                        height: '40px',
                        background: 'linear-gradient(to bottom, var(--accent), transparent)',
                        margin: '0 auto',
                    }}
                />
            </div>
        </section>
    );
}

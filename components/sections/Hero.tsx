'use client';

import { useTypewriter } from '@/hooks/useTypewriter';
import GlitchText from '@/components/ui/GlitchText';

export default function Hero() {
    const { displayText } = useTypewriter({
        texts: [
            'CEO / 株式会社TackMore',
            'Future University Hakodate',
            'Social Tech Entrepreneur',
            'IoT × 地方創生',
        ],
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
                <GlitchText
                    text="祐川 雅治"
                    tag="h1"
                    className=""
                />
                <div
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(36px, 5vw, 64px)',
                        fontWeight: 700,
                        color: 'var(--text)',
                        marginTop: '-8px',
                        marginBottom: '24px',
                        letterSpacing: '-1px',
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
                    {[
                        { label: 'STATUS', value: 'ACTIVE', color: 'var(--accent)' },
                        { label: 'LOCATION', value: '函館, 北海道', color: 'var(--text)' },
                        { label: 'COMPANY', value: 'TackMore Inc.', color: 'var(--accent-2)' },
                    ].map((item) => (
                        <div key={item.label} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                            <span style={{ color: 'var(--text-muted)' }}>{item.label}: </span>
                            <span style={{ color: item.color }}>{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator — section基準で配置 */}
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

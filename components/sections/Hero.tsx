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
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Grid background */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage:
                        'linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="container relative z-10">
                {/* Terminal prompt */}
                <div className="font-mono text-sm text-accent mb-4">
                    <span className="text-muted">visitor@portfolio</span>
                    <span className="text-accent">:</span>
                    <span className="text-accent-2">~</span>
                    <span className="text-fg">$ </span>
                    <span className="text-accent">cat intro.txt</span>
                </div>

                {/* Name */}
                <GlitchText text="祐川 雅治" tag="h1" className="" />
                <div className="font-mono font-bold text-fg mt-[-8px] mb-6 tracking-[-1px] text-[clamp(36px,5vw,64px)]">
                    <span className="text-muted font-normal">// </span>
                    SUKEKAWA MASAHARU
                </div>

                {/* Typewriter role */}
                <div className="font-mono text-lg text-accent min-h-7 mb-8">
                    <span className="text-muted">{'> '}</span>
                    {displayText}
                    <span
                        className="inline-block w-0.5 h-5 bg-accent ml-0.5 align-text-bottom"
                        style={{ animation: 'cursor-blink 1s infinite' }}
                    />
                </div>

                {/* Status indicators */}
                <div className="flex gap-6 flex-wrap">
                    {[
                        { label: 'STATUS',   value: 'ACTIVE',        color: 'text-accent' },
                        { label: 'LOCATION', value: '函館, 北海道',      color: 'text-fg' },
                        { label: 'COMPANY',  value: 'TackMore Inc.', color: 'text-accent-2' },
                    ].map((item) => (
                        <div key={item.label} className="font-mono text-xs">
                            <span className="text-muted">{item.label}: </span>
                            <span className={item.color}>{item.value}</span>
                        </div>
                    ))}
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs text-muted text-center">
                    <div className="mb-2">SCROLL_DOWN</div>
                    <div
                        className="w-px h-10 mx-auto"
                        style={{ background: 'linear-gradient(to bottom, var(--color-accent), transparent)' }}
                    />
                </div>
            </div>
        </section>
    );
}

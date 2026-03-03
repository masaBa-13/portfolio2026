'use client';

export default function ScanLine() {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 9999,
                pointerEvents: 'none',
                overflow: 'hidden',
            }}
        >
            {/* Scan lines */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                }}
            />
            {/* Moving scan beam */}
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    opacity: 0.06,
                    animation: 'scanline 8s linear infinite',
                }}
            />
        </div>
    );
}

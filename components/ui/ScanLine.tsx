'use client';

export default function ScanLine() {
    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
            {/* Scan lines */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                }}
            />
            {/* Moving scan beam */}
            <div
                className="absolute left-0 right-0 h-0.5 opacity-[0.06]"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)',
                    animation: 'scanline 8s linear infinite',
                }}
            />
        </div>
    );
}

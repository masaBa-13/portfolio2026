'use client';

import { useApp } from '@/contexts/AppContext';

export default function ScanLine() {
    const { theme } = useApp();
    if (theme === 'light') return null;

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
            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                    opacity: 0.025,
                    animation: 'scanline 12s linear infinite',
                }}
            />
        </div>
    );
}

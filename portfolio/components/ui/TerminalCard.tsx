import { ReactNode } from 'react';

interface TerminalCardProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export default function TerminalCard({ title = 'terminal', children, className = '' }: TerminalCardProps) {
    return (
        <div
            className={className}
            style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
            }}
        >
            {/* Title bar */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    borderBottom: '1px solid var(--border)',
                    background: 'rgba(0,0,0,0.3)',
                }}
            >
                <div style={{ width: 12, height: 12, background: 'var(--danger)', flexShrink: 0 }} />
                <div style={{ width: 12, height: 12, background: '#FFBD2E', flexShrink: 0 }} />
                <div style={{ width: 12, height: 12, background: 'var(--accent)', flexShrink: 0 }} />
                <span
                    style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        color: 'var(--text-muted)',
                        marginLeft: '8px',
                    }}
                >
                    {title}
                </span>
            </div>
            {/* Content */}
            <div style={{ padding: '20px' }}>{children}</div>
        </div>
    );
}

interface TagBadgeProps {
    label: string;
    accent?: boolean;
}

export default function TagBadge({ label, accent = false }: TagBadgeProps) {
    return (
        <span
            style={{
                display: 'inline-block',
                padding: '2px 10px',
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.5px',
                border: `1px solid ${accent ? 'var(--accent)' : 'var(--border)'}`,
                color: accent ? 'var(--accent)' : 'var(--text-muted)',
                background: accent ? 'rgba(0,255,148,0.05)' : 'transparent',
                textTransform: 'uppercase',
                transition: 'all 0.2s ease',
            }}
        >
            {label}
        </span>
    );
}

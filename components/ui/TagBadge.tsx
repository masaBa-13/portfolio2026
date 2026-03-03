interface TagBadgeProps {
    label: string;
    accent?: boolean;
}

export default function TagBadge({ label, accent = false }: TagBadgeProps) {
    return (
        <span
            className={[
                'inline-block px-[10px] py-[2px] font-mono text-[11px] tracking-[0.5px] uppercase transition-all duration-200 border',
                accent
                    ? 'border-accent text-accent bg-accent/5'
                    : 'border-border text-muted bg-transparent',
            ].join(' ')}
        >
            {label}
        </span>
    );
}

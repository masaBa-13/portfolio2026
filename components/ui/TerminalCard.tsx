import { ReactNode } from 'react';

interface TerminalCardProps {
    title?: string;
    children: ReactNode;
    className?: string;
}

export default function TerminalCard({ title = 'terminal', children, className = '' }: TerminalCardProps) {
    return (
        <div className={`bg-surface border border-border overflow-hidden ${className}`}>
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-[10px] border-b border-border bg-black/30">
                <div className="w-3 h-3 bg-danger shrink-0" />
                <div className="w-3 h-3 bg-[#FFBD2E] shrink-0" />
                <div className="w-3 h-3 bg-accent shrink-0" />
                <span className="font-mono text-xs text-muted ml-2">{title}</span>
            </div>
            {/* Content */}
            <div className="p-5">{children}</div>
        </div>
    );
}

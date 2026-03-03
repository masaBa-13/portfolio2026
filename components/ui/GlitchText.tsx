'use client';

import { useRef, useEffect, useState } from 'react';

interface GlitchTextProps {
    text: string;
    tag?: 'h1' | 'h2' | 'h3' | 'span';
    className?: string;
}

export default function GlitchText({ text, tag: Tag = 'h1', className = '' }: GlitchTextProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.5 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`relative inline-block ${className}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Tag className="font-mono text-fg relative inline-block">
                {text}
            </Tag>
            {(isHovered || (isVisible && !isHovered)) && (
                <>
                    <Tag
                        aria-hidden
                        className="font-mono absolute top-0 left-0 text-accent opacity-80 pointer-events-none"
                        style={{ animation: 'glitch-1 0.3s infinite linear alternate-reverse' }}
                    >
                        {text}
                    </Tag>
                    <Tag
                        aria-hidden
                        className="font-mono absolute top-0 left-0 text-danger opacity-80 pointer-events-none"
                        style={{ animation: 'glitch-2 0.3s infinite linear alternate-reverse' }}
                    >
                        {text}
                    </Tag>
                </>
            )}
        </div>
    );
}

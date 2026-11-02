'use client';

import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 100) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY + offset;

            // 最後の節が短いと上端が基準線まで届かないので、ページの末尾では最後の節にする
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
                setActiveId(sectionIds[sectionIds.length - 1] || '');
                return;
            }

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const section = document.getElementById(sectionIds[i]);
                if (section && section.offsetTop <= scrollY) {
                    setActiveId(sectionIds[i]);
                    return;
                }
            }
            setActiveId(sectionIds[0] || '');
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeId;
}

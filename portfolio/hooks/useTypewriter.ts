'use client';

import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
    texts: string[];
    speed?: number;
    deleteSpeed?: number;
    pauseTime?: number;
    loop?: boolean;
}

export function useTypewriter({
    texts,
    speed = 80,
    deleteSpeed = 40,
    pauseTime = 2000,
    loop = true,
}: UseTypewriterOptions) {
    const [displayText, setDisplayText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const tick = useCallback(() => {
        const currentText = texts[textIndex];

        if (!isDeleting) {
            // Typing
            if (charIndex < currentText.length) {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
            } else {
                // Finished typing
                if (!loop && textIndex === texts.length - 1) {
                    setIsComplete(true);
                    return;
                }
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            }
        } else {
            // Deleting
            if (charIndex > 0) {
                setDisplayText(currentText.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
            } else {
                setIsDeleting(false);
                setTextIndex((prev) => (prev + 1) % texts.length);
            }
        }
    }, [charIndex, isDeleting, textIndex, texts, loop, pauseTime]);

    useEffect(() => {
        if (isComplete) return;

        const timeout = setTimeout(
            tick,
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [tick, isDeleting, speed, deleteSpeed, isComplete]);

    return { displayText, isComplete, isDeleting };
}

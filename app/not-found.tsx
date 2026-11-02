'use client';

import Link from 'next/link';
import { useApp } from '@/contexts/AppContext';

export default function NotFound() {
    const { t } = useApp();

    return (
        <main className="nf container">
            <p className="nf-code">404</p>
            <h1 className="nf-msg">{t.notFound.message}</h1>
            <Link className="out" href="/">{t.notFound.back}</Link>
        </main>
    );
}

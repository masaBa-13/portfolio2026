import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '@/contexts/AppContext';

export const metadata: Metadata = {
    title: '祐川雅治 | Portfolio — CEO / ソフトウェアエンジニア / 起業家',
    description:
        '祐川雅治のポートフォリオサイト。株式会社TackMore CEO。IoT×水産業DX、電子名刺サービスRemeMore、地方創生と最新テクノロジーの融合を推進する起業家兼エンジニア。',
    keywords: [
        '祐川雅治',
        'TackMore',
        'RemeMore',
        'ポートフォリオ',
        'IoT',
        'DX',
        '起業家',
        'はこだて未来大学',
    ],
    openGraph: {
        title: '祐川雅治 | Portfolio',
        description:
            'CEO / ソフトウェアエンジニア / 起業家 — ローカルな課題 × 最新テクノロジー',
        type: 'website',
    },
};

// ノッチと下のホームバーの領域まで使い、余白は env(safe-area-inset-*) で確保する
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    viewportFit: 'cover',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja" data-scroll-behavior="smooth" suppressHydrationWarning>
            <head>
                <meta name="theme-color" content="#fdfdfc" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                {/* Prevent flash of wrong theme */}
                <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('pf-theme')||'light';document.documentElement.setAttribute('data-theme',t);if(t==='dark'){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#161615');}})();` }} />
                {/* Polyfills for iOS Safari < 15.4 */}
                <script dangerouslySetInnerHTML={{ __html: `
                  if(!Object.hasOwn){Object.hasOwn=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};}
                  if(!Array.prototype.at){Array.prototype.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;if(i<0||i>=this.length)return undefined;return this[i]};}
                  if(!String.prototype.at){String.prototype.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;if(i<0||i>=this.length)return undefined;return this[i]};}
                `}} />
            </head>
            <body><AppProvider>{children}</AppProvider></body>
        </html>
    );
}

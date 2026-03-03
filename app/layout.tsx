import type { Metadata } from 'next';
import './globals.css';

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

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ja">
            <head>
                <meta name="theme-color" content="#080B0F" />
            </head>
            <body>{children}</body>
        </html>
    );
}

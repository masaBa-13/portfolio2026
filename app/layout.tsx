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
                {/* Debug: JS error を画面に表示（Safari調査用） */}
                <script dangerouslySetInnerHTML={{ __html: `
                  window.onerror = function(msg, src, line, col, err) {
                    var d = document.createElement('div');
                    d.style.cssText = 'position:fixed;top:0;left:0;right:0;background:#ff0;color:#000;font-size:11px;padding:6px;z-index:999999;word-break:break-all;white-space:pre-wrap;';
                    d.textContent = 'JS ERROR: ' + msg + '\\nFile: ' + (src||'').split('/').pop() + ' L' + line + ':' + col;
                    document.body && document.body.appendChild(d);
                  };
                  window.addEventListener('unhandledrejection', function(e) {
                    var d = document.createElement('div');
                    d.style.cssText = 'position:fixed;top:50px;left:0;right:0;background:#f80;color:#000;font-size:11px;padding:6px;z-index:999999;word-break:break-all;white-space:pre-wrap;';
                    d.textContent = 'PROMISE ERROR: ' + (e.reason && e.reason.stack || e.reason && e.reason.message || String(e.reason));
                    document.body && document.body.appendChild(d);
                  });
                `}} />
                {/* Polyfills for iOS Safari < 15.4 */}
                <script dangerouslySetInnerHTML={{ __html: `
                  if(!Object.hasOwn){Object.hasOwn=function(o,k){return Object.prototype.hasOwnProperty.call(o,k)};}
                  if(!Array.prototype.at){Array.prototype.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;if(i<0||i>=this.length)return undefined;return this[i]};}
                  if(!String.prototype.at){String.prototype.at=function(i){i=Math.trunc(i)||0;if(i<0)i+=this.length;if(i<0||i>=this.length)return undefined;return this[i]};}
                `}} />
            </head>
            <body>{children}</body>
        </html>
    );
}

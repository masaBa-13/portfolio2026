'use client';

import { KeyboardEvent, useRef, useState } from 'react';
import { ProjectImage } from '@/lib/projects-data';
import { decks } from '@/lib/decks-data';
import { useApp } from '@/contexts/AppContext';

export function Shots({ images }: { images?: ProjectImage[] }) {
    if (!images) return null;
    return (
        <div className="shots">
            {images.map((image) => (
                <figure key={image.src}>
                    {/* スマホでは文字が小さいスライドもあるので、押すと元の大きさで開く */}
                    <a href={image.src} target="_blank" rel="noopener noreferrer">
                        {/* 静的書き出しでは next/image の最適化が使えない */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            loading="lazy"
                            decoding="async"
                        />
                    </a>
                    <figcaption>{image.caption}</figcaption>
                </figure>
            ))}
        </div>
    );
}

export function DeckViewer({ id }: { id: string }) {
    const { t } = useApp();
    const deck = decks[id];
    const count = deck.pages.length;
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    // 読み込むのは見ているページの次まで。開くまでは1枚も読まない
    const [reach, setReach] = useState(2);
    const track = useRef<HTMLDivElement>(null);

    const src = (i: number) => `/decks/${id}/${String(deck.pages[i]).padStart(2, '0')}.webp`;

    const toggle = () => {
        setOpen(!open);
        setIndex(0);
        setReach(2);
    };

    const go = (i: number) => {
        const el = track.current;
        if (el && i >= 0 && i < count) el.scrollTo({ left: i * el.clientWidth });
    };

    // ページの位置はスクロールから求める。スワイプもボタンも同じ経路になる
    const onScroll = () => {
        const el = track.current;
        if (!el) return;
        const i = Math.round(el.scrollLeft / el.clientWidth);
        setIndex(i);
        setReach((n) => Math.max(n, i + 2));
    };

    const onKeyDown = (e: KeyboardEvent) => {
        if (!open) return;
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            go(index + 1);
        }
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            go(index - 1);
        }
    };

    return (
        <div className="deck" onKeyDown={onKeyDown}>
            <button type="button" className="deck-open" aria-expanded={open} onClick={toggle}>
                {deck.title}
                <span className="deck-count">{t.media.pages(count)}</span>
                <span className="plus" aria-hidden="true" />
            </button>
            {open && (
                <div role="group" aria-label={deck.title}>
                    <div className="deck-track" ref={track} tabIndex={0} onScroll={onScroll}>
                        {deck.pages.map((page, i) => (
                            <div key={page} className="deck-page">
                                {i < reach && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={src(i)}
                                        alt={`${deck.title} ${i + 1}ページ目`}
                                        width={1600}
                                        height={900}
                                        decoding="async"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="deck-bar">
                        <span className="deck-num" aria-live="polite">{index + 1} / {count}</span>
                        <a href={src(index)} target="_blank" rel="noopener noreferrer">{t.media.zoom}</a>
                        <button type="button" aria-disabled={index === 0} onClick={() => go(index - 1)}>
                            {t.media.prev}
                        </button>
                        <button type="button" aria-disabled={index === count - 1} onClick={() => go(index + 1)}>
                            {t.media.next}
                        </button>
                    </div>
                    {count < deck.total && <p className="deck-note">{t.media.omitted}</p>}
                </div>
            )}
        </div>
    );
}

export function SiteFrame({ url, title }: { url: string; title: string }) {
    const { t } = useApp();
    const [open, setOpen] = useState(false);
    // 触れる端末では、押すまで透明な覆いを置いてページのスクロールを奪わない
    const [held, setHeld] = useState(true);

    const toggle = () => {
        setOpen(!open);
        setHeld(true);
    };

    return (
        <div className="deck">
            <button type="button" className="deck-open" aria-expanded={open} onClick={toggle}>
                {t.media.siteOpen}
                <span className="plus" aria-hidden="true" />
            </button>
            {open && (
                <div className="frame">
                    <iframe src={url} title={title} loading="lazy" />
                    {held && (
                        <button type="button" className="frame-shield" onClick={() => setHeld(false)}>
                            <span>{t.media.siteHold}</span>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

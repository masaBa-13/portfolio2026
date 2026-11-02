'use client';

import { timelineData } from '@/lib/timeline-data';
import { useApp } from '@/contexts/AppContext';
import { Shots } from '@/components/sections/ProjectMedia';

// 経歴書と同じく新しい順に読ませる
const events = [...timelineData].reverse();

export const hostOf = (url: string) => new URL(url).hostname.replace(/^www2?\./, '');

export default function Timeline() {
    const { t } = useApp();

    return (
        <section id="timeline" className="sec">
            <div className="container">
                <div className="sec-grid">
                    <h2 className="sec-h">{t.nav.timeline}</h2>
                    <div className="sec-body tl">
                        {events.map((event) => (
                            <details key={event.id} className="tl-item">
                                <summary>
                                    <span className="tl-date">{event.date}</span>
                                    <span className="tl-main">
                                        {event.images && (
                                            // 閉じていても見えるように小さい画像を添える。開くと本文の大きい画像に替わる
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                className="tl-thumb"
                                                src={event.images[0].src.replace('.webp', '-thumb.webp')}
                                                alt={event.images[0].alt}
                                                width={480}
                                                height={270}
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        )}
                                        <span className="tl-title">{event.title}</span>
                                        <span className="tl-desc">{event.description}</span>
                                    </span>
                                    <span className="plus" aria-hidden="true" />
                                </summary>
                                <div className="tl-body">
                                    <Shots images={event.images} />
                                    <ul>
                                        {event.details.map((detail) => (
                                            <li key={detail}>{detail}</li>
                                        ))}
                                    </ul>
                                    <p className="tags">
                                        {event.tags.map((tag) => <span key={tag}>{tag}</span>)}
                                    </p>
                                    {event.articles.map((article) => (
                                        <a key={article.url} className="article" href={article.url} target="_blank" rel="noopener noreferrer">
                                            <span>{article.title}</span>
                                            <span className="article-src">{article.source}</span>
                                        </a>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { timelineData, TimelineEvent } from '@/lib/timeline-data';
import TerminalCard from '@/components/ui/TerminalCard';
import TagBadge from '@/components/ui/TagBadge';

export default function Timeline() {
    const [selected, setSelected] = useState<TimelineEvent | null>(null);
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="timeline" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div className="section-title">// timeline</div>
                <h2 className="section-heading">
                    <span className="accent">git</span> log --oneline
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
                    {/* Left: Timeline */}
                    <div style={{ position: 'relative', paddingLeft: '32px' }}>
                        {/* Vertical line */}
                        <div
                            style={{
                                position: 'absolute',
                                left: '7px',
                                top: 0,
                                bottom: 0,
                                width: '1px',
                                background: 'var(--accent)',
                                opacity: 0.4,
                            }}
                        />

                        {timelineData.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                onClick={() => setSelected(selected?.id === event.id ? null : event)}
                                style={{
                                    position: 'relative',
                                    marginBottom: '28px',
                                    cursor: 'pointer',
                                    padding: '16px',
                                    border: `1px solid ${selected?.id === event.id ? 'var(--accent)' : 'transparent'}`,
                                    background:
                                        selected?.id === event.id ? 'rgba(0,255,148,0.03)' : 'transparent',
                                    transition: 'all 0.2s ease',
                                }}
                                onMouseEnter={(e) => {
                                    if (selected?.id !== event.id) {
                                        e.currentTarget.style.borderColor = 'var(--border)';
                                        e.currentTarget.style.background = 'rgba(13,17,23,0.5)';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selected?.id !== event.id) {
                                        e.currentTarget.style.borderColor = 'transparent';
                                        e.currentTarget.style.background = 'transparent';
                                    }
                                }}
                            >
                                {/* Node dot */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '-29px',
                                        top: '20px',
                                        width: '10px',
                                        height: '10px',
                                        background:
                                            selected?.id === event.id ? 'var(--accent)' : 'var(--surface)',
                                        border: `2px solid var(--accent)`,
                                        transition: 'background 0.2s ease',
                                    }}
                                />

                                <div
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '12px',
                                        color: 'var(--accent)',
                                        marginBottom: '4px',
                                    }}
                                >
                                    {event.date}
                                </div>
                                <div
                                    style={{
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '15px',
                                        fontWeight: 700,
                                        color: 'var(--text)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    {event.title}
                                </div>
                                <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                    {event.description}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Detail panel */}
                    <div style={{ position: 'sticky', top: '100px' }}>
                        <AnimatePresence mode="wait">
                            {selected ? (
                                <motion.div
                                    key={selected.id}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <TerminalCard title={`details/${selected.id}.log`}>
                                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                                            <div style={{ color: 'var(--accent)', marginBottom: '16px' }}>
                                                {'>'} {selected.title}
                                            </div>
                                            <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
                                                DATE: {selected.date}
                                            </div>

                                            <div style={{ marginBottom: '16px' }}>
                                                {selected.details.map((detail, i) => (
                                                    <div
                                                        key={i}
                                                        style={{
                                                            color: 'var(--text)',
                                                            marginBottom: '6px',
                                                            paddingLeft: '16px',
                                                            position: 'relative',
                                                        }}
                                                    >
                                                        <span
                                                            style={{
                                                                position: 'absolute',
                                                                left: 0,
                                                                color: 'var(--accent)',
                                                            }}
                                                        >
                                                            ▸
                                                        </span>
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>

                                            <div
                                                style={{
                                                    display: 'flex',
                                                    gap: '6px',
                                                    flexWrap: 'wrap',
                                                    marginBottom: '16px',
                                                }}
                                            >
                                                {selected.tags.map((tag) => (
                                                    <TagBadge key={tag} label={tag} accent />
                                                ))}
                                            </div>

                                            {selected.link && (
                                                <a
                                                    href={selected.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: 'inline-block',
                                                        fontFamily: 'var(--font-mono)',
                                                        fontSize: '12px',
                                                        color: 'var(--accent-2)',
                                                        borderBottom: '1px solid var(--accent-2)',
                                                        paddingBottom: '2px',
                                                    }}
                                                >
                                                    → OPEN_LINK
                                                </a>
                                            )}
                                        </div>
                                    </TerminalCard>
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <TerminalCard title="hint">
                                        <div
                                            style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '13px',
                                                color: 'var(--text-muted)',
                                                textAlign: 'center',
                                                padding: '40px 0',
                                            }}
                                        >
                                            <div style={{ fontSize: '32px', marginBottom: '16px' }}>{'{ }'}</div>
                                            <div>左のイベントをクリックで</div>
                                            <div>詳細を表示します</div>
                                        </div>
                                    </TerminalCard>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}

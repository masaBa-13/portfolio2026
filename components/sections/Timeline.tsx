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
        <section id="timeline">
            <div className="container" ref={ref}>
                <div className="section-label">// timeline</div>
                <h2 className="section-heading">
                    <span className="text-accent">git</span> log --oneline
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left: Timeline */}
                    <div className="relative pl-8">
                        {/* Vertical line */}
                        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-accent opacity-40" />

                        {timelineData.map((event, i) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                onClick={() => setSelected(selected?.id === event.id ? null : event)}
                                className="relative mb-7 cursor-pointer p-4 transition-all duration-200"
                                style={{
                                    border: `1px solid ${selected?.id === event.id ? 'var(--color-accent)' : 'transparent'}`,
                                    background: selected?.id === event.id ? 'rgba(0,255,148,0.03)' : 'transparent',
                                }}
                                onMouseEnter={(e) => {
                                    if (selected?.id !== event.id) {
                                        e.currentTarget.style.borderColor = 'var(--color-border)';
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
                                    className="absolute top-5 w-[10px] h-[10px] border-2 border-accent transition-colors duration-200"
                                    style={{
                                        left: '-29px',
                                        background: selected?.id === event.id ? 'var(--color-accent)' : 'var(--color-surface)',
                                    }}
                                />

                                <div className="font-mono text-xs text-accent mb-1">{event.date}</div>
                                <div className="font-mono text-[15px] font-bold text-fg mb-[6px]">{event.title}</div>
                                <div className="text-[13px] text-muted leading-[1.5]">{event.description}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Detail panel */}
                    <div className="sticky top-[100px]">
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
                                        <div className="font-mono text-[13px]">
                                            <div className="text-accent mb-4">{'>'} {selected.title}</div>
                                            <div className="text-muted mb-2">DATE: {selected.date}</div>

                                            <div className="mb-4">
                                                {selected.details.map((detail, i) => (
                                                    <div key={i} className="text-fg mb-[6px] pl-4 relative">
                                                        <span className="absolute left-0 text-accent">▸</span>
                                                        {detail}
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex gap-[6px] flex-wrap mb-4">
                                                {selected.tags.map((tag) => (
                                                    <TagBadge key={tag} label={tag} accent />
                                                ))}
                                            </div>

                                            {selected.link && (
                                                <a
                                                    href={selected.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-block font-mono text-xs text-accent-2 border-b border-accent-2 pb-[2px]"
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
                                        <div className="font-mono text-[13px] text-muted text-center py-10">
                                            <div className="text-[32px] mb-4">{'{ }'}</div>
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
        </section>
    );
}

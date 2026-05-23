'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TerminalCard from '@/components/ui/TerminalCard';
import { useApp } from '@/contexts/AppContext';

export default function About() {
    const { t } = useApp();
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { specs, summary, summaryHighlight, sectionLabel, heading } = t.about;

    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div className="section-title">{sectionLabel}</div>
                <h2 className="section-heading">
                    <span className="accent">{heading.accent}</span>{heading.rest}
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    {/* Spec card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <TerminalCard title="system_info.sh">
                            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                                {specs.map((spec, i) => (
                                    <div key={spec.key} style={{ marginBottom: '8px', lineHeight: '1.6' }}>
                                        <span style={{ color: 'var(--accent)', marginRight: '8px' }}>
                                            {String(i).padStart(2, '0')}
                                        </span>
                                        <span style={{ color: 'var(--accent-2)' }}>{spec.key}</span>
                                        <span style={{ color: 'var(--text-muted)' }}> = </span>
                                        <span style={{ color: 'var(--text)' }}>{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </TerminalCard>
                    </motion.div>

                    {/* Summary card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TerminalCard title="cat summary.md">
                            <div style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '2' }}>
                                {summary.map((text, i) => {
                                    const isLast = i === summary.length - 1;
                                    return (
                                        <p key={i} style={{ marginBottom: isLast ? 0 : '16px' }}>
                                            <span style={{ color: 'var(--accent)' }}>{'> '}</span>
                                            {isLast ? (
                                                <>
                                                    {text.replace(summaryHighlight, '').split(summaryHighlight)[0]}
                                                    <span style={{ color: 'var(--accent)' }}>{summaryHighlight}</span>
                                                    {text.split(summaryHighlight)[1]}
                                                </>
                                            ) : text}
                                        </p>
                                    );
                                })}
                            </div>
                        </TerminalCard>
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}

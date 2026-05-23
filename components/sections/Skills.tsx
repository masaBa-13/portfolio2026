'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '@/lib/skills-data';
import { useApp } from '@/contexts/AppContext';

export default function Skills() {
    const { t } = useApp();
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="skills" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '12px' }}>
                    <div>
                        <div className="section-title">{t.sections.skills.label}</div>
                        <h2 style={{ fontFamily: 'var(--font-mono)', fontSize: '32px', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
                            <span className="accent">{t.sections.skills.accent}</span>{t.sections.skills.rest}
                        </h2>
                    </div>
                    <Link
                        href="/skills"
                        style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                            padding: '8px 16px',
                            border: '1px solid var(--accent)',
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            letterSpacing: '0.5px',
                            transition: 'all 0.2s ease',
                            whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.background = 'var(--accent)';
                            (e.currentTarget as HTMLElement).style.color = 'var(--bg)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                        }}
                    >
                        {t.skillSheet.viewBtn}
                    </Link>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '32px',
                    }}
                >
                    {skillCategories.map((category, ci) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                padding: '24px',
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: 'var(--font-mono)',
                                    fontSize: '14px',
                                    color: 'var(--accent)',
                                    marginBottom: '20px',
                                    letterSpacing: '1px',
                                }}
                            >
                                {'// '}{category.name}
                            </h3>

                            {category.skills.map((skill, si) => (
                                <div key={skill.name} style={{ marginBottom: '16px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '12px',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        <span style={{ color: 'var(--text)' }}>{skill.name}</span>
                                        <span style={{ color: 'var(--text-muted)' }}>{skill.level}%</span>
                                    </div>
                                    <div
                                        style={{
                                            height: '4px',
                                            background: 'rgba(30,45,61,0.5)',
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : {}}
                                            transition={{
                                                duration: 0.8,
                                                delay: ci * 0.1 + si * 0.05 + 0.3,
                                                ease: 'easeOut',
                                            }}
                                            style={{
                                                height: '100%',
                                                background:
                                                    skill.level >= 80
                                                        ? 'var(--accent)'
                                                        : skill.level >= 60
                                                            ? 'var(--accent-2)'
                                                            : 'var(--text-muted)',
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
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

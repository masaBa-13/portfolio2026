'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '@/lib/projects-data';
import TerminalCard from '@/components/ui/TerminalCard';
import TagBadge from '@/components/ui/TagBadge';

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="projects" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div className="section-title">// projects</div>
                <h2 className="section-heading">
                    <span className="accent">ls</span> -la ./products
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {projectsData.map((project, i) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <TerminalCard title={`${project.id}.config`}>
                                <div>
                                    {/* Highlight badge */}
                                    {project.highlight && (
                                        <div
                                            style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '10px',
                                                color: 'var(--accent)',
                                                border: '1px solid var(--accent)',
                                                display: 'inline-block',
                                                padding: '1px 8px',
                                                marginBottom: '12px',
                                                letterSpacing: '1px',
                                            }}
                                        >
                                            ★ FEATURED
                                        </div>
                                    )}

                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '16px',
                                            fontWeight: 700,
                                            color: 'var(--text)',
                                            marginBottom: '6px',
                                        }}
                                    >
                                        {project.title}
                                    </h3>

                                    <div
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '11px',
                                            color: 'var(--accent-2)',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        {project.period}
                                    </div>

                                    <p
                                        style={{
                                            fontSize: '13px',
                                            color: 'var(--text-muted)',
                                            lineHeight: '1.7',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        {project.description}
                                    </p>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        {project.tags.map((tag) => (
                                            <TagBadge key={tag} label={tag} />
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{
                                                fontFamily: 'var(--font-mono)',
                                                fontSize: '12px',
                                                color: 'var(--accent)',
                                                borderBottom: '1px solid var(--accent)',
                                                paddingBottom: '2px',
                                                transition: 'color 0.2s',
                                            }}
                                        >
                                            → VIEW_PROJECT
                                        </a>
                                    )}
                                </div>
                            </TerminalCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

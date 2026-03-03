'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '@/lib/projects-data';
import TerminalCard from '@/components/ui/TerminalCard';
import TagBadge from '@/components/ui/TagBadge';

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

    return (
        <section id="projects">
            <div className="container" ref={ref}>
                <div className="section-label">// projects</div>
                <h2 className="section-heading">
                    <span className="text-accent">ls</span> -la ./products
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-6">
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
                                        <div className="font-mono text-[10px] text-accent border border-accent inline-block px-2 py-[1px] mb-3 tracking-[1px]">
                                            ★ FEATURED
                                        </div>
                                    )}

                                    <h3 className="font-mono text-base font-bold text-fg mb-[6px]">
                                        {project.title}
                                    </h3>

                                    <div className="font-mono text-[11px] text-accent-2 mb-3">
                                        {project.period}
                                    </div>

                                    <p className="text-[13px] text-muted leading-[1.7] mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-[6px] mb-4">
                                        {project.tags.map((tag) => (
                                            <TagBadge key={tag} label={tag} />
                                        ))}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-xs text-accent border-b border-accent pb-[2px] transition-colors duration-200"
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

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SkillCategory {
    name: string;
    skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        skills: [
            { name: 'Next.js / React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'HTML / CSS', level: 90 },
            { name: 'React Native', level: 65 },
        ],
    },
    {
        name: 'Backend & Infra',
        skills: [
            { name: 'Node.js', level: 75 },
            { name: 'Supabase / PostgreSQL', level: 80 },
            { name: 'Cloudflare Workers', level: 70 },
            { name: 'REST API Design', level: 80 },
        ],
    },
    {
        name: 'IoT & Hardware',
        skills: [
            { name: 'Arduino / ESP32', level: 75 },
            { name: 'センサー設計 (磁気/加速度)', level: 70 },
            { name: 'LoRa / LPWAN', level: 65 },
            { name: '電波法コンプライアンス', level: 60 },
        ],
    },
    {
        name: 'Business & Management',
        skills: [
            { name: '起業 / 法人経営', level: 85 },
            { name: 'プロダクトマネジメント', level: 80 },
            { name: 'コミュニティ運営', level: 90 },
            { name: 'ピッチ / プレゼンテーション', level: 85 },
        ],
    },
];

export default function Skills() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="skills">
            <div className="container" ref={ref}>
                <div className="section-label">// skills</div>
                <h2 className="section-heading">
                    <span className="text-accent">npm</span> list --depth=0
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, ci) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                            className="bg-surface border border-border p-6"
                        >
                            <h3 className="font-mono text-sm text-accent mb-5 tracking-[1px]">
                                {'// '}{category.name}
                            </h3>

                            {category.skills.map((skill, si) => (
                                <div key={skill.name} className="mb-4">
                                    <div className="flex justify-between font-mono text-xs mb-[6px]">
                                        <span className="text-fg">{skill.name}</span>
                                        <span className="text-muted">{skill.level}%</span>
                                    </div>
                                    <div className="h-1 bg-border/50 relative overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${skill.level}%` } : {}}
                                            transition={{
                                                duration: 0.8,
                                                delay: ci * 0.1 + si * 0.05 + 0.3,
                                                ease: 'easeOut',
                                            }}
                                            className="h-full"
                                            style={{
                                                background:
                                                    skill.level >= 80
                                                        ? 'var(--color-accent)'
                                                        : skill.level >= 60
                                                            ? 'var(--color-accent-2)'
                                                            : 'var(--color-muted)',
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

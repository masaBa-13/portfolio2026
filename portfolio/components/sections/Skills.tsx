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
        <section id="skills" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div className="section-title">// skills</div>
                <h2 className="section-heading">
                    <span className="accent">npm</span> list --depth=0
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
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

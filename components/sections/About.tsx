'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TerminalCard from '@/components/ui/TerminalCard';

const specs = [
    { key: 'NAME', value: '祐川 雅治 (Sukekawa Masaharu)' },
    { key: 'ROLE', value: 'CEO / ソフトウェアエンジニア / 起業家' },
    { key: 'COMPANY', value: '株式会社TackMore' },
    { key: 'UNIVERSITY', value: '公立はこだて未来大学' },
    { key: 'ORGANIZATION', value: '学生団体ISARIBI with / おさかな日和' },
    { key: 'LOCATION', value: '函館, 北海道, Japan' },
    { key: 'INTERESTS', value: 'カメラ📷 / スノボ🏂 / コーヒー☕️' },
    { key: 'PHILOSOPHY', value: '"ローカルな泥臭い課題 × テクノロジーの実装"' },
];

export default function About() {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section id="about" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div className="section-title">// about</div>
                <h2 className="section-heading">
                    <span className="accent">System</span>.getProfile()
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
                                <p style={{ marginBottom: '16px' }}>
                                    <span style={{ color: 'var(--accent)' }}>{'> '}</span>
                                    高度な情報技術（IoT、Webアプリケーション等）を単なる技術実験に留めず、
                                    明確な社会的・経済的・法的なコンテキストの内部に正確に実装する適応能力を持つ。
                                </p>
                                <p style={{ marginBottom: '16px' }}>
                                    <span style={{ color: 'var(--accent)' }}>{'> '}</span>
                                    水産業のDXから始まり、コミュニティ運営、法人設立、SaaSプロダクト開発まで、
                                    常に「現場の泥臭い課題」にテクノロジーを精緻に適合させるアプローチを一貫。
                                </p>
                                <p>
                                    <span style={{ color: 'var(--accent)' }}>{'> '}</span>
                                    モラトリアムな学生プロジェクトから、資本主義の市場原理のなかで社会変革を推進する
                                    <span style={{ color: 'var(--accent)' }}> シリアルアントレプレナー </span>
                                    へと進化中。
                                </p>
                            </div>
                        </TerminalCard>
                    </motion.div>
                </div>
            </div>

            {/* Responsive styles */}
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

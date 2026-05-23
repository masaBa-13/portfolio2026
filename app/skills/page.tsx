'use client';

import Link from 'next/link';
import { skillCategories } from '@/lib/skills-data';
import { projectsData } from '@/lib/projects-data';

export default function SkillsPage() {
    return (
        <>
            <style>{`
                .resume-root {
                    font-family: 'IBM Plex Sans JP', 'Hiragino Sans', sans-serif;
                    background: #fff;
                    color: #1a1a1a;
                    min-height: 100vh;
                }
                .resume-wrap {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 48px 32px 80px;
                }
                .resume-nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 48px;
                    padding-bottom: 16px;
                    border-bottom: 1px solid #e5e7eb;
                }
                .resume-nav a {
                    font-size: 13px;
                    color: #6b7280;
                    text-decoration: none;
                }
                .resume-nav a:hover { color: #1a1a1a; }
                .resume-print-btn {
                    font-size: 12px;
                    padding: 6px 16px;
                    background: #1a1a1a;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    font-family: inherit;
                }
                /* Profile */
                .resume-profile {
                    margin-bottom: 48px;
                    padding-bottom: 36px;
                    border-bottom: 1px solid #e5e7eb;
                }
                .resume-name {
                    font-size: 32px;
                    font-weight: 700;
                    letter-spacing: -0.5px;
                    margin-bottom: 4px;
                }
                .resume-role {
                    font-size: 14px;
                    color: #6b7280;
                    margin-bottom: 20px;
                }
                .resume-meta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                .resume-meta-item label {
                    display: block;
                    font-size: 10px;
                    color: #9ca3af;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    margin-bottom: 2px;
                }
                .resume-meta-item span {
                    font-size: 13px;
                    color: #374151;
                }
                /* Section */
                .resume-section {
                    margin-bottom: 40px;
                }
                .resume-section-title {
                    font-size: 11px;
                    font-weight: 600;
                    color: #9ca3af;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    margin-bottom: 16px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid #f3f4f6;
                }
                /* Skills */
                .resume-skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 24px;
                }
                .resume-skill-category h3 {
                    font-size: 13px;
                    font-weight: 600;
                    color: #374151;
                    margin-bottom: 10px;
                }
                .resume-skill-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }
                .resume-skill-tag {
                    font-size: 12px;
                    padding: 3px 10px;
                    background: #f3f4f6;
                    color: #374151;
                    border: 1px solid #e5e7eb;
                }
                .resume-skill-tag.high {
                    background: #f0fdf4;
                    border-color: #bbf7d0;
                    color: #166534;
                }
                /* Projects */
                .resume-project {
                    padding: 20px 0;
                    border-bottom: 1px solid #f3f4f6;
                }
                .resume-project:last-child { border-bottom: none; }
                .resume-project-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    gap: 12px;
                    margin-bottom: 6px;
                    flex-wrap: wrap;
                }
                .resume-project-title {
                    font-size: 15px;
                    font-weight: 600;
                    color: #1a1a1a;
                }
                .resume-project-period {
                    font-size: 12px;
                    color: #9ca3af;
                    white-space: nowrap;
                }
                .resume-project-desc {
                    font-size: 13px;
                    color: #4b5563;
                    line-height: 1.7;
                    margin-bottom: 8px;
                }
                .resume-project-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 6px;
                }
                .resume-project-tag {
                    font-size: 11px;
                    padding: 2px 8px;
                    background: #f9fafb;
                    color: #6b7280;
                    border: 1px solid #e5e7eb;
                }
                /* Footer */
                .resume-footer {
                    margin-top: 48px;
                    padding-top: 20px;
                    border-top: 1px solid #e5e7eb;
                    display: flex;
                    justify-content: space-between;
                    font-size: 11px;
                    color: #9ca3af;
                    flex-wrap: wrap;
                    gap: 8px;
                }
                @media (max-width: 600px) {
                    .resume-wrap { padding: 32px 20px 60px; }
                    .resume-skills-grid { grid-template-columns: 1fr; }
                }
                @media print {
                    .resume-nav { display: none !important; }
                    .resume-root { background: #fff !important; }
                    .resume-wrap { padding: 0 !important; max-width: 100% !important; }
                }
                @page { margin: 16mm 14mm; size: A4; }
            `}</style>

            <div className="resume-root">
                <div className="resume-wrap">

                    {/* Nav */}
                    <div className="resume-nav">
                        <Link href="/">← ポートフォリオに戻る</Link>
                        <button className="resume-print-btn" onClick={() => window.print()}>
                            PDF で出力
                        </button>
                    </div>

                    {/* Profile */}
                    <div className="resume-profile">
                        <h1 className="resume-name">祐川 雅治</h1>
                        <p className="resume-role">Software Engineer / Entrepreneur</p>
                        <div className="resume-meta">
                            {[
                                { label: '所属', value: '株式会社TackMore' },
                                { label: '役職', value: '代表取締役 CEO' },
                                { label: '拠点', value: '函館, 北海道' },
                                { label: 'GitHub', value: 'github.com/masaBa-13' },
                            ].map(({ label, value }) => (
                                <div className="resume-meta-item" key={label}>
                                    <label>{label}</label>
                                    <span>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="resume-section">
                        <p className="resume-section-title">Technical Skills</p>
                        <div className="resume-skills-grid">
                            {skillCategories.map((category) => (
                                <div className="resume-skill-category" key={category.name}>
                                    <h3>{category.name}</h3>
                                    <div className="resume-skill-tags">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill.name}
                                                className={`resume-skill-tag${skill.level >= 80 ? ' high' : ''}`}
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Projects */}
                    <div className="resume-section">
                        <p className="resume-section-title">Project History</p>
                        {projectsData.map((project) => (
                            <div className="resume-project" key={project.id}>
                                <div className="resume-project-header">
                                    <span className="resume-project-title">{project.title}</span>
                                    <span className="resume-project-period">{project.period}</span>
                                </div>
                                <p className="resume-project-desc">{project.description}</p>
                                <div className="resume-project-tags">
                                    {project.tags.map((tag) => (
                                        <span className="resume-project-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="resume-footer">
                        <span>祐川 雅治 — Skill Sheet 2026</span>
                        <span>tackmore.jp</span>
                    </div>

                </div>
            </div>
        </>
    );
}

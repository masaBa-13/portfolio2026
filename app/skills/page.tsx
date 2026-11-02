'use client';

import Link from 'next/link';
import { skillCategories } from '@/lib/skills-data';
import { projectsData } from '@/lib/projects-data';
import { useApp } from '@/contexts/AppContext';
import Toggles from '@/components/layout/Toggles';

export default function SkillsPage() {
    const { t } = useApp();

    return (
        <>
            <style>{`
                .resume-root {
                    background: var(--bg);
                    color: var(--text);
                }
                .resume-wrap {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: max(4px, env(safe-area-inset-top)) max(var(--gutter), env(safe-area-inset-right)) 72px max(var(--gutter), env(safe-area-inset-left));
                }
                .resume-nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 0 8px;
                    padding: 4px 0;
                    border-bottom: 1px solid var(--text);
                }
                .resume-nav a {
                    display: inline-flex;
                    align-items: center;
                    min-height: 44px;
                    font-weight: 700;
                    text-decoration: none;
                }
                .resume-tools {
                    display: flex;
                    align-items: center;
                    margin-left: auto;
                }
                .resume-print-btn {
                    min-height: 44px;
                    padding: 0 6px;
                    font-weight: 700;
                    white-space: nowrap;
                    text-decoration: underline;
                    text-decoration-color: var(--text);
                    text-decoration-thickness: 2px;
                    text-underline-offset: 5px;
                }
                .resume-profile {
                    padding: 36px 0 32px;
                }
                .resume-name {
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 1.2;
                    letter-spacing: 0.02em;
                }
                .resume-role {
                    margin-top: 6px;
                    color: var(--muted);
                }
                .resume-meta {
                    margin-top: 20px;
                }
                .resume-meta-item {
                    display: grid;
                    grid-template-columns: 5.5em 1fr;
                    gap: 8px;
                    padding: 9px 0;
                    border-top: 1px solid var(--rule);
                }
                .resume-meta-item:last-child {
                    border-bottom: 1px solid var(--rule);
                }
                .resume-meta-item dt {
                    color: var(--muted);
                }
                .resume-section {
                    margin-bottom: 44px;
                }
                .resume-section-title {
                    margin-bottom: 18px;
                    padding-top: 12px;
                    border-top: 1px solid var(--text);
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 1.4;
                }
                .resume-skills-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 28px;
                }
                .resume-skill-category h3 {
                    margin-bottom: 8px;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.4;
                }
                .resume-skill-tags {
                    color: var(--muted);
                    line-height: 1.75;
                }
                .resume-skill-tag + .resume-skill-tag::before {
                    content: ' / ';
                    color: var(--muted);
                    font-weight: 400;
                }
                .resume-skill-tag.high {
                    color: var(--text);
                    font-weight: 700;
                }
                .resume-project {
                    padding: 18px 0;
                    border-bottom: 1px solid var(--rule);
                }
                .resume-project:first-of-type { padding-top: 0; }
                .resume-project:last-child { border-bottom: none; }
                .resume-project-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    flex-wrap: wrap;
                    gap: 0 12px;
                    margin-bottom: 6px;
                }
                .resume-project-title {
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.5;
                }
                .resume-project-period {
                    color: var(--muted);
                    font-size: 15px;
                    white-space: nowrap;
                }
                .resume-project-desc {
                    line-height: 1.8;
                    margin-bottom: 8px;
                }
                .resume-project-tags {
                    color: var(--muted);
                    font-size: 14px;
                    line-height: 1.7;
                }
                .resume-project-tags span + span::before {
                    content: ' / ';
                }
                .resume-footer {
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-top: 40px;
                    padding-top: 16px;
                    border-top: 1px solid var(--text);
                    color: var(--muted);
                    font-size: 15px;
                }
                @media (min-width: 700px) {
                    .resume-skills-grid { grid-template-columns: repeat(2, 1fr); }
                    .resume-meta {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        column-gap: 32px;
                    }
                    .resume-name { font-size: 48px; }
                }
                @media print {
                    :root, [data-theme="dark"] {
                        --bg: #fff;
                        --text: #1a1a19;
                        --muted: #5e5e5a;
                        --rule: #d9d9d6;
                    }
                    html, body, .resume-root { background: #fff !important; }
                    .resume-nav { display: none !important; }
                    .resume-wrap { padding: 0 !important; max-width: 100% !important; }
                    .resume-profile { padding-top: 0; }
                    .resume-name { font-size: 28px; }
                    .resume-role, .resume-meta-item, .resume-project-desc { font-size: 11px; }
                    .resume-skill-tags { font-size: 10px; }
                    .resume-skill-category h3 { font-size: 12px; }
                    .resume-section-title { font-size: 16px; }
                    .resume-project { padding: 10px 0; break-inside: avoid; }
                    .resume-project-title { font-size: 12px; }
                    .resume-project-period, .resume-project-tags, .resume-footer { font-size: 9px; }
                }
                @page { margin: 16mm 14mm; size: A4; }
            `}</style>

            <div className="resume-root">
                <div className="resume-wrap">

                    {/* Nav */}
                    <div className="resume-nav">
                        <Link href="/">{t.sheet.back}</Link>
                        <div className="resume-tools">
                            <button className="resume-print-btn" onClick={() => window.print()}>
                                {t.sheet.print}
                            </button>
                            <Toggles />
                        </div>
                    </div>

                    {/* Profile */}
                    <div className="resume-profile">
                        <h1 className="resume-name">祐川 雅治</h1>
                        <p className="resume-role">{t.sheet.role}</p>
                        <dl className="resume-meta">
                            {t.sheet.meta.map(({ label, value }) => (
                                <div className="resume-meta-item" key={label}>
                                    <dt>{label}</dt>
                                    <dd>{value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    {/* Skills */}
                    <div className="resume-section">
                        <h2 className="resume-section-title">{t.sheet.skills}</h2>
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
                        <h2 className="resume-section-title">{t.sheet.projects}</h2>
                        {projectsData.map((project) => (
                            <div className="resume-project" key={project.id}>
                                <div className="resume-project-header">
                                    <span className="resume-project-title">{project.title}</span>
                                    <span className="resume-project-period">{project.period}</span>
                                </div>
                                <p className="resume-project-desc">{project.description}</p>
                                <div className="resume-project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
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

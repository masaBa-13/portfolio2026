'use client';

import { CSSProperties } from 'react';
import Link from 'next/link';
import { skillCategories } from '@/lib/skills-data';
import { useApp } from '@/contexts/AppContext';

export default function Skills() {
    const { t } = useApp();

    return (
        <section id="skills" className="sec">
            <div className="container">
                <div className="sec-grid">
                    <h2 className="sec-h">{t.nav.skills}</h2>
                    <div className="sec-body">
                <Link className="out" href="/skills">{t.skillSheet.viewBtn}</Link>
                <div className="sk-grid">
                    {skillCategories.map((category) => (
                        <div key={category.name} className="sk-cat">
                            <h3>{category.name}</h3>
                            <ul>
                                {category.skills.map((skill) => (
                                    <li key={skill.name} className="sk-row" style={{ '--level': `${skill.level}%` } as CSSProperties}>
                                        <span>{skill.name}</span>
                                        <span className="sk-num">{skill.level}%</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

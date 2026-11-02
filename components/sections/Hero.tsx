'use client';

import Toggles from '@/components/layout/Toggles';
import { useApp } from '@/contexts/AppContext';
import { projectsData } from '@/lib/projects-data';
import { timelineData } from '@/lib/timeline-data';

const project = (id: string) => projectsData.find((p) => p.id === id)!;
const event = (id: string) => timelineData.find((e) => e.id === id)!;

const [researchTitle, researchNote] = project('master-study').title.split(' — ');

// 何をしてきた人かを最初に読ませる。文はすべて既存データの語句をそのまま使う
const HIGHLIGHTS = [
    { date: event('tackmore').date, title: event('tackmore').title, note: project('rememore').title },
    { date: project('maglog').period, title: project('maglog').title, note: '29隻全漁船に100%導入' },
    { date: project('master-study').period, title: researchTitle, note: researchNote },
    { date: event('aotake').date, title: event('aotake').title },
    { date: event('aquarium').date, title: event('aquarium').title, note: '青森市学生ビジネスアイデアコンテスト グランプリ受賞' },
];

function Title({ text }: { text: string }) {
    const [name, kind] = text.split(' — ');
    return (
        <span className="intro-title">
            <span>{name}</span>
            {kind && <> <span>— {kind}</span></>}
        </span>
    );
}

export default function Hero() {
    const { t } = useApp();
    const [statementHead, statementTail] = t.about.philosophy.split(' × ');

    return (
        <section id="hero" className="intro">
            <div className="container">
                <div className="intro-top">
                    <span>{t.hero.location}</span>
                    <Toggles />
                </div>
                <div className="intro-grid">
                    <div>
                        <h1 className="intro-name">祐川 雅治</h1>
                        <p className="intro-romaji">SUKEKAWA MASAHARU</p>
                        <ul className="intro-roles">
                            {t.hero.roles.map((role) => (
                                <li key={role}>{role}</li>
                            ))}
                        </ul>
                        <p className="intro-statement">
                            <span>{statementHead} ×</span> <span>{statementTail}</span>
                        </p>
                    </div>
                    <ul className="intro-work">
                        {HIGHLIGHTS.map((item) => (
                            <li key={item.title}>
                                <span className="intro-date">{item.date}</span>
                                <span>
                                    <Title text={item.title} />
                                    {item.note && <span className="intro-note">{item.note}</span>}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

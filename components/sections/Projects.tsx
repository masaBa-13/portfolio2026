'use client';

import { useEffect, useRef } from 'react';
import { projectsData, Project } from '@/lib/projects-data';
import { useApp } from '@/contexts/AppContext';
import { hostOf } from '@/components/sections/Timeline';
import { DeckViewer, Shots, SiteFrame } from '@/components/sections/ProjectMedia';

const FLEET_PHRASE = '29隻全漁船に100%導入';

const featured = projectsData.filter((p) => p.highlight);
const others = projectsData.filter((p) => !p.highlight);

const splitTitle = (title: string) => {
    const [name, kind] = title.split(' — ');
    return { name, kind };
};

function Description({ text }: { text: string }) {
    const [before, after] = text.split(FLEET_PHRASE);
    if (after === undefined) return <>{text}</>;
    return (
        <>
            {before}
            <strong>{FLEET_PHRASE}</strong>
            {after}
        </>
    );
}

function Tags({ project }: { project: Project }) {
    return (
        <p className="tags">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </p>
    );
}

function OutLink({ project }: { project: Project }) {
    if (!project.link) return null;
    return (
        <>
            <a className="out" href={project.link} target="_blank" rel="noopener noreferrer">
                {hostOf(project.link)}
            </a>
            {project.documents?.map((doc) => (
                <a key={doc.url} className="out" href={doc.url} target="_blank" rel="noopener noreferrer">
                    {doc.label}
                </a>
            ))}
        </>
    );
}

function Media({ project }: { project: Project }) {
    return (
        <>
            {project.decks?.map((id) => <DeckViewer key={id} id={id} />)}
            {project.embed && project.link && (
                <SiteFrame url={project.link} title={project.title} />
            )}
        </>
    );
}

export default function Projects() {
    const { t } = useApp();
    const rows = useRef<HTMLDivElement>(null);

    // 幅の広い画面では説明を最初から見せる
    useEffect(() => {
        if (!window.matchMedia('(min-width: 900px)').matches) return;
        rows.current?.querySelectorAll('details').forEach((d) => { d.open = true; });
        // 開いた分だけ下の節がずれるので、ページ内リンクで来たときは移動し直す
        if (location.hash) document.getElementById(location.hash.slice(1))?.scrollIntoView();
    }, []);

    return (
        <section id="projects" className="sec">
            <div className="container">
                <div className="sec-grid">
                    <h2 className="sec-h">{t.nav.projects}</h2>
                    <div className="sec-body">
                        {featured.map((project) => {
                            const { name, kind } = splitTitle(project.title);
                            return (
                                <article key={project.id} className="feat">
                                    <h3 className="feat-name">{name}</h3>
                                    <p className="feat-kind">{kind}</p>
                                    <p className="meta">{project.period}</p>
                                    <Shots images={project.images} />
                                    <p className="feat-desc"><Description text={project.description} /></p>
                                    <Tags project={project} />
                                    <OutLink project={project} />
                                    <Media project={project} />
                                </article>
                            );
                        })}
                        <div className="rows" ref={rows}>
                            {others.map((project) => {
                                const { name, kind } = splitTitle(project.title);
                                return (
                                    <details key={project.id} className="row">
                                        <summary>
                                            <span className="row-name">{name}</span>
                                            {kind && <span className="row-kind">{kind}</span>}
                                            <span className="row-period">{project.period}</span>
                                            <span className="plus" aria-hidden="true" />
                                        </summary>
                                        <div className="row-body">
                                            <Shots images={project.images} />
                                            <p>{project.description}</p>
                                            <Tags project={project} />
                                            <OutLink project={project} />
                                            <Media project={project} />
                                        </div>
                                    </details>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

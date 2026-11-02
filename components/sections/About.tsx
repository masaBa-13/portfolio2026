'use client';

import { useApp } from '@/contexts/AppContext';

export default function About() {
    const { t } = useApp();
    const { specs, summary, summaryHighlight } = t.about;

    return (
        <section id="about" className="sec">
            <div className="container">
                <div className="sec-grid">
                    <h2 className="sec-h">{t.nav.about}</h2>
                    <div className="sec-body">
                        <div className="about-text">
                            {summary.map((text) => {
                                const [before, after] = text.split(summaryHighlight);
                                return (
                                    <p key={text}>
                                        {after === undefined ? text : (
                                            <>
                                                {before}
                                                <strong>{summaryHighlight}</strong>
                                                {after}
                                            </>
                                        )}
                                    </p>
                                );
                            })}
                        </div>
                        <dl className="spec">
                            {specs.map((spec) => (
                                <div key={spec.key}>
                                    <dt>{spec.key}</dt>
                                    <dd>{spec.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    );
}

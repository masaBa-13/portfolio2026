'use client';

import { MouseEvent, useState, useSyncExternalStore } from 'react';
import { contribData, ContribDay } from '@/lib/contrib-data';
import { useApp } from '@/contexts/AppContext';

const DAY_LABELS = ['Sun', '', 'Tue', '', 'Thu', '', 'Sat'];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const weeks: ContribDay[][] = [];
for (let i = 0; i < contribData.length; i += 7) weeks.push(contribData.slice(i, i + 7));

const totalContribs = contribData.filter((d) => d.level > 0).length;
const subscribe = () => () => {};

interface Layout {
    cell: number;
    gap: number;
    left: number;
    top: number;
    font: number;
}

function Strip({ list, startWeek, y, layout, picked }: { list: ContribDay[][]; startWeek: number; y: number; layout: Layout; picked: number | null }) {
    const { cell, gap, left, top, font } = layout;
    const step = cell + gap;
    const months = list.map((week) => new Date(week[0].date).getMonth());

    return (
        <g transform={`translate(0 ${y})`}>
            {DAY_LABELS.map((label, i) => label && (
                <text key={label} x={left - 8} y={top + i * step + cell - 1} fontSize={font} textAnchor="end">{label}</text>
            ))}
            {months.map((month, wi) => (wi === 0 || month !== months[wi - 1]) && (
                <text key={`m${wi}`} x={left + wi * step} y={font} fontSize={font}>{MONTHS[month]}</text>
            ))}
            {list.map((week, wi) => week.map((day, di) => {
                const index = (startWeek + wi) * 7 + di;
                return (
                    <rect
                        key={index}
                        data-index={index}
                        className={`lv${day.level}${picked === index ? ' is-picked' : ''}`}
                        x={left + wi * step}
                        y={top + di * step}
                        width={cell}
                        height={cell}
                    />
                );
            }))}
        </g>
    );
}

export default function ContribGraph() {
    const { t } = useApp();
    const [picked, setPicked] = useState<number | null>(null);
    const mounted = useSyncExternalStore(subscribe, () => true, () => false);

    const pick = (e: MouseEvent<SVGSVGElement>) => {
        const index = (e.target as SVGElement).getAttribute('data-index');
        if (index !== null) setPicked(Number(index));
    };

    const day = picked === null ? null : contribData[picked];

    // 一年を上下二段に分け、横スクロールなしでセルの大きさを保つ
    const half = Math.ceil(weeks.length / 2);
    const narrow: Layout = { cell: 11, gap: 2, left: 44, top: 22, font: 17 };
    const narrowW = narrow.left + half * (narrow.cell + narrow.gap);
    const narrowH = (narrow.top + 7 * (narrow.cell + narrow.gap)) * 2 + 12;

    return (
        <section id="contrib" className="sec">
            <div className="container">
                <div className="sec-grid">
                    <h2 className="sec-h">{t.nav.activity}</h2>
                    <div className="sec-body">
                {/* 選んだ日の内容はここに出す。指で押してもカーソルを載せても同じ */}
                <p className="ag-line" aria-live="polite">
                    {day
                        ? <>{day.date}{day.project ? ` / ${day.project}` : ''} / Level: {day.level}/4</>
                        : <>{totalContribs} contributions in the last year</>}
                </p>
                {mounted ? (
                    <>
                        <svg className="ag-svg" viewBox={`0 0 ${narrowW} ${narrowH}`} onClick={pick} onMouseOver={pick} aria-hidden="true">
                            <Strip list={weeks.slice(0, half)} startWeek={0} y={0} layout={narrow} picked={picked} />
                            <Strip list={weeks.slice(half)} startWeek={half} y={narrowH / 2 + 6} layout={narrow} picked={picked} />
                        </svg>
                    </>
                ) : (
                    <div className="ag-empty" />
                )}
                <div className="ag-legend" aria-hidden="true">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((level) => (
                        <i key={level} style={{ background: `var(--cell-${level})` }} />
                    ))}
                    <span>More</span>
                </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

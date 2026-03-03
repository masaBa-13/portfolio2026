'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { contribData, ContribDay } from '@/lib/contrib-data';

const CELL_SIZE = 14;
const CELL_GAP = 3;
const LEVELS = [
    'rgba(0,255,148,0)',
    'rgba(0,255,148,0.15)',
    'rgba(0,255,148,0.35)',
    'rgba(0,255,148,0.6)',
    'rgba(0,255,148,0.9)',
];

export default function ContribGraph() {
    const svgRef = useRef<SVGSVGElement>(null);
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    const [tooltip, setTooltip] = useState<{ x: number; y: number; day: ContribDay } | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Organize data into weeks
    const weeks: ContribDay[][] = [];
    let currentWeek: ContribDay[] = [];

    contribData.forEach((day, i) => {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
    });
    if (currentWeek.length > 0) {
        weeks.push(currentWeek);
    }

    const svgWidth = weeks.length * (CELL_SIZE + CELL_GAP) + 40;
    const svgHeight = 7 * (CELL_SIZE + CELL_GAP) + 30;

    const dayLabels = ['Sun', '', 'Tue', '', 'Thu', '', 'Sat'];
    const monthLabels: { label: string; x: number }[] = [];

    // Calculate month labels
    let lastMonth = -1;
    weeks.forEach((week, wi) => {
        if (week[0]) {
            const d = new Date(week[0].date);
            const month = d.getMonth();
            if (month !== lastMonth) {
                const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                monthLabels.push({ label: monthNames[month], x: wi * (CELL_SIZE + CELL_GAP) + 40 });
                lastMonth = month;
            }
        }
    });

    // Count total contributions
    const totalContribs = contribData.filter((d) => d.level > 0).length;

    if (!mounted) return null;

    return (
        <section id="contrib" style={{ padding: '100px 0' }}>
            <div className="container" ref={ref}>
                <div className="section-title">// contributions</div>
                <h2 className="section-heading">
                    <span className="accent">Activity</span>.graph()
                </h2>

                <div
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        padding: '24px',
                        position: 'relative',
                        overflowX: 'auto',
                    }}
                >
                    {/* Stats bar */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '12px',
                        }}
                    >
                        <div style={{ color: 'var(--text-muted)' }}>
                            <span style={{ color: 'var(--accent)' }}>{totalContribs}</span> contributions in the last year
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <span style={{ color: 'var(--text-muted)', marginRight: '8px' }}>Less</span>
                            {LEVELS.map((color, i) => (
                                <div
                                    key={i}
                                    style={{
                                        width: CELL_SIZE,
                                        height: CELL_SIZE,
                                        background: i === 0 ? 'rgba(30,45,61,0.5)' : color,
                                        border: '1px solid rgba(30,45,61,0.3)',
                                    }}
                                />
                            ))}
                            <span style={{ color: 'var(--text-muted)', marginLeft: '8px' }}>More</span>
                        </div>
                    </div>

                    <svg ref={svgRef} width={svgWidth} height={svgHeight} style={{ display: 'block' }}>
                        {/* Day labels */}
                        {dayLabels.map(
                            (label, i) =>
                                label && (
                                    <text
                                        key={`day-${i}`}
                                        x={28}
                                        y={i * (CELL_SIZE + CELL_GAP) + CELL_SIZE + 22}
                                        fill="var(--text-muted)"
                                        fontSize="10"
                                        fontFamily="var(--font-mono)"
                                        textAnchor="end"
                                    >
                                        {label}
                                    </text>
                                )
                        )}

                        {/* Month labels */}
                        {monthLabels.map((ml, i) => (
                            <text
                                key={`month-${i}`}
                                x={ml.x}
                                y={10}
                                fill="var(--text-muted)"
                                fontSize="10"
                                fontFamily="var(--font-mono)"
                            >
                                {ml.label}
                            </text>
                        ))}

                        {/* Cells */}
                        {weeks.map((week, wi) =>
                            week.map((day, di) => (
                                <rect
                                    key={`${wi}-${di}`}
                                    x={wi * (CELL_SIZE + CELL_GAP) + 40}
                                    y={di * (CELL_SIZE + CELL_GAP) + 18}
                                    width={CELL_SIZE}
                                    height={CELL_SIZE}
                                    fill={day.level === 0 ? 'rgba(30,45,61,0.5)' : LEVELS[day.level]}
                                    stroke="rgba(30,45,61,0.3)"
                                    strokeWidth={1}
                                    style={{
                                        opacity: inView ? 1 : 0,
                                        transition: `opacity 0.3s ease ${(wi * 7 + di) * 2}ms`,
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const parent = e.currentTarget.closest('div')?.getBoundingClientRect();
                                        if (parent) {
                                            setTooltip({
                                                x: rect.left - parent.left + CELL_SIZE / 2,
                                                y: rect.top - parent.top - 8,
                                                day,
                                            });
                                        }
                                    }}
                                    onMouseLeave={() => setTooltip(null)}
                                />
                            ))
                        )}
                    </svg>

                    {/* Tooltip */}
                    {tooltip && (
                        <div
                            style={{
                                position: 'absolute',
                                left: tooltip.x,
                                top: tooltip.y,
                                transform: 'translate(-50%, -100%)',
                                background: '#1a1f2e',
                                border: '1px solid var(--border)',
                                padding: '6px 12px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '11px',
                                color: 'var(--text)',
                                whiteSpace: 'nowrap',
                                zIndex: 10,
                                pointerEvents: 'none',
                            }}
                        >
                            <div style={{ color: 'var(--accent)' }}>{tooltip.day.date}</div>
                            {tooltip.day.project && (
                                <div style={{ color: 'var(--text-muted)' }}>{tooltip.day.project}</div>
                            )}
                            <div style={{ color: 'var(--text-muted)' }}>
                                Level: {tooltip.day.level}/4
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

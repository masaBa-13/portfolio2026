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
        <section id="contrib">
            <div className="container" ref={ref}>
                <div className="section-label">// contributions</div>
                <h2 className="section-heading">
                    <span className="text-accent">Activity</span>.graph()
                </h2>

                <div className="bg-surface border border-border p-6 relative overflow-x-auto">
                    {/* Stats bar */}
                    <div className="flex justify-between items-center mb-5 font-mono text-xs">
                        <div className="text-muted">
                            <span className="text-accent">{totalContribs}</span> contributions in the last year
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="text-muted mr-2">Less</span>
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
                            <span className="text-muted ml-2">More</span>
                        </div>
                    </div>

                    <svg ref={svgRef} width={svgWidth} height={svgHeight} className="block">
                        {/* Day labels */}
                        {dayLabels.map(
                            (label, i) =>
                                label && (
                                    <text
                                        key={`day-${i}`}
                                        x={28}
                                        y={i * (CELL_SIZE + CELL_GAP) + CELL_SIZE + 22}
                                        fill="var(--color-muted)"
                                        fontSize="10"
                                        fontFamily="var(--font-family-mono)"
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
                                fill="var(--color-muted)"
                                fontSize="10"
                                fontFamily="var(--font-family-mono)"
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
                            className="absolute bg-[#1a1f2e] border border-border px-3 py-[6px] font-mono text-[11px] text-fg whitespace-nowrap z-10 pointer-events-none"
                            style={{
                                left: tooltip.x,
                                top: tooltip.y,
                                transform: 'translate(-50%, -100%)',
                            }}
                        >
                            <div className="text-accent">{tooltip.day.date}</div>
                            {tooltip.day.project && (
                                <div className="text-muted">{tooltip.day.project}</div>
                            )}
                            <div className="text-muted">Level: {tooltip.day.level}/4</div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

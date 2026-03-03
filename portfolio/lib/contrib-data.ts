export interface ContribDay {
    date: string;
    level: number; // 0-4
    project?: string;
}

const projectNames = [
    'RemeMore',
    'マグログ',
    'IoT箱罠',
    'まちかど水族館',
    '99Bar',
    'ISARIBI with',
    'TackMore Corp',
];

function seededRandom(seed: number): number {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return x - Math.floor(x);
}

export function generateContribData(): ContribDay[] {
    const data: ContribDay[] = [];
    const today = new Date(2026, 2, 4); // 2026-03-04
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364);

    // Adjust to start on Sunday
    const dayOfWeek = startDate.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek);

    const current = new Date(startDate);
    let seed = 42;

    while (current <= today) {
        const dateStr = current.toISOString().split('T')[0];
        seed++;
        const rand = seededRandom(seed);

        // Create activity patterns - busier on weekdays, some weekends
        const dow = current.getDay();
        const isWeekend = dow === 0 || dow === 6;
        const monthFactor = current.getMonth() / 11;

        let level = 0;
        if (rand > 0.35) {
            if (isWeekend) {
                level = rand > 0.7 ? (rand > 0.9 ? 2 : 1) : 0;
            } else {
                if (rand > 0.9) level = 4;
                else if (rand > 0.75) level = 3;
                else if (rand > 0.55) level = 2;
                else level = 1;
            }
        }

        // Boost activity in certain periods (project launches)
        const month = current.getMonth();
        const year = current.getFullYear();
        if (
            (year === 2025 && month >= 1 && month <= 3) || // TackMore launch
            (year === 2025 && month >= 5 && month <= 7) || // Aotake
            (year === 2026 && month >= 0 && month <= 2)    // Current
        ) {
            if (level > 0) level = Math.min(4, level + 1);
        }

        const project = level > 0
            ? projectNames[Math.floor(seededRandom(seed + 100) * projectNames.length)]
            : undefined;

        data.push({ date: dateStr, level, project });
        current.setDate(current.getDate() + 1);
    }

    return data;
}

export const contribData = generateContribData();

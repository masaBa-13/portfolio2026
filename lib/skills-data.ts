export interface Skill {
    name: string;
    level: number;
}

export interface SkillCategory {
    name: string;
    icon: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        name: 'Frontend',
        icon: '🖥',
        skills: [
            { name: 'Next.js / React', level: 90 },
            { name: 'TypeScript', level: 85 },
            { name: 'HTML / CSS', level: 90 },
            { name: 'Flutter', level: 35 },
        ],
    },
    {
        name: 'Backend & Infra',
        icon: '⚙',
        skills: [
            { name: 'Node.js', level: 75 },
            { name: 'Supabase / MySQL', level: 80 },
            { name: 'Cloudflare Workers', level: 70 },
            { name: 'REST API Design', level: 60 },
        ],
    },
    {
        name: 'IoT & Hardware',
        icon: '📡',
        skills: [
            { name: 'Arduino / Spresense', level: 75 },
            { name: 'センサー設計 (磁気/加速度)', level: 70 },
            { name: 'ELTRES / LPWA', level: 65 },
            { name: '電波法コンプライアンス', level: 55 },
        ],
    },
    {
        name: 'Business & Management',
        icon: '💼',
        skills: [
            { name: '起業 / 法人経営', level: 85 },
            { name: 'プロダクトマネジメント', level: 80 },
            { name: 'コミュニティ運営', level: 90 },
            { name: 'ピッチ / プレゼンテーション', level: 85 },
        ],
    },
];

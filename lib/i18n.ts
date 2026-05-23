export type Lang = 'ja' | 'en';

const translations = {
    ja: {
        nav: {
            about: 'About',
            timeline: 'Timeline',
            projects: 'Projects',
            activity: 'Activity',
            skills: 'Skills',
            contact: 'Contact',
            skillSheet: 'スキルシート',
        },
        hero: {
            roles: [
                'CEO / 株式会社TackMore',
                'Future University Hakodate',
                'Social Tech Entrepreneur',
                'IoT × 地方創生',
            ],
            status: [
                { label: 'STATUS',   value: 'ACTIVE' },
                { label: 'LOCATION', value: '函館, 北海道' },
                { label: 'COMPANY',  value: 'TackMore Inc.' },
            ],
        },
        about: {
            sectionLabel: '// about',
            heading: { accent: 'System', rest: '.getProfile()' },
            specs: [
                { key: 'NAME',         value: '祐川 雅治 (Sukekawa Masaharu)' },
                { key: 'ROLE',         value: 'CEO / ソフトウェアエンジニア / 起業家' },
                { key: 'COMPANY',      value: '株式会社TackMore' },
                { key: 'UNIVERSITY',   value: '公立はこだて未来大学' },
                { key: 'ORGANIZATION', value: '学生団体ISARIBI with / おさかな日和' },
                { key: 'LOCATION',     value: '函館, 北海道, Japan' },
                { key: 'INTERESTS',    value: 'カメラ📷 / スノボ🏂 / コーヒー☕️' },
                { key: 'PHILOSOPHY',   value: '"ローカルな泥臭い課題 × テクノロジーの実装"' },
            ],
            summary: [
                '高度な情報技術（IoT、Webアプリ等）を単なる技術実験に留めず、明確な社会的・経済的・法的なコンテキストに正確に実装する適応能力を持つ。',
                '水産業DXから始まり、コミュニティ運営、法人設立、SaaS開発まで、常に「現場の課題」にテクノロジーを精緻に適合させるアプローチを一貫。',
                'モラトリアムな学生プロジェクトから、資本主義の市場原理のなかで社会変革を推進するシリアルアントレプレナーへと進化中。',
            ],
            summaryHighlight: 'シリアルアントレプレナー',
        },
        sections: {
            timeline: { label: '// timeline', accent: 'git', rest: ' log --oneline' },
            projects:  { label: '// projects', accent: 'ls',  rest: ' -la ./products' },
            activity:  { label: '// activity', accent: 'git', rest: ' contributions' },
            skills:    { label: '// skills',   accent: 'npm', rest: ' list --depth=0' },
            contact:   { label: '// contact',  accent: 'ssh', rest: ' connect@sukekawa' },
        },
        skillSheet: { viewBtn: 'スキルシートを見る →' },
        footer: { builtWith: 'Built with', copyright: '2026 祐川雅治' },
    },
    en: {
        nav: {
            about: 'About',
            timeline: 'Timeline',
            projects: 'Projects',
            activity: 'Activity',
            skills: 'Skills',
            contact: 'Contact',
            skillSheet: 'Skill Sheet',
        },
        hero: {
            roles: [
                'CEO / TackMore Inc.',
                'Future University Hakodate',
                'Social Tech Entrepreneur',
                'IoT × Regional Innovation',
            ],
            status: [
                { label: 'STATUS',   value: 'ACTIVE' },
                { label: 'LOCATION', value: 'Hakodate, Hokkaido' },
                { label: 'COMPANY',  value: 'TackMore Inc.' },
            ],
        },
        about: {
            sectionLabel: '// about',
            heading: { accent: 'System', rest: '.getProfile()' },
            specs: [
                { key: 'NAME',         value: 'Masaharu Sukekawa (祐川 雅治)' },
                { key: 'ROLE',         value: 'CEO / Software Engineer / Entrepreneur' },
                { key: 'COMPANY',      value: 'TackMore Inc.' },
                { key: 'UNIVERSITY',   value: 'Future University Hakodate' },
                { key: 'ORGANIZATION', value: 'ISARIBI with / Osakana Biyori' },
                { key: 'LOCATION',     value: 'Hakodate, Hokkaido, Japan' },
                { key: 'INTERESTS',    value: 'Photography📷 / Snowboarding🏂 / Coffee☕️' },
                { key: 'PHILOSOPHY',   value: '"Local gritty problems × Technology implementation"' },
            ],
            summary: [
                'Possesses the adaptive ability to implement advanced tech (IoT, web apps) not as mere experiments, but precisely within clear social, economic, and legal contexts.',
                'Consistently applies technology to real-world challenges — from fishery DX to community management, company founding, and SaaS product development.',
                'Evolving from student projects into a serial entrepreneur driving social change within market dynamics.',
            ],
            summaryHighlight: 'serial entrepreneur',
        },
        sections: {
            timeline: { label: '// timeline', accent: 'git', rest: ' log --oneline' },
            projects:  { label: '// projects', accent: 'ls',  rest: ' -la ./products' },
            activity:  { label: '// activity', accent: 'git', rest: ' contributions' },
            skills:    { label: '// skills',   accent: 'npm', rest: ' list --depth=0' },
            contact:   { label: '// contact',  accent: 'ssh', rest: ' connect@sukekawa' },
        },
        skillSheet: { viewBtn: 'View Skill Sheet →' },
        footer: { builtWith: 'Built with', copyright: '2026 Masaharu Sukekawa' },
    },
} as const;

export type Translations = typeof translations.ja;
export default translations;

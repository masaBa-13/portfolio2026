// pages は資料の元のページ番号。全ページを確認して、公開してよいものだけを載せている
export interface Deck {
    id: string;
    title: string;
    total: number;
    pages: number[];
}

export const decks: Record<string, Deck> = {
    'rememore-service': {
        id: 'rememore-service',
        title: 'サービス紹介資料（2025年11月）',
        total: 33,
        pages: [5, 6, 7, 8, 18, 33],
    },
    'rememore-koshien': {
        id: 'rememore-koshien',
        title: '起業家甲子園の発表資料',
        total: 26,
        pages: [1, 6, 14, 18, 26],
    },
    'rememore-kazasu': {
        id: 'rememore-kazasu',
        title: '発表資料「かざす、繋がる、魅せる。」',
        total: 30,
        pages: [1, 6, 7, 9, 10, 11, 13, 14, 15, 17, 19, 23, 24, 25, 26, 27, 29, 30],
    },
    'smart-donan': {
        id: 'smart-donan',
        title: 'スマート道南プロジェクトの成果発表（2024年12月6日）',
        total: 27,
        pages: [1, 3, 4, 6, 7, 8, 12, 13, 15, 16, 17, 18, 20, 21, 22, 24, 25, 26, 27],
    },
    'master-study': {
        id: 'master-study',
        title: '電子情報通信学会北海道支部大会の発表資料（2026年10月31日）',
        total: 28,
        pages: [1, 2, 5, 6, 7, 10, 18, 19, 20, 21, 22, 23],
    },
    'codary': {
        id: 'codary',
        title: 'Codaryの発表資料',
        total: 19,
        pages: [2, 3, 4, 5, 6, 7, 9, 14, 15, 16, 18],
    },
    'aquarium': {
        id: 'aquarium',
        title: '青森市学生ビジネスアイデアコンテストの発表資料',
        total: 30,
        pages: [1, 2, 3, 4, 5, 6, 7, 9, 12, 15, 16, 17, 18, 19, 22],
    },
    'dxcup': {
        id: 'dxcup',
        title: '家畜の体調モニタリングシステムの発表資料',
        total: 25,
        pages: [2, 3, 4, 6, 11, 12, 14, 17, 18, 19, 20, 22, 25],
    },
    '99-report': {
        id: '99-report',
        title: '99にともしびPJの成果報告（2024年9月29日）',
        total: 21,
        pages: [4, 11, 14, 16, 17, 18, 19],
    },
    '99-vision': {
        id: '99-vision',
        title: 'VISION OF 99BAR（2024年8月15日）',
        total: 21,
        pages: [1, 2, 3, 4, 5, 9, 10, 12, 13, 14, 15, 16, 17, 18, 21],
    },
};

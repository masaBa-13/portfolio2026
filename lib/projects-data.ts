export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    tags: string[];
    link?: string;
    highlight?: boolean;
}

export const projectsData: Project[] = [
    {
        id: 'rememore',
        title: 'RemeMore — 電子名刺サービス',
        period: '2025.06 〜 現在',
        description:
            'NFC/QRコードを活用したデジタル名刺サービス。物理カード「Reme Card」と、プロフィールページを一元管理するWebアプリケーションを融合。ペーパーレス化とESG経営を推進する複合型SaaSプロダクト。',
        tags: ['Next.js', 'SaaS', 'NFC', 'QR', 'TypeScript'],
        link: 'https://reme-more.com',
        highlight: true,
    },
    {
        id: 'maglog',
        title: 'マグログ — デジタル操業日誌',
        period: '2024.04 〜 現在',
        description:
            '松前町のマグロ漁業における漁獲情報共有を、電話（同期型通信）からWebアプリ（非同期型）へ移行。29隻全漁船に100%導入を達成し、現在も漁協向けシステムとして実運用中。高齢漁業者が船上で直感的に操作できるUI/UXを追求。旧来のPHPシステムからNext.js / PostgreSQL構成へリプレイスを行った。',
        tags: ['Next.js', 'PostgreSQL', 'Cloudflare', 'UI/UX', '水産業DX'],
        link: 'https://www.fun.ac.jp/wp-content/uploads/2025/05/project11.pdf',
        highlight: true,
    },
    {
        id: 'master-study',
        title: '修士研究 — マグロ延縄漁業の操業分析・漁場選択支援',
        period: '2026 〜 現在',
        description:
            '公立はこだて未来大学大学院での修士研究（和田研究室）。松前マグロ延縄漁業のGNSS航跡データや海面水温（SST）データを解析し、pandas / scikit-learn / XGBoost等を用いたデータ分析・機械学習による漁場選択支援に取り組む。漁場データの可視化Webアプリ「open-fishmap」も開発。',
        tags: ['Python', '機械学習', 'データ分析', 'Streamlit', '水産業'],
        link: 'https://github.com/masaBa-13/open-fishmap',
    },
    {
        id: 'codary',
        title: 'Codary — AI技術ブログ生成サービス',
        period: '2026',
        description:
            'GDGoC Japan Hackathon 2026 提出作品。GitHubのコード差分とAIとの対話ログから、技術ブログ記事を自動生成するサービス。フロントエンドはFlutter + Firebase、バックエンドはTypeScript + Express + Docker、記事生成にはVertex AI（Gemini）を活用。',
        tags: ['Flutter', 'Firebase', 'Vertex AI', 'TypeScript', 'ハッカソン'],
    },
    {
        id: 'isaribi-hp',
        title: 'ISARIBI with コーポレートサイト',
        period: '2026',
        description:
            'ISARIBI with のコーポレートサイト制作（受託）。Next.js / TypeScriptで構築し、多言語対応（next-intl）とCloudflare上での配信に対応したモダンな構成で開発。',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare', '受託開発'],
    },
    {
        id: 'share-calendar',
        title: 'AIMA — 日程調整サービス',
        period: '2026',
        description:
            'Googleカレンダーの空き時間を共有し、日程調整を効率化するサービス「AIMA」。Cloudflare Workers上で動作し、Google Calendar APIとOAuth 2.0による認証連携を実装。',
        tags: ['Cloudflare Workers', 'TypeScript', 'Google Calendar API', 'OAuth'],
        link: 'https://github.com/masaBa-13/share-calendar',
    },
    {
        id: 'code-health-viz',
        title: 'code-health-viz — コードヘルス可視化ツール',
        period: '2026',
        description:
            'コードの健全性を定量化し、関数コールグラフとして可視化するPython製ツール。tree-sitterによる構文解析とnetworkxによるグラフ分析を用い、テスト・型チェックを備えたOSSスタイルの開発を実践。',
        tags: ['Python', 'tree-sitter', 'Flask', 'OSS'],
        link: 'https://github.com/masaBa-13/code-health-viz',
    },
    {
        id: 'swift-raw-editor',
        title: 'Swift RAW Editor — macOS RAW現像エディタ',
        period: '2026',
        description:
            'SwiftUIとMetalで構築したmacOSネイティブのRAW現像エディタ。外部ライブラリに依存しない実装で、GPUによる画像処理を行う。',
        tags: ['Swift', 'SwiftUI', 'Metal', 'macOS'],
        link: 'https://github.com/masaBa-13/swift-raw-editor',
    },
    {
        id: 'iot-trap',
        title: 'IoT箱罠検知システム',
        period: '2024.04 〜 2025.03',
        description:
            '電波法のコンプライアンスを維持しつつ、ヒグマ等の大型野生動物捕獲用箱罠の作動をIoTで遠隔検知。加速度センサーから磁気センサーへの反復的最適化により、環境耐性と確実性を実現。',
        tags: ['IoT', 'ハードウェア', 'センサー', '鳥獣対策'],
        link: 'https://www.ehako.com/news/news2024a/14437_index_msg.shtml',
    },
    {
        id: 'aquarium-app',
        title: '函館まちかど水族館 アプリ',
        period: '2024',
        description:
            '遊休施設に設置した水槽（Offline）と、インタラクティブな生態解説アプリ（Online）を融合したOMO型プロジェクト。青森市学生ビジネスアイデアコンテスト グランプリ受賞。',
        tags: ['スマホアプリ', 'OMO', '地方創生', '教育'],
        link: 'https://www.fun.ac.jp/en/activity/26275',
    },
    {
        id: '99bar',
        title: '99Bar — 学生のためのBar',
        period: '2024.02 〜 2025.03',
        description:
            '学生の「やりたい」を叶える実践的経営体験の場。ターゲット分析・経費管理などビジネスの現場を提供。未利用魚を活用したメニュー開発も並行して実施。',
        tags: ['経営', 'コミュニティ', '飲食', '未利用魚'],
        link: 'https://note.com/isaribi_with/n/n4a6fbe618ee5',
    },
    {
        id: 'dxcup',
        title: 'DXCUP2024 — 遊牧民IoTソリューション',
        period: '2023.06 〜 2023.12',
        description:
            '遊牧民の社会課題（商店・教育・医療アクセス困難と、環境に左右される牧畜業の不安定性）を解決するIoTソリューションを提案・発表。',
        tags: ['IoT', 'DX', 'JICA', 'ソーシャル'],
        link: 'https://www.jica.go.jp/information/seminar/2023/20231226_2.html',
    },
];

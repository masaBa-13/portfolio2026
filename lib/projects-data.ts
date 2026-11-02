export interface ProjectImage {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
}

export interface Project {
    id: string;
    title: string;
    period: string;
    description: string;
    tags: string[];
    link?: string;
    documents?: { label: string; url: string }[];
    highlight?: boolean;
    images?: ProjectImage[];
    decks?: string[];
    embed?: boolean;
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
        images: [
            {
                src: '/images/projects/rememore/service-card.webp',
                width: 1600,
                height: 900,
                alt: '「第一印象で確かな差をつける。」という見出しと、Reme cardの木製カード2枚が載ったスライド',
                caption: 'サービス紹介資料（2025年11月）',
            },
            {
                src: '/images/projects/rememore/pitch-cover.webp',
                width: 1600,
                height: 900,
                alt: 'Reme moreのロゴと人のイラストが載った水色の表紙のスライド',
                caption: '起業家甲子園の発表資料',
            },
            {
                src: '/images/projects/rememore/craft.webp',
                width: 1600,
                height: 900,
                alt: '「リミーモアのこだわり オリジナル機能と技術的工夫」という見出しとカードが載った青いスライド',
                caption: '発表資料「かざす、繋がる、魅せる。」より',
            },
        ],
        decks: ['rememore-service', 'rememore-koshien', 'rememore-kazasu'],
    },
    {
        id: 'maglog',
        title: 'マグログ — デジタル操業日誌',
        period: '2024.04 〜 現在',
        description:
            '松前町のマグロ漁業における漁獲情報共有を、電話（同期型通信）からWebアプリ（非同期型）へ移行。29隻全漁船に100%導入を達成し、現在も漁協向けシステムとして実運用中。高齢漁業者が船上で直感的に操作できるUI/UXを追求。旧来のPHPシステムからNext.js / PostgreSQL構成へリプレイスを行った。',
        tags: ['Next.js', 'PostgreSQL', 'Cloudflare', 'UI/UX', '水産業DX'],
        link: 'https://www.fun.ac.jp/project/?project-year=2024',
        documents: [
            { label: 'プロジェクト報告書', url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_project11.pdf' },
            { label: 'グループ報告書', url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_group11.pdf' },
            { label: 'ポスター', url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_mainposter11.pdf' },
        ],
        highlight: true,
        images: [
            {
                src: '/images/projects/maglog/cover.webp',
                width: 1600,
                height: 900,
                alt: '「デジタル操業日誌と箱罠捕獲検知システム」と書かれた表紙のスライド',
                caption: 'スマート道南プロジェクトの成果発表（2024年12月6日）',
            },
            {
                src: '/images/projects/maglog/problem.webp',
                width: 1600,
                height: 900,
                alt: '情報共有の難しさを、漁師の吹き出しの図で示したスライド',
                caption: '同じ資料より、情報共有の課題',
            },
            {
                src: '/images/projects/maglog/app.webp',
                width: 1600,
                height: 900,
                alt: 'スマートフォン2台にマグログの画面を表示したスライド',
                caption: '同じ資料より、Webアプリの説明',
            },
        ],
        decks: ['smart-donan'],
    },
    {
        id: 'master-study',
        title: '修士研究 — マグロ延縄漁業の操業分析・漁場選択支援',
        period: '2026 〜 現在',
        description:
            '公立はこだて未来大学大学院での修士研究（和田研究室）。松前マグロ延縄漁業のGNSS航跡データや海面水温（SST）データを解析し、pandas / scikit-learn / XGBoost等を用いたデータ分析・機械学習による漁場選択支援に取り組む。漁場データの可視化Webアプリ「open-fishmap」も開発。',
        tags: ['Python', '機械学習', 'データ分析', 'Streamlit', '水産業'],
        link: 'https://github.com/masaBa-13/open-fishmap',
        images: [
            {
                src: '/images/projects/master-study/cover.webp',
                width: 1600,
                height: 900,
                alt: '「マグロ延縄漁業におけるGX実現に向けた漁場分析」と書かれた表紙のスライド',
                caption: '電子情報通信学会北海道支部大会の発表資料（2026年10月31日）',
            },
            {
                src: '/images/projects/master-study/viterbi.webp',
                width: 1600,
                height: 900,
                alt: 'Viterbiアルゴリズムの考え方を、色の付いた丸とスコアで示したスライド',
                caption: '同じ資料より、Viterbiアルゴリズムの説明',
            },
        ],
        decks: ['master-study'],
    },
    {
        id: 'codary',
        title: 'Codary — AI技術ブログ生成サービス',
        period: '2026',
        description:
            'GDGoC Japan Hackathon 2026 提出作品。GitHubのコード差分とAIとの対話ログから、技術ブログ記事を自動生成するサービス。フロントエンドはFlutter + Firebase、バックエンドはTypeScript + Express + Docker、記事生成にはVertex AI（Gemini）を活用。',
        tags: ['Flutter', 'Firebase', 'Vertex AI', 'TypeScript', 'ハッカソン'],
        images: [
            {
                src: '/images/projects/codary/system-web.webp',
                width: 1600,
                height: 900,
                alt: 'Web版とIDE版のシステム構成を、技術のロゴと矢印で示したスライド',
                caption: '発表資料より、システム構成（Web / IDE版）',
            },
            {
                src: '/images/projects/codary/system-cli.webp',
                width: 1600,
                height: 900,
                alt: 'CLI版のシステム構成を、技術のロゴと矢印で示したスライド',
                caption: '同じ資料より、システム構成（CLI版）',
            },
        ],
        decks: ['codary'],
    },
    {
        id: 'isaribi-hp',
        title: 'ISARIBI with コーポレートサイト',
        period: '2026',
        description:
            'ISARIBI with のコーポレートサイト制作（受託）。Next.js / TypeScriptで構築し、多言語対応（next-intl）とCloudflare上での配信に対応したモダンな構成で開発。',
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare', '受託開発'],
        link: 'https://isaribi-with.org',
        embed: true,
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
        documents: [
            { label: 'プロジェクト報告書', url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_project11.pdf' },
            { label: 'グループ報告書', url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_group11.pdf' },
            { label: 'ポスター', url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_mainposter11.pdf' },
        ],
        images: [
            {
                src: '/images/projects/iot-trap/tree-sensor.webp',
                width: 960,
                height: 1280,
                alt: '木の幹に取り付けられた白い箱と、箱罠の扉',
                caption: '木に取り付けたセンサーと箱罠（2025年9月撮影）',
            },
            {
                src: '/images/projects/iot-trap/trap.webp',
                width: 960,
                height: 1280,
                alt: '森の中の金属の檻と、その横に立つ人',
                caption: '森の中の箱罠（2025年9月撮影）',
            },
            {
                src: '/images/projects/iot-trap/magnet-sensor.webp',
                width: 600,
                height: 800,
                alt: 'ひもで吊るされた黒いケースのセンサー',
                caption: '磁気センサ（成果発表の資料より）',
            },
            {
                src: '/images/projects/iot-trap/accel-sensor.webp',
                width: 600,
                height: 800,
                alt: '金属の柱にベルトで固定された黒いケースのセンサー',
                caption: '加速度センサ（同じ資料より）',
            },
            {
                src: '/images/projects/iot-trap/magnet-proposal.webp',
                width: 1600,
                height: 900,
                alt: '木に取り付けた装置と磁石、箱罠の関係を描いた図のスライド',
                caption: '同じ資料より、磁気センサの提案',
            },
        ],
        decks: ['smart-donan'],
    },
    {
        id: 'aquarium-app',
        title: '函館まちかど水族館 アプリ',
        period: '2024',
        description:
            '遊休施設に設置した水槽（Offline）と、インタラクティブな生態解説アプリ（Online）を融合したOMO型プロジェクト。青森市学生ビジネスアイデアコンテスト グランプリ受賞。',
        tags: ['スマホアプリ', 'OMO', '地方創生', '教育'],
        link: 'https://www.fun.ac.jp/30669/',
        images: [
            {
                src: '/images/projects/aquarium-app/tanks.webp',
                width: 1600,
                height: 706,
                alt: '魚の名前の札が並ぶ2つの水槽',
                caption: 'まちかど水族館の水槽',
            },
            {
                src: '/images/projects/aquarium-app/entrance.webp',
                width: 1200,
                height: 1600,
                alt: '「はこだてまちかど水族館」の看板が掛かった入口',
                caption: 'まちかど水族館の入口',
            },
            {
                src: '/images/projects/aquarium-app/sign.webp',
                width: 1600,
                height: 1200,
                alt: '「はこだてまちかど水族館」と書かれた看板',
                caption: '看板（2026年8月撮影）',
            },
            {
                src: '/images/projects/aquarium-app/features.webp',
                width: 1600,
                height: 900,
                alt: 'マイ水族館、海クイズ、釣りゲームの3項目を並べたスライド',
                caption: '発表資料より、アプリの3つの機能',
            },
            {
                src: '/images/projects/aquarium-app/quiz-game.webp',
                width: 1600,
                height: 900,
                alt: 'スマートフォンに地図とゲームの画面を表示したスライド',
                caption: '同じ資料より、デモで作成した釣りクイズゲーム',
            },
        ],
        decks: ['aquarium'],
    },
    {
        id: '99bar',
        title: '99Bar — 学生のためのBar',
        period: '2024.02 〜 2025.03',
        description:
            '学生の「やりたい」を叶える実践的経営体験の場。ターゲット分析・経費管理などビジネスの現場を提供。未利用魚を活用したメニュー開発も並行して実施。',
        tags: ['経営', 'コミュニティ', '飲食', '未利用魚'],
        link: 'https://note.com/isaribi_with/n/n4a6fbe618ee5',
        images: [
            {
                src: '/images/projects/99bar/opening-counter.webp',
                width: 1477,
                height: 1108,
                alt: 'カウンターを囲んで話す人たち。手前に酒瓶が並ぶ',
                caption: '開店した月のカウンター（2024年8月）',
            },
            {
                src: '/images/projects/99bar/opening-staff.webp',
                width: 1600,
                height: 900,
                alt: 'カウンターの中で働く3人',
                caption: 'カウンターの中（2024年8月）',
            },
            {
                src: '/images/projects/99bar/event.webp',
                width: 1477,
                height: 1108,
                alt: 'テーブルを囲んで作業する人たちで賑わう店内',
                caption: '店内のイベントの様子',
            },
            {
                src: '/images/projects/99bar/halloween.webp',
                width: 1600,
                height: 900,
                alt: 'ハロウィンの飾りとかぼちゃを囲んで集まる人たち',
                caption: 'ハロウィンの店内（2024年10月撮影）',
            },
            {
                src: '/images/projects/99bar/night.webp',
                width: 1086,
                height: 724,
                alt: '夜のカウンターに座る客と、奥で手を挙げる人',
                caption: '夜の店内',
            },
            {
                src: '/images/projects/99bar/open-flyer.webp',
                width: 1190,
                height: 1557,
                alt: '99BAR OPEN と 2024年8月25日の日付が入ったチラシ',
                caption: '開店のチラシ（2024年8月25日）',
            },
            {
                src: '/images/projects/99bar/taco-board.webp',
                width: 1600,
                height: 900,
                alt: 'タコスの日を知らせる店頭の黒板',
                caption: '店頭の黒板（2024年8月撮影）',
            },
            {
                src: '/images/projects/99bar/tacos.webp',
                width: 1600,
                height: 900,
                alt: '皿に盛られた3つのタコス',
                caption: 'タコス（2024年8月撮影）',
            },
        ],
        decks: ['99-report', '99-vision'],
    },
    {
        id: 'dxcup',
        title: 'DXCUP2024 — 遊牧民IoTソリューション',
        period: '2023.06 〜 2023.12',
        description:
            '遊牧民の社会課題（商店・教育・医療アクセス困難と、環境に左右される牧畜業の不安定性）を解決するIoTソリューションを提案・発表。',
        tags: ['IoT', 'DX', 'JICA', 'ソーシャル'],
        link: 'https://www.jica.go.jp/information/seminar/2023/20231226_2.html',
        images: [
            {
                src: '/images/projects/dxcup/title.webp',
                width: 1600,
                height: 900,
                alt: '「Monitoring System for Livestock Body Condition」の題字と家畜のシルエットが載った黒いスライド',
                caption: '家畜の体調モニタリングシステムの発表資料',
            },
            {
                src: '/images/projects/dxcup/sensing.webp',
                width: 1600,
                height: 900,
                alt: '振動発電を用いたセンシングとWebアプリケーションの2項目を並べたスライド',
                caption: '同じ資料より、システムの構成',
            },
            {
                src: '/images/projects/dxcup/possibility.webp',
                width: 1600,
                height: 900,
                alt: '「モニタリングシステムの可能性」という見出しと3つの項目が載ったスライド',
                caption: '同じ資料より、システムの可能性',
            },
        ],
        decks: ['dxcup'],
    },
];

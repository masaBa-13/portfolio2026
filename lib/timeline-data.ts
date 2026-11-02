import { ProjectImage } from '@/lib/projects-data';

export interface Article {
  title: string;
  source: string;
  url: string;
}

export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  images?: ProjectImage[];
  articles: Article[];
}

export const timelineData: TimelineEvent[] = [
  {
    id: 'isaribi',
    date: '2023.06',
    year: 2023,
    title: '学生団体 ISARIBI with 設立',
    description: 'チームリーダーとして漁業・水産分野の課題解決に取り組む学生団体を立ち上げ。サラダフィッシュFUGUBOの商品開発を主導。',
    details: [
      'チームリーダーとして組織運営を担当',
      'サラダフィッシュFUGUBOの商品開発',
      '未利用魚活用プロジェクトの推進',
      '北大水産科学研究院との連携',
    ],
    tags: ['リーダーシップ', '商品開発', '水産業'],
    images: [
      {
        src: '/images/timeline/isaribi/fugubo.webp',
        width: 1600,
        height: 1067,
        alt: 'FUGUBOと書かれた袋入りの商品2種が木の板に載った写真',
        caption: 'FUGUBOの商品（ISARIBI withのnoteより）',
      },
    ],
    articles: [
      {
        title: '【学生団体 ISARIBI with】商品開発班が「FUGUBO」の商品開発を行いました！',
        source: '北海道大学 地域水産業共創センター',
        url: 'https://www2.fish.hokudai.ac.jp/rfc/isaribiwith/20231130.html',
      },
      {
        title: '【商品開発班③】商品開発ストーリー（後半）',
        source: '学生団体ISARIBI with（note）',
        url: 'https://note.com/isaribi_with/n/ncb2b4e636931',
      },
    ],
  },
  {
    id: 'dxcup',
    date: '2023.06',
    year: 2023,
    title: 'DXCUP2024 参加',
    description: '遊牧民が抱える社会課題を解決するIoTソリューションを提案。JICAセミナーにて発表。',
    details: [
      '遊牧民の「商店・教育・医療へのアクセス困難」を課題設定',
      '牧畜業の環境リスクに対するIoTソリューション設計',
      'JICA主催のセミナーで発表',
    ],
    tags: ['IoT', 'ソーシャルイノベーション', 'DX'],
    images: [
      {
        src: '/images/timeline/dxcup/venue.webp',
        width: 1600,
        height: 1069,
        alt: 'スクリーンの前で話す人と、客席の人たち',
        caption: '会場の発表（2023年12月9日）',
      },
      {
        src: '/images/timeline/dxcup/title.webp',
        width: 1600,
        height: 900,
        alt: '「Monitoring System for Livestock Body Condition」の題字と家畜のシルエットが載った黒いスライド',
        caption: '家畜の体調モニタリングシステムの発表資料',
      },
    ],
    articles: [
      {
        title: 'モンゴル・ウランバートルにて、日本とモンゴルの高専生や大学生を対象としたDXビジネスコンテスト「DXCUP2024」を開催しました。',
        source: 'JICA',
        url: 'https://www.jica.go.jp/information/seminar/2023/20231226_2.html',
      },
    ],
  },
  {
    id: 'demola',
    date: '2023 - 2024',
    year: 2023,
    title: 'DEMOLA プログラム参加',
    description: '企業課題に対して大学生が解決法を提案するプログラムに参加。「輝く未来へ、函館の水産物を極めよ！」の課題提供。',
    details: [
      'CREEN人材育成プログラムの一環',
      '北大・北教大・未来大の8名チームを編成',
      '「100年後も美味しい昆布・魚を」をテーマにピッチ発表',
    ],
    tags: ['産学連携', 'プレゼンテーション'],
    images: [
      {
        src: '/images/timeline/demola/pitch.webp',
        width: 1600,
        height: 900,
        alt: '「100年後も美味しいコンブ・魚を」と書かれた表紙のスライド',
        caption: 'DEMOLA 2023 3rdの発表資料（2023年12月3日）',
      },
    ],
    articles: [
      {
        title: 'DEMOLA 2023年度3rdチャレンジ 最終プレゼンテーションを行いました(2023年12月3日)',
        source: '北海道大学 地域水産業共創センター',
        url: 'https://www2.fish.hokudai.ac.jp/rfc/news/20231212.html',
      },
    ],
  },
  {
    id: '99bar',
    date: '2024.02',
    year: 2024,
    title: '99Bar 開業',
    description: '学生の「やりたい」を叶えるBar。経営に興味がある学生がターゲット分析や経費管理を実践できる場を創出。',
    details: [
      '代表として飲食店舗運営を主導',
      '学生のビジネス実践の場を提供',
      'コミュニティ・マネジメントの実践',
      '未利用魚を活用したメニュー開発',
    ],
    tags: ['経営', 'コミュニティ', '飲食'],
    images: [
      {
        src: '/images/timeline/99bar/opening-counter.webp',
        width: 1477,
        height: 1108,
        alt: 'カウンターを囲んで話す人たち。手前に酒瓶が並ぶ',
        caption: '開店した月のカウンター（2024年8月）',
      },
      {
        src: '/images/timeline/99bar/tacos.webp',
        width: 1600,
        height: 900,
        alt: '木の板に載った3枚のタコス',
        caption: 'タコス（ISARIBI withのnoteより）',
      },
    ],
    articles: [
      {
        title: '【プロジェクト紹介③】灯火が集い、未来を作る。99にともしびプロジェクト',
        source: '学生団体ISARIBI with（note）',
        url: 'https://note.com/isaribi_with/n/n4a6fbe618ee5',
      },
    ],
  },
  {
    id: 'smart-donan',
    date: '2024.04',
    year: 2024,
    title: 'スマート道南プロジェクト',
    description: 'マグロ漁獲情報共有システム「マグログ」とIoT箱罠検知システムの開発をリーダーとして主導。',
    details: [
      'マグログ: 同期型通信(電話)から非同期型Webアプリへ移行',
      '29隻の全漁船に100%のペネトレーション達成',
      'IoT箱罠: 加速度センサーから磁気センサーへの最適化',
      '電波法のコンプライアンスクリア',
    ],
    tags: ['IoT', 'Web App', 'UI/UX', 'DX'],
    images: [
      {
        src: '/images/timeline/smart-donan/coast.webp',
        width: 1600,
        height: 1200,
        alt: '海を背に立つ「松前矢越道立自然公園」の看板',
        caption: '松前矢越道立自然公園の海岸（2023年7月撮影）',
      },
      {
        src: '/images/timeline/smart-donan/tree-sensor.webp',
        width: 960,
        height: 1280,
        alt: '木の幹に取り付けられた白い箱と、箱罠の扉',
        caption: '木に取り付けたセンサーと箱罠（2025年9月撮影）',
      },
    ],
    articles: [
      {
        title: '地域課題解決へＩＴ活用 未来大生グループ、松前町と開発進める',
        source: '函館新聞（e-HAKODATE）',
        url: 'https://www.ehako.com/news/news2024a/14437_index_msg.shtml',
      },
      {
        title: 'スマート道南 プロジェクト報告書',
        source: '公立はこだて未来大学',
        url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_project11.pdf',
      },
      {
        title: 'スマート道南 グループ報告書',
        source: '公立はこだて未来大学',
        url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_group11.pdf',
      },
      {
        title: 'スマート道南 ポスター',
        source: '公立はこだて未来大学',
        url: 'https://www.fun.ac.jp/wp/wp-content/uploads/2024_mainposter11.pdf',
      },
    ],
  },
  {
    id: 'aquarium',
    date: '2024',
    year: 2024,
    title: '函館まちかど水族館',
    description: '遊休施設を活用した水族館構想とスマートフォンアプリの開発。青森市学生ビジネスアイデアコンテスト グランプリ受賞。',
    details: [
      'OMO型ビジネスモデルの構築',
      '物理空間(水槽) × デジタル(アプリ)の融合',
      '青森市学生ビジネスアイデアコンテスト グランプリ',
      '産学連携を通じた海洋教育の実践',
    ],
    tags: ['OMO', 'アプリ開発', '地方創生'],
    images: [
      {
        src: '/images/timeline/aquarium/tanks.webp',
        width: 1600,
        height: 706,
        alt: '魚の名前の札が並ぶ2つの水槽',
        caption: 'まちかど水族館の水槽',
      },
      {
        src: '/images/timeline/aquarium/sign.webp',
        width: 1600,
        height: 1200,
        alt: '「はこだてまちかど水族館」と書かれた看板',
        caption: '看板（2026年8月撮影）',
      },
    ],
    articles: [
      {
        title: '青森市学生ビジネスアイデアコンテストで本学チームがグランプリ受賞',
        source: '公立はこだて未来大学',
        url: 'https://www.fun.ac.jp/30669/',
      },
    ],
  },
  {
    id: 'tackmore',
    date: '2025.06',
    year: 2025,
    title: '株式会社TackMore 設立',
    description: '電子名刺サービス「RemeMore」を主力プロダクトとする法人を設立。CEO就任。',
    details: [
      '代表取締役CEOとして経営全般を統括',
      'RemeMore: NFC/QRコードによるデジタル名刺サービス',
      '学生・フリーランスを主なターゲットとするB2C SaaS',
      '大学生協との提携による店頭販売を実現',
    ],
    tags: ['起業', 'SaaS', 'CEO'],
    images: [
      {
        src: '/images/timeline/tackmore/card.webp',
        width: 1600,
        height: 1067,
        alt: '木のカードと紙の名刺が並んだ写真',
        caption: '木の名刺と紙の名刺（2025年9月撮影）',
      },
    ],
    articles: [
      {
        title: '公立はこだて未来大学発スタートアップ称号授与のお知らせ',
        source: '株式会社TackMore',
        url: 'https://tackmore.jp/news/20251003-000000',
      },
      {
        title: 'スタートアップ支援',
        source: '公立はこだて未来大学',
        url: 'https://www.fun.ac.jp/research/startup-support/',
      },
      {
        title: '会社概要',
        source: '株式会社TackMore',
        url: 'https://tackmore.jp/about',
      },
    ],
  },
  {
    id: 'aotake',
    date: '2025.06',
    year: 2025,
    title: 'アオタケプロジェクト2025 採択',
    description: '東北・北海道エリアの広域スタートアップ・エコシステムに採択。150万円の資金を活用した高速仮説検証を実践。',
    details: [
      '東北・北海道広域スタートアップ支援プログラムに採択',
      '「失敗を10個重ねること」を目標に掲げる',
      'リーンスタートアップ手法に基づく高速仮説検証',
      '数百人のユーザー獲得を目指す実践的アプローチ',
    ],
    tags: ['スタートアップ', '資金調達', 'アクセラレーター'],
    images: [
      {
        src: '/images/timeline/aotake/ten-failures.webp',
        width: 1600,
        height: 900,
        alt: '「10回の失敗を目指す」と書かれたスライド',
        caption: '発表資料「かざす、繋がる、魅せる。」より',
      },
    ],
    articles: [
      {
        title: 'アオタケプロジェクト2025 採択者紹介② 祐川雅治さん',
        source: 'スパークル株式会社（note）',
        url: 'https://note.com/spurcle_tohoku/n/nceff2fb09dce',
      },
      {
        title: '「アオタケプロジェクト」採択のお知らせ',
        source: '株式会社TackMore',
        url: 'https://tackmore.jp/news/20250628-000000',
      },
      {
        title: 'AOTAKE Project',
        source: 'アオタケプロジェクト',
        url: 'https://aizu-startups-foundation.com/aotake/top',
      },
    ],
  },
];

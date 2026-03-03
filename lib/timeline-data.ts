export interface TimelineEvent {
  id: string;
  date: string;
  year: number;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  link?: string;
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
    link: 'https://www2.fish.hokudai.ac.jp/rfc/isaribiwith/20231130.html',
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
    link: 'https://www.jica.go.jp/information/seminar/2023/20231226_2.html',
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
    link: 'https://www2.fish.hokudai.ac.jp/rfc/news/20231212.html',
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
    link: 'https://note.com/isaribi_with/n/n4a6fbe618ee5',
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
    link: 'https://www.fun.ac.jp/wp-content/uploads/2025/05/project11.pdf',
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
    link: 'https://www.fun.ac.jp/en/activity/26275',
  },
  {
    id: 'tackmore',
    date: '2025.02',
    year: 2025,
    title: '株式会社TackMore 設立',
    description: '電子名刺サービス「RemeMore」を主力プロダクトとする法人を設立。CEO就任。',
    details: [
      '代表取締役CEOとして経営全般を統括',
      'RemeMore: NFC/QRコードによるデジタル名刺サービス',
      '60〜21,800円の多層的価格設定',
      'ペーパーレス化・ESG経営の推進',
    ],
    tags: ['起業', 'SaaS', 'CEO'],
    link: 'https://tackmore.jp/about',
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
    link: 'https://aizu-startups-foundation.com/aotake/top',
  },
];

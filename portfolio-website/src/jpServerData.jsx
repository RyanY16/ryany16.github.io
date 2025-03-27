const jpServerData = [
  {
    name: "Resume", // server
    data: [
      {
        name: "学歴", // channel
        channels: [
          {
            title: "早稲田大学", // message
            specificTitle: "理学修士（応用数学）",
            date: "2025年 - （予定）",
            details: ["MEXT(文部科学省)奨学金受給者"],
            link: "/icons/waseda_logo.jpg"
          },
          {
            title: "カーティン大学",
            specificTitle: "理学士（アクチュアリーサイエンス）",
            date: "2022年 - 2024年",
            details: [
              "GPA: 3.96/4.0",
              "カーティン・エクセレンス奨学金",
              "サマーバケーション奨学金受給者",
              "ファイナンシャル・モデリング・ワールドカップ - Microsoft Excel大学生チャレンジファイナリスト",
              "履修科目: 統計モデリング、機械学習、金融工学、クオンツファイナンス"
            ],
            link: "/icons/curtin_logo.jpg"
          },
          {
            title: "ウィレットン高校",
            date: "2015年 - 2021年",
            details: [
              "ATAR: 99.35",
              "数学コンペ（AMC、ICAS、WA数学オリンピアード）で高得点・優秀賞受賞"
            ],
            link: "/icons/willetton_logo.jpg"
          }
        ]
      },
      {
        name: "職歴",
        channels: [
          {
            title: "マッコーリー",
            specificTitle: "マーケットリスクインターン - VaRチーム",
            date: "2024年12月 - 2025年2月",
            details: [
              "日次VaRレポートの作成を担当",
              "アナリストと連携し、誤ったポジションを特定・修正・記録",
              "Pythonを使用した金融モデルの改善を提案・実装"
            ],
            link: "/icons/macquarie_logo.jpg"
          },
          {
            title: "コミュニティ省",
            specificTitle: "データサポートオフィサー",
            date: "2024年4月 – 2024年11月",
            details: [
              "AASB16基準に基づく財務リースモデルを開発",
              "財務システムの整合性チェックとエラー特定",
              "SQL、PowerBI、Power Queryを用いたダッシュボードの作成"
            ],
            link: "/icons/doc_logo.jpg"
          },
          {
            title: "カーティン大学",
            specificTitle: "リサーチインターン",
            date: "2023年10月 – 2024年3月",
            details: [
              "『暗号通貨市場における新しいデジタル金融技術』に関する研究を実施",
              "TensorFlowを用いたLSTM深層学習モデルを実装し、ポートフォリオ最適化を行う",
              "暗号通貨と株式を含むポートフォリオのリスク分析を実施"
            ],
            link: "/icons/eecms_logo.jpg"
          },
          {
            title: "EY",
            specificTitle: "データ＆アナリティクスコンサルタントインターン",
            date: "2023年6月 – 2023年7月",
            details: [
              "Excel/SQLを使用してリスク領域を特定し、Power BIでレポートを作成",
              "国際的な鉱業クライアント向けの最適化手法を開発"
            ],
            link: "/icons/ey_logo.jpg"
          }
        ]
      }
    ]
  },
  {
    name: "Home", // server
    data: [
      {
        name: "ようこそ", // channel
        channels: [
          {
            title: "ようこそ", // message
            details: [
              "私のウェブサイトへようこそ！これは私の個人ポートフォリオサイトです。私の経歴を知りたい方はぜひチェックしてください。現在、日本で応用数学の修士課程を専攻しており、オーストラリアでアクチュアリーサイエンスの学士号を取得しました。気軽にご連絡ください :)"
            ]
          },
          {
            title: "自己紹介",
            details: [
              "現在地: 🇦🇺"
            ]
          }
        ]
      }
    ]
  }
];

export default jpServerData;

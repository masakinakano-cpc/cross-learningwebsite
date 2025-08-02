# ラーニングサイト

## 概要
ビジネス効率化と学習支援を目的としたWebサイトです。

## ローカル開発環境のセットアップ

### 前提条件
- Node.js (v14以上)
- npm (Node.jsに含まれています)

### インストール手順

1. **依存関係のインストール**
   ```bash
   npm install
   ```

2. **開発サーバーの起動**
   ```bash
   # 通常起動
   npm start

   # 開発モード（ファイル変更時に自動再起動）
   npm run dev
   ```

3. **ブラウザでアクセス**
   - ローカルURL: http://localhost:3000
   - ネットワークURL: http://0.0.0.0:3000

### 利用可能なページ
- `/` - ホームページ
- `/features` - 機能紹介
- `/courses` - コース一覧
- `/pricing` - 料金プラン
- `/faq` - よくある質問
- `/functions` - 機能詳細
- `/case-studies` - 事例紹介
- `/news` - ニュース

## ファイル構成
```
├── index.html          # ホームページ
├── features.html       # 機能紹介ページ
├── courses.html        # コース一覧ページ
├── pricing.html        # 料金プランページ
├── faq.html           # よくある質問ページ
├── functions.html     # 機能詳細ページ
├── case-studies.html  # 事例紹介ページ
├── news.html          # ニュースページ
├── css/               # スタイルシート
│   ├── style.css      # メインスタイル
│   ├── components.css # コンポーネントスタイル
│   ├── sections.css   # セクションスタイル
│   └── responsive.css # レスポンシブスタイル
├── js/                # JavaScriptファイル
│   ├── main.js        # メインスクリプト
│   └── swiper.js      # スワイパー機能
├── server.js          # Express.jsサーバー
├── package.json       # プロジェクト設定
└── README.md          # このファイル
```

## 開発者向け情報

### サーバーの停止
- ターミナルで `Ctrl+C` を押してください

### ポートの変更
- 環境変数 `PORT` を設定するか、`server.js` の `PORT` 変数を変更してください

### レスポンシブデザイン
- デスクトップ: 1200px以上
- タブレット: 768px-1199px
- モバイル: 767px以下

## ライセンス
ISC

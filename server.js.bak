const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS設定
app.use(cors());

// 静的ファイルの配信設定
app.use(express.static(__dirname));

// ルートパスでindex.htmlを配信
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 各HTMLページへのルーティング
app.get('/features', (req, res) => {
    res.sendFile(path.join(__dirname, 'features.html'));
});

app.get('/courses', (req, res) => {
    res.sendFile(path.join(__dirname, 'courses.html'));
});

app.get('/pricing', (req, res) => {
    res.sendFile(path.join(__dirname, 'pricing.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq.html'));
});

app.get('/functions', (req, res) => {
    res.sendFile(path.join(__dirname, 'functions.html'));
});

app.get('/case-studies', (req, res) => {
    res.sendFile(path.join(__dirname, 'case-studies.html'));
});

app.get('/news', (req, res) => {
    res.sendFile(path.join(__dirname, 'news.html'));
});

// 404エラーハンドリング
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>404 - ページが見つかりません</title>
                <style>
                    body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                    h1 { color: #1A4F8A; }
                    a { color: #2196F3; text-decoration: none; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>404 - ページが見つかりません</h1>
                <p>要求されたページは存在しません。</p>
                <a href="/">ホームページに戻る</a>
            </body>
        </html>
    `);
});

// サーバー起動
app.listen(PORT, () => {
    console.log(`🚀 サーバーが起動しました！`);
    console.log(`📱 ローカルURL: http://localhost:${PORT}`);
    console.log(`🌐 ネットワークURL: http://0.0.0.0:${PORT}`);
    console.log(`📁 静的ファイル配信: ${__dirname}`);
    console.log(`⏹️  停止するには Ctrl+C を押してください`);
});

# C++ Quest - GitHub Pages版

短時間でC++ゲームプログラミングを学ぶ、スマホ/PC対応の学習Webアプリです。

## GitHub Pagesで公開する最短手順

1. GitHubで新しいリポジトリを作成します。名前は `cpp-quest` がおすすめです。
2. このフォルダ内の **中身すべて** をリポジトリ直下にアップロードします。
   - `index.html`
   - `app.js`
   - `styles.css`
   - `manifest.webmanifest`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
   - `.nojekyll`
3. GitHubのリポジトリで `Settings` → `Pages` を開きます。
4. `Build and deployment` の Source を `Deploy from a branch` にします。
5. Branch を `main`、Folder を `/(root)` にして保存します。
6. 公開後、次の形式のURLで開けます。

   `https://あなたのGitHubユーザー名.github.io/cpp-quest/`

## スマホでアプリっぽく使う

### iPhone / iPad
Safariでサイトを開き、共有ボタン → 「ホーム画面に追加」。

### Android
Chromeでサイトを開き、メニュー → 「ホーム画面に追加」または「アプリをインストール」。

## 初版で入っているもの
- 3〜7分想定の短いレッスン
- 座学 → 選択 → 穴埋め → コード記述の段階学習
- ゲーム開発に寄せた題材
- XP / 週間学習 / 累計学習日 / 補助的な連続日数
- 間違えた問題の復習リスト
- localStorageによる進捗保存
- スマホ・PCレスポンシブ
- PWA対応（ホーム画面追加・基本的なオフラインキャッシュ）

## 更新しやすい構成
教材は `app.js` 冒頭の `lessons` 配列にまとまっています。
新しいレッスンや問題形式は、サイト全体を作り直さず追加できます。

## 注意
現在の進捗はブラウザごとの `localStorage` に保存されます。そのため、PCとスマホの進捗は自動同期されません。

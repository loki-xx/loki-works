# Loki Creator Portal

Creator「Loki / ロキ」の音楽・小説・映像・AI Creationをまとめたポータルサイトです。AIガールズバンド「Mistoria」と創作サークル「低めの猫」を中心に、スマートフォンから各作品へ迷わず移動できる構成にしています。

## ページ構成

- `/` — トップページ
- `/mistoria` — Mistoria概要とメンバー
- `/books` — 低めの猫、小説、イベント
- `/music` — 楽曲と配信サービス
- `/video` — MV、アニメーション、ライブ、ショート動画
- `/about` — Lokiの簡潔なプロフィール

## 起動方法

Node.js 22.13以上が必要です。初回のみターミナルで次を実行します。

```bash
npm install
npm run dev
```

画面に表示されたローカルURL（通常は `http://localhost:3000`）をブラウザで開きます。終了するときはターミナルで `Ctrl + C` を押します。

## build / lint

公開前には次の2つを実行してください。

```bash
npm run lint
npm run build
```

ビルド後の静的ファイルは `dist/client` に生成されます。

## Vercelへデプロイする

このリポジトリをGitHub等へpushし、Vercelの「Add New Project」から読み込みます。`vercel.json` に設定済みのため、通常はそのままDeployできます。

- Build Command: `npm run build`
- Output Directory: `dist/client`
- Install Command: `npm install`

独自ドメインはVercelのProject Settings → Domainsから設定してください。

## SNSリンクを変更する

すべてのSNS・配信サービスのURLは [`data/links.ts`](./data/links.ts) にまとめています。

1. 対象サービスの `href: '#'` を探します。
2. `#` を公式URLに置き換えます。
3. `note: 'TODO'` は削除するか、表示したい補足文へ変更します。

未指定URLは安全のため `#` のままにしてあり、画面では押せないTODO表示になります。Xのみ、指定された `@lowcat_books` から公式プロフィールURLを設定しています。

## 作品を追加する

作品一覧は [`data/works.ts`](./data/works.ts) にあります。`works` 配列の末尾へ次の形で追加します。

```ts
{
  id: 'unique-id',
  title: '作品名',
  category: 'MUSIC', // MUSIC / NOVEL / MV / ANIMATION
  description: '短い説明',
  href: '/music',
  image: '/images/works/example.webp',
  imageHint: '/images/works/example.webp',
}
```

画像がまだない場合は `image: null` にすると、レイアウトを崩さずPLACEHOLDERを表示します。映像作品は [`data/videos.ts`](./data/videos.ts) へ同じ要領で追加します。

## Mistoriaメンバー画像を変更する

推奨画像は縦4:5、1200 × 1500 px以上のWebPです。

1. 次のファイルを `public/images/mistoria/` に置きます。
   - `hallu.webp`
   - `luca.webp`
   - `uno.webp`
   - `noah.webp`
2. [`data/mistoria.ts`](./data/mistoria.ts) の各メンバーの `image: null` を、例のように変更します。

```ts
image: '/images/mistoria/hallu.webp'
```

## EVENTを変更する

イベント情報は [`data/events.ts`](./data/events.ts) の `currentFeature` だけを編集します。

- 開催中・告知中: `status: 'active'`
- 終了後も残す: `status: 'archive'`
- 非表示にする: `status: 'hidden'`

イベント名、日付、ブース、サークル、頒布物は `title`、`description`、`details` を変更してください。

## Featuredコンテンツを変更する

トップのCURRENT / FEATUREDも [`data/events.ts`](./data/events.ts) を参照しています。イベント終了後に最新MVへ変える場合は、次を変更します。

```ts
type: 'release',
label: 'New music video',
title: '実際のMVタイトル',
description: '短い紹介文',
href: '実際のYouTube URL',
```

`details` は公開日、楽曲名、作品種別などに差し替えられます。

## 画像ファイル一覧

| 用途 | ファイル | 推奨比率 / サイズ |
| --- | --- | --- |
| Hallu | `public/images/mistoria/hallu.webp` | 4:5 / 1200 × 1500以上 |
| Luca | `public/images/mistoria/luca.webp` | 4:5 / 1200 × 1500以上 |
| Uno | `public/images/mistoria/uno.webp` | 4:5 / 1200 × 1500以上 |
| Noah | `public/images/mistoria/noah.webp` | 4:5 / 1200 × 1500以上 |
| 代書屋いんく | `public/images/books/ink.webp` | 2:3 / 1200 × 1800以上 |
| 青春異常論 | `public/images/books/seishun.webp` | 2:3 / 1200 × 1800以上 |
| 作品カード | `public/images/works/*.webp` | 4:3または16:9 / 横1600以上 |
| プロフィール | `public/images/profile/loki.webp` | 4:5 / 1200 × 1500以上 |
| OG画像 | `public/images/og/og-image.jpg` | 1200 × 630 |
| Favicon | `app/icon.png` | 512 × 512 |

OG画像を追加したら、`app/layout.tsx` の `openGraph` と `twitter` に `/images/og/og-image.jpg` を追加してください。存在しない画像を参照しないため、現時点では画像URLをmetadataへ入れていません。

## 主な編集場所

- サイト共通の色・余白・レスポンシブ・アニメーション: `app/globals.css`
- SEO / OGPテキスト: `app/layout.tsx`
- ナビゲーション: `data/navigation.ts`
- ポータルカード: `data/portals.ts`
- 作品: `data/works.ts`
- 映像: `data/videos.ts`
- SNSと配信URL: `data/links.ts`
- イベント / Featured: `data/events.ts`
- Mistoriaメンバー: `data/mistoria.ts`

## アクセシビリティと表示

キーボード操作、スキップリンク、意味のある見出し構造、代替テキスト、タッチしやすいリンクサイズに対応しています。`prefers-reduced-motion` が有効な端末では霧・表示アニメーションを最小化します。画像未設定時は専用プレースホルダーが表示されます。

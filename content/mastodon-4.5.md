---
title: "Mastodon v4.5.0の新機能まとめ"
date: 2025-11-11T21:00:00+09:00
draft: false
tags: ["機能紹介"]
summary: "Mastodon v4.5.0の新機能について紹介します。"

---

このリリースでは、主要な新機能・改善点が多数あります。この記事では、リリースノートを元に4.5で追加された主な新機能についてご紹介します。

## 1. 引用投稿

### 概要

投稿を引用して、自分のコメントを添えて発信できる機能が追加されました。([GitHub][1])

### 操作手順(クイックブーストを無効にしている状態)

1. 引用したい投稿（トゥート）のブーストボタンをクリック。
{{< figure src="/assets/images/4.5/quote-1.png" style="max-width: 100px; max-width:100%" width="300px">}}

2. メニューから「**引用**」を選択。
{{< figure src="/assets/images/4.5/quote-2.png" style="max-width: 100px; max-width:100%" width="300px">}}

3. 引用対象の投稿が下部に埋め込まれた投稿画面が表示されます。コメント欄に自分のコメントを入力。
{{< figure src="/assets/images/4.5/quote-3.png" style="max-width: 100px; max-width:100%" width="300px">}}

4. 投稿ボタンを押して引用投稿を完了。
{{< figure src="/assets/images/4.5/quote-4.png" style="max-width: 100px; max-width:100%" width="300px">}}

### 操作手順(クイックブーストを有効にしている状態)
クイックブーストを有効にしている場合は、投稿のメニューバーから引用を投稿することが可能です。  
{{< figure src="/assets/images/4.5/quote-5.png" style="max-width: 100px; max-width:100%" width="300px">}}

### クイックブーストとは？
ブーストボタンを以前(4.5.0以前)の使い方に戻すモードです。  
「設定」＞「ユーザー設定」＞「外観」を開き、クイックブーストの有効化にチェックを入れることで有効にすることができます。
{{< figure src="/assets/images/4.5/quote-6.png" style="max-width: 100px; max-width:100%" width="700px">}}

※この設定に関係なく、Shift を押しながらブーストアイコンをクリックすると、すぐにブーストされます。

### 引用を許可・制限する設定
被引用は許可・制限することが可能です。  
1. 「設定」＞「ユーザー設定」＞「デフォルトの投稿設定」を開きます。
{{< figure src="/assets/images/4.5/quote-7.png" style="max-width: 100px; max-width:100%" width="700px">}}

2. 「誰があなたの投稿を引用できるか」を選択可能です：

   * すべてのユーザー
   * フォロワーのみ
   * 自分のみ
{{< figure src="/assets/images/4.5/quote-8.png" style="max-width: 100px; max-width:100%" width="700px">}}

## 2. 返信取得・スレッド表示の強化

### 概要

異なるインスタンス間などで「返信」が途中で表示されないケースを減らすため、Web UI上で未取得の返信をフェッチ／更新する仕組みが追加されました。([GitHub][1])

## 3. 管理者・インスタンス運営者向け設定の追加

### 概要

インスタンス運営／管理のための設定が強化されています。特に、タイムラインの表示制御、ユーザー名パターンブロック、トップページ設定などが追加されています。([GitHub][1])

### 操作手順

#### トップページ表示設定
ログインしていないユーザーが見ることができる表示を設定できるようになりました。  

1. 「設定」＞「管理」にアクセス。
2. 「サーバー設定」＞「ブランディング」＞「Landing page for new visitors」を開きます。
{{< figure src="/assets/images/4.5/top-page-1.png" style="max-width: 100px; max-width:100%" width="700px">}}

3. 「訪問者（ログインしていないユーザー）に見せるタイムライン」などを選択します（例：ローカルタイムライン、トレンドなど）。
{{< figure src="/assets/images/4.5/top-page-2.png" style="max-width: 100px; max-width:100%" width="700px">}}

4. 「トレンド」に設定した場合、ログインしていないユーザーがアクセスした場合はこのようにトレンドページが表示されます。
{{< figure src="/assets/images/4.5/top-page-3.png" style="max-width: 100px; max-width:100%" width="700px">}}


#### ユーザー名ブロック設定
新規ユーザーが登録時に使用できないユーザー名(adminなど)について、管理画面から確認・編集できるようになりました。  
1. 「モデレーション」＞「ユーザー名ルール」を開きます。
{{< figure src="/assets/images/4.5/user-block-1.png" style="max-width: 100px; max-width:100%" width="700px">}}

2. 「ルールを入力」から「ユーザー名に含めてはならない文字列／パターン」を入力できます（例：「spam」「bot」「test」など）。
{{< figure src="/assets/images/4.5/user-block-2.png" style="max-width: 100px; max-width:100%" width="700px">}}

#### 訪問者用フィード非表示設定

1. 「管理画面＞「サーバー設定」＞「見つける」を開きます。
2. 「ライブフィード」「トピックフィード（ハッシュタグ・トレンドリンク）」それぞれに対して、表示を「全員」「ログイン中のユーザーのみ」「特定のロールが必要」と設定できます。([GitHub][1])
{{< figure src="/assets/images/4.5/timeline-1.png" style="max-width: 100px; max-width:100%" width="700px">}}

---


## おわりに

v4.5.0は、「引用投稿」「返信取得」「管理画面強化」「外観改善」といった機能が揃っており、日常利用・運営の双方で使いやすさを高めるアップデートです。
この記事をもとに、実際の環境で試しながら導入・設定変更を進めていただければと思います。

今後のバージョン（v4.6以降）でも新機能が続々予定されています。今回の更新を機に、ぜひインスタンス／アカウントの設定を見直してみてください。

## 宣伝
現在Hostdonではコントロールパネルリニューアル記念として新規サーバー申し込みに使える割引クーポンを配布しております。  
- **クーポンコード：** **HOSTDON2025**  
- **特典内容：** 新規サーバーお申し込み時に入力で、初回請求金額から **500円割引**  
- **有効期限：** 2025年11月30日23時59分まで  

是非こちらもご利用ください！


[1]: https://github.com/mastodon/mastodon/releases/tag/v4.5.0 "Release v4.5.0 · mastodon/mastodon · GitHub"

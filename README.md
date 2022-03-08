# heroku-starter-nodered-svelte-wip-lv01

このリポジトリは Node-RED + Svelte の仕組みを色々試していく。WIP (Work in Progress) 制作途中のものです。

使っていくにつれて得た知見がつどつど追加される可能性があります。

## 現状盛り込んでいるもの

- [ローカルの作業データを元に Heroku で動かす Node-RED の仕組みを GitHub に公開したメモ – 1ft-seabass.jp.MEMO](https://www.1ft-seabass.jp/memo/2021/10/09/made-heroku-node-red-local-based-starter/)
    - setting.js の adminAuth を設定してログインを Heroku の環境変数で設定している
        - NODERED_LOGIN_ID と NODERED_LOGIN_PASSWORD でログインできるように設定済み
    - 手元の Node-RED で追加インストールが反映されるように Heroku Procfile + package.json 調整済み

こちらを基礎に Svelte の対応をしています。

- Node-RED に Svelte の導入
  - [Node\-RED のプロジェクト内で Svelte を動かすメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/14/node-red-and-svelte-collaboration-basic/)
    - Svelte テンプレート zip ファイル解凍して Svelte のプロジェクト作成
    - Node-RED の管理画面 URL の設定
    - Node-RED の Svelte を表示する Web サーバー用フォルダ設定
  - [Node\-RED と Svelte が連携したプロジェクトに Bootstrap を導入するメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/15/node-red-and-svelte-and-bootstrap-collaboration-basic/)
    - Svelte の Bootstrap CDN 設定
  - [Node\-RED と Svelte が連携したプロジェクトで axios を導入し Node\-RED http ノードからデータ取得するメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/16/node-red-and-svelte-and-axios-collaboration-basic/)
    - Node-RED の CORS 対応
    - Svelte の npm i axios で axios インストール
    - Node-RED に api1 のフローを設置
    - Svelte の Rollup.js を axios に対応させるため修正
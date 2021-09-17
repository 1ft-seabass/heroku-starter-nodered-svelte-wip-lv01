# heroku-starter-nodered-svelte-wip-lv01

このリポジトリは Node-RED + Svelte の仕組みを色々試していく。WIP (Work in Progress) 制作途中のものです。

使っていくにつれて得た知見がつどつど追加される可能性があります。

## 現状盛り込んでいるもの

- Node-RED の基礎
  - [Node\-RED をあるローカルのフォルダだけで動くようにプロジェクトを作るメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/01/node-red-per-launch-project-setting-run-command-static/)
    - プロジェクトフォルダ直下で Node-RED まわりのフォルダ作成
    - プロジェクトフォルダ直下で Node-RED の設定ファイル準備
    - プロジェクトフォルダ直下で Node-RED インストール
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
- 開発サーバーと公開サーバー(Heroku) の準備
  - [起動パラメータから Node\-RED エディタ画面の有効・無効を出し分けるメモ – 1ft\-seabass\.jp\.MEMO](https://www.1ft-seabass.jp/memo/2021/09/17/node-red-switch-editor-access/)
    - 開発サーバーの時だけ API の向き先を変える
# simple-vue-router
LEMP環境(DBは入れただけで未使用。。)でvue.jsのpageコンポーネント(Atomic Design)をvue-routerでルーティングするシンプルなサンプルです。
### 環境設定
Linux(ubuntu18.04 LTS)の例となります
yumやHomebrewでも docker, docker-compose, node.js, npm の４つが正常起動すれば問題ありません。

必要最低限のモジュールと、docker,docker-composeのインストーラーを用意しました。
```
sh ./apt-install.sh
```
続いてnode.jsとnpmをインストールします。
```
apt install nodejs-dev node-gyp libssl1.0-dev
apt install npm
```
続いてnode_modulesをインストールします。
```
cd ./app
npm install --no-bin-links
```
node_modulesディレクトリ配下に、package.jsonの dependencies devDependencies のパッケージが作成されます。
`--no-bin-links` にしている理由は、VM(仮想環境)のホスト、ゲスト間のマウントとシンボリックリンクの相性が良くないためです。
VMを使用していない場合は必要ないかと思います。
### 起動
docker-compose.ymlがあるディレクトリに戻ってdocker-composeでコンテナを立ち上げます
```
cd ../
docker-compose up -d
```



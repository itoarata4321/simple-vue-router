const fs = require('fs');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const dir = './src/js';

var entryFiles = [];
function setEntryFiles(dir) {
  const filenames = fs.readdirSync(dir);
  filenames.forEach((filename) => {
    const fullPath = path.join(dir, filename);
    const stats = fs.statSync(fullPath);
    if (stats.isFile() && (fullPath.match(/\.js$/) || fullPath.match(/\.vue$/))) {
      entryFiles.push('./' + fullPath);
    } else if (stats.isDirectory()) {
      setEntryFiles(fullPath);
    }
  });
}
setEntryFiles(dir)

module.exports = {
  entry: entryFiles,
  output: {
    path: `${__dirname}/dist/js`,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      // 拡張子.vueのファイルに対する設定
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          "vue-style-loader",
          "css-loader",
        ],
      },
      // 拡張子.jsのファイルに対する設定
      {
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ]
  },
  // デフォルトの設定値だけでは足りないことについて解決します
  resolve: {
    // モジュールを読み込むときに検索するディレクトリの設定
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    // importするときに省略できる拡張子の設定
    extensions: ['.js', '.vue'],
    alias: {
      // `import Vue from 'vue';` と記述したときの`from vue`が表すファイルパス
      'vue$': 'vue/dist/vue.esm.js'
    },
  },
  // プラグインを列挙
  plugins: [
    new VueLoaderPlugin(),
  ],
  watchOptions: {
    aggregateTimeout: 200,
    poll: 500,
    ignored: /node_modules/,
  },
}

// globalモジュールをインポート。標準のグローバル変数を提供するためのモジュール
import globals from 'globals';
// ESLintのJavaScriptプラグインをインポート。標準的なJavaScriptのLintルールが含まれている。
import pluginJs from '@eslint/js';
// eslint-plugin-reactの推奨設定をインポート。Reactのコードに特有のLintルールを提供。
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {
    languageOptions: {
      // グローバル変数を指定
      globals: {
        // ブラウザ環境の標準的なグローバル変数が含まれている
        ...globals.browser,
        // Jestテストフレームワークで使用されるグローバル変数
        jest: true,
        test: true,
        expect: true,
        beforeEach: true,
        afterEach: true,
        global: true,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    ...pluginReactConfig,
    settings: {
      react: {
        version: '18.3.1', // 実際のReactのバージョンに置き換える
      },
    },
  },
];

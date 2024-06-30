import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
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
  pluginReactConfig,
];

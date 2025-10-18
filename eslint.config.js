import js from '@eslint/js';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import vitteRules from './eslint-rules-vitte.js';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'vitte': vitteRules,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      
      // Moderação das regras TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-unused-vars': ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],

      // Regras de código
      'prefer-const': 'warn',
      'no-var': 'error',
      'no-console': 'warn',
      'eqeqeq': 'error',
      'curly': 'error',
      
      // Regras de estilo (básicas, Prettier cuida do resto)
      'quotes': ['error', 'double'],
      'semi': ['error', 'always'],
    },
  },
);

import globals from 'globals'
import js from '@eslint/js'
import stylisticJs from '@stylistic/eslint-plugin-js'
import eslintReact from 'eslint-plugin-react'
//import eslintReactHooks from 'eslint-plugin-react-hooks '
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import vitest from '@vitest/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs,
      //'react-hooks': eslintReactHooks,
      react: eslintReact,
      prettier,
      vitest
    }
  },
  js.configs.recommended,
  {
    ignores: ['**/dist/**', '**/vite.config.js', '**/coverage']
  },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2020,
        ...vitest.environments.env.globals
      },
      parserOptions: eslintReact.configs.recommended.parserOptions,
      ecmaVersion: 'latest'
    },
    rules: {
      ...eslintConfigPrettier.rules,
      ...vitest.configs.recommended.rules,
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/linebreak-style': ['error', 'unix'],
      '@stylistic/js/quotes': ['error', 'single'],
      '@stylistic/js/semi': ['error', 'never'],
      eqeqeq: 'error',
      'no-unused-vars': 'off',
      'no-empty': 'off'
    }
  }
]

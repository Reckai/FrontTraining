import antfu from '@antfu/eslint-config'

import i18next from 'eslint-plugin-i18next'
// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format

export default antfu(
  {
    ignores: ['.github/**/*', 'public/**/*'],
  },
  {
    plugins: {
      i18next,
    },
    rules: {
      'antfu/top-level-function': 'off',
      'node/prefer-global/process': ['error', 'always'],
      'i18next/no-literal-string': ['error', {
        markupOnly: true, // Only check JSX markup (default behavior)
      }],
    },
  },
  {
    files: ['**/*.test.*', '**/*.spec.*', '**/__tests__/**/*', '**/tests/**/*'],
    rules: {
      'i18next/no-literal-string': 'off',
    },
  },
)

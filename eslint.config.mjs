import antfu from '@antfu/eslint-config'
import i18next from 'eslint-plugin-i18next'

export default antfu({}, {
  plugins: {
    i18next,
  },
  ignores: ['.github/**/*'],
  rules: {
    'node/prefer-global/process': ['error', 'always'],
    'i18next/no-literal-string': ['error', {
      markupOnly: true, // Only check JSX markup (default behavior)

    }],
  },
}, {
  files: ['**/*.test.*', '**/*.spec.*', '**/__tests__/**/*', '**/tests/**/*'],
  rules: {
    'i18next/no-literal-string': 'off',
  },
})

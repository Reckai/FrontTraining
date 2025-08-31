import antfu from '@antfu/eslint-config'
import i18next from 'eslint-plugin-i18next'

export default antfu({}, {
  plugins: {
    i18next,
  },
  rules: {
    'i18next/no-literal-string': ['error', {
      // Customize options here
      markupOnly: true, // Only check JSX markup (default behavior)
      // You can add more options like:
      // ignoreCallee: ['yourFunction'],
      // ignoreAttribute: ['data-testid', 'className'],
      // etc.
    }],
  },
})

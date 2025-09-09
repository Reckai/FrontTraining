import fs from 'node:fs'
import path from 'node:path'
// scripts/pull-translations.js
import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config()
// Используем process.env вместо import.meta.env для Node.js
const SHEET_ID = process.env.VITE_GOOGLE_SHEET

if (!SHEET_ID) {
  console.error('❌ VITE_GOOGLE_SHEET environment variable is required')
  process.exit(1)
}

const translationService = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://localeasy.deno.dev',
  timeout: 10000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Origin': 'http://localhost', // or your actual domain
  },
  params: {
    'sheet': SHEET_ID,
    'format': 'json',
    'nest-by': '.',
  },
})

async function fetchTranslations(locale = 'en') {
  try {
    const response = await translationService.get('/generate', {
      params: { locale },
    })
    return response.data
  }
  catch (error) {
    console.error('Error fetching translations:', error)
    throw error
  }
}

async function saveLocalization(locale = 'en', namespace = 'common') {
  try {
    console.log(`📥 Fetching ${locale} translations...`)

    const translations = await fetchTranslations(locale)

    const projectRoot = process.cwd()
    const localesDir = path.join(projectRoot, 'public', 'locales', locale)
    const filePath = path.join(localesDir, `${namespace}.json`)

    fs.mkdirSync(localesDir, { recursive: true })
    fs.writeFileSync(filePath, JSON.stringify(translations, null, 2), 'utf8')

    console.log(`✅ Saved: ${filePath}`)
    return filePath
  }
  catch (error) {
    console.error(`❌ Error saving localization for ${locale}:`, error)
    throw error
  }
}

async function saveAllLocalizations(locales = ['en', 'ru'], namespace = 'common') {
  console.log('📥 Starting localization download...')

  const results = []

  for (const locale of locales) {
    try {
      const filePath = await saveLocalization(locale, namespace)
      results.push({ locale, status: 'success', filePath })
    }
    catch (error) {
      results.push({ locale, status: 'error', error: error.message })
    }
  }

  console.log('🎉 Localization download completed!')
  console.table(results)

  return results
}

// Запускаем функцию
saveAllLocalizations().catch((error) => {
  console.error('Script failed:', error)
  process.exit(1)
})

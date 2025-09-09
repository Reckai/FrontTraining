import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import ErrorBoundary from '@/providers/ErrorBoundary/ErrorBoundary.tsx'

import App from './App.tsx'

import ThemeProvider from './theme/ThemeProvider.tsx'

import './providers/Localization/i18n.ts'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>

    </ErrorBoundary>

  </StrictMode>,
)

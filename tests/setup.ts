import * as matchers from '@testing-library/jest-dom/matchers'
import { cleanup } from '@testing-library/react'
// src/test/setup.ts
import { afterEach, expect } from 'vitest'

// Расширяем expect дополнительными матчерами
expect.extend(matchers)

// Очищаем DOM после каждого теста
afterEach(() => {
  cleanup()
})

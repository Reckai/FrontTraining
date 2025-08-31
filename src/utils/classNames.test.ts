import { describe, expect, it } from 'vitest'
import { cn } from './classNames.ts'

describe('classNames', () => {
  it('classNames', () => {
    expect(cn('className')).toBe('className')
  })
})

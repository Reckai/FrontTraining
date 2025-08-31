import { describe, expect, it } from 'vitest'
import { cn } from './classNames.ts'

describe('classNames', () => {
  it('with only one param', () => {
    expect(cn('className')).toBe('className')
  })

  it('with several params', () => {
    expect(cn('className', 'asd')).toBe('className asd')
  })
})

import type { SetStateAction } from 'react'
import { useReducer } from 'react'

export type UseToggleReturn<Value> = readonly [Value, (value?: Value) => void, Value]

export const useToggle = <Value = boolean> (values: readonly Value[] = [false, true] as any) => {
  const [state, toggle] = useReducer((state: Value[], action: SetStateAction<Value>) => {
    const value
          = typeof action === 'function' ? (action as (prevValue: Value) => Value)(state[0]) : action
    const index = Math.abs(state.indexOf(value))
    return state.slice(index).concat(state.slice(0, index))
  }, values as Value[])
  return [state[0], toggle as (value?: SetStateAction<Value>) => void, state[1]] as const
}

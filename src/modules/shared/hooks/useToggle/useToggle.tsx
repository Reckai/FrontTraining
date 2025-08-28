import { useCallback, useState } from 'react'

export function useToggle(defaultValue?: boolean): [boolean, () => void] {
  const [value, setValue] = useState(!!defaultValue)
  const toggle = useCallback(() => {
    return setValue(x => !x)
  }, [])
  return [value, toggle]
}

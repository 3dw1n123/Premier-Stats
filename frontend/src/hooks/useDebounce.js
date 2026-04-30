import { useEffect } from "react"
import { useState } from "react"

const DEFAULT_DEBOUNCE_DELAY_IN_MILISECONDS = 1000

export const useDebounce = (value, delay = DEFAULT_DEBOUNCE_DELAY_IN_MILISECONDS) => {

  const [debounce, setDebounce] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value)
    }, delay);

    return () => clearTimeout(handler)

  }, [value, delay])

  return debounce

}

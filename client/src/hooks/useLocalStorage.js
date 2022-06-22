import { useEffect, useState } from "react"

export const useLocalStorage = (key, initialValue) => {
    const item = window.localStorage.getItem(key)
    const [value, setValue] = useState(item || initialValue)
    const removeValue = () => {
        window.localStorage.removeItem(key)
    }

    useEffect(() => {
        window.localStorage.setItem(key, value)
    }, [value, key])
    return [value, setValue, removeValue]
}
import { useEffect, useState } from "react"

export const useMedia = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const [screenHeight, setScreenHeight] = useState(window.innerHeight)
    const onResize = () => {
        setScreenHeight(window.innerHeight)
        setScreenWidth(window.innerWidth)
        setIsMobile(window.innerWidth < 768)
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
    return { isMobile, screenHeight, screenWidth }
} 
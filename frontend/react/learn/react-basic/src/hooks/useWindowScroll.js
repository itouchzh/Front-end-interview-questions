import { useState, useEffect } from "react";

export function useWindowScroll(){
    const [y, sety] = useState(0)
    useEffect(() => {
        const scrollHander = () => {
            const h = document.documentElement.scrollTop
            sety(h)
        }
        window.addEventListener('scroll', scrollHander)
        return () => window.removeEventListener('scroll', scrollHander)
    })
    return [y]
}
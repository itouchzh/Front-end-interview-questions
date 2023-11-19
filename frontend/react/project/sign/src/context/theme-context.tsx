import React, { useContext, createContext, useState } from 'react'

type ThemeContextType = {
    theme: string
    setTheme: React.Dispatch<React.SetStateAction<string>>
}
const ThemeContext = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useThemeContext() {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error(
            'useThemeContext must be used within a ThemeContextProvider'
        )
    }
    return context
}

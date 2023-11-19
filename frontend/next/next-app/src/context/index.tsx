'use client'
import { createContext, useContext, useState } from 'react'

const AppContext = createContext<any>(undefined)

export function AppWrapper({ children }: { children: React.ReactNode }) {
    const [name, setName] = useState('paul')
    return (
        <AppContext.Provider
            value={{
                name,
                setName,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}

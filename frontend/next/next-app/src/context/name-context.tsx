"use client"
import React, { createContext, useContext, useState } from 'react'

type NameContextType = {
    name: string
    setName: React.Dispatch<React.SetStateAction<string>>
}
const NameContext = createContext<NameContextType | null>(null)

export default function ContextNameProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [name, setName] = useState('paul')
    return (
        <div>
            <NameContext.Provider value={{ name, setName }}>
                {children}
            </NameContext.Provider>
        </div>
    )
}

export function useNameContext() {
    const context = useContext(NameContext)
    if (context === null) {
        throw new Error(
            'useNameContext must be used within an ContextNameProvider'
        )
    }
    return context
}

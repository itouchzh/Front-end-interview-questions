import React, { createContext, useContext, useReducer, useState } from 'react'

type TaskContextType = {
    taskName: string
    setTaskName: React.Dispatch<React.SetStateAction<string>>
}

type TaskDispatchContextType = {
    tasks: any[]
    dispatch: React.Dispatch<any>
}
const TaskContext = createContext<TaskContextType | null>(null)

const TaskDispatchContext = createContext<TaskDispatchContextType | null>(null)
export default function TasksContextProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [taskName, setTaskName] = useState('paul')
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

    return (
        <TaskContext.Provider value={{ taskName, setTaskName }}>
            <TaskDispatchContext.Provider value={{ tasks, dispatch }}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
    )
}

export function useTasksContext() {
    const context = useContext(TaskContext)

    if (context === null) {
        throw new Error(
            'useTaskContext must be used within a TaskContextProvider'
        )
    }
    return context
}

export function useTasksDispatchContext() {
    const context = useContext(TaskDispatchContext)
    if (context === null) {
        throw new Error(
            'useTaskDispatchContext must be used within a TaskDispatchContext'
        )
    }
    return context
}

function tasksReducer(tasks: Array<any>, action: any) {
    switch (action.type) {
        case 'added':
            return [
                ...tasks,
                {
                    id: action.id,
                    text: action.text,
                    done: false,
                },
            ]
        case 'deleted': {
            return tasks.filter((t) => t.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false },
]

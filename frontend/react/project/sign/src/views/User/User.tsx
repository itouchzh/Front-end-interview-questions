import { useThemeContext } from '@/context/theme-context'
import { Button } from 'antd'
import { useTasksDispatchContext } from '@/context/tasks-context'
import { useId, useReducer } from 'react'

interface State {
    count: number
    error: boolean | string
}
interface ActionType {
    type: 'added' | 'decrement'
}
function reducer(state: State, action: ActionType) {
    const { type } = action
    switch (type) {
        case 'added':
            return {
                ...state,
                count: state.count + 1,
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            throw new Error('Unknown action: ' + type)
    }
}
function User() {
    const { theme, setTheme } = useThemeContext()
    const { tasks, dispatch } = useTasksDispatchContext()
    const id = useId()

    const [state, dispatchState] = useReducer(reducer, {
        count: 0,
        error: false,
    })
    const addTask = () => {
        dispatch({
            type: 'added',
            id: 1111,
            text: 'new task',
        })
    }
    return (
        <>
            <h1>Hello User</h1>
            <div>current theme ==== {theme}</div>
            <Button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
                change theme
            </Button>
            <ul>
                {tasks.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
            <Button type="primary" onClick={addTask}>
                add task
            </Button>
            <hr />
            <div>{id}</div>
            <hr />
            <div>current value:{state.count}</div>
            <Button
                onClick={() =>
                    dispatchState({
                        type: 'added',
                    })
                }
            >
                add one{' '}
            </Button>
            <Button
                onClick={() =>
                    dispatchState({
                        type: 'decrement',
                    })
                }
            >
                minus one{' '}
            </Button>
        </>
    )
}

export default User

import { useState } from 'react'
import { useImmer } from 'use-immer'
import AddTodo from './AddTodo.js'
import TaskList from './TaskList.js'

// let nextId = 3;
// const initialTodos = [
//     { id: 0, title: 'Buy milk', done: true },
//     { id: 1, title: 'Eat tacos', done: false },
//     { id: 2, title: 'Brew tea', done: false },
// ]

// export default function TaskApp() {
//     const [nextId, setNextId] = useState(3)
//     const [todos, setTodos] = useState(initialTodos)
//     //  add todos
//     function handleAddTodo(title) {
//         setNextId(nextId + 1)
//         let newTodos = [...todos, { id: nextId, title: title, done: false }]
//         setTodos(newTodos)
//     }

//     // edit todos
//     function handleChangeTodo(nextTodo) {
//         const newTodos = todos.map((item) =>
//             item.id === nextTodo.id ? { ...item, ...{ done: nextTodo.done, title: nextTodo.title } } : item
//         )
//         setTodos(newTodos)
//     }

//     // deletel ids
//     function handleDeleteTodo(todoId) {
//         const newTodos = todos.filter(item => item.id !== todoId)
//         setTodos(newTodos)
//     }

//     return (
//         <>
//             <AddTodo onAddTodo={handleAddTodo} />
//             <TaskList
//                 todos={todos}
//                 onChangeTodo={handleChangeTodo}
//                 onDeleteTodo={handleDeleteTodo}
//             />
//         </>
//     )
// }

// 使用useImmer改造
let nextId = 3
const initialTodos = [
    { id: 0, title: 'Buy milk', done: true },
    { id: 1, title: 'Eat tacos', done: false },
    { id: 2, title: 'Brew tea', done: false },
]
export default function TaskApp() {
    const [todos, updateTodos] = useImmer(initialTodos)
    //  add todos
    function handleAddTodo(title) {
        updateTodos((draft) => {
            draft.push({
                id: nextId,
                title: title,
                done: false,
            })
        })
    }

    // edit todos
    function handleChangeTodo(nextTodo) {
        updateTodos((draft) => {
            const todo = draft.find((t) => t.id === nextTodo.id)
            todo.title = nextTodo.title
            todo.done = nextId.done
        })
    }

    // deletel ids
    function handleDeleteTodo(todoId) {
        updateTodos((draft) => draft.filter((t) => t.id !== todoId))
    }

    return (
        <>
            <AddTodo onAddTodo={handleAddTodo} />
            <TaskList
                todos={todos}
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    )
}

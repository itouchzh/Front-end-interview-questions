import { count } from './counter.js'
console.log(import.meta.env)
console.log(count)
fetch('/api/users', {
    method: 'get',
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })

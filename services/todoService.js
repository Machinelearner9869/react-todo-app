const STORAGE_KEY = 'todos'


export const getTodos = () => {
return new Promise((resolve) => {
setTimeout(() => {
resolve(JSON.parse(localStorage.getItem(STORAGE_KEY)) || [])
}, 500)
})
}


export const saveTodos = (todos) => {
localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}


export const getTodoById = (id) => {
const todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
return todos.find(t => t.id === id)
}
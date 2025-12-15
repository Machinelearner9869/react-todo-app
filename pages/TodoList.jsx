import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getTodos, saveTodos } from '../services/todoService'


export default function TodoList() {
const [todos, setTodos] = useState([])
const [loading, setLoading] = useState(true)
const navigate = useNavigate()


useEffect(() => {
getTodos().then(data => {
setTodos(data)
setLoading(false)
})
}, [])


const remove = (id) => {
if (!window.confirm('Delete this todo?')) return
const updated = todos.filter(t => t.id !== id)
setTodos(updated)
saveTodos(updated)
}


const toggleStatus = (id) => {
const updated = todos.map(t => t.id === id ? { ...t, status: t.status === 'pending' ? 'completed' : 'pending' } : t)
setTodos(updated)
saveTodos(updated)
}


if (loading) return <p>Loading...</p>


return (
<div className="page">
<h2>Todo List</h2>
<button onClick={() => navigate('/todos/create')}>Create Todo</button>
<div className="grid">
{todos.map(todo => (
<div className="card" key={todo.id}>
{todo.image && <img src={todo.image} className="thumb" />}
<h4>{todo.title}</h4>
<span className={todo.status}>{todo.status}</span>
<div className="actions">
<button onClick={() => toggleStatus(todo.id)}>Toggle</button>
<button onClick={() => navigate(`/todos/${todo.id}/edit`)}>Edit</button>
<button onClick={() => remove(todo.id)}>Delete</button>
</div>
</div>
))}
</div>
</div>
)
}
import { useNavigate, useParams } from 'react-router-dom'
import TodoForm from '../components/TodoForm'
import { getTodos, getTodoById, saveTodos } from '../services/todoService'


export default function EditTodo() {
const { id } = useParams()
const navigate = useNavigate()
const todo = getTodoById(Number(id))


if (!todo) return <p>Todo not found</p>


const update = async (data) => {
const todos = await getTodos()
const updated = todos.map(t => t.id === todo.id ? { ...t, ...data } : t)
saveTodos(updated)
navigate('/todos')
}


return (
<div className="page">
<h2>Edit Todo</h2>
<TodoForm initialData={todo} onSubmit={update} />
</div>
)
}
import { useNavigate } from 'react-router-dom'
import TodoForm from '../components/TodoForm'
import { getTodos, saveTodos } from '../services/todoService'


export default function CreateTodo() {
const navigate = useNavigate()


const create = async (data) => {
const todos = await getTodos()
const newTodo = { id: Date.now(), ...data }
saveTodos([...todos, newTodo])
navigate('/todos')
}


return (
<div className="page">
<h2>Create Todo</h2>
<TodoForm onSubmit={create} />
</div>
)
}
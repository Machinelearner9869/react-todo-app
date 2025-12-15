import { useState } from 'react'


export default function TodoForm({ initialData, onSubmit }) {
const [title, setTitle] = useState(initialData?.title || '')
const [description, setDescription] = useState(initialData?.description || '')
const [status, setStatus] = useState(initialData?.status || 'pending')
const [image, setImage] = useState(initialData?.image || '')


const handleImage = (e) => {
const file = e.target.files[0]
if (!file) return
const reader = new FileReader()
reader.onloadend = () => setImage(reader.result)
reader.readAsDataURL(file)
}


const submit = (e) => {
e.preventDefault()
if (!title.trim()) return alert('Title is required')
onSubmit({ title, description, status, image })
}


return (
<form onSubmit={submit} className="form">
<input placeholder="Title*" value={title} onChange={e => setTitle(e.target.value)} />
<textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
<select value={status} onChange={e => setStatus(e.target.value)}>
<option value="pending">Pending</option>
<option value="completed">Completed</option>
</select>
<input type="file" accept="image/*" onChange={handleImage} />
{image && <img src={image} className="thumb" />}
<button type="submit">Save</button>
</form>
)
}
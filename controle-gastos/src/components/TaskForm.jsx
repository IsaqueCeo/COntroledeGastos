import React, { useState } from 'react'


function TaskForm({ addTask }) {
const [text, setText] = useState('')
const [amount, setAmount] = useState('') // opcional: campo valor para controle de gastos


const handleSubmit = (e) => {
e.preventDefault()
if (!text.trim()) return alert('Digite uma tarefa (campo obrigatório).')


const task = {
id: Date.now(),
text: text.trim(),
amount: amount ? parseFloat(amount) : null,
done: false,
createdAt: new Date().toISOString()
}


addTask(task)
setText('')
setAmount('')
}


return (
<form onSubmit={handleSubmit} className="task-form" aria-label="formulario de tarefa">
<label className="sr-only" htmlFor="taskText">Tarefa</label>
<input
id="taskText"
type="text"
placeholder="Descrição da tarefa/gasto..."
value={text}
onChange={(e) => setText(e.target.value)}
/>


<label className="sr-only" htmlFor="amount">Valor (opcional)</label>
<input
id="amount"
type="number"
step="0.01"
placeholder="Valor (opcional)"
value={amount}
onChange={(e) => setAmount(e.target.value)}
/>


<button type="submit" className="btn-primary" aria-label="Adicionar tarefa">
{/* ícone SVG simples */}
<svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
<path fill="currentColor" d="M13 11h8v2h-8v8h-2v-8H3v-2h8V3h2v8z" />
</svg>
<span>Adicionar</span>
</button>
</form>
)
}


export default TaskForm
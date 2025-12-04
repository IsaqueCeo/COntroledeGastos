import React, { useState } from 'react'


function TaskItem({ task, deleteTask, toggleTask, editTask }) {
const [isEditing, setIsEditing] = useState(false)
const [editText, setEditText] = useState(task.text)


const saveEdit = () => {
const value = editText.trim()
if (!value) return alert('Descrição não pode ficar vazia.')
editTask(task.id, value)
setIsEditing(false)
}


return (
<li className={`task-card ${task.done ? 'done' : ''}`} aria-live="polite">
<article>
<header className="task-card-header">
<button className="icon-btn" onClick={() => toggleTask(task.id)} aria-label={task.done ? 'Marcar como pendente' : 'Marcar como concluída'}>
{/* checkbox-like svg */}
{task.done ? (
<svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M9 16.2l-3.5-3.5L4 14l5 5 12-12-1.5-1.5z"/></svg>
) : (
<svg width="20" height="20" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="none" strokeWidth="2" stroke="currentColor"/></svg>
)}
</button>


<div className="task-main">
{isEditing ? (
<input value={editText} onChange={(e) => setEditText(e.target.value)} className="edit-input" />
) : (
<span className="task-text">{task.text}</span>
)}
{task.amount != null && <small className="task-amount">R$ {Number(task.amount).toFixed(2)}</small>}
</div>


<div className="task-actions">
{isEditing ? (
<>
<button className="icon-btn" onClick={saveEdit} aria-label="Salvar edição">💾</button>
<button className="icon-btn" onClick={() => { setIsEditing(false); setEditText(task.text) }} aria-label="Cancelar">✖</button>
</>
) : (
<>
<button className="icon-btn" onClick={() => setIsEditing(true)} aria-label="Editar">✏️</button>
<button className="icon-btn" onClick={() => deleteTask(task.id)} aria-label="Remover">🗑️</button>
</>
)}
</div>
</header>


<footer className="task-meta">
<small>Criado: {new Date(task.createdAt).toLocaleString()}</small>
</footer>
</article>
</li>
)
}


export default TaskItem
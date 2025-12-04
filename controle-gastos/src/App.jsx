import React, { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


function App() {
const [tasks, setTasks] = useState(() => {
try {
const saved = localStorage.getItem('tasks')
return saved ? JSON.parse(saved) : []
} catch (e) {
return []
}
})


useEffect(() => {
localStorage.setItem('tasks', JSON.stringify(tasks))
}, [tasks])


const addTask = (task) => setTasks(prev => [...prev, task])


const deleteTask = (id) => setTasks(prev => prev.filter(t => t.id !== id))


const toggleTask = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))


const editTask = (id, newText) => setTasks(prev => prev.map(t => t.id === id ? { ...t, text: newText } : t))


return (
<div className="app-container">
<header className="app-header">
<h1>Mini Portal de Tarefas / Controle de Gastos</h1>
<p className="subtitle">Cadastre, edite, marque como concluído e remova itens.</p>
</header>


<main>
<section aria-labelledby="adicionar">
<h2 id="adicionar" className="visually-hidden">Adicionar tarefa</h2>
<TaskForm addTask={addTask} />
</section>


<section aria-labelledby="lista">
<h2 id="lista">Minhas tarefas</h2>
<TaskList tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} editTask={editTask} />
</section>
</main>


<footer>
<small>Projeto de exemplo — entregue com HTML5, CSS3, JavaScript e React.</small>
</footer>
</div>
)
}


export default App
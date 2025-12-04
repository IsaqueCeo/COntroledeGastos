import React from 'react'
import TaskItem from './TaskItem'


function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
if (!tasks.length) return <p className="empty">Nenhuma tarefa registrada.</p>


return (
<ul className="task-list" role="list">
{tasks.map(task => (
<TaskItem
key={task.id}
task={task}
deleteTask={deleteTask}
toggleTask={toggleTask}
editTask={editTask}
/>
))}
</ul>
)
}


export default TaskList
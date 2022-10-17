import { ClipboardText } from 'phosphor-react';
import { useEffect, useState } from 'react';
import styles from './Main.module.css';
import { Task } from './Task';
import { TaskForm } from './TaskForm';

export interface Task {
    id: number;
    content: string;
    completed: boolean;
}

export function Main() {
    const [update, setUpdate] = useState<boolean>(false)
    const [tasks, setTask] = useState<Task[]>([]);

    function addTask(newTask: Task) {
        setTask([...tasks, newTask]);
    }

    function removedTask(taskToRemoved: Number) {
        const updateTaskList = tasks.filter((task: Task) => taskToRemoved !== task.id);
        setTask(updateTaskList);
    }

    function countTaskConfirmed() {
        const countTaskCompleted = tasks.filter((task: Task) => task.completed)
        return countTaskCompleted.length;
    }

    function updateTask(taskToUpdate: Task) {
        taskToUpdate.completed = !taskToUpdate.completed;
        setUpdate(!update);
    }

    useEffect(() => { }, [update]);

    return (
        <main className={styles.wrapper}>
            <TaskForm addTask={addTask} />

            <div className={styles.tasksContainer}>
                <header>
                    <div className={styles.createdTasks}>
                        <strong>Tarefas criadas</strong>
                        <span>{tasks.length}</span>
                    </div>
                    <div className={styles.completedTasks}>
                        <strong>Concluídas</strong>
                        {countTaskConfirmed() ? <span>{countTaskConfirmed()} de {tasks.length}</span> : <span>{countTaskConfirmed()}</span>}

                    </div>
                </header>

                <div className={styles.body}>
                    {tasks.length ?
                        tasks.map(task => (
                            <Task
                                key={task.id}
                                task={task}
                                addTask={addTask}
                                onRemovedTask={removedTask}
                                onUpdateTask={updateTask}
                            />
                        )
                        )
                        :
                        <div className={styles.empty}>
                            <ClipboardText size={56} />
                            <strong>Você ainda não tem tarefas cadastradas</strong>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>}
                </div>
            </div>
        </main>
    )
}
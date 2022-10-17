import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InputHTMLAttributes, useState } from 'react';
import styles from './TaskForm.module.css';

interface Task {
    id: number | String;
    content: string;
    completed: boolean;
}

interface TaskProps {
    task: Task;
    addTask: (task: Task) => void;
}

export function TaskForm({ addTask }: TaskProps) {

    const [taskText, setTaskText] = useState('');

    function handleInputTask(e: ChangeEvent<HTMLInputElement>) {
        setTaskText(e.target.value);
    }

    function handleCreateNewTask(e: FormEvent) {
        e.preventDefault();
        if (!taskText) {
            return
        }
        addTask({
            id: new Date().getTime(),
            content: taskText,
            completed: false
        });
        setTaskText('');
    }
    return (
        <div className={styles.container}>
            <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input
                    name='task'
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleInputTask}
                    value={taskText}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form> <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input
                    name='task'
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleInputTask}
                    value={taskText}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form> <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input
                    name='task'
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleInputTask}
                    value={taskText}
                />
                <button type="submit">
                    <span className={styles.textButton}>Criar</span>
                    <PlusCircle size={16} />
                </button>
            </form> <form onSubmit={handleCreateNewTask} className={styles.form}>
                <input
                    name='task'
                    type="text"
                    placeholder='Adicione uma nova tarefa'
                    onChange={handleInputTask}
                    value={taskText}
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>
        </div>

    )
}
import { Check, Trash } from 'phosphor-react';
import { useEffect, useState } from 'react';
import styles from './Task.module.css';

interface Task {
    id: number;
    content: string;
    completed: boolean;
}

interface TaskProps {
    task: Task;
    onRemovedTask: (task: Number) => void;
    onUpdateTask: (task: Task) => void;
    addTask: (task: Task) => void;
}

export function Task({ task, onRemovedTask, onUpdateTask }: TaskProps) {

    const [check, setCheck] = useState(false);

    function handleRemoveTask(task: Task) {
        onRemovedTask(task.id);
    }

    function handleUpdateTask() {
        setCheck(!check);
        onUpdateTask(task);
    }

    useEffect(() => {

    }, [check])

    return (
        <div className={styles.task}>
            <div onClick={handleUpdateTask}>
                <div className={task.completed ? styles.checked : styles.unchecked}>
                    {task.completed &&
                        <Check
                            size={16}
                        />}
                </div>
            </div>
            <span className={task.completed ? styles.lineThrough : styles.contentText}>{task.content}</span>
            <button
                className={styles.deleteTask}
                onClick={() => handleRemoveTask(task)}
            >
                <Trash
                    size={20}
                />
            </button>
        </div>
    )
}
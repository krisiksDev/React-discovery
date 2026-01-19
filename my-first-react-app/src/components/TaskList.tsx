interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
    filter: "all" | "completed" | "pending";
    onToggle: (id: number) => void;
}

const TaskList = ({ tasks, filter, onToggle }: TaskListProps) => {
    const filteredTasks = tasks.filter(task => {
        if (filter === "all") return true;
        if (filter === "completed") return task.completed;
        if (filter === "pending") return !task.completed;
        return false;
    });
    return (
        <ul className="task-list">
            {filteredTasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(task.id)}
                    />
                    <span>{task.title}</span>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
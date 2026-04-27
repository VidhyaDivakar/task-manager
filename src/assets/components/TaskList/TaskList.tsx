import React from 'react';
import type { TaskListProps } from '../../Types/index';
import { TaskItem } from '../TaskItem/TaskItem';

export const TaskList: React.FC<TaskListProps> = ({
    tasks,
    onStatusChange,
    onDelete
    }) => {
        if (tasks.length === 0) {
            return <p className="text-gray-500">No tasks available</p>
        }
    return (
        <div>
            { tasks.map((task) => (
                <TaskItem
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}
                />
            ))}
                        
        </div>
    );
};

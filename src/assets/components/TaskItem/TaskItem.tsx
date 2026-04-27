import React from 'react';
import type { TaskItemProps, TaskStatus } from '../../Types/index';

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    onDelete

}) => {
    const getStatusColor = (status: TaskStatus) => {
        switch (status) {
            case 'completed':
                return 'text-green-600';
            case 'in-progress':
                return 'text-yellow-600';
            default:
                return 'text-gray-600';
        }
    };
    const getPriorityColor = (priority: string) => {
        switch (priority) {
            case 'high':
                return 'text-orange-500';
            default:
                return 'text-blue-500';
        }
    };

    return (
        <div className="p-4 border rounded-lg mb-3 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            <p className={'text-sm mt-1 ${getStatusColor(teask.status)}'}> Status:{task.status}</p>
            <p className={'text-sm ${getPriorityColor(task.priority)}'}>
                Priority: {task.priority}
            </p>
            {task.dueDate && (
                <p className="text-xs text-gray-500">
                    Due: {task.dueDate}
                </p>
            )}

            <div className="mt-3 flex gap-2">
                <select value={task.status}
                    onChange={(e) =>
                        onStatusChange(task.id, e.target.value as TaskStatus)
                    }
                    className="border p-1 rounded"
                >
                    <option value="pending">Pending</option>
                    <option value="in-progress"> In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    onClick={() => onDelete(task.id)}
                    className="text-red-500 text-sm"
                > Delete

                </button>
            </div>
        </div>
    );
};
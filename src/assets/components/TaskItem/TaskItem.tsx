import React from 'react';
import type { TaskItemProps, TaskStatus } from '../../Types/index';

export const TaskItem: React.FC<TaskItemProps> = ({
    task,
    onStatusChange,
    OnDelete
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
        <div className="p-4 border rounded-lag mb-3 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.description}</p>
            </p>
          <p className={'text-sm ${getPriorityColor(task.priority)}'}>
            Priority: {task.priority}
          </p>  


        </div>
    )
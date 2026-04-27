import React, { useState } from 'react';
import type { TaskFilterProps, TaskStatus } from '../../Types';

export const TaskFilter: React.FC<TaskFilterProps> = ({
    onFilterChange
}) => {
    const [status, setStatus] = useState<TaskStatus | ''>('');
    const [priority, setPriority] = useState<'low' | 'medium' | 'high' | ''>('');

    const handleApply = () => {
onFilterChange({
    status: status || undefined,
    priority: priority || undefined
});
};

return (
    <div className="mb-4 flex gap-3">
        <select 
        value ={status}
        onChange={(e) => setStatus(e.target.value as TaskStatus | '')}
        >
             <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <select 
      value={priority}
      onChange={(e) =>
        setPriority(e.target.value as 'low' | 'medium' | 'high'| '')
      }
      className="border p-2 rounded"
      >
        <option value="">All Priority</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
        <button onClick={handleApply}
        className="bg-blue-500 text-white px-3 py-1 rounded"
    >
        </button></div>
);
};
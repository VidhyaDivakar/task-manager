import { useState } from 'react';
import { TaskList } from './assets/components/TaskList/TaskList';
//import { TaskFilter } from './assets/components/TaskFilter/TaskFilter';
import type { Task, TaskStatus } from './assets/Types';

function App() {

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Complete assignment',
      description: 'Finish React TypeScript Lab',
      status: 'pending',
      priority: 'high',
      dueDate: '2026-04-30'
    },
  {
      id: '2',
      title: 'Review code',
      description: 'Check component structure',
      status: 'in-progress',
      priority: 'medium',
      dueDate: '2026-04-28'
    }
  ]);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';

  }>({});

  const handlesStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };
  
  // ✅ Handle delete
  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  // ✅ Handle filter change
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  // ✅ Apply filters
  const filteredTasks = tasks.filter((task) => {
    const matchStatus = filters.status
      ? task.status === filters.status
      : true;

    const matchPriority = filters.priority
      ? task.priority === filters.priority
      : true;

    return matchStatus && matchPriority;
  });

return (
  <div className="max-w-2xl mx-auto mt-8 px-4">
      <h1 className="text-xl font-bold mb-4">Task Manager</h1>

      {/* ✅ Filter <TaskFilter onFilterChange={handleFilterChange} /> */}
      

      {/* ✅ Task List */}
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handlesStatusChange}
        onDelete={handleDelete}
      />
    </div>
);
}

export default App;

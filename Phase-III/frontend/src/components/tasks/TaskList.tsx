'use client';

import React from 'react';
import { Task } from '@/types/tasks';

export interface TaskListProps {
  tasks: Task[];
  refresh?: () => void;
}

export function TaskList({ tasks, refresh }: TaskListProps) {
  return (
    <div className="space-y-4">
      {tasks.length === 0 && <p className="text-gray-400">No tasks found</p>}

      {tasks.map((task) => (
        <div key={task.id} className="p-4 bg-gray-800 rounded-lg">
          <h3 className="font-semibold text-gray-100">{task.title}</h3>
          {task.description && <p className="text-gray-400 mt-1">{task.description}</p>}
        </div>
      ))}

      {refresh && (
        <button
          onClick={() => refresh()}
          className="mt-4 px-4 py-2 bg-primary-500 text-white rounded"
        >
          Refresh
        </button>
      )}
    </div>
  );
}
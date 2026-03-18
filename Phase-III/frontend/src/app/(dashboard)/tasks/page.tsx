'use client';

import React, { useEffect } from 'react';
import { useTasks } from '@/lib/hooks/useTasks';
import { TaskList } from '@/components/tasks/TaskList';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

export default function TasksPage() {
  const router = useRouter();
  const { tasks, loading, error, refresh } = useTasks();

  // Optional: refresh tasks on mount
  useEffect(() => {
    refresh();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-100">Tasks</h1>
        <Button onClick={() => router.push('/tasks/create')}>Create Task</Button>
      </div>

      {loading && <p className="text-gray-400">Loading tasks...</p>}
      {error && <p className="text-danger-400">{error}</p>}

      {/* Pass refresh as async-safe function */}
      <TaskList tasks={tasks} refresh={async () => await refresh()} />
    </div>
  );
}
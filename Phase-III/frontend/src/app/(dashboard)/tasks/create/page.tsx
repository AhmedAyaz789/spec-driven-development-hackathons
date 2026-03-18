'use client';

import React, { useState } from 'react';
import { useTasks } from '@/lib/hooks/useTasks';
import { TaskForm } from '@/components/tasks/TaskForm';
import { useRouter } from 'next/navigation';
import { TaskCreateRequest } from '@/types/tasks';

export default function CreateTaskPage() {
  const router = useRouter();
  const { createTask } = useTasks();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: TaskCreateRequest) => {
    setIsSubmitting(true);
    try {
      await createTask(data);
      router.push('/tasks');
    } catch (err: any) {
      console.error('Failed to create task:', err);
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.push('/tasks');
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h1 className="text-2xl font-bold text-gray-100 mb-4">Create Task</h1>
      <div className="bg-background-card border border-gray-800 shadow-card rounded-2xl p-6">
        <TaskForm
          mode="create"
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
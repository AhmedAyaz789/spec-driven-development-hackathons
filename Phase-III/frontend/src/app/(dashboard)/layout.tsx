'use client';

import React from 'react';
import AuthGuard from '@/components/Auth/AuthGuard'; // default export
import { useAuth } from '@/lib/hooks/useAuth';        // named export

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-background px-4 py-6">
        {children}
      </div>
    </AuthGuard>
  );
}
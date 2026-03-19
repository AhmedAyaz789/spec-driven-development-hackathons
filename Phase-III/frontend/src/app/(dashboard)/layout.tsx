'use client';

import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';
import  AuthGuard  from '@/components/Auth/AuthGuard';

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
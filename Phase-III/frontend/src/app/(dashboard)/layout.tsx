// src/app/(dashboard)/layout.tsx
import React from 'react';
import { useAuth } from '@/lib/hooks/useAuth';      // case-correct
import { AuthGuard } from '@/components/Auth/AuthGuard'; // case-correct

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  return <AuthGuard>{children}</AuthGuard>;
};

export default DashboardLayout;
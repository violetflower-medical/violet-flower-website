'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.replace('/admin/login');
    }
  }, [router]);

  return (
    <div className={cn('min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-8', 'font-outfit')}>
      {children}
    </div>
  );
}

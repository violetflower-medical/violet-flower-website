'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { Loader2, Users, Settings } from 'lucide-react';
import Image from 'next/image';

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Guard: redirect if no token
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.replace('/admin/login');
    }
  }, [router]);

  // Fetch data
  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .eq('is_active', true)
        .order('sort_order', { ascending: true });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setClients(data || []);
      setLoading(false);
    };
    fetchClients();
  }, []);

  return (
    <div className={cn('p-8', 'font-outfit')}>
      <h1 className="text-3xl font-bold mb-6 text-primary">Admin Dashboard</h1>
      {loading ? (
        <div className="flex items-center gap-2 text-primary">
          <Loader2 className="animate-spin" size={20} />
          Loading data…
        </div>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Users size={20} /> Clients ({clients.length})
          </h2>
          {clients.length === 0 ? (
            <p className="text-muted-foreground">No active clients found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {clients.map((client) => (
                <div
                  key={client.id}
                  className="bg-white/40 backdrop-blur-sm p-4 rounded-xl border border-border/30 flex flex-col items-center text-center shadow-sm"
                >
                  {client.logo_url && (
                    <Image
                      src={client.logo_url}
                      alt={client.name_en}
                      width={80}
                      height={40}
                      className="object-contain mb-2"
                    />
                  )}
                  <span className="font-bold text-sm uppercase tracking-wider text-primary">
                    {client.name_en}
                  </span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}

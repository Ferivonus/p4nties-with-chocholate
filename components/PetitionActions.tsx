'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function PetitionActions({ id }: { id: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const updateStatus = async (status: 'ONAYLANDI' | 'REDDEDİLDİ' | 'OKUNDU') => {
    setLoading(true);
    await fetch(`http://localhost:8080/api/petitions/${id}/status`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
      credentials: 'include'
    });
    router.refresh();
    setLoading(false);
  };

  const deletePetition = async () => {
    if(!confirm("Bu arzuhali yakmak istediğine emin misin?")) return;
    setLoading(true);
    await fetch(`http://localhost:8080/api/petitions/${id}`, {
      method: 'DELETE',
      credentials: 'include'
    });
    router.refresh();
    setLoading(false);
  };

  return (
    <div className="flex gap-2 mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">
      <button onClick={() => updateStatus('ONAYLANDI')} disabled={loading} className="px-3 py-1 border border-stone-800 hover:bg-stone-800 text-stone-400 text-[10px] uppercase tracking-widest">Onayla</button>
      <button onClick={() => updateStatus('REDDEDİLDİ')} disabled={loading} className="px-3 py-1 border border-stone-800 hover:bg-red-950 hover:text-red-500 text-stone-500 text-[10px] uppercase tracking-widest">Reddet</button>
      <button onClick={deletePetition} disabled={loading} className="px-3 py-1 bg-red-950/20 border border-red-900/30 text-red-800 hover:bg-red-900 hover:text-white text-[10px] uppercase tracking-widest">Yak</button>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function YeniVahiyPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const res = await fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: formData.get('title'),
        content: formData.get('content')
      }),
      credentials: 'include'
    });

    if (res.ok) {
      router.push('/mabed');
      router.refresh();
    } else {
      alert("Vahiy mühürlenemedi. Kelimelerin eksik veya hatalı.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-stone-400 flex flex-col items-center justify-center p-6">
       <div className="w-full max-w-2xl">
         <Link href="/mabed" className="text-xs font-mono text-stone-600 hover:text-red-500 mb-8 block text-center">← VAZGEÇ VE DÖN</Link>
         
         <form onSubmit={handleSubmit} className="bg-stone-950 border border-stone-900 p-8 md:p-12 space-y-8 shadow-2xl">
            <div className="text-center space-y-2">
               <h1 className="font-cinzel text-2xl text-stone-200">YENİ VAHİY</h1>
               <p className="font-cormorant text-stone-600 italic">&quot;Sözlerin gölgede kalmasın.&quot;</p>
            </div>

            <div className="space-y-4">
               <div>
                  <label className="block text-xs font-cinzel text-red-900 mb-2 uppercase tracking-widest">BAŞLIK</label>
                  <input name="title" required className="w-full bg-black border border-stone-800 p-4 text-stone-200 font-cinzel focus:border-red-900 focus:outline-none placeholder-stone-800" placeholder="Hakikat nedir?" />
               </div>
               
               <div>
                  <label className="block text-xs font-cinzel text-red-900 mb-2 uppercase tracking-widest">İÇERİK</label>
                  <textarea name="content" required rows={8} className="w-full bg-black border border-stone-800 p-4 text-stone-300 font-cormorant text-lg focus:border-red-900 focus:outline-none placeholder-stone-800 resize-none" placeholder="Buraya yaz..." />
               </div>
            </div>

            <button type="submit" disabled={loading} className="w-full bg-stone-900 hover:bg-red-950 border border-stone-800 hover:border-red-900 py-4 font-cinzel text-stone-400 hover:text-stone-200 uppercase tracking-widest transition-all disabled:opacity-50">
               {loading ? "Mühürleniyor..." : "Mühürle ve Yayınla"}
            </button>
         </form>
       </div>
    </main>
  );
}
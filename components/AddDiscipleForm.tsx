'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddDiscipleForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<{ type: 'ok' | 'err', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      username: formData.get('username'),
      password: formData.get('password'),
      role: formData.get('role'),
    };

    try {
      // Backend'e "Register" isteği atıyoruz (Admin yetkisiyle)
      const res = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include', // Cookie göndermek şart
      });

      const data = await res.json();

      if (res.ok) {
        setMsg({ type: 'ok', text: `Yeni ruh eklendi: ${data.username}` });
        (e.target as HTMLFormElement).reset(); // Formu temizle
        router.refresh(); // Listeyi anında yenile
      } else {
        setMsg({ type: 'err', text: data.error || "Kayıt yapılamadı." });
      }
    } catch (err) {
      setMsg({ type: 'err', text: "Bağlantı hatası." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-stone-900 border border-stone-800 p-6 rounded-sm shadow-lg sticky top-24">
      <div className="mb-6 border-b border-stone-800 pb-4">
        <h2 className="font-cinzel text-xl text-stone-200">YENİ MÜRİT EKLE</h2>
        <p className="text-xs font-cormorant text-stone-500 italic mt-1">Hiyerarşiye yeni bir halka dahil et.</p>
      </div>

      {msg && (
        <div className={`p-3 text-xs font-mono mb-4 border ${msg.type === 'ok' ? 'border-green-900 bg-green-950/30 text-green-400' : 'border-red-900 bg-red-950/30 text-red-400'}`}>
          {msg.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Kullanıcı Adı */}
        <div className="space-y-1">
           <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Rumuz</label>
           <input 
             name="username" 
             required 
             className="w-full bg-stone-950 border border-stone-800 p-3 text-stone-300 text-sm focus:border-red-900 focus:outline-none transition-colors"
             placeholder="Örn: Golge_Yuruyen"
           />
        </div>

        {/* Şifre */}
        <div className="space-y-1">
           <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Geçici Parola</label>
           <input 
             name="password" 
             required 
             type="text"
             className="w-full bg-stone-950 border border-stone-800 p-3 text-stone-300 text-sm focus:border-red-900 focus:outline-none transition-colors"
             placeholder="En az 6 karakter"
           />
        </div>

        {/* Rol Seçimi */}
        <div className="space-y-1">
           <label className="text-[10px] font-mono text-stone-500 uppercase tracking-widest">Rol (Yetki)</label>
           <div className="relative">
             <select 
               name="role" 
               className="w-full bg-stone-950 border border-stone-800 p-3 text-stone-300 text-sm appearance-none focus:border-red-900 focus:outline-none cursor-pointer"
             >
               <option value="MÜRİT">MÜRİT (Standart Üye)</option>
               <option value="Yüce Hiçlik">Yüce Hiçlik (Admin)</option>
             </select>
             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-600 pointer-events-none">▼</div>
           </div>
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-stone-950 hover:bg-red-950 border border-stone-800 hover:border-red-900 text-stone-400 hover:text-white py-3 font-cinzel text-sm uppercase tracking-widest transition-all disabled:opacity-50"
        >
          {loading ? "Mühürleniyor..." : "Kaydı Tamamla"}
        </button>

      </form>
    </div>
  );
}
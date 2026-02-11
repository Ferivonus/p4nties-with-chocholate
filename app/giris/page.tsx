'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      username: formData.get('username'),
      password: formData.get('password'),
    };

    try {
      // credentials: 'include' -> Tarayıcının cookie'leri kabul etmesi ve göndermesi için ŞART.
      const res = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        credentials: 'include', // <--- BU SATIR EKLENDİ (Cookie için)
      });

      const data = await res.json();

      if (res.ok) {
        // Token artık Cookie'de olduğu için localStorage'a token kaydetmiyoruz.
        // Sadece arayüzde isim göstermek için kullanıcı adını tutabiliriz.
        if (data.username) localStorage.setItem('ferivon_user', data.username);
        if (data.role) localStorage.setItem('ferivon_role', data.role);

        // Mabed'e yönlendir
        router.push('/mabed');
      } else {
        // HATA: Backend'den gelen mesajı göster
        setError(typeof data === 'string' ? data : (data.error || "Mühür kabul edilmedi."));
      }
    } catch (err) {
      console.error(err);
      setError("Bağlantı koptu. Konsey'e ulaşılamıyor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Arka Plan Efektleri */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/20 via-black to-black"></div>
      <div className="absolute top-10 left-10 font-cinzel text-stone-800 text-9xl opacity-10 select-none pointer-events-none animate-pulse">IX</div>

      {/* Login Kartı */}
      <div className="w-full max-w-md bg-stone-950 border border-stone-900 p-8 md:p-12 relative z-10 shadow-2xl group hover:border-red-900/30 transition-colors duration-700">
        
        {/* Köşe Dekorları */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-900"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-900"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-900"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-900"></div>

        <div className="text-center mb-10 space-y-2">
          <h1 className="font-cinzel text-3xl text-stone-200 tracking-widest">MABED KAPISI</h1>
          {/* HATA DÜZELTİLDİ: Tırnak işaretleri &quot; olarak değiştirildi */}
          <p className="font-cormorant text-stone-500 italic text-lg">&quot;Sadece mühürlü ruhlar geçebilir.&quot;</p>
          <div className="w-12 h-px bg-red-900 mx-auto mt-4 opacity-50"></div>
        </div>

        {/* Hata Mesajı */}
        {error && (
          <div className="mb-6 p-4 bg-red-950/20 border border-red-900/30 text-red-400 font-mono text-xs text-center">
            † {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="space-y-2">
            <label className="block text-xs font-cinzel text-stone-500 tracking-[0.2em] uppercase">
              Rumuz (Kullanıcı Adı)
            </label>
            <input 
              name="username"
              type="text" 
              required
              className="w-full bg-black border border-stone-800 p-3 text-stone-300 font-cinzel focus:outline-none focus:border-red-900 focus:bg-stone-900/50 transition-all placeholder-stone-800"
              placeholder="Gölgedeki ismin..."
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-cinzel text-stone-500 tracking-[0.2em] uppercase">
              Parola (Şifre)
            </label>
            <input 
              name="password"
              type="password" 
              required
              className="w-full bg-black border border-stone-800 p-3 text-stone-300 font-cormorant text-lg tracking-widest focus:outline-none focus:border-red-900 focus:bg-stone-900/50 transition-all placeholder-stone-800"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full mt-4 bg-stone-900 hover:bg-red-950 border border-stone-800 hover:border-red-900 text-stone-400 hover:text-red-200 font-cinzel text-sm tracking-[0.3em] py-4 uppercase transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
          >
             <span className="relative z-10">{loading ? "Kapı Açılıyor..." : "İçeri Gir"}</span>
             <div className="absolute inset-0 bg-red-900/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>

        </form>

        <div className="mt-8 text-center">
          <p className="font-cormorant text-stone-600 text-sm">
            Mührün yok mu? <br />
            <Link href="/iletisim" className="text-stone-400 hover:text-red-500 underline decoration-stone-800 underline-offset-4 transition-colors">
              Konseyden talep et.
            </Link>
          </p>
        </div>

      </div>
    </main>
  );
}
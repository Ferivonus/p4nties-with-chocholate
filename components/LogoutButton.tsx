'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Backend'e çıkış isteği at (Cookie'yi sildir)
      await fetch('http://localhost:8080/api/auth/logout', {
        method: 'POST',
        credentials: 'include', // Cookie gönderimi için şart
      });
      
      // LocalStorage temizliği (Varsa)
      localStorage.removeItem('ferivon_user');
      localStorage.removeItem('ferivon_role');

      // Giriş sayfasına at
      router.push('/giris');
      router.refresh(); // Sayfayı yenile
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="text-xs font-cinzel text-red-800 hover:text-red-500 tracking-widest uppercase border border-red-900/30 px-4 py-2 hover:bg-red-950/20 transition-all"
    >
      Mührü Kır (Çıkış)
    </button>
  );
}
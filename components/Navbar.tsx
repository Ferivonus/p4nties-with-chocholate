'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

// --- SABİT VERİLER ---
const LINKS = [
  { name: 'BAŞLANGIÇ', href: '/' },
  { name: 'DOKTRİN', href: '/doktrin' },
  { name: 'ARŞİV', href: '/blog' },
  { name: 'HİYERARŞİ', href: '/muritler' },
  // "KAPI" linkini buradan kaldırdık çünkü "İntisap Et" butonu zaten bu işi görüyor.
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- SCROLL DİNLEYİCİSİ ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- MOBİL MENÜ KİLİDİ ---
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 border-b transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'bg-black/95 border-stone-800 shadow-2xl shadow-red-950/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* --- LOGO & DURUM IŞIĞI --- */}
          <Link 
            href="/" 
            className="group flex items-center gap-3 z-50" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </div>
            {/* Logo daha parlak ve belirgin */}
            <span className="font-cinzel text-xl md:text-2xl font-black tracking-[0.15em] text-stone-100 group-hover:text-red-600 transition-colors duration-500 shadow-black drop-shadow-md">
              FERIVONIZM
            </span>
          </Link>

          {/* --- MASAÜSTÜ MENÜ --- */}
          <div className="hidden lg:flex gap-8 items-center">
            {LINKS.map((link) => {
              const isActive = link.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-cinzel text-sm tracking-[0.15em] font-bold uppercase transition-all duration-300 py-2 group ${
                    isActive ? 'text-red-600' : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Aktif Link Noktası */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-600 rounded-full transition-all duration-500 ${
                    isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-75'
                  }`}></span>
                </Link>
              );
            })}

            {/* Katıl Butonu (KAPI görevi görüyor) */}
            <Link 
              href="/iletisim"
              className="group relative ml-4 px-8 py-3 overflow-hidden border border-stone-600 hover:border-red-600 transition-colors duration-500 bg-black/40 backdrop-blur-sm"
            >
              <div className="absolute inset-0 w-0 bg-red-900 transition-all duration-[400ms] ease-out group-hover:w-full opacity-20"></div>
              <span className="relative font-cinzel text-sm tracking-[0.2em] font-bold text-stone-200 group-hover:text-red-500 uppercase">
                İntisap Et
              </span>
            </Link>
          </div>

          {/* --- MOBİL MENÜ BUTONU (HAMBURGER) --- */}
          <button 
            className="lg:hidden z-50 text-stone-200 hover:text-red-600 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div className="space-y-1.5 w-8 flex flex-col items-end">
              <span className={`block h-0.5 bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* --- MOBİL MENÜ OVERLAY --- */}
      <div 
        className={`fixed inset-0 bg-stone-950/98 backdrop-blur-xl z-40 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col items-center justify-center space-y-10 border-l border-stone-800 lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Dekoratif IX sembolü */}
        <div className="absolute top-10 right-10 text-stone-800 font-cinzel text-9xl opacity-30 pointer-events-none select-none animate-pulse">
          IX
        </div>

        {LINKS.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            // Mobil için yüksek kontrast
            className="font-cinzel text-3xl font-bold text-stone-300 hover:text-red-500 tracking-[0.1em] uppercase transition-all duration-500 hover:tracking-[0.2em]"
            style={{ transitionDelay: `${isMobileMenuOpen ? index * 100 + 200 : 0}ms` }}
          >
            {link.name}
          </Link>
        ))}

        <div 
          className="w-16 h-px bg-stone-700 my-8 transition-all duration-1000" 
          style={{ transitionDelay: '600ms', opacity: isMobileMenuOpen ? 1 : 0 }}
        ></div>
        
        {/* Mobil menüdeki 'Karanlığa Katıl' linki de İletişim'e gidiyor, bu yüzden KAPI'ya listede gerek yok */}
        <Link 
            href="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-stone-500 font-cormorant italic text-2xl hover:text-stone-200 transition-colors"
            style={{ transitionDelay: '700ms', opacity: isMobileMenuOpen ? 1 : 0 }}
        >
            &quot;Karanlığa katıl.&quot;
        </Link>
      </div>
    </>
  );
}
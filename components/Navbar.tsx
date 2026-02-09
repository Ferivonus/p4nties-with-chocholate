'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll durumunu takip et
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıldığında scroll'u kilitle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const links = [
    { name: 'BAŞLANGIÇ', href: '/' },
    { name: 'ARŞİV', href: '/blog' },
    { name: 'HİYERARŞİ', href: '/muritler' },
    { name: 'KAPI', href: '/iletisim' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 border-b transition-all duration-700 ease-in-out ${
          scrolled 
            ? 'bg-black/95 border-stone-900 shadow-2xl shadow-red-950/10 py-2' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO & DURUM IŞIĞI */}
          <Link href="/" className="group flex items-center gap-3 z-50" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-700"></span>
            </div>
            <span className="font-cinzel text-xl md:text-2xl font-bold tracking-[0.2em] text-stone-100 group-hover:text-red-700 transition-colors duration-500">
              FERIVONIZM
            </span>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden md:flex gap-12 items-center">
            {links.map((link) => {
              // Anasayfa haricinde, alt rotalarda da parent linki aktif göster
              const isActive = link.href === '/' 
                ? pathname === '/' 
                : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative font-cinzel text-[10px] tracking-[0.2em] uppercase transition-all duration-500 py-2 group
                    ${isActive ? 'text-red-600' : 'text-stone-500 hover:text-stone-200'}
                  `}
                >
                  {link.name}
                  {/* Aktif Link Noktası */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-700 rounded-full transition-all duration-500 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-75'}`}></span>
                </Link>
              );
            })}

            {/* KATIL BUTONU */}
            <Link 
              href="/iletisim"
              className="group relative px-6 py-2 overflow-hidden border border-stone-800 hover:border-red-900 transition-colors duration-500"
            >
              <div className="absolute inset-0 w-0 bg-red-900 transition-all duration-[400ms] ease-out group-hover:w-full opacity-20"></div>
              <span className="relative font-cinzel text-[10px] tracking-[0.2em] text-stone-400 group-hover:text-red-500 uppercase">
                İntisap Et
              </span>
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU (HAMBURGER) */}
          <button 
            className="md:hidden z-50 text-stone-300 hover:text-red-600 transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menüyü Aç/Kapat"
          >
            <div className="space-y-1.5 w-8 flex flex-col items-end">
              <span className={`block h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`}></span>
              <span className={`block h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'w-0 opacity-0' : 'w-6'}`}></span>
              <span className={`block h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* MOBİL MENÜ OVERLAY */}
      <div 
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] flex flex-col items-center justify-center space-y-10 border-l border-stone-900 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Dekoratif IX sembolü */}
        <div className="absolute top-10 right-10 text-stone-900 font-cinzel text-9xl opacity-20 pointer-events-none select-none animate-pulse">
          IX
        </div>

        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-cinzel text-3xl text-stone-400 hover:text-red-600 tracking-[0.1em] uppercase transition-all duration-500 hover:tracking-[0.2em]"
            style={{ transitionDelay: `${isMobileMenuOpen ? index * 100 + 200 : 0}ms` }}
          >
            {link.name}
          </Link>
        ))}

        <div className="w-12 h-px bg-stone-800 my-8 transition-all duration-1000" style={{ transitionDelay: '600ms', opacity: isMobileMenuOpen ? 1 : 0 }}></div>
        
        <Link 
            href="/iletisim"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-stone-600 font-cormorant italic text-xl hover:text-stone-300 transition-colors"
            style={{ transitionDelay: '700ms', opacity: isMobileMenuOpen ? 1 : 0 }}
        >
            &quot;Karanlığa katıl.&quot;
        </Link>
      </div>
    </>
  );
}
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { archives } from "@/data/blog/blog_data";

// --- TİP TANIMLAMALARI ---
// Next.js 15+ için params bir Promise'dir.
type Props = {
  params: Promise<{ slug: string }>;
};



// --- DYNAMIC METADATA (ASYNC FIXED) ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Params artık bir Promise olduğu için await ediyoruz
  const { slug } = await params;
  
  const post = archives.find((p) => p.slug === slug);
  
  if (!post) {
    return { title: "Kayıp Tablet | Ferivonizm" };
  }

  return {
    title: `${post.title} | Ferivonistik Arşiv`,
    description: post.content.substring(0, 160).replace(/<[^>]*>?/gm, ''), // HTML taglerini temizle
  };
}

// --- SAYFA BİLEŞENİ (ASYNC FIXED) ---
export default async function BlogPostPage({ params }: Props) {
  // Params'ı await ediyoruz
  const { slug } = await params;
  
  // 1. Yazıyı Bul
  const post = archives.find((p) => p.slug === slug);

  // 2. 404 Kontrolü
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-black flex justify-center selection:bg-red-900 selection:text-white">
      <article className="max-w-3xl w-full animate-fade-in">
        
        {/* NAVİGASYON: ARŞİVE DÖNÜŞ */}
        <nav className="mb-16 flex justify-between items-center border-b border-stone-900 pb-4">
          <Link 
            href="/blog" 
            className="group flex items-center text-stone-600 hover:text-red-600 font-cinzel text-xs tracking-[0.2em] transition-colors uppercase"
          >
            <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform">←</span> 
            Arşive Dön
          </Link>
          
          <span className="hidden md:block font-cinzel text-xs text-stone-700 tracking-widest">
            {post.readingTime}
          </span>
        </nav>

        {/* BAŞLIK VE META VERİLER */}
        <header className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-3 text-xs font-cinzel tracking-[0.3em] text-stone-500 border border-stone-800 px-4 py-2 rounded-full">
            <span className="text-red-800 font-bold">{post.category}</span>
            <span className="text-stone-700">•</span>
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-cinzel text-stone-100 leading-tight tracking-tight drop-shadow-lg">
            {post.title}
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-red-900/50 to-transparent mx-auto mt-8"></div>
        </header>

        {/* İÇERİK ALANI */}
        <div 
          className="font-cormorant text-stone-300 leading-loose text-lg md:text-xl"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* İMZA VE SONUÇ */}
        <div className="mt-24 pt-16 border-t border-stone-900 text-center relative">
          
          {/* Dekoratif sembol */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 text-stone-800 text-2xl font-cinzel">
            †
          </div>

          <p className="font-cormorant text-stone-500 italic text-xl mb-8">
            &quot;Bu hakikat ruha ağır gelir. Onu taşıyamayan, unutsun.&quot;
          </p>
          
          <div className="flex justify-center">
             <Link 
               href="/iletisim" 
               className="group relative px-8 py-3 border border-stone-800 text-stone-400 font-cinzel text-xs tracking-[0.2em] hover:text-red-500 hover:border-red-900 transition-all uppercase overflow-hidden"
             >
               <span className="relative z-10">Bu Hakikati Mühürle</span>
               <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/50 transition-colors duration-500"></div>
             </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
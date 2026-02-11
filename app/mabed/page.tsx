import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

// --- TİPLER ---
type Post = { id: string; title: string; content: string; author_name: string; created_at: string; };
type UserProfile = { username: string; role: string; };
type Log = { id: string; action: string; target_details: string; performed_by_name: string; created_at: string; };
type Petition = { id: string; sender_name: string; subject: string; status: string; created_at: string; };
type Disciple = { username: string; }; 

// --- VERİ ÇEKME ---
async function getData() {
  const cookieStore = cookies();
  const tokenCookie = (await cookieStore).get('auth_token'); // await kaldırıldı (Next.js sürümüne göre değişebilir ama genelde senkron veya await gerektirmez, hata alırsan await ekle)

  if (!tokenCookie) return null;
  const cookieHeader = `auth_token=${tokenCookie.value}`;
  const headers = { Cookie: cookieHeader };

  try {
    // 1. Profil
    const meRes = await fetch('http://localhost:8080/api/auth/me', { headers, cache: 'no-store' });
    if (!meRes.ok) return null;
    const user: UserProfile = await meRes.json();

    // 2. Vahiyler
    const postsRes = await fetch('http://localhost:8080/api/posts', { headers, cache: 'no-store' });
    const posts: Post[] = postsRes.ok ? await postsRes.json() : [];

    // 3. Admin Verileri
    let logs: Log[] = [];
    let petitions: Petition[] = [];
    let disciples: Disciple[] = [];

    if (user.role === 'MUTLAK İRADE' || user.role === 'Yüce Hiçlik') {
      const logsRes = await fetch('http://localhost:8080/api/admin/logs', { headers, cache: 'no-store' });
      if (logsRes.ok) logs = await logsRes.json();

      const petitionsRes = await fetch('http://localhost:8080/api/petitions', { headers, cache: 'no-store' });
      if (petitionsRes.ok) petitions = await petitionsRes.json();

      const usersRes = await fetch('http://localhost:8080/api/admin/disciples', { headers, cache: 'no-store' });
      if (usersRes.ok) disciples = await usersRes.json();
    }

    return { user, posts, logs, petitions, disciples };

  } catch (error) {
    console.error("Mabed çöküşü:", error);
    return null;
  }
}

export default async function MabedDashboard() {
  const data = await getData();
  if (!data) redirect('/giris');

  const { user, posts, logs, petitions, disciples } = data;
  const isAdmin = user.role === 'MUTLAK İRADE' || user.role === 'Yüce Hiçlik';
  const pendingPetitions = petitions.filter(p => p.status === 'BEKLEMEDE').length;

  return (
    <main className="min-h-screen bg-black text-stone-300 pt-20 px-4 md:px-8 pb-12 relative selection:bg-red-900 selection:text-white">
      
      {/* Arka Plan Dokusu (Noise) - Opsiyonel */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 h-20 bg-black/90 backdrop-blur-md border-b border-stone-900 z-50 flex items-center justify-between px-6 md:px-12 shadow-2xl shadow-black">
        <div className="flex flex-col">
            <span className="font-cinzel text-2xl text-stone-100 tracking-[0.2em]">FERIVONIZM</span>
            <span className="text-[10px] text-red-800 font-mono tracking-widest uppercase text-right -mt-1">MABED</span>
        </div>
        <div className="flex items-center gap-6">
            <div className="text-right hidden md:block">
                <div className="text-xs font-mono text-stone-500 uppercase tracking-widest">{user.role}</div>
                <div className="text-sm font-cinzel text-stone-300">{user.username}</div>
            </div>
            <div className="w-10 h-10 bg-stone-900 rounded-full border border-stone-800 flex items-center justify-center font-cinzel text-lg text-stone-400 shadow-inner">
                {user.username.charAt(0).toUpperCase()}
            </div>
            <div className="h-8 w-px bg-stone-800 mx-2"></div>
            <LogoutButton />
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
        
        {/* ================= SOL PANEL (Menü) ================= */}
        <aside className="lg:col-span-1">
           <div className="bg-stone-950/80 border border-stone-900 p-6 sticky top-28 rounded-sm shadow-xl backdrop-blur-sm">
              <nav className="flex flex-col gap-3 font-cinzel text-sm">
                 <div className="text-stone-600 text-[10px] font-mono mb-2 tracking-[0.3em] uppercase opacity-70">NAVİGASYON</div>
                 
                 <Link href="/mabed" className="group flex items-center gap-3 p-3 bg-stone-900/40 border border-stone-800 hover:border-red-900/50 hover:bg-stone-900 transition-all">
                    <span className="w-1.5 h-1.5 bg-red-900 rounded-full group-hover:shadow-[0_0_10px_red]"></span>
                    <span className="text-stone-300 group-hover:text-white">Mabed (Akış)</span>
                 </Link>
                 
                 <Link href="/mabed/profil" className="group flex items-center gap-3 p-3 border border-transparent hover:bg-stone-900/40 hover:border-stone-800 transition-all text-stone-500 hover:text-stone-300">
                    <span className="w-1.5 h-1.5 bg-stone-800 rounded-full group-hover:bg-stone-600"></span>
                    <span>Ruh Aynası</span>
                 </Link>
                 
                 <Link href="/mabed/yeni" className="group flex items-center gap-3 p-3 border border-transparent hover:bg-stone-900/40 hover:border-stone-800 transition-all text-stone-500 hover:text-stone-300">
                    <span className="w-1.5 h-1.5 bg-stone-800 rounded-full group-hover:bg-stone-600"></span>
                    <span>Vahiy Yaz</span>
                 </Link>
                 
                 {isAdmin && (
                    <div className="mt-6 pt-6 border-t border-stone-900">
                       <div className="text-stone-600 text-[10px] font-mono mb-4 tracking-[0.3em] uppercase opacity-70">YÖNETİM MASASI</div>
                       
                       <div className="space-y-2">
                           <Link href="/mabed/arzuhaller" className="flex items-center justify-between p-2 text-stone-400 hover:text-red-500 hover:bg-stone-900/30 transition-colors rounded">
                              <span>Arzuhaller</span>
                              {pendingPetitions > 0 && (
                                <span className="flex items-center justify-center w-5 h-5 bg-red-900/80 text-white text-[10px] font-mono rounded-full animate-pulse">
                                    {pendingPetitions}
                                </span>
                              )}
                           </Link>
                           <Link href="/mabed/loglar" className="block p-2 text-stone-400 hover:text-red-500 hover:bg-stone-900/30 transition-colors rounded">Büyük Göz (Log)</Link>
                           <Link href="/mabed/muritler" className="block p-2 text-stone-400 hover:text-red-500 hover:bg-stone-900/30 transition-colors rounded">Mürit Listesi</Link>
                       </div>
                    </div>
                 )}
              </nav>
           </div>
        </aside>


        {/* ================= SAĞ PANEL (İçerik) ================= */}
        <div className="lg:col-span-3 space-y-10">
            
            {/* --- ADMİN DASHBOARD --- */}
            {isAdmin && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up">
                    {/* Kart 1 */}
                    <div className="bg-gradient-to-br from-stone-900/80 to-stone-950 border border-stone-800 p-6 relative overflow-hidden group hover:border-stone-600 transition-colors shadow-lg">
                        <div className="relative z-10">
                            <h3 className="text-stone-500 text-[10px] font-cinzel tracking-[0.2em] uppercase mb-1">Toplam Ruh</h3>
                            <p className="text-4xl text-stone-100 font-cinzel">{disciples.length}</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 text-stone-100 group-hover:scale-110 transition-transform duration-700">
                            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                        </div>
                    </div>

                    {/* Kart 2 */}
                    <div className="bg-gradient-to-br from-stone-900/80 to-stone-950 border border-stone-800 p-6 relative overflow-hidden group hover:border-red-900/50 transition-colors shadow-lg">
                        <div className="relative z-10">
                            <h3 className="text-stone-500 text-[10px] font-cinzel tracking-[0.2em] uppercase mb-1">Bekleyen Mesaj</h3>
                            <p className={`text-4xl font-cinzel ${pendingPetitions > 0 ? 'text-red-500 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]' : 'text-stone-100'}`}>
                                {pendingPetitions}
                            </p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 text-red-500 group-hover:scale-110 transition-transform duration-700">
                             <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                    </div>

                    {/* Kart 3 */}
                    <div className="bg-gradient-to-br from-stone-900/80 to-stone-950 border border-stone-800 p-6 relative overflow-hidden group hover:border-stone-600 transition-colors shadow-lg">
                        <div className="relative z-10">
                            <h3 className="text-stone-500 text-[10px] font-cinzel tracking-[0.2em] uppercase mb-2">Son Hareket</h3>
                            <p className="text-sm text-stone-300 font-mono truncate border-l-2 border-stone-700 pl-3 py-1">
                                {logs[0] ? logs[0].action : "Sessizlik..."}
                            </p>
                            <p className="text-[10px] text-stone-600 mt-2 font-mono text-right">{logs[0] ? logs[0].performed_by_name : "-"}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* --- ADMİN DETAYLAR --- */}
            {isAdmin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Loglar */}
                    <div className="bg-stone-950 border border-stone-900 p-1">
                        <div className="bg-stone-900/50 px-4 py-3 border-b border-stone-900 flex justify-between items-center">
                             <h3 className="font-cinzel text-stone-300 text-sm tracking-widest">SON KAYITLAR</h3>
                             <Link href="/mabed/loglar" className="text-[10px] font-mono text-stone-600 hover:text-white transition-colors">TÜMÜ</Link>
                        </div>
                        <div className="divide-y divide-stone-900">
                            {logs.slice(0, 5).map(log => (
                                <div key={log.id} className="p-3 hover:bg-stone-900/30 transition-colors grid grid-cols-12 gap-2 items-center">
                                    <div className="col-span-3 text-[10px] font-mono text-stone-600">
                                        {new Date(log.created_at).toLocaleTimeString('tr-TR', {hour: '2-digit', minute:'2-digit'})}
                                    </div>
                                    <div className="col-span-9">
                                        <span className="text-[11px] text-red-800 font-bold block">{log.action}</span>
                                        <span className="text-[10px] text-stone-500 truncate block">{log.target_details}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arzuhaller */}
                    <div className="bg-stone-950 border border-stone-900 p-1">
                        <div className="bg-stone-900/50 px-4 py-3 border-b border-stone-900 flex justify-between items-center">
                             <h3 className="font-cinzel text-stone-300 text-sm tracking-widest">BEKLEYENLER</h3>
                             <Link href="/mabed/arzuhaller" className="text-[10px] font-mono text-stone-600 hover:text-white transition-colors">MASA</Link>
                        </div>
                        <div className="divide-y divide-stone-900">
                            {petitions.filter(p => p.status === 'BEKLEMEDE').slice(0, 5).map(pet => (
                                <div key={pet.id} className="p-3 hover:bg-stone-900/30 transition-colors flex justify-between items-center">
                                    <div className="overflow-hidden">
                                        <p className="text-stone-300 text-xs font-cinzel truncate">{pet.subject}</p>
                                        <p className="text-stone-600 text-[10px] font-mono">{pet.sender_name}</p>
                                    </div>
                                    <span className="bg-red-950/30 text-red-500 border border-red-900/20 text-[9px] px-2 py-0.5 rounded uppercase tracking-wider">Bekliyor</span>
                                </div>
                            ))}
                            {petitions.filter(p => p.status === 'BEKLEMEDE').length === 0 && (
                                <div className="p-8 text-center text-xs text-stone-700 italic">Masa temiz. Sessizlik hakim.</div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* --- GENEL VAHİY AKIŞI --- */}
            <div className="pt-8 border-t border-stone-900/50">
                 <div className="flex items-end justify-between mb-8 px-2">
                    <div>
                        <h2 className="font-cinzel text-3xl text-stone-200 tracking-wide drop-shadow-md">VAHİY AKIŞI</h2>
                        <p className="text-xs font-cormorant text-stone-500 mt-1 italic">Karanlığa fısıldanan son hakikatler.</p>
                    </div>
                    <span className="text-[10px] font-mono text-stone-600 border border-stone-800 px-2 py-1 rounded">
                        TOPLAM: {posts.length}
                    </span>
                 </div>

                 <div className="grid gap-8">
                    {posts.map((post) => (
                        <article key={post.id} className="group relative bg-stone-950/80 border border-stone-900/80 p-8 hover:border-stone-700 transition-all duration-500 rounded-sm shadow-xl">
                            {/* Dekoratif Köşeler */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-stone-700 opacity-50 group-hover:border-red-900 transition-colors"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-stone-700 opacity-50 group-hover:border-red-900 transition-colors"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-stone-700 opacity-50 group-hover:border-red-900 transition-colors"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-stone-700 opacity-50 group-hover:border-red-900 transition-colors"></div>

                            <header className="flex justify-between items-start mb-6 border-b border-stone-900 pb-4">
                                <h3 className="font-cinzel text-xl md:text-2xl text-stone-200 group-hover:text-red-700 transition-colors duration-300">
                                    {post.title}
                                </h3>
                                <time className="text-[10px] font-mono text-stone-600 whitespace-nowrap pt-1 ml-4">
                                    {new Date(post.created_at).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                            </header>
                            
                            <div className="prose prose-invert prose-stone max-w-none">
                                <p className="font-cormorant text-lg md:text-xl text-stone-400 leading-loose group-hover:text-stone-300 transition-colors">
                                    {post.content}
                                </p>
                            </div>

                            <footer className="mt-8 pt-4 border-t border-stone-900/50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-stone-900 flex items-center justify-center text-[10px] font-cinzel text-stone-500 border border-stone-800">
                                        {post.author_name.charAt(0)}
                                    </div>
                                    <span className="text-xs font-cinzel text-stone-500 uppercase tracking-widest group-hover:text-stone-400 transition-colors">
                                        {post.author_name}
                                    </span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                     <span className="text-[10px] text-red-900 font-mono tracking-widest">NO. {post.id.slice(0,4)}</span>
                                </div>
                            </footer>
                        </article>
                    ))}
                 </div>
            </div>

        </div>
      </div>
    </main>
  );
}
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import LogoutButton from '@/components/LogoutButton';

// --- TİPLER ---
type Post = { id: string; title: string; content: string; author_name: string; created_at: string; };
type UserProfile = { username: string; role: string; };
type Log = { id: string; action: string; target_details: string; performed_by_name: string; created_at: string; };
type Petition = { id: string; sender_name: string; subject: string; status: string; created_at: string; };
type Disciple = { username: string; }; // Sayı saymak için

// --- VERİ ÇEKME ---
async function getData() {
  const cookieStore = cookies();
  const tokenCookie = (await cookieStore).get('auth_token');

  if (!tokenCookie) return null;
  const cookieHeader = `auth_token=${tokenCookie.value}`;
  const headers = { Cookie: cookieHeader };

  try {
    // 1. Profil (Herkes için)
    const meRes = await fetch('http://localhost:8080/api/auth/me', { headers, cache: 'no-store' });
    if (!meRes.ok) return null;
    const user: UserProfile = await meRes.json();

    // 2. Vahiyler (Herkes için)
    const postsRes = await fetch('http://localhost:8080/api/posts', { headers, cache: 'no-store' });
    const posts: Post[] = postsRes.ok ? await postsRes.json() : [];

    // 3. EĞER ADMİNSE -> Diğer verileri de çek
    let logs: Log[] = [];
    let petitions: Petition[] = [];
    let disciples: Disciple[] = [];

    if (user.role === 'MUTLAK İRADE' || user.role === 'Yüce Hiçlik') {
      // Loglar
      const logsRes = await fetch('http://localhost:8080/api/admin/logs', { headers, cache: 'no-store' });
      if (logsRes.ok) logs = await logsRes.json();

      // Arzuhaller
      const petitionsRes = await fetch('http://localhost:8080/api/petitions', { headers, cache: 'no-store' });
      if (petitionsRes.ok) petitions = await petitionsRes.json();

      // Müritler (Sayı için)
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

  // Bekleyen arzuhal sayısı
  const pendingPetitions = petitions.filter(p => p.status === 'BEKLEMEDE').length;

  return (
    <main className="min-h-screen bg-black text-stone-400 pt-12 px-6 pb-12 relative selection:bg-red-900 selection:text-white">
      
      {/* Navbar benzeri Üst Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-stone-900 z-50 flex items-center justify-between px-8">
        <div className="font-cinzel text-xl text-stone-200 tracking-widest">FERIVONIZM <span className="text-red-900">MABED</span></div>
        <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-stone-600 uppercase hidden md:inline">{user.role}</span>
            <div className="w-8 h-8 bg-stone-900 rounded-full border border-stone-800 flex items-center justify-center font-cinzel text-stone-300">
                {user.username.charAt(0)}
            </div>
            <LogoutButton />
        </div>
      </header>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* ================= SOL PANEL (Menü) ================= */}
        <aside className="lg:col-span-1 space-y-6">
           <div className="bg-stone-950 border border-stone-900 p-6 sticky top-24">
              <nav className="flex flex-col gap-2 font-cinzel text-sm">
                 <div className="text-stone-600 text-xs mb-2 tracking-widest">MENÜ</div>
                 <Link href="/mabed" className="p-2 hover:bg-stone-900 text-stone-300 hover:text-red-500 transition-colors border-l-2 border-red-900 bg-stone-900/30">Mabed (Ana Akış)</Link>
                 <Link href="/mabed/profil" className="p-2 hover:bg-stone-900 text-stone-500 hover:text-stone-300 transition-colors border-l-2 border-transparent">Ruh Aynası</Link>
                 <Link href="/mabed/yeni" className="p-2 hover:bg-stone-900 text-stone-500 hover:text-stone-300 transition-colors border-l-2 border-transparent">Vahiy Yaz</Link>
                 
                 {isAdmin && (
                    <>
                       <div className="w-full h-px bg-stone-900 my-4"></div>
                       <div className="text-stone-600 text-xs mb-2 tracking-widest">YÖNETİM</div>
                       <Link href="/mabed/arzuhaller" className="p-2 hover:bg-stone-900 text-stone-500 hover:text-stone-300 transition-colors flex justify-between group">
                          <span>Arzuhaller</span>
                          {pendingPetitions > 0 && <span className="bg-red-900 text-stone-200 text-[10px] px-1.5 rounded-full">{pendingPetitions}</span>}
                       </Link>
                       <Link href="/mabed/loglar" className="p-2 hover:bg-stone-900 text-stone-500 hover:text-stone-300 transition-colors">Büyük Göz (Log)</Link>
                       <Link href="/mabed/muritler" className="p-2 hover:bg-stone-900 text-stone-500 hover:text-stone-300 transition-colors">Mürit Listesi</Link>
                    </>
                 )}
              </nav>
           </div>
        </aside>


        {/* ================= SAĞ PANEL (İçerik) ================= */}
        <div className="lg:col-span-3 space-y-8">
            
            {/* --- ADMİN ÖZEL DASHBOARD (STATS) --- */}
            {isAdmin && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Kart 1: Mürit Sayısı */}
                    <div className="bg-stone-950 border border-stone-900 p-6 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                        </div>
                        <h3 className="text-stone-500 text-xs font-cinzel tracking-widest uppercase">Toplam Ruh</h3>
                        <p className="text-3xl text-stone-200 font-cinzel mt-2">{disciples.length}</p>
                    </div>

                    {/* Kart 2: Bekleyen Arzuhal */}
                    <div className="bg-stone-950 border border-stone-900 p-6 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-red-500">
                             <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                        </div>
                        <h3 className="text-stone-500 text-xs font-cinzel tracking-widest uppercase">Bekleyen Mesaj</h3>
                        <p className={`text-3xl font-cinzel mt-2 ${pendingPetitions > 0 ? 'text-red-500' : 'text-stone-200'}`}>
                            {pendingPetitions}
                        </p>
                    </div>

                    {/* Kart 3: Son Log */}
                    <div className="bg-stone-950 border border-stone-900 p-6 relative group overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path></svg>
                        </div>
                        <h3 className="text-stone-500 text-xs font-cinzel tracking-widest uppercase">Son Hareket</h3>
                        <p className="text-sm text-stone-400 font-mono mt-2 truncate">
                            {logs[0] ? logs[0].action : "Sessizlik..."}
                        </p>
                        <p className="text-[10px] text-stone-600 mt-1">{logs[0] ? logs[0].performed_by_name : "-"}</p>
                    </div>
                </div>
            )}

            {/* --- ADMİN ÖZEL: SON OLAYLAR VE ARZUHALLER (SPLIT VIEW) --- */}
            {isAdmin && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Son Loglar Tablosu */}
                    <div className="bg-stone-950/50 border border-stone-900 p-6">
                        <h3 className="font-cinzel text-stone-300 mb-4 border-b border-stone-900 pb-2">Son Hareketler</h3>
                        <div className="space-y-3">
                            {logs.slice(0, 5).map(log => (
                                <div key={log.id} className="text-xs border-l border-stone-800 pl-3 py-1">
                                    <span className="text-red-800 font-bold block">{log.action}</span>
                                    <span className="text-stone-500">{log.target_details}</span>
                                    <div className="text-[10px] text-stone-700 mt-1 flex justify-between">
                                        <span>{log.performed_by_name}</span>
                                        <span>{new Date(log.created_at).toLocaleTimeString('tr-TR')}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link href="/mabed/loglar" className="block text-center text-[10px] text-stone-600 hover:text-stone-300 mt-4 uppercase tracking-widest">Tümünü Gör</Link>
                    </div>

                    {/* Bekleyen Arzuhaller Özeti */}
                    <div className="bg-stone-950/50 border border-stone-900 p-6">
                        <h3 className="font-cinzel text-stone-300 mb-4 border-b border-stone-900 pb-2">Bekleyen Arzuhaller</h3>
                        <div className="space-y-3">
                            {petitions.filter(p => p.status === 'BEKLEMEDE').slice(0, 5).map(pet => (
                                <div key={pet.id} className="flex justify-between items-center text-xs bg-stone-900/20 p-2 border border-stone-900/50">
                                    <div>
                                        <p className="text-stone-300">{pet.subject}</p>
                                        <p className="text-stone-600 text-[10px]">{pet.sender_name}</p>
                                    </div>
                                    <span className="text-red-500 font-mono text-[10px] blink">BEKLİYOR</span>
                                </div>
                            ))}
                            {petitions.filter(p => p.status === 'BEKLEMEDE').length === 0 && (
                                <p className="text-xs text-stone-600 italic">Masa temiz. Hiçbir ruh kapıda değil.</p>
                            )}
                        </div>
                        <Link href="/mabed/arzuhaller" className="block text-center text-[10px] text-stone-600 hover:text-stone-300 mt-4 uppercase tracking-widest">Masaya Git</Link>
                    </div>

                </div>
            )}

            {/* --- GENEL VAHİY AKIŞI (HERKES İÇİN) --- */}
            <div>
                 <div className="flex items-end justify-between border-b border-stone-900 pb-4 mb-6">
                    <h2 className="font-cinzel text-xl text-stone-200">VAHİY AKIŞI</h2>
                    <span className="text-xs font-mono text-stone-600">SON {posts.length} KAYIT</span>
                 </div>

                 <div className="grid gap-6">
                    {posts.map((post) => (
                        <article key={post.id} className="group bg-stone-950 border border-stone-900 p-6 hover:border-stone-700 transition-all">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-cinzel text-lg text-stone-300 group-hover:text-red-800 transition-colors">{post.title}</h3>
                                <span className="text-[10px] font-mono text-stone-600">{new Date(post.created_at).toLocaleDateString()}</span>
                            </div>
                            <p className="font-cormorant text-stone-500 line-clamp-3 mb-4">{post.content}</p>
                            <div className="flex items-center gap-2 text-xs font-cinzel text-stone-600">
                                <span className="w-2 h-2 bg-red-900 rounded-full"></span>
                                {post.author_name}
                            </div>
                        </article>
                    ))}
                 </div>
            </div>

        </div>
      </div>
    </main>
  );
}
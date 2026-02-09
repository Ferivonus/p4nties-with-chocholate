import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// --- TİP TANIMLAMALARI ---
type Disciple = {
  id: number;
  ref: string;
  name: string;
  level: string;
  image: string;
  role: string;
  joined: string;
  sin: string;
  manifesto: string;
  judgment: string;
  stats: {
    voidResonance: number;
    balance: number;
    burden: number;
  };
};

// Next.js 15+ için Props Tipi (Params artık bir Promise)
type Props = {
  params: Promise<{ id: string }>;
};

// --- GİZLİ ARŞİV (DATABASE) - GENİŞLETİLMİŞ HİKAYELER ---
const disciples: Disciple[] = [
  // --- KURUCU ---
  {
    id: 0,
    ref: "IX-000",
    name: "FERIVONUS",
    level: "MUTLAK İRADE",
    image: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=800&q=80",
    role: "Başlangıç ve Son",
    joined: "Zaman Öncesi",
    sin: "EBEDİ AÇLIK",
    manifesto: "Doymak, fanilerin tesellisidir; ben ise sonsuzluk istedim. Budizm'in hiçliği beni kesmedi, çünkü o hiçlikte irade yoktu. Hristiyanlığın cenneti bana yetmedi, çünkü orada kurallar başkasına aitti. Aynaya her baktığımda, etten ve kemikten bir insan değil, evreni yutmak isteyen doyumsuz bir kara delik gördüm. Bu bir kibir değil, bir zorunluluktu. Tanrı'nın koltuğu boştu ve o boşluğun yarattığı sessizlik canımı yakıyordu. Oraya oturdum ama hala açım. Benim dinim, asla dolmayacak olan o muazzam boşluğun ilahisidir.",
    judgment: "YARGI GEÇERSİZ. Analiz edilemez. O, sistemin hem yaratıcısı hem de yok edicisidir.",
    stats: { voidResonance: 100, balance: 100, burden: 100 }
  },

  // --- LİDER KADRO ---
  {
    id: 1,
    ref: "IX-001",
    name: "Orkun Öztunç",
    level: "Yüce Hiçlik",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    role: "Kurucu & Baş Rehber",
    joined: "Döngü I • Başlangıç",
    sin: "VAZGEÇİŞ",
    manifesto: "İnsanlar 'pes etmeyi' zayıflık, 'vazgeçmeyi' yenilgi sanır. Oysa durmak, anlamsız bir yarışta koşmaktan daha büyük bir irade gerektirir. Orkun, hayatın hileli bir kumar olduğunu anladığı o soğuk gece, elindeki zarları masaya fırlatıp kalkmayı seçti. Onun depresyonu, yorganın altına saklanmak değil; dünyanın sahteliğine, kariyer hırslarına ve plastik gülüşlere atılmış en soylu tokattır. O, her şeyi inşa edebilecek yeteneğe sahipken, hiçbir şeyi inşa etmemeyi seçen bir mimardır. Çünkü bilir ki; yapılan her şey, er ya da geç yıkılmaya mahkumdur.",
    judgment: "Kendi gölgesiyle barışık tek varlık. Kaybedecek hiçbir şeyi kalmadığı için, onu tehdit edebilecek hiçbir güç yoktur.",
    stats: { voidResonance: 98, balance: 95, burden: 99 }
  },

  // --- YARGIÇ KADROSU ---
  {
    id: 2,
    ref: "IX-002",
    name: "Azra Kara",
    level: "Adalet Terazisi",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    role: "Zihin Okuyucu",
    joined: "Döngü I • Takipçi",
    sin: "ARAF",
    manifesto: "Bir kapıyı açmak, diğer binlerce kapıyı sonsuza dek kilitlemek demektir. Azra bu korkunç matematiğin ağırlığı altında ezildi. Hangi yemeği yiyeceğinden, kiminle yaşlanacağına kadar her basit karar, onun için potansiyel bir cenaze törenidir. O, yanlış yapmaktan korktuğu için değil, seçilmeyen 'diğer' ihtimallerin yasını tuttuğu için durur. Zihni, yaşanmamış hayatların hayaletleriyle dolu, gürültülü bir istasyondur. Bu yüzden o, eyleme geçmez; sadece izler, analiz eder ve tüm olasılıkları aynı anda görür.",
    judgment: "Merkezde duran sarkaç. Eylemsizliği bir zayıflık değil, aşırı farkındalığın yarattığı bir kilitlenmedir.",
    stats: { voidResonance: 92, balance: 88, burden: 90 }
  },
  {
    id: 3,
    ref: "IX-003",
    name: "Hasan Kılıcı",
    level: "Adalet Terazisi",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    role: "Baş Yargıç",
    joined: "Döngü II • Adalet",
    sin: "SAPLANTI",
    manifesto: "Eğer zihin bir bahçeyse, Hasan'ın zihni tek bir ağacın köklerine odaklanmış, o kökün en ince lifini mikroskopla inceleyen karanlık bir laboratuvardır. Bir fikre, bir kişiye ya da bir detaya takıldığında, dünyanın geri kalanı onun için silinir. Bu obsesyon, onu sosyal hayatta hasta edebilir ama Konsey'de onu kusursuz bir yargıç yapar. Çünkü o, kimsenin bakmaya tenezzül etmediği o mikroskobik çatlağı bulana kadar uyumaz, yemez ve durmaz. Onun lugatında 'yeterli' diye bir kelime yoktur.",
    judgment: "Keskin, tehlikeli ve yorulmaz. Kendi zihninin labirentinde hem mahkum hem de gardiyan.",
    stats: { voidResonance: 85, balance: 99, burden: 80 }
  },
  {
    id: 4,
    ref: "IX-004",
    name: "Ender Üresin",
    level: "Adalet Terazisi",
    image: "https://images.unsplash.com/photo-1488161628813-99c974c7904e?w=800&q=80",
    role: "Kâtip",
    joined: "Döngü II • Kayıt",
    sin: "KÖRLÜK",
    manifesto: "Ona dışarıda 'kör' diyorlar çünkü vitrinlere, modaya veya manşetlere bakmıyor. Oysa Ender, sadece gürültüyü filtreliyor. O, bir keskin nişancının tetiği çekmeden hemen önce nefesini tuttuğu o mutlak sessizlik anında yaşar. Hayatın genel akışından kopmuştur, evet; ama bu kopuş bilinçli bir sürgündür. Odaklandığı konu neyse, onunla moleküler düzeyde bütünleşir ve geri kalan her şey –insanlar dahil– bir sis bulutuna dönüşür. O, dünyayı geniş açıyla değil, bir iğne deliğinden izlemeyi seçmiştir.",
    judgment: "Dünyevi bağları kopuk. Sosyal zekası düşük, odaklanma yetisi insanüstü.",
    stats: { voidResonance: 90, balance: 85, burden: 75 }
  },
  {
    id: 5,
    ref: "IX-005",
    name: "Mahmut Onur Er",
    level: "Adalet Terazisi",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    role: "Muhafız",
    joined: "Döngü III • Duruş",
    sin: "ATALET",
    manifesto: "Hızın ve kaosun kutsandığı bir çağda, yerinden kıpırdamamak en büyük devrimdir. Mahmut, değişimi bir tehdit, hareketi ise gereksiz bir enerji israfı olarak görür. Onun stabil, tekdüze hayatı, dışarıdan sıkıcılık gibi görünse de içeride yıkılmaz bir kaledir. Fırtınalar kopar, rejimler değişir, insanlar gelir gider; ama Mahmut olduğu yerde, aynı rutinle, aynı sakinlikle durmaya devam eder. O, Ferivonizm'in sarsılmaz temel taşıdır. Onu yerinden oynatmaya çalışmak, bir dağı itmeye çalışmak gibidir.",
    judgment: "Statik güç. Değişime olan direnci, onu sistemin en güvenilir muhafızı yapar.",
    stats: { voidResonance: 70, balance: 95, burden: 60 }
  },

  // --- MÜRİTLER ---
  {
    id: 6,
    ref: "IX-006",
    name: "Elif Beyza Yorulmaz",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    role: "Çilekeş",
    joined: "Döngü IV • Çöküş",
    sin: "YEİS",
    manifesto: "Mutluluk, gerçeği görmezden gelenlerin afyonudur. Beyza, bu uyuşturucuyu reddetti. Onun derin hüznü, kişisel bir depresyon değil, varoluşsal bir duruştur. Çiçeğin solacağını, güneşin batacağını ve kahkahaların eninde sonunda susacağını bilir. Bu yüzden neşelenmez, çünkü sonu olan bir şeye sevinmek ona ahmakça gelir. Onun kederi, dünyanın geçiciliğine tutulmuş en dürüst aynadır. O, ağlamaz; sadece anlar ve o ağırlığı taşır.",
    judgment: "Ruhu cam kadar şeffaf ve kırılgan. İyileştirilmeye çalışılmamalı, sadece dinlenilmeli.",
    stats: { voidResonance: 88, balance: 40, burden: 95 }
  },
  {
    id: 7,
    ref: "IX-007",
    name: "Melike",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    role: "Gölge",
    joined: "Döngü IV • Giz",
    sin: "SİLİKLEŞME",
    manifesto: "Herkes sahnede olmak, alkışlanmak ve görülmek için çırpınırken; Melike kulisin en karanlık köşesini seçti. Varlığını silmek, sesini kısmak, renklerini soldurmak... Bu bir kaçış değil, egoya karşı kazanılmış sessiz bir zaferdir. O, odada olsa bile fark edilmez; bir duvardan veya bir gölgeden farksızdır. Bu mutlak görünmezlik, ona kimsenin duyamadığı sırları duyma ve kimsenin giremediği kapılardan süzülme gücü verir. O, Ferivonizm'in yaşayan hayaletidir.",
    judgment: "Varlığı ile yokluğu ayırt edilemiyor. Mükemmel bir gözlemci.",
    stats: { voidResonance: 60, balance: 50, burden: 40 }
  },
  {
    id: 8,
    ref: "IX-008",
    name: " hellokitty_69",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80",
    role: "Arayışçı",
    joined: "Döngü V • Uyanış",
    sin: "LAKAYITLIK",
    manifesto: "Eğer hayat bir tiyatroysa ve senaryo bu kadar kötüyse, yapılacak tek mantıklı şey gülmektir. Nevzat, ciddiyeti bulaşıcı bir hastalık olarak görür. En kutsal, en trajik anlarda bile bir şaka bulabilir. Ancak bu kahkahalar neşeden değil, derin bir anlamsızlık hissinden (nihilizm) gelir. Uçurumun kenarında dans eder ve düşmekten korkmadığını iddia eder. Onun umursamazlığı, aslında hassas ruhunu korumak için ördüğü çelikten, dikenli bir zırhtır.",
    judgment: "Kaotik ve öngörülemez. Maskesi gülüyor ama gözleri her zaman tetikte.",
    stats: { voidResonance: 40, balance: 30, burden: 20 }
  },
  {
    id: 9,
    ref: "IX-009",
    name: "Berk",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    role: "Arayışçı",
    joined: "Döngü V • Kafes",
    sin: "TUTSAKLIK",
    manifesto: "Dünyanın en sağlam hapishanesi, duvarlarını kendi ördüğün ve gardiyanlığını kendinin yaptığı yerdir. Berk, özgürlükten korkar çünkü özgürlük sorumluluk demektir. Kendi potansiyelini görünmez bir kafese kilitledi ve anahtarı bilerek yuttu. Dışarıdaki hayatı izler, analiz eder, eleştirir ama asla dokunmaz. Onun trajedisi, kapının aslında kilitli olmaması, ama onun kolu çevirmeye cesaret edememesidir.",
    judgment: "Potansiyeli yüksek ama eyleme geçişi bloklu. Kırılması gereken sert bir kabuk.",
    stats: { voidResonance: 50, balance: 45, burden: 55 }
  },
  {
    id: 10,
    ref: "IX-010",
    name: "Samet",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    role: "Arayışçı",
    joined: "Döngü VI • Ayna",
    sin: "İNKAR",
    manifesto: "Aynadaki suretiyle savaşan adam. Samet, içindeki gücü biliyor ama ondan ölesiye korkuyor. Kendine inanırsa, başarısız olma lüksünü kaybedeceğinin farkında. Bu yüzden sürekli 'yetersizmiş' gibi davranır. Kendini sabote etmek, onun en büyük yeteneğidir. Başkalarının ona inanmasına izin vermez, çünkü o henüz kendine 'evet' dememiştir. Bir 'Imposter Sendromu' abidesi olarak, kendi ışığını kendi elleriyle boğar.",
    judgment: "Barut dolu bir fıçı, ama ateşlenmekten korkuyor. Kendi kendinin en büyük düşmanı.",
    stats: { voidResonance: 55, balance: 60, burden: 30 }
  }
];

// --- DYNAMIC METADATA (ASYNC FIXED) ---
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Params'ı await etmemiz gerekiyor (Next.js 15 kuralı)
  const { id } = await params;
  
  const disciple = disciples.find((d) => d.id === Number(id));
  if (!disciple) return { title: "Kayıp Kayıt | Ferivonizm" };
  
  return {
    title: `Dosya: ${disciple.ref} | ${disciple.name}`,
    description: "Konsey arşivindeki mühürlü kayıt.",
  };
}

// --- SAYFA BİLEŞENİ (ASYNC FIXED) ---
export default async function DiscipleDetailPage({ params }: Props) {
  // Params'ı await ediyoruz
  const { id } = await params;
  
  const disciple = disciples.find((d) => d.id === Number(id));

  if (!disciple) {
    notFound();
  }

  // Ferivonus için özel stil kontrolü
  const isFounder = disciple.id === 0;

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 bg-black flex justify-center selection:bg-red-900 selection:text-white">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-12 animate-fade-in">
        
        {/* SOL SÜTUN: GÖRSEL VE KİMLİK (4/12) */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* FOTOĞRAF KARTI */}
          <div className={`relative aspect-[3/4] w-full border bg-stone-950 p-2 group shadow-2xl shadow-black ${isFounder ? 'border-red-900' : 'border-stone-800'}`}>
             <div className="relative w-full h-full overflow-hidden">
                <Image 
                 src={disciple.image} 
                 alt={disciple.name}
                 fill
                 className={`object-cover contrast-125 transition-all duration-1000 ease-in-out ${isFounder ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
               />
               {/* Arşiv Damgası */}
               <div className="absolute top-4 right-4 border border-stone-500/30 bg-black/50 backdrop-blur-md px-3 py-1">
                 <span className={`font-mono text-xs tracking-widest ${isFounder ? 'text-red-500' : 'text-stone-300'}`}>{disciple.ref}</span>
               </div>
             </div>
             
             {/* Kırmızı Mühür Efekti */}
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-900/10 rounded-full blur-xl"></div>
          </div>

          {/* KÜNYE BİLGİLERİ */}
          <div className="border-t border-b border-stone-900 py-6 space-y-4">
             <div className="flex justify-between items-center">
               <span className="font-cinzel text-xs text-stone-600 uppercase tracking-widest">Rütbe</span>
               <span className={`font-cinzel text-sm uppercase tracking-widest ${
                 isFounder ? "text-red-600 font-bold" : 
                 disciple.level === "Yüce Hiçlik" ? "text-red-500" : "text-stone-300"
               }`}>{disciple.level}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="font-cinzel text-xs text-stone-600 uppercase tracking-widest">Rol</span>
               <span className="font-cormorant text-lg text-stone-400 italic">{disciple.role}</span>
             </div>
             <div className="flex justify-between items-center">
               <span className="font-cinzel text-xs text-stone-600 uppercase tracking-widest">Döngü</span>
               <span className="font-mono text-xs text-stone-500">{disciple.joined}</span>
             </div>
          </div>

          {/* GERİ DÖN */}
          <Link href="/muritler" className="group flex items-center gap-3 text-stone-600 hover:text-red-600 transition-colors">
            <span className="font-mono text-lg">←</span>
            <span className="font-cinzel text-xs tracking-[0.2em] uppercase">Arşivi Kapat</span>
          </Link>
        </div>

        {/* SAĞ SÜTUN: RUHSAL ANALİZ (8/12) */}
        <div className="lg:col-span-8 space-y-12 lg:pl-12 lg:border-l border-stone-900/50">
          
          {/* BAŞLIK */}
          <header className="space-y-4">
             <div className="inline-flex items-center gap-2 mb-2">
                <div className={`w-2 h-2 rounded-full animate-pulse ${isFounder ? 'bg-red-600' : 'bg-red-900'}`}></div>
                <span className="font-mono text-xs text-red-900 uppercase tracking-widest">
                  {isFounder ? 'GİZLİ PROTOKOL' : 'DOSYA AÇIK'}
                </span>
             </div>
             <h1 className="text-5xl md:text-7xl font-cinzel text-stone-100 tracking-tight leading-none uppercase">
               {disciple.name}
             </h1>
             <p className="font-cinzel text-sm text-stone-500 tracking-[0.4em] uppercase border-b border-stone-800 pb-8">
               Kusur: <span className="text-red-700 font-bold">{disciple.sin}</span>
             </p>
          </header>

          {/* MANİFESTO (Biyografi) */}
          <section className="space-y-6">
             <h3 className="font-cinzel text-stone-400 text-xs uppercase tracking-[0.2em] flex items-center gap-4">
               <span className="w-8 h-px bg-stone-800"></span>
               {isFounder ? 'Varlık Beyanı' : 'Vaka Analizi'}
             </h3>
             <p className="font-cormorant text-xl md:text-2xl text-stone-300 leading-relaxed italic border-l-2 border-stone-800 pl-8 py-2">
               &quot;{disciple.manifesto}&quot;
             </p>
          </section>

          {/* KONSEY HÜKMÜ */}
          <section className={`p-8 border relative overflow-hidden ${isFounder ? 'bg-red-950/20 border-red-900/30' : 'bg-stone-950 border-stone-900'}`}>
             {/* Arka plan dekoru */}
             <div className="absolute top-0 right-0 p-4 opacity-10 font-cinzel text-6xl text-stone-700 select-none">†</div>
             
             <h3 className="font-cinzel text-red-900 text-xs uppercase tracking-[0.2em] mb-4">
               {isFounder ? 'KEHANET' : 'KONSEY HÜKMÜ'}
             </h3>
             <p className="font-mono text-sm text-stone-400 leading-loose">
               {disciple.judgment}
             </p>
          </section>

          {/* RUHSAL KOORDİNATLAR (Stats) */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            
            {/* Stat 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-cinzel text-xs text-stone-500 uppercase tracking-widest">Hiçlik</span>
                <span className="font-mono text-xs text-stone-300">{disciple.stats.voidResonance}%</span>
              </div>
              <div className="h-px w-full bg-stone-800 relative">
                <div className={`absolute top-0 left-0 h-px ${isFounder ? 'bg-red-600' : 'bg-stone-400'}`} style={{ width: `${disciple.stats.voidResonance}%` }}></div>
                <div className={`absolute -top-1 w-2 h-3 ${isFounder ? 'bg-red-600 shadow-[0_0_15px_red]' : 'bg-stone-100'}`} style={{ left: `${disciple.stats.voidResonance}%` }}></div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-cinzel text-xs text-stone-500 uppercase tracking-widest">Denge</span>
                <span className="font-mono text-xs text-stone-300">{disciple.stats.balance}%</span>
              </div>
              <div className="h-px w-full bg-stone-800 relative">
                <div className={`absolute top-0 left-0 h-px ${isFounder ? 'bg-red-600' : 'bg-stone-400'}`} style={{ width: `${disciple.stats.balance}%` }}></div>
                <div className={`absolute -top-1 w-2 h-3 ${isFounder ? 'bg-red-600 shadow-[0_0_15px_red]' : 'bg-stone-100'}`} style={{ left: `${disciple.stats.balance}%` }}></div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-cinzel text-xs text-red-900 uppercase tracking-widest">Yük</span>
                <span className="font-mono text-xs text-red-600">{disciple.stats.burden}%</span>
              </div>
              <div className="h-px w-full bg-stone-800 relative">
                <div className="absolute top-0 left-0 h-px bg-red-900" style={{ width: `${disciple.stats.burden}%` }}></div>
                <div className="absolute -top-1 w-2 h-3 bg-red-600 shadow-[0_0_10px_red]" style={{ left: `${disciple.stats.burden}%` }}></div>
              </div>
            </div>

          </section>

        </div>
      </div>
    </main>
  );
}
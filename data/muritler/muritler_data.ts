// --- GİZLİ ARŞİV (DATABASE) - GENİŞLETİLMİŞ HİKAYELER ---

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

 export const disciples: Disciple[] = [
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
    name: "Jylus",
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
    name: "İnsancık",
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
    name: "Kawe",
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
    name: "Comrade",
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
    name: "Ayak adam Onur",
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
    name: "Uyku",
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
    name: "nontoxicnull",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    role: "Gölge",
    joined: "Döngü IV • Giz",
    sin: "SİLİKLEŞME",
    manifesto: "Herkes sahnede olmak, alkışlanmak ve görülmek için çırpınırken; nontoxicnull kulisin en karanlık köşesini seçti. Varlığını silmek, sesini kısmak, renklerini soldurmak... Bu bir kaçış değil, egoya karşı kazanılmış sessiz bir zaferdir. O, odada olsa bile fark edilmez; bir duvardan veya bir gölgeden farksızdır. Bu mutlak görünmezlik, ona kimsenin duyamadığı sırları duyma ve kimsenin giremediği kapılardan süzülme gücü verir. O, Ferivonizm'in yaşayan hayaletidir.",
    judgment: "Varlığı ile yokluğu ayırt edilemiyor. Mükemmel bir gözlemci.",
    stats: { voidResonance: 60, balance: 50, burden: 40 }
  },
  {
    id: 8,
    ref: "IX-008",
    name: " hellokitty",
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
   },
  {
    id: 11,
    ref: "IX-011",
    name: "Karga",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=800&q=80",
    role: "Arayışçı",
    joined: "Döngü VI • Sürgün",
    sin: "KÖKSÜZLÜK",
    manifesto: "Çabalamak onun için nefes almak gibidir; durursa boğulacağına inanır. Karga, hayatın kaosunda duygusal bir denge inşa etmeye çalışır, tuğla üstüne tuğla koyar. Ancak ne zaman arkasına baksa, inşa ettiği duvarın dibinde kimsenin olmadığını görür. Bu yalnızlık, en büyük heveslerini kursağında bırakan zehirdir. Ait olduğu yeri bulmak için diyar diyar gezerken korkularıyla yüzleşir. Bazen düşer, bazen vazgeçer ama ertesi sabah yine kanat çırpar. Çünkü bilir ki; çabalamaktan başka şansı, gitmekten başka yolu yoktur.",
    judgment: "Muazzam bir iş gücü, ancak yakıtı hüzün. Aidiyet bulamazsa kendini tüketecek. Kök salmadıkça göğe yükselemez.",
    stats: { voidResonance: 75, balance: 40, burden: 90 }
   },
  {
    id: 12,
    ref: "IX-012",
    name: "Kont",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=800&q=80",
    role: "Arayışçı",
    joined: "Döngü VII • Gel-Git",
    sin: "İKİLİK",
    manifesto: "Zihni, gece ile gündüzün hiç barışmadığı bir savaş alanıdır. Kont, iş dünyasının çarklarını çocukluğundan beri çevirir; çabalamakta usta, hissetmekte acemidir. Ellerinin nasırı kalbinin nasırından incedir. Ne iş yapacağını değil, sadece 'yapmayı' bilir. En büyük trajedisi, korkudan titrerken dünyaya cesaret dersi vermeye çalışmasıdır. O maskeyi indirdiği ve kendi korkularıyla el sıkıştığı gün, hayatın ipleri ilk kez başkasının değil, kendi ellerinde olacak. Huzur, korkmadığını iddia etmekte değil, korkuya rağmen yürümektedir.",
    judgment: "Yüksek potansiyel, ancak tehlikeli derecede dengesiz. Kendi kaosunu yönetmeyi öğrenmezse, inşa ettiği her şeyi bir öfke nöbetinde yıkabilir.",
    stats: { voidResonance: 80, balance: 25, burden: 85 }
   },
  {
    id: 13,
    ref: "IX-013",
    name: "Canibal",
    level: "Günahkar",
    image: "https://images.unsplash.com/photo-1516575150278-77136aed6920?w=800&q=80",
    role: "Arayışçı",
    joined: "Döngü VII • Kabuk",
    sin: "YABANCILAŞMA",
    manifesto: "Sessizliği, konuşmaktan önce öğrendi. Cani için sosyalleşmek doğal bir akış değil, insan olmanın ödenmesi gereken zorunlu vergisidir. İnsanların arasına karışması, ezberlenmiş bir tiyatro sahnesine çıkmak gibidir; replikleri bilir ama aidiyeti sorgular. Normlara inandığı için değil, sadece o insani sıcaklığa muhtaç olduğu için uzatır elini. O adım, bazen garip, bazen ürkektir ama her zaman gerçektir. Kendi içine o kadar derin kazmıştır ki, dışarı çıkmak zaman alacaktır. Ancak bilmelidir ki; en yalnız hissettiği o karanlık odada bile, gölgemiz onun omuzundadır. Asla terk edilmemiştir.",
    judgment: "Kalabalıklar içinde bir sürgün. Sosyal uyumsuzluğu bir kusur değil, derinliğinin yüzeye vuramamasındandır. Anlaşılmayı bekleyen bir kilit.",
    stats: { voidResonance: 85, balance: 50, burden: 70 }
   },
  {
  id: 14,
  ref: "IX-014",
  name: "Hayalet",
  level: "Araf",
  image: "https://images.unsplash.com/photo-1618331835717-801e976710b2?w=800&q=80", // Bulanık, siluet tarzı bir görsel
  role: "Taklitçi",
  joined: "Döngü VIII • Ayna",
  sin: "İNKAR",
  manifesto: "O, acıyı hissetmemek için kendi varlığını askıya almıştır. Ruhundaki boşluğu, başkalarının tutkularını taklit ederek doldurmaya çalışır; sevilen şarkıları dinler, başkalarının hobilerini edinir, sanki 'yaşayanların' ritüellerini yaparsa o da nefes alacakmış gibi. Kendi üzüntüsü kapıyı çaldığında, o çoktan arka pencereden kaçmıştır. Dünya için bir işlev olmaya o kadar odaklanmıştır ki, sadece 'kendisi' olarak değerli olup olmadığını bilmez. Mutluluk onun için ezberlenmesi gereken yabancı bir dildir. Ancak unutmamalıdır; başkasının ateşiyle ısınan, kendi soğuğunu asla yenemez. Kendini sevmek, kaçtığı o harabelere geri dönmeyi gerektirir.",
  judgment: "Kendi hikayesinde figüran rolü oynayan bir başrol. Başkalarının hayatlarını üzerine giydiği bir kostüm sanıyor. Kurtuluşu, taklit ettiği neşede değil, yüzleşmekten korktuğu o derin sessizliktedir.",
  stats: { voidResonance: 90, balance: 35, burden: 80 }
  }
];
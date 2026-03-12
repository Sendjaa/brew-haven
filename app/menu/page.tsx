'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronRight, Coffee, Utensils, Leaf, Star, Clock, ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ContactButtons } from '../components/ContactButtons';
import menuData from '@/data/menu.json';

// --- KOMPONEN KARTU MENU (Shopee Style: 2 Kolom Mobile) ---
interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  isBestSeller?: boolean;
}
const PromoBanner = ({ 
  title, 
  subtitle, 
  description, 
  cta, 
  variant = 'primary'
}: { 
  title: string; 
  subtitle: string; 
  description: string; 
  cta: string; 
  variant?: 'primary' | 'secondary' 
}) => (
  <div className={`relative overflow-hidden rounded-[32px] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 min-w-full flex-shrink-0 snap-center ${
    variant === 'primary' ? 'bg-[#7c442c] text-white' : 'bg-[#f5e6d3] text-[#3e2723] border-2 border-[#7c442c]/10'
  }`}>
    <div className="relative z-10 text-center md:text-left flex-1">
      <span className={`inline-block px-3 py-1 text-[10px] font-black rounded-full mb-4 tracking-widest uppercase ${
        variant === 'primary' ? 'bg-amber-500 text-[#3e2723]' : 'bg-[#7c442c] text-white'
      }`}>
        {subtitle}
      </span>
      <h2 className="text-3xl sm:text-4xl font-serif mb-4">{title}</h2>
      <p className={`max-w-md text-sm sm:text-base leading-relaxed ${
        variant === 'primary' ? 'text-amber-100/80' : 'text-[#5d4037]'
      }`}>
        {description}
      </p>
    </div>
    <div className="relative z-10">
      <button className={`px-8 py-4 rounded-full font-bold transition-all shadow-lg active:scale-95 ${
        variant === 'primary' ? 'bg-white text-[#7c442c] hover:bg-amber-50' : 'bg-[#7c442c] text-white hover:bg-[#5d4037]'}`}>
        {cta}
      </button>
    </div>
  </div>
);

/* --- KOMPONEN KARTU MENU --- */
const MenuCardItem = ({ name, description, price, image, isBestSeller }: MenuCardProps) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative">
    {isBestSeller && (
      <div className="absolute top-3 left-3 z-10 bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
        <Star size={10} fill="currentColor" /> BEST SELLER
      </div>
    )}
    <div className="aspect-square overflow-hidden bg-slate-200 relative">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      {/* Badge Harga untuk Mobile */}
      <div className="absolute bottom-2 left-2 right-2 md:hidden">
        <span className="bg-amber-600 text-white font-bold text-[10px] px-2 py-0.5 rounded shadow-lg">
          {price}
        </span>
      </div>
    </div>
    <div className="p-3 md:p-5 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-1 md:mb-2">
        <h3 className="font-bold text-sm md:text-lg text-slate-900 line-clamp-1">{name}</h3>
        {/* Harga untuk Desktop */}
        <span className="hidden md:inline-block font-semibold text-amber-600 bg-amber-50 px-2 py-1 rounded text-sm whitespace-nowrap">
          {price}
        </span>
      </div>
      <p className="text-slate-500 text-[11px] md:text-sm line-clamp-2 leading-relaxed mb-3">
        {description}
      </p>
      <a 
        href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo Brew Haven, saya ingin bertanya lebih lanjut mengenai menu: ${name}`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto flex items-center gap-1 text-[10px] md:text-xs font-bold text-amber-600 uppercase tracking-tighter hover:text-amber-800 transition-colors"
      >
        Tanya Detail
        <ChevronRight size={14} />
      </a>
    </div>
  </div>
);

// --- HALAMAN UTAMA ---
export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(menuData.categories[0].id);
  const currentCategory = menuData.categories.find(cat => cat.id === selectedCategory);
  const promoRef = useRef<HTMLDivElement>(null);

  // Auto-scroll carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (promoRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = promoRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const nextScroll = scrollLeft >= maxScroll - 10 ? 0 : scrollLeft + clientWidth;
        promoRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const categoryIcons: Record<string, React.ReactElement> = {
    "kopi": <Coffee size={18} />,
    "teh": <Leaf size={18} />,
    "food": <Utensils size={18} />,
    "default": <Star size={18} /> as React.ReactElement
  };

  const heroImages: Record<string, string> = {
    "kopi": "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200",
    "teh": "https://images.unsplash.com/photo-1576092762791-dd9e22204045?q=80&w=1200",
    "food": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200",
    "default": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"
  };

  const currentHeroImage = heroImages[selectedCategory] || heroImages["default"];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative h-[40vh] sm:h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            key={currentHeroImage}
            src={currentHeroImage}
            alt="Hero Header"
            className="w-full h-full object-cover animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-background"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl sm:text-7xl font-serif mb-4 tracking-tight">
            {currentCategory?.name}
          </h1>
          <p className="text-sm sm:text-lg text-amber-100 max-w-md mx-auto font-light tracking-widest uppercase">
            Signature Collection
          </p>
        </div>
      </section>

      {/* KONTEN MENU */}
      <main className="py-8 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Info Bar */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-[#a67c52] text-xs font-bold tracking-widest uppercase">
            <div className="flex items-center gap-2"><Clock size={16} /> Tersedia 08:00 - 22:00</div>
            <div className="flex items-center gap-2"><Star size={16} /> Bahan Premium</div>
            <div className="flex items-center gap-2"><Utensils size={16} /> Freshly Made</div>
          </div>

          {/* Promo Banner */}
          <div className="relative mb-16 group shadow-none">
            <div 
              ref={promoRef}
              className="flex overflow-x-auto shadow-none snap-x snap-mandatory scroll-smooth gap-4 no-scrollbar bg-transparent"
            >
              <PromoBanner 
                title="Beli 2 Kopi, Gratis 1 Pastry!"
                subtitle="Promo Weekday"
                description="Nikmati sore harimu dengan promo spesial kami. Berlaku untuk semua varian Signature Coffee setiap hari Senin - Jumat."
                cta="Klaim Promo Sekarang"
                variant="primary"
              />
              <PromoBanner 
                title="Diskon 20% Untuk Member"
                subtitle="Loyalty Program"
                description="Daftar menjadi member Brew Haven dan nikmati potongan harga langsung untuk setiap pembelian menu favoritmu."
                cta="Daftar Member"
                variant="secondary"
              />
            </div>
            {/* Hint for scrolling */}
            <div className="flex justify-center mt-4 gap-2 md:hidden">
              <div className="w-2 h-2 rounded-full bg-[#7c442c]"></div>
              <div className="w-2 h-2 rounded-full bg-[#7c442c]/20"></div>
            </div>
          </div>

          {/* Tabs Kategori Modern */}
          <div className="flex overflow-x-auto gap-4 mb-16 pb-4 hide-scrollbar justify-start md:justify-center">
            {menuData.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 whitespace-nowrap px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#7c442c] text-white shadow-xl shadow-orange-900/20 scale-105'
                    : 'bg-white text-slate-500 hover:bg-amber-50 hover:text-amber-700'
                }`}
              >
                {categoryIcons[category.id] || categoryIcons["default"]}
                {category.name}
              </button>
            ))}
          </div>

          {/* Grid Menu: 2 kolom di mobile, 3 di desktop */}
          {currentCategory && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {currentCategory.items.map((item, idx) => (
                  <MenuCardItem
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    image={item.image}
                    isBestSeller={idx === 0}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <ContactButtons />
      <Footer />
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
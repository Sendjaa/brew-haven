'use client';

import React from 'react';
import { Coffee, MessageCircle, Utensils, ArrowRight, Heart } from 'lucide-react';

// --- MOCK UI COMPONENTS ---
const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none active:scale-95 shadow-sm";
  const variants = {
    default: "bg-[#7c442c] text-[#fdf8f3] hover:bg-[#5e3421] shadow-orange-900/10",
    outline: "border-2 border-[#7c442c] bg-transparent text-[#7c442c] hover:bg-[#fdf8f3]",
    whatsapp: "bg-[#25D366] text-white hover:shadow-lg hover:shadow-green-200"
  };
  const sizes = { 
    default: "h-12 px-8",
    lg: "h-14 px-10",
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- KOMPONEN HERO SECTION HANGAT ---
export function HeroSection({
  namaCafe = "Brew Haven",
  slogan = "Dibuat dengan Sepenuh Hati",
  deskripsi = "Temukan kenyamanan di setiap tegukan kopi kami, di mana setiap detail dirancang untuk memberikan pengalaman yang tak terlupakan.",
  gambarUtama = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
  linkMenu = "/menu",
  nomorWhatsApp = "6281234567890",
  pesanWhatsApp = "Halo, saya ingin memesan kopi."
}) {
  const linkWA = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesanWhatsApp)}`;

  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center bg-[#fdf8f3] overflow-hidden py-16 lg:py-0 selection:bg-[#7c442c] selection:text-white">
      {/* Background Decor - Warm Organic Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] bg-[#f5e6d3] rounded-full blur-[100px] opacity-70"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#efdfc8] rounded-full blur-[120px] opacity-60"></div>
        {/* Subtle Texture or Grain could be added here via CSS */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Kolom Teks */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7c442c]/5 border border-[#7c442c]/10 text-[#7c442c] mb-6 animate-in fade-in slide-in-from-top-4 duration-1000">
              <Heart size={14} className="fill-[#7c442c]" />
              <span className="text-xs font-bold tracking-wide">{slogan}</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-medium text-[#3e2723] mb-6 leading-[1.1] animate-in fade-in slide-in-from-left-8 duration-1000">
              Menemukan <br />
              <span className="italic text-[#a67c52]">Kenyamanan</span> di <br />
              {namaCafe}
            </h1>

            <p className="text-lg text-[#5d4037] mb-10 max-w-lg leading-relaxed opacity-90 animate-in fade-in slide-in-from-left-8 duration-1000 delay-200">
              {deskripsi}
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
              <a href={linkMenu} className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto flex items-center gap-3 group">
                  <Utensils size={18} />
                  Lihat Menu
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              
              <a href={linkWA} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="whatsapp" className="w-full sm:w-auto flex items-center gap-3">
                  <MessageCircle size={18} />
                  Pesan Sekarang
                </Button>
              </a>
            </div>
          </div>

          {/* Kolom Gambar */}
          <div className="lg:col-span-6 relative order-1 lg:order-2">
            <div className="relative animate-in fade-in zoom-in-95 duration-1000">
              {/* Organic Frame Shape */}
              <div className="relative aspect-square w-full max-w-[500px] mx-auto overflow-hidden shadow-2xl shadow-orange-900/20" 
                   style={{ borderRadius: '60% 40% 70% 30% / 40% 50% 60% 70%' }}>
                <img 
                  src={gambarUtama} 
                  alt={`Suasana hangat di ${namaCafe}`} 
                  className="absolute inset-0 w-full h-full object-cover sepia-[0.1] hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#7c442c]/10 mix-blend-multiply"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#a67c52]/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 -right-4 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-full bg-[#fdf8f3] flex items-center justify-center">
                  <Coffee size={20} className="text-[#7c442c]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#a67c52] uppercase tracking-wider">Terlaris</p>
                  <p className="text-sm font-bold text-[#3e2723]">Caramel Latte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
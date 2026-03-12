import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContactButtons } from './components/ContactButtons';
import { Footer } from './components/Footer';
import { MenuCard } from './components/MenuCard';
import Testimonials from './components/Testimonials';
import { MapSection } from './components/MapSection';
import { GalleryGrid } from './components/GalleryGrid';
import menuData from '@/data/menu.json';
import { Coffee, ArrowRight } from 'lucide-react';

export default function Home() {
  // Get featured items from first 2 categories
  const featuredItems = menuData.categories
    .slice(0, 2)
    .flatMap(cat => cat.items.slice(0, 2))
    .slice(0, 4);

  const galleryImages = [
    { id: '1', src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop', alt: 'Suasana Barista' },
    { id: '2', src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&auto=format&fit=crop', alt: 'Meja Pelanggan' },
    { id: '3', src: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop', alt: 'Kopi dan Buku' },
    { id: '4', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', alt: 'Interior Cafe' },
  ];

  const newLocal = "text-center mb-12";
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      {/* Featured Items Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={newLocal}>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Minuman & Hidangan Favorit Kami
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nikmati pilihan minuman dan hidangan terbaik yang kami tawarkan, dibuat dengan bahan berkualitas untuk memanjakan lidah Anda.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredItems.map((item) => (
              <MenuCard
                key={item.id}
                name={item.name}
                description={item.description}
                price={item.price}
                category={item.id}
                image={item.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/menu"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
            >
              Lihat Selengkapnya
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Gallery & Promo Section */}
      <section className="py-20 bg-[#fdf8f3] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Promo Card Interaktif */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="group relative bg-[#7c442c] rounded-[40px] p-8 sm:p-12 text-white overflow-hidden shadow-2xl transform hover:-rotate-2 transition-all duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-amber-500/40 transition-colors"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-[#3e2723] text-[10px] font-black rounded-full mb-6 tracking-widest uppercase">
                    Limited Offer
                  </span>
                  <h3 className="text-4xl font-serif mb-4 leading-tight">Momen Spesial, <br/>Harga Spesial.</h3>
                  <p className="text-amber-100/80 mb-8 text-sm leading-relaxed">
                    Dapatkan potongan 15% untuk setiap pembelian di area "Sudut Favorit" kami setiap jam 2 siang hingga 5 sore.
                  </p>
                  <a href="/menu" className="inline-flex items-center gap-2 bg-white text-[#7c442c] px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-50 transition-colors shadow-lg">
                    Ambil Promo <ArrowRight size={16} />
                  </a>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Coffee size={200} />
                </div>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="mb-8 text-center lg:text-left">
                <h2 className="text-3xl font-serif text-[#3e2723] mb-2">Sudut Favorit</h2>
                <p className="text-[#a67c52] font-medium">Intip suasana hangat di Brew Haven</p>
              </div>
              <GalleryGrid images={galleryImages} />
              <div className="mt-6 text-center lg:text-right">
                <a href="/gallery" className="inline-flex items-center gap-2 text-[#7c442c] font-bold hover:gap-4 transition-all">
                  Lihat Semua Foto <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      {/* <MapSection /> */}
      <ContactButtons />
      <Footer />
    </div>
  );
}

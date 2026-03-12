'use client';

import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import t from "@/data/testimoni.json";
import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        const nextScroll = scrollLeft >= maxScroll - 10 ? 0 : scrollLeft + 350;
        scrollRef.current.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-[#fdf8f3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3e2723] mb-4">Apa Kata Mereka?</h2>
          <div className="w-20 h-1 bg-[#a67c52] mx-auto rounded-full"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide no-scrollbar scroll-smooth"
          >
            {t.testimonials.map((item, i) => (
              <div 
                key={i} 
                className="flex-none w-[300px] sm:w-[350px] snap-center bg-white p-8 rounded-[32px] shadow-sm border border-[#efdfc8] relative group hover:shadow-xl transition-all duration-500"
              >
                <Quote className="absolute top-6 right-8 text-[#efdfc8] group-hover:text-[#a67c52] transition-colors" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <Star key={starIdx} size={14} className={`${starIdx < item.rating ? 'fill-[#a67c52] text-[#a67c52]' : 'text-[#efdfc8]'}`} />
                  ))}
                </div>
                <p className="text-[#5d4037] mb-8 italic leading-relaxed min-h-[80px]">"{item.comment}"</p>
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full object-cover border-2 border-[#fdf8f3]" />
                  <div>
                    <h4 className="font-bold text-[#3e2723] text-sm">{item.name}</h4>
                    <p className="text-[10px] text-[#a67c52] uppercase tracking-widest">Pelanggan Setia</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Hint for scrolling on desktop */}
          <div className="hidden md:block text-center mt-4 text-[#a67c52]/50 text-xs font-medium animate-pulse">
            Geser untuk melihat lebih banyak →
          </div>
        </div>
      </div>
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
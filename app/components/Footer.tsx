import Link from "next/link";
import { Coffee, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      <div>
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <div className="bg-slate-900 p-1.5 rounded-lg">
            <Coffee className="text-amber-500" size={18} />
          </div>
          <span className="font-black text-xl tracking-widest text-slate-900">BREW HAVEN</span>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
          Brew Haven adalah tempat di mana setiap tegukan kopi dan setiap gigitan hidangan kami dirancang untuk memberikan pengalaman yang tak terlupakan. Kami berkomitmen untuk menyajikan kualitas terbaik dengan sentuhan kehangatan dan keramahan, menjadikan setiap kunjungan Anda sebagai momen istimewa yang penuh kenangan manis.
        </p>
      </div>
      <div className="flex flex-col gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
        <span className="text-slate-900 mb-2">Navigation</span>
        <Link href="/" className="hover:text-amber-600 transition-colors">Beranda</Link>
        <Link href="/menu" className="hover:text-amber-600 transition-colors">Menu</Link>
        <Link href="/gallery" className="hover:text-amber-600 transition-colors">Galeri</Link>
      </div>
      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex gap-4">
          {['Instagram', 'Twitter', 'Facebook'].map(social => (
            <div key={social} className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-100 transition-all cursor-pointer">
               {social === 'Instagram' && <Instagram size={18} />}
               {social === 'Twitter' && <Twitter size={18} />}
               {social === 'Facebook' && <Facebook size={18} />}
            </div>
          ))}
        </div>
        <span className="text-[10px] text-slate-300 tracking-tighter uppercase font-bold">
          &copy; 2026 Haven Coffee Co.
        </span>
      </div>
    </div>
  </footer>
  );
}
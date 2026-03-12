import { MessageCircle, MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

export function ContactButtons() {
  const whatsappNumber = "6281234567890";
  const whatsappMessage = "Halo Brew Haven! Saya ingin bertanya mengenai menu atau reservasi.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 bg-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-[#3e2723] mb-4">Mari Terhubung</h2>
          <p className="text-[#a67c52] font-medium">Kami selalu senang mendengar cerita atau pesanan Anda</p>
          <div className="w-16 h-1 bg-[#7c442c] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 bg-white rounded-[32px] border border-[#efdfc8] hover:shadow-xl hover:border-[#7c442c] transition-all duration-500"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center text-[#25D366]">
                <MessageCircle size={28} fill="currentColor" className="text-[#25D366]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#3e2723]">WhatsApp</h3>
                <p className="text-sm text-[#a67c52]">Pesan cepat & mudah</p>
              </div>
            </div>
            <ArrowRight className="text-[#efdfc8] group-hover:text-[#7c442c] group-hover:translate-x-2 transition-all" />
          </a>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-8 bg-[#7c442c] rounded-[32px] text-white hover:shadow-xl hover:shadow-orange-900/20 transition-all duration-500"
          >
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Petunjuk Arah</h3>
                <p className="text-amber-100/70 text-sm">Temukan lokasi kami</p>
              </div>
            </div>
            <ArrowRight className="text-white/30 group-hover:text-white group-hover:translate-x-2 transition-all" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          <ContactInfo icon={<MapPin size={20} />} title="Alamat" detail="Jl. Kopi No. 123, Jakarta Selatan" />
          <ContactInfo icon={<Clock size={20} />} title="Jam Buka" detail="Setiap Hari: 08:00 - 22:00" />
          <ContactInfo icon={<Phone size={20} />} title="Telepon" detail="+62 812 3456 7890" isLink href="tel:+6281234567890" />
        </div>
      </div>
    </section>
  );
}

const ContactInfo = ({ icon, title, detail, isLink, href }: { icon: React.ReactNode, title: string, detail: string, isLink?: boolean, href?: string }) => (
  <div className="flex flex-col items-center group">
    <div className="w-12 h-12 rounded-full bg-[#f5e6d3] flex items-center justify-center text-[#7c442c] mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="font-bold text-[#3e2723] mb-1 uppercase text-xs tracking-widest">{title}</h4>
    {isLink ? (
      <a href={href} className="text-[#5d4037] hover:text-[#7c442c] transition-colors">{detail}</a>
    ) : (
      <p className="text-[#5d4037]">{detail}</p>
    )}
  </div>
);

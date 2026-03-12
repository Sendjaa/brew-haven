import { MapPin, Coffee, ArrowRight} from "lucide-react";

export function MapSection() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.66642745172!2d106.8249641!3d-6.1753924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0xca2062307a3fec04!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1700000000000";

  return (
    <section className="py-20 bg-[#f5e6d3]/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-[#a67c52] font-bold text-xs uppercase tracking-[0.2em] mb-4">
              <MapPin size={16} />
              Kunjungi Kami
            </div>
            <h2 className="text-4xl font-serif text-[#3e2723] mb-6">Lokasi Kami</h2>
            <p className="text-[#5d4037] text-lg mb-8 leading-relaxed">
              Jl. Kopi No. 123, Jakarta Selatan. <br />
              Temukan kami di sudut jalan yang tenang, tempat sempurna untuk melarikan diri sejenak dari hiruk pikuk kota.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#5d4037]">
                <div className="w-8 h-8 rounded-full bg-[#7c442c]/10 flex items-center justify-center text-[#7c442c]">
                  <Coffee size={16} />
                </div>
                <span>Senin - Jumat: 08.00 - 22.00</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#5d4037]">
                <div className="w-8 h-8 rounded-full bg-[#7c442c]/10 flex items-center justify-center text-[#7c442c]">
                  <Coffee size={16} />
                </div>
                <span>Sabtu - Minggu: 09.00 - 23.00</span>
              </div>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#7c442c] font-black uppercase text-xs tracking-widest border-b-2 border-[#7c442c] pb-1 hover:text-[#a67c52] hover:border-[#a67c52] transition-all"
            >
              Buka di Google Maps <ArrowRight size={14} />
            </a>
          </div>

          <div className="relative">
            <div className="rounded-[40px] overflow-hidden shadow-2xl h-[450px] w-full border-8 border-white">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kopi Senja Location"
                className="grayscale-[0.2] contrast-[1.1]"
              ></iframe>
            </div>
            {/* Dekorasi Aksen */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#a67c52]/20 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
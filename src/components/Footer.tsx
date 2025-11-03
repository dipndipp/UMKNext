export default function Footer() {
  return (
    <footer className="relative bg-[#0B0F18] text-gray-300 overflow-hidden pt-78 pb-10">
      {/* Lengkungan putih cekung ke bawah */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="w-full h-[200px]"
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0,0 L1440,0 C960,220 480,220 0,0 Z" />
        </svg>
      </div>

      {/* konten tengah */}
      <div className="relative z-10 -mt-6 flex flex-col items-center text-center">
        <img
          src="footer-img.webp"
          alt="UMKNext Logo"
          className="w-[1100px] md:w-[1000px] select-none drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)]"
          draggable={false}
        />
        <p className="mt-3 text-sm md:text-base text-gray-400 tracking-wide">
          Menghubungkan masyarakat dan UMKM melalui desain cerdas.
        </p>
      </div>

      {/* bar bawah */}
      <div className="relative z-10 mt-12 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between text-sm">
        {/* kiri */}
        <div className="flex items-center gap-2">
          <img src="icon.png" alt="" className="w-7" />
          <span className="text-white font-semibold tracking-wide">
            UMKNext
          </span>
        </div>

        {/* kanan: nav + copyright di bawah tapi sejajar kanan */}
        <div className="flex flex-col items-end text-gray-400 font-medium">
          <nav className="flex gap-8 mb-1">
            <a href="#beranda" className="hover:text-white transition">
              Beranda
            </a>
            <a href="#eksplorumkm" className="hover:text-white transition">
              Eksplor UMKM
            </a>
            <a href="#tentangkami" className="hover:text-white transition">
              Tentang Kami
            </a>
          </nav>

          {/* copyright sejajar indent kanan */}
          <p className="text-xs text-gray-500 text-right">
            © 2025 UMKNext — Indonesia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

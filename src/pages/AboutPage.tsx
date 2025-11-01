// src/pages/AboutPage.tsx
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden font-sans">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center text-center px-6 pt-40 pb-32">
        <div className="flex items-center gap-2 select-none px-4 py-1.5 rounded-[20px] border border-gray-300/70 shadow-sm backdrop-blur-md bg-white/70 hover:bg-white/90 transition-all duration-300">
          <img src="logo.webp" alt="UMKNext" className="h-8 w-auto" />
        </div>

        <m.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-snug mt-8"
        >
          Menghubungkan Masyarakat dan UMKM <br /> Melalui Inovasi Digital
        </m.h1>

        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-[750px] mx-auto leading-relaxed"
        >
          UMKNext hadir untuk membawa pelaku usaha lokal ke masa depan ekonomi
          digital yang cerdas dan inklusif.
        </m.p>
      </section>

      {/* ===== DIAGRAM SECTION ===== */}
      <section className="relative mt-16 w-full max-w-[1150px] mx-auto flex justify-center items-center min-h-[640px] px-6">
        {/* Efek pulse glow */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[300px] h-[300px] bg-blue-200/20 blur-3xl rounded-full animate-pulse"></div>
        </div>

        {/* Gambar utama */}
        <m.img
          src="/bigimage-aboutus.webp"
          alt="Diagram UMKNext"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-[68%] max-w-[717px] h-auto object-contain select-none pointer-events-none z-10"
        />

        {/* Teks kiri atas */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute top-[8%] left-[7%] max-w-[270px] text-left"
        >
          <h3 className="font-semibold text-gray-900 text-[15px] md:text-base">
            Melihat potensi besar pelaku usaha lokal
          </h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Melihat potensi besar pelaku usaha lokal yang belum mendapat
            eksposur optimal di dunia online.
          </p>
        </m.div>

        {/* Teks kanan atas */}
        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-[8%] right-[7%] max-w-[270px] text-right"
        >
          <h3 className="font-semibold text-gray-900 text-[15px] md:text-base">
            Berawal dari visi sederhana
          </h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Membantu UMKM lokal agar tidak tertinggal di era digital.
          </p>
        </m.div>

        {/* Teks kiri tengah */}
        <m.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute top-[44%] left-[1%] max-w-[255px] text-left"
        >
          <h3 className="font-semibold text-gray-900 text-[15px] md:text-base">
            Menggabungkan inovasi dan kolaborasi
          </h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Menggabungkan inovasi dan kolaborasi untuk mempercepat digitalisasi
            UMKM di seluruh Indonesia.
          </p>
        </m.div>

        {/* Teks kanan tengah */}
        <m.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-[44%] right-[2.5%] max-w-[255px] text-right"
        >
          <h3 className="font-semibold text-gray-900 text-[15px] md:text-base">
            Menghadirkan platform yang menghubungkan
          </h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Menghadirkan platform yang menghubungkan pelaku UMKM dan masyarakat
            melalui sistem berbasis AI.
          </p>
        </m.div>

        {/* Teks bawah tengah */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-[-22%] left-1/2 -translate-x-1/2 max-w-[320px] text-center"
        >
          <h3 className="font-semibold text-gray-900 text-[15px] md:text-base">
            Menjadikan digitalisasi sebagai solusi nyata
          </h3>
          <p className="text-gray-600 text-sm mt-1 leading-relaxed">
            Mendorong pertumbuhan ekonomi lokal yang inklusif dan berkelanjutan
            melalui digitalisasi yang berdampak nyata.
          </p>
        </m.div>
      </section>

      {/* ===== VISI & MISI SECTION ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-52 text-left">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          {/* VISI */}
          <div>
            <div className="flex items-center gap-2 select-none px-3 py-1.5 rounded-full border border-blue-400/60 bg-white/70 backdrop-blur-md w-fit mb-5 shadow-sm">
              <span className="flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                U
              </span>
              <span className="text-sm font-medium text-gray-800 tracking-tight">
                Visi
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed text-justify">
              Memberdayakan UMKM melalui teknologi digital yang mudah diakses
              oleh semua orang.
            </h3>
          </div>

          {/* MISI */}
          <div className="md:border-l md:border-gray-300 md:pl-12">
            <div className="flex items-center gap-2 select-none px-3 py-1.5 rounded-full border border-blue-400/60 bg-white/70 backdrop-blur-md w-fit mb-5 shadow-sm">
              <span className="flex items-center justify-center bg-blue-100 text-blue-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                U
              </span>
              <span className="text-sm font-medium text-gray-800 tracking-tight">
                Misi
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-relaxed text-justify">
              Meningkatkan eksposur digital UMKM lokal, menghubungkan pelaku
              serta menghadirkan solusi berbasis AI.
            </h3>
          </div>
        </div>

        {/* PEMBATAS */}
        <div className="my-28 border-t border-gray-200 w-full"></div>

        {/* AJAKAN KOLABORASI */}
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 leading-snug">
              Wujudkan Perubahan Bersama Kami
            </h3>
          </div>

          <div>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium text-justify">
              Bersama{" "}
              <span className="font-semibold text-blue-600">UMKNext</span>, mari
              berkolaborasi, berinovasi, dan tumbuh untuk membawa UMKM Indonesia
              ke masa depan digital yang lebih cerdas.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

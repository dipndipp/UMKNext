// src/pages/AboutPage.tsx
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800 overflow-x-hidden font-sans">
      <Navbar />
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

        {/* grid card */}

        <section className="max-w-6xl mx-auto px-6 mt-52 mb-40">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-10 justify-center items-stretch">
            {[
              {
                id: 1,
                title: "Kolaborasi untuk Kemajuan",
                desc: "Kami percaya bahwa kekuatan sejati ada pada kebersamaan. Dengan menjalin kolaborasi antara pelaku UMKM, pengguna, dan teknologi, kita dapat membangun ekosistem yang saling mendukung dan berkembang bersama menuju kemajuan ekonomi digital.",
                width: "max-w-[480px]",
              },
              {
                id: 2,
                title: "Inovasi Tanpa Batas",
                desc: "UMKNext hadir untuk mendorong setiap ide menjadi kenyataan. Melalui teknologi dan solusi berbasis AI, kami mengajak Anda untuk berinovasi tanpa batas, menciptakan peluang baru dan menjawab tantangan digital dengan cara yang lebih cerdas.",
                width: "max-w-[530px]",
              },
              {
                id: 3,
                title: "Terhubung Lebih Dekat",
                desc: "Jadilah bagian dari jaringan yang mempertemukan masyarakat dengan pelaku UMKM lokal. Dengan konektivitas yang kuat, kami ingin mempererat hubungan antara konsumen dan pelaku usaha di seluruh Indonesia.",
                width: "max-w-[500px]",
              },
              {
                id: 4,
                title: "Tumbuh dan Berkembang",
                desc: "Bersama UMKNext, kita bantu UMKM beradaptasi dengan perubahan zaman. Melalui dukungan digital dan jaringan luas, kami ingin setiap pelaku usaha lokal mampu bertahan, berkembang, dan bersinar di era modern.",
                width: "max-w-[550px]",
              },
            ].map((item, i) => (
              <m.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className={`relative border-2 border-dashed border-gray-300/80 rounded-2xl p-8 bg-white shadow-sm hover:border-blue-400/80 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-[215px] ${item.width}`}
              >
                {/* Nomor */}
                <div className="absolute -top-4 -left-4 w-9 h-9 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold text-sm flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300">
                  {item.id}
                </div>

                {/* Isi */}
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-justify text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </section>

        {/* carousel anggota */}
        <section className="relative flex flex-col items-center text-center px-6 pt-14 pb-32">
          <div className="flex items-center gap-2 select-none px-7 py-1.5 rounded-[10px] border border-blue-300/70 -md bg-white/70 hover:bg-white/90 transition-all duration-300">
            <p>Tim Kami</p>
          </div>

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-snug mt-8"
          >
            Bersama Membangun UMKM Digital
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-[750px] mx-auto leading-relaxed"
          >
            Kami percaya bahwa kolaborasi dan inovasi dapat membawa pelaku usaha
            lokal menuju kesuksesan di dunia digital.
          </m.p>
        </section>
        {/* ===== TEAM / AVATAR CAROUSEL SECTION (SMOOTH & CENTERED) ===== */}
        <section className="relative mt-40 mb-40 flex flex-col items-center justify-center text-center">
          <m.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
          >
            Tim di Balik UMKNext
          </m.h2>

          {(() => {
            const [activeIndex, setActiveIndex] = useState(0);
            const team = [
              {
                id: 1,
                name: "Muhammad Naufal Waiz",
                role: "Ketua Tim & Visionary",
                imgActive: "/robot1.webp",
                imgInactive: "/robot2.webp",
                instagram: "https://instagram.com/",
                github: "https://github.com/",
                linkedin: "https://linkedin.com/in/",
              },
              {
                id: 2,
                name: "Muhammad Ihsan Nadhif",
                role: "Frontend Developer & AI Developer",
                imgActive: "/robot1.webp",
                imgInactive: "/robot2.webp",
                instagram: "https://instagram.com/",
                github: "https://github.com/",
                linkedin: "https://linkedin.com/in/",
              },
              {
                id: 3,
                name: "Alvin Dwi Ardha",
                role: "UI/UX Designer",
                imgActive: "/robot1.webp",
                imgInactive: "/robot2.webp",
                instagram: "https://instagram.com/",
                github: "https://github.com/",
                linkedin: "https://linkedin.com/in/",
              },
            ];

            const slideInterval = 2500;

            useEffect(() => {
              const timer = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % team.length);
              }, slideInterval);
              return () => clearInterval(timer);
            }, []);

            return (
              <div className="flex flex-col items-center w-full max-w-5xl">
                {/* Avatar Row */}
                <div className="flex justify-center items-center gap-8 md:gap-12 mb-10 relative">
                  {team.map((member, index) => {
                    const isActive = index === activeIndex;
                    return (
                      <m.div
                        key={member.id}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={() =>
                          setActiveIndex((prev) => (prev + 1) % team.length)
                        }
                        animate={{
                          scale: isActive ? 1.25 : 0.9,
                          opacity: isActive ? 1 : 0.5,
                          filter: isActive ? "grayscale(0%)" : "grayscale(80%)",
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                        className="cursor-grab select-none"
                      >
                        <img
                          src={isActive ? member.imgActive : member.imgInactive}
                          alt={member.name}
                          className={`w-[150px] md:w-[200px] h-auto transition-all duration-500 ${
                            isActive
                              ? "drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                              : ""
                          }`}
                        />
                      </m.div>
                    );
                  })}
                </div>

                {/* Caption */}
                <div className="mt-4">
                  <m.h3
                    key={team[activeIndex].name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-2xl md:text-3xl font-bold text-blue-600"
                  >
                    {team[activeIndex].name}
                  </m.h3>
                  <m.p
                    key={team[activeIndex].role}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gray-700 text-base md:text-lg mt-1"
                  >
                    {team[activeIndex].role}
                  </m.p>

                  {/* Social Links */}
                  <div className="mt-8 flex justify-center gap-8">
                    <a
                      href={team[activeIndex].instagram}
                      target="_blank"
                      className="group w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-300 hover:border-pink-400 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all duration-300"
                    >
                      <img
                        src="icons/instagram.svg"
                        alt="Instagram"
                        className="w-6 h-6 opacity-80 group-hover:opacity-100"
                      />
                    </a>
                    <a
                      href={team[activeIndex].github}
                      target="_blank"
                      className="group w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-300 hover:border-gray-700 hover:shadow-[0_0_12px_rgba(107,114,128,0.4)] transition-all duration-300"
                    >
                      <img
                        src="icons/github.svg"
                        alt="GitHub"
                        className="w-6 h-6 opacity-80 group-hover:opacity-100"
                      />
                    </a>
                    <a
                      href={team[activeIndex].linkedin}
                      target="_blank"
                      className="group w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-300 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(59,130,246,0.4)] transition-all duration-300"
                    >
                      <img
                        src="icons/linkedin.svg"
                        alt="LinkedIn"
                        className="w-6 h-6 opacity-80 group-hover:opacity-100"
                      />
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </section>
      </section>

      <Footer />
    </main>
  );
}

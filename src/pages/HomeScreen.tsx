import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  FaStore,
  FaRobot,
  FaArrowDown,
  FaArrowRight,
  FaPlus,
  FaMinus,
  FaMapMarkedAlt,
} from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import Footer from "../components/Footer";
import { kojaUmkmList } from "../data/kojaUmkms";

export default function HomeScreen() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Lazy load ScrollTrigger — cuma dimuat pas user mulai scroll
  useEffect(() => {
    // kasih delay 1 detik supaya GSAP gak ganggu FCP
    const timer = setTimeout(async () => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: -10,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            scrub: true,
          },
        });
      }
    }, 1000);

    // bersihin timeout kalau komponen unmount
    return () => clearTimeout(timer);
  }, []);

  const faqs = [
    {
      question: "Apa itu UMKNext?",
      answer:
        "UMKNext adalah platform digital yang membantu masyarakat menemukan, menjelajahi, dan berinteraksi dengan UMKM lokal secara cerdas dan interaktif melalui Asisten AI.",
    },
    {
      question: "Bagaimana cara kerja Asisten AI di UMKNext?",
      answer:
        "Asisten AI bekerja dengan menganalisis kebutuhan pengguna melalui percakapan sederhana, lalu memberikan rekomendasi UMKM yang relevan di sekitar pengguna.",
    },
    {
      question: "Bagaimana cara menghubungi tim UMKNext?",
      answer:
        "Kamu bisa menghubungi tim UMKNext melalui halaman Kontak kami atau langsung lewat email di support@umknext.id.",
    },
    {
      question: "Apakah UMKNext bisa digunakan di smartphone?",
      answer:
        "Ya, UMKNext sudah sepenuhnya responsif dan bisa digunakan di semua perangkat termasuk smartphone.",
    },
    {
      question: "Apa yang membuat UMKNext berbeda dari platform lain?",
      answer:
        "UMKNext menggabungkan teknologi AI dengan pendekatan human-centered design untuk memberikan pengalaman eksplorasi UMKM yang intuitif dan interaktif.",
    },
  ];

  const featuredUmkms = kojaUmkmList.slice(0, 2);

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="overflow-x-hidden font-sans text-gray-800">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        id="beranda"
        className="min-h-screen flex flex-col justify-center items-center bg-white text-center text-gray-900 px-6 relative overflow-hidden mt-26"
      >
        {/* Gambar Maskot */}
        <motion.img
          src="/hero.webp"
          alt="UMKNext mascot"
          loading="lazy"
          decoding="async"
          width={320}
          height={320}
          className="w-64 md:w-72 mb-6 select-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          draggable={false}
          viewport={{ once: true }}
        />

        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold leading-snug text-gray-900 mb-4"
          viewport={{ once: true }}
        >
          Mendorong UMKM ke Era <br className="hidden sm:block" />
          Digital Berikutnya
        </motion.h1>

        {/* Deskripsi */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-xl mx-auto text-gray-600 text-base md:text-lg mb-8"
        >
          Temukan, jelajahi, dan dukung pelaku usaha lokal dengan bantuan
          teknologi cerdas UMKNext.
        </motion.p>

        {/* Tombol Aksi */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            href="#explore"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 transition-all duration-300 relative overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <FaStore className="text-lg relative z-10" />
            <span className="relative z-10">Eksplor UMKM</span>
          </motion.a>

          <Link to="/chatbot">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaRobot className="text-lg relative z-10" />
              <span className="relative z-10">Tanya Asisten AI</span>
            </motion.div>
          </Link>
        </motion.div>

        {/* Panah Scroll */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 0.6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="relative mt-24 flex justify-center"
        >
          <div className="relative flex items-center justify-center w-16 h-20">
            {/* SVG tameng */}
            <svg
              viewBox="0 0 64 72"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-16 h-20"
            >
              <path
                d="M32 2 L58 12 C58 40 48 58 32 70 C16 58 6 40 6 12 Z"
                fill="rgba(255,255,255,0.8)"
                stroke="rgba(37,99,235,0.5)"
                strokeWidth="2"
              />
            </svg>

            {/* efek glow dalam */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-400/25 via-cyan-400/15 to-transparent blur-sm" />

            {/* ikon panah */}
            <FaArrowDown className="relative z-10 text-blue-600 text-2xl animate-bounce drop-shadow" />
          </div>
        </motion.div>
      </section>

      {/* WHY SECTION */}
      <section
        id="eksplorumkm"
        className="relative py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20 px-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-4 py-1.5 mb-4 text-sm font-medium border border-gray-300 rounded-full bg-white/80 shadow-sm hover:shadow transition"
          >
            Kenapa Berbeda?
          </motion.button>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kenapa Memilih <span className="text-blue-600">UMKNext?</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            UMKNext membantu masyarakat menjelajahi UMKM lokal secara cerdas dan
            interaktif lewat Asisten AI — kombinasi kecerdasan buatan dan
            eksplorasi digital yang memudahkan pengguna.
          </p>
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto flex flex-col gap-24">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10 px-6"
          >
            <div className="flex-1 text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-blue-100/50 border border-blue-200/50"
              >
                <LuSparkles className="text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  Asisten AI
                </span>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Asisten AI Interaktif
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Membantu pengguna mencari dan menemukan UMKM sesuai kebutuhan
                hanya dengan percakapan sederhana. Cukup tanya — AI akan
                merekomendasikan usaha terbaik di sekitar Anda.
              </p>
              <Link to="/chatbot">
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold group cursor-pointer"
                >
                  Coba Asisten AI Sekarang
                  <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                </motion.div>
              </Link>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex-1 flex justify-center relative"
            >
              <div className="absolute inset-0 bg-blue-100/40 blur-3xl rounded-full scale-75 -z-10" />
              <img
                src="/mockup-ai.webp"
                alt="AI Assistant illustration"
                className="w-72 md:w-80 select-none drop-shadow-lg"
                draggable={false}
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row-reverse items-center gap-10 px-6"
          >
            <div className="flex-1 text-left md:text-right">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-cyan-100/50 border border-cyan-200/50 md:ml-auto"
              >
                <FaMapMarkedAlt className="text-cyan-600" />
                <span className="text-sm font-medium text-cyan-700">
                  Eksplorasi
                </span>
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Eksplorasi UMKM Mudah
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Temukan berbagai usaha dengan tampilan peta interaktif dan
                sistem pencarian cepat. Jelajahi UMKM lokal yang relevan hanya
                dalam beberapa klik.
              </p>
              <motion.a
                href="#explore"
                whileHover={{ x: -4 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-cyan-600 font-semibold group md:ml-auto cursor-pointer"
              >
                <FaArrowRight className="transition-transform group-hover:-translate-x-1 rotate-180" />
                Jelajahi Sekitar
              </motion.a>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex-1 flex justify-center relative"
            >
              <div className="absolute inset-0 bg-cyan-100/40 blur-3xl rounded-full scale-75 -z-10" />
              <img
                src="/mockup-ai.webp"
                alt="Explore UMKM illustration"
                className="w-72 md:w-80 select-none drop-shadow-lg"
                draggable={false}
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* EXPLORE UMKM */}
      <section
        id="explore"
        className="relative py-28 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden"
      >
        {/* BG subtle wave effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-white to-white -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-blue-100/60 text-blue-700 font-medium text-sm shadow-sm">
            <span>Eksplorasi UMKM Cerdas</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L13 5.414V17a1 1 0 11-2 0V5.414L7.707 7.707A1 1 0 016.293 6.293l4-4z" />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Eksplorasi <span className="text-blue-600">UMKM Cerdas</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Temukan dan kenali UMKM terbaik melalui sistem pencarian interaktif
            dan tampilan produk yang memanjakan mata.
          </p>
        </motion.div>

        {/* CARD LIST */}
        <div className="max-w-6xl mx-auto flex flex-col gap-12 px-6">
          {featuredUmkms.map((umkm, i) => (
            <motion.div
              key={umkm.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] transition-all duration-300"
            >
              {/* Image */}
              <div className="md:w-1/3 bg-gradient-to-b from-blue-400 to-blue-500 p-4 flex items-center justify-center">
                <img
                  src={umkm.heroImage || "mockup-ai.webp"}
                  alt={umkm.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-56 md:h-64 object-cover rounded-xl shadow-md transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 p-6 md:p-8 text-left flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 mb-2">
                  <LuSparkles className="text-base" />
                  <span>{umkm.category}</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                  {umkm.name}
                </h3>
                <p className="text-gray-600 mb-4">{umkm.description}</p>
                <div className="flex flex-wrap items-center gap-4 text-gray-700 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <FaMapMarkedAlt className="text-cyan-600" />
                    <span>{umkm.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LuSparkles className="text-yellow-500" />
                    <span>{umkm.rating.toFixed(1)} rating</span>
                  </div>
                </div>
                <p className="font-medium text-gray-800 mb-5">
                  Dikelola oleh {umkm.owner} • {umkm.status}
                </p>

                <motion.a
                  href={`/umkm-koja/${umkm.slug}`}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 self-start bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2.5 rounded-full shadow hover:shadow-lg transition-all font-medium"
                >
                  Details
                  <FaArrowRight className="text-sm" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="tentangkami"
        className="py-28 bg-gradient-to-b from-white via-blue-50/50 to-white px-6 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jawaban untuk <span className="text-blue-600">Setiap</span>{" "}
            Pertanyaan!
          </h2>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-5 py-1.5 border border-gray-300 text-gray-700 rounded-full text-sm font-medium bg-white/80 shadow-sm hover:shadow-md transition"
          >
            Pertanyaan
          </motion.button>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                layout
                onClick={() => toggleFAQ(index)}
                className={`
                cursor-pointer rounded-2xl border transition-all duration-300 
                ${
                  isOpen
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-transparent shadow-lg"
                    : "bg-white border-gray-200 hover:border-blue-200 hover:shadow-md"
                }
              `}
              >
                <div className="flex justify-between items-center px-6 py-4">
                  <h3
                    className={`font-semibold text-lg ${
                      isOpen ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-6 h-6"
                  >
                    {isOpen ? (
                      <FaMinus className="text-white text-sm" />
                    ) : (
                      <FaPlus className="text-blue-600 text-sm" />
                    )}
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <p className="text-sm md:text-base leading-relaxed text-white/90">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

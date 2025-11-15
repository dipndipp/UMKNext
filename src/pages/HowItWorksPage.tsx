import { motion } from "framer-motion";
import { FaSearch, FaRobot, FaMapMarkedAlt, FaHeart, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      icon: FaSearch,
      title: "Cari atau Tanya",
      description:
        "Gunakan fitur pencarian untuk menemukan UMKM yang Anda cari, atau tanyakan langsung pada Asisten AI untuk rekomendasi personal.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100/50",
      iconColor: "text-blue-600",
    },
    {
      number: 2,
      icon: FaRobot,
      title: "Dapatkan Rekomendasi",
      description:
        "Asisten AI akan menganalisis kebutuhan Anda dan memberikan rekomendasi UMKM terbaik sesuai dengan preferensi dan lokasi Anda.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-100/50",
      iconColor: "text-cyan-600",
    },
    {
      number: 3,
      icon: FaMapMarkedAlt,
      title: "Jelajahi & Temukan",
      description:
        "Lihat detail lengkap UMKM, lokasi di peta interaktif, produk yang tersedia, dan ulasan dari pengguna lain.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100/50",
      iconColor: "text-purple-600",
    },
    {
      number: 4,
      icon: FaHeart,
      title: "Dukung UMKM Lokal",
      description:
        "Kunjungi, beli produk, atau bagikan UMKM favorit Anda ke teman-teman untuk mendukung pertumbuhan ekonomi lokal.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-100/50",
      iconColor: "text-pink-600",
    },
  ];

  const benefits = [
    "Pencarian cepat dan akurat",
    "Rekomendasi personal dari AI",
    "Akses 24/7 dari mana saja",
    "Mendukung UMKM lokal",
    "Pengalaman pengguna yang intuitif",
    "Update real-time tentang UMKM baru",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-gradient-to-b from-cyan-50 via-white to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-cyan-100/60 border border-cyan-200/50"
          >
            <FaRobot className="text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">Cara Kerja</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Bagaimana{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              UMKNext
            </span>{" "}
            Bekerja?
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Platform sederhana dengan 4 langkah mudah untuk membantu Anda menemukan
            dan mendukung UMKM lokal terbaik.
          </p>
        </motion.div>
      </section>

      {/* Steps Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-12`}
              >
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-2xl font-bold mb-6 shadow-lg"
                  >
                    {step.number}
                  </motion.div>

                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full ${step.bgColor} border border-gray-200`}
                  >
                    <step.icon className={`text-lg ${step.iconColor}`} />
                    <span className="text-sm font-medium text-gray-700">Langkah {step.number}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h2>

                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-blue-600 font-semibold md:hidden"
                    >
                      <span>Lanjut ke Langkah {step.number + 1}</span>
                      <FaArrowRight />
                    </motion.div>
                  )}
                </div>

                {/* Visual */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="flex-1 relative"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-3xl rounded-full`}
                  />
                  <div
                    className={`relative w-64 h-64 mx-auto ${step.bgColor} rounded-3xl flex items-center justify-center border border-gray-200 shadow-xl`}
                  >
                    <step.icon className={`text-8xl ${step.iconColor} opacity-80`} />
                  </div>

                  {/* Arrow connector (desktop only) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, pathLength: 0 }}
                      whileInView={{ opacity: 1, pathLength: 1 }}
                      transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-24 h-1 bg-gradient-to-r from-gray-300 to-transparent"
                    >
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keuntungan Menggunakan UMKNext
            </h2>
            <p className="text-lg text-gray-600">
              Platform yang dirancang untuk kemudahan dan kepuasan pengguna
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FaCheckCircle className="text-2xl text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


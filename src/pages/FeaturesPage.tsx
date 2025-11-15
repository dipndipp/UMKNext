import { motion } from "framer-motion";
import {
  FaRobot,
  FaMapMarkedAlt,
  FaChartLine,
  FaUsers,
  FaShieldAlt,
  FaMobileAlt,
  FaSearch,
  FaBell,
  FaStar,
} from "react-icons/fa";
import { LuSparkles } from "react-icons/lu";
import Footer from "../components/Footer";

export default function FeaturesPage() {
  const features = [
    {
      icon: FaRobot,
      title: "Asisten AI Cerdas",
      description:
        "Temukan UMKM terbaik dengan percakapan alami. AI kami memahami kebutuhan Anda dan memberikan rekomendasi yang tepat.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100/50",
      iconColor: "text-blue-600",
    },
    {
      icon: FaMapMarkedAlt,
      title: "Peta Interaktif",
      description:
        "Jelajahi UMKM di sekitar Anda dengan peta interaktif yang menampilkan lokasi, rating, dan informasi lengkap.",
      color: "from-cyan-500 to-teal-500",
      bgColor: "bg-cyan-100/50",
      iconColor: "text-cyan-600",
    },
    {
      icon: FaSearch,
      title: "Pencarian Canggih",
      description:
        "Cari UMKM berdasarkan kategori, lokasi, rating, atau keyword dengan sistem pencarian yang cepat dan akurat.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100/50",
      iconColor: "text-purple-600",
    },
    {
      icon: FaChartLine,
      title: "Analitik & Insight",
      description:
        "Dapatkan insight tentang tren UMKM, produk populer, dan rekomendasi personalisasi berdasarkan preferensi Anda.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100/50",
      iconColor: "text-green-600",
    },
    {
      icon: FaUsers,
      title: "Komunitas UMKM",
      description:
        "Bergabung dengan komunitas pelaku UMKM untuk berbagi pengalaman, tips, dan kolaborasi bisnis.",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-100/50",
      iconColor: "text-orange-600",
    },
    {
      icon: FaShieldAlt,
      title: "Keamanan Terjamin",
      description:
        "Platform kami dilengkapi dengan sistem keamanan tingkat tinggi untuk melindungi data pengguna dan transaksi.",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-100/50",
      iconColor: "text-indigo-600",
    },
    {
      icon: FaMobileAlt,
      title: "Mobile Friendly",
      description:
        "Akses platform dari mana saja, kapan saja dengan desain responsif yang optimal di semua perangkat.",
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-100/50",
      iconColor: "text-pink-600",
    },
    {
      icon: FaBell,
      title: "Notifikasi Real-time",
      description:
        "Dapatkan notifikasi langsung tentang penawaran menarik, UMKM baru di sekitar, dan update penting lainnya.",
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-100/50",
      iconColor: "text-yellow-600",
    },
  ];

  const highlights = [
    {
      number: "10K+",
      label: "UMKM Terdaftar",
      icon: FaStar,
    },
    {
      number: "50K+",
      label: "Pengguna Aktif",
      icon: FaUsers,
    },
    {
      number: "95%",
      label: "Tingkat Kepuasan",
      icon: LuSparkles,
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-gradient-to-b from-blue-50 via-white to-white">
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100/60 border border-blue-200/50"
          >
            <LuSparkles className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Fitur Unggulan</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Fitur yang{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Memudahkan
            </span>{" "}
            Anda
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Platform lengkap dengan fitur-fitur canggih untuk membantu Anda menemukan
            dan mendukung UMKM lokal dengan cara yang lebih mudah dan menyenangkan.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 px-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <highlight.icon className="text-4xl text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {highlight.number}
              </div>
              <div className="text-gray-600 font-medium">{highlight.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="group relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-transparent shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 relative z-10`}
                >
                  <feature.icon className={`text-2xl ${feature.iconColor}`} />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div
                  className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-5 rounded-full blur-2xl -z-0`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Memulai Perjalanan Digital UMKM?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan UMKM dan pengguna lainnya yang sudah
            merasakan kemudahan platform UMKNext.
          </p>
          <motion.div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="/chatbot"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Coba Sekarang
            </motion.a>
            <motion.a
              href="/about"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              Pelajari Lebih Lanjut
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}


import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaStore, FaPhoneAlt, FaStar } from "react-icons/fa";
import Footer from "../components/Footer";
import { kojaUmkmList, type KojaUmkm } from "../data/kojaUmkms";

const stats = [
  { label: "Total UMKM Terdata", value: kojaUmkmList.length },
  { label: "Kategori Berbeda", value: new Set(kojaUmkmList.map((u) => u.category)).size },
  { label: "Rata-rata Rating", value: (kojaUmkmList.reduce((sum, u) => sum + u.rating, 0) / kojaUmkmList.length).toFixed(1) },
];

const categoryOptions = ["Semua", ...new Set(kojaUmkmList.map((u) => u.category))];

export default function KojaUMKMPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

  const filteredUmkm = useMemo<KojaUmkm[]>(() => {
    if (selectedCategory === "Semua") return kojaUmkmList;
    return kojaUmkmList.filter((u) => u.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <section className="relative pt-40 pb-32 px-6 text-white overflow-hidden bg-[#020a1a]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#030a1d] via-[#1248d8] to-[#0dd0c8]" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.22),_transparent_55%)] pointer-events-none" aria-hidden="true"></div>
          <div className="absolute -right-16 -top-32 w-[32rem] h-[32rem] rounded-full bg-cyan-300/50 blur-[180px]" aria-hidden="true"></div>
          <div className="absolute -left-24 top-5 w-[26rem] h-[26rem] rounded-full bg-indigo-500/30 blur-[180px]" aria-hidden="true"></div>
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#ebfbff]/60 to-transparent" aria-hidden="true"></div>
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(120deg,_rgba(255,255,255,0.25)_1px,_transparent_1px)] bg-[length:140px_140px]" aria-hidden="true"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/15 border border-white/30 shadow-lg text-sm font-semibold tracking-wide mb-4 backdrop-blur-md">
            <FaMapMarkerAlt className="text-white" /> Koja, Jakarta Utara
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Direktori UMKM Koja
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Gambaran singkat pelaku usaha mikro dan kecil di kawasan Koja. Gunakan data ini
            untuk kolaborasi, program pendampingan, atau eksplorasi produk lokal.
          </p>
        </motion.div>
      </section>

      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-28 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-3xl bg-white/95 backdrop-blur-sm shadow-[0_25px_60px_rgba(4,23,50,0.12)] border border-white px-6 py-8 text-center"
              >
                <span className="absolute inset-x-12 -top-1 h-1 rounded-full bg-gradient-to-r from-blue-500/70 to-cyan-400/70" aria-hidden="true"></span>
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-12">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">Peta Kategori</h2>
              <p className="text-sm text-gray-500">
                Menampilkan {filteredUmkm.length} UMKM
                {selectedCategory !== "Semua" ? ` pada kategori ${selectedCategory}` : " dari seluruh kategori"}.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categoryOptions.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-md"
                        : "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredUmkm.map((umkm, index) => (
              <Link
                key={umkm.slug}
                to={`/umkm-koja/${umkm.slug}`}
                className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-blue-500 focus-visible:rounded-[28px]"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="rounded-3xl border border-gray-100 shadow-lg bg-white p-6 flex flex-col gap-4 transition-colors group-hover:border-blue-200"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                        <FaStore /> {umkm.category}
                      </p>
                      <h3 className="text-2xl font-semibold text-gray-900 mt-1">{umkm.name}</h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        umkm.status === "Buka"
                          ? "bg-green-50 text-green-600 border border-green-100"
                          : "bg-yellow-50 text-yellow-600 border border-yellow-100"
                      }`}
                    >
                      {umkm.status}
                    </span>
                  </div>

                  <p className="text-gray-600">{umkm.description}</p>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-blue-500" />
                      {umkm.address}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaPhoneAlt className="text-blue-500" />
                      {umkm.phone}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-amber-500 font-semibold">
                    <FaStar />
                    {umkm.rating.toFixed(1)} / 5
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {umkm.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-blue-600 font-semibold text-sm flex items-center gap-1">
                    Lihat profil lengkap →
                  </p>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

import { useMemo, type ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar,
  FaClock,
  FaUserTie,
  FaUsers,
  FaGlobe,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import Footer from "../components/Footer";
import { kojaUmkmList, type KojaUmkm } from "../data/kojaUmkms";

export default function KojaUMKMDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  const umkm = useMemo<KojaUmkm | undefined>(() => {
    return kojaUmkmList.find((item) => item.slug === slug);
  }, [slug]);

  if (!umkm) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center bg-white px-6">
        <p className="text-2xl font-semibold text-gray-800">
          UMKM tidak ditemukan
        </p>
        <Link
          to="/umkm-koja"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          <FaArrowLeft /> Kembali ke Direktori
        </Link>
      </div>
    );
  }

  const mapQuery = encodeURIComponent(umkm.mapQuery);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
  const mapLink = `https://www.google.com/maps?q=${mapQuery}`;

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="relative h-[420px] w-full overflow-hidden">
        <img
          src={umkm.heroImage}
          alt={umkm.name}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.55)]">
          <Link
            to="/umkm-koja"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold mb-6 backdrop-blur hover:bg-white/25 transition"
          >
            <FaArrowLeft /> Kembali
          </Link>
          <p className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-black/30 border border-white/20 text-xs tracking-[0.25em] uppercase text-white/80 shadow-lg">
            {umkm.category} • {umkm.status}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            {umkm.name}
          </h1>
          <p className="max-w-3xl text-white/90 text-lg">{umkm.description}</p>
          <div className="flex flex-wrap gap-2 mt-6">
            {umkm.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/20 text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="space-y-10 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 shadow-lg p-8 bg-white"
            >
              <h2 className="text-2xl font-semibold mb-6">Profil Usaha</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoItem
                  icon={<FaUserTie />}
                  label="Pemilik"
                  value={umkm.owner}
                />
                <InfoItem
                  icon={<FaClock />}
                  label="Jam Operasional"
                  value={umkm.hours}
                />
                <InfoItem
                  icon={<FaUsers />}
                  label="Jumlah Tim"
                  value={umkm.employees}
                />
                <InfoItem
                  icon={<FaStar className="text-amber-500" />}
                  label="Rating"
                  value={`${umkm.rating.toFixed(1)} / 5`}
                />
              </div>
              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-3">
                  Layanan utama
                </p>
                <ul className="space-y-3">
                  {umkm.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500" />{" "}
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 shadow-lg p-8 bg-white"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-semibold">Lokasi & Peta</h2>
                <a
                  href={mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-blue-600 font-medium hover:bg-blue-50"
                >
                  Buka di Google Maps
                </a>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-inner">
                <iframe
                  src={mapSrc}
                  title={`Map ${umkm.name}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-96"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 shadow-lg p-8 bg-white"
            >
              <h2 className="text-2xl font-semibold mb-6">Kontak</h2>
              <div className="space-y-4 text-gray-700">
                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  label="Alamat"
                  value={umkm.address}
                />
                <ContactItem
                  icon={<FaPhoneAlt />}
                  label="Telepon"
                  value={umkm.phone}
                />
                {umkm.email && (
                  <ContactItem
                    icon={<FaEnvelope />}
                    label="Email"
                    value={umkm.email}
                  />
                )}
                {umkm.website && (
                  <ContactLink
                    icon={<FaGlobe />}
                    label="Situs"
                    href={umkm.website}
                    text={umkm.website.replace(/^https?:\/\//, "")}
                  />
                )}
                {umkm.instagram && (
                  <ContactLink
                    icon={<FaInstagram />}
                    label="Instagram"
                    href={umkm.instagram}
                    text={umkm.instagram.replace("https://instagram.com/", "@")}
                  />
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-blue-50 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-gray-900 shadow-inner"
            >
              <h3 className="text-xl font-semibold mb-3">
                Butuh bantuan kolaborasi?
              </h3>
              <p className="text-gray-600 mb-6">
                Tim UMKNext siap membantu menghubungkan Anda dengan {umkm.name}{" "}
                untuk program promosi, pendanaan, atau event komunitas.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
              >
                Hubungi Kami
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
          {label}
        </p>
        <p className="text-base font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-1">
        {label}
      </p>
      <p className="flex items-center gap-2 text-base font-medium">
        <span className="text-blue-600">{icon}</span> {value}
      </p>
    </div>
  );
}

function ContactLink({
  icon,
  label,
  href,
  text,
}: {
  icon: ReactNode;
  label: string;
  href: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-1">
        {label}
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 font-medium hover:underline"
      >
        <span>{icon}</span> {text}
      </a>
    </div>
  );
}

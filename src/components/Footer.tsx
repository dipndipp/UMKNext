import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export default function Footer() {
  const footerLinks: FooterSection[] = [
    {
      title: "Platform",
      links: [
        { label: "Beranda", href: "/" },
        { label: "Fitur", href: "/features" },
        { label: "Cara Kerja", href: "/how-it-works" },
        { label: "Tentang Kami", href: "/about" },
      ],
    },
    {
      title: "Layanan",
      links: [
        { label: "Asisten AI", href: "/chatbot" },
        { label: "Eksplor UMKM", href: "/#explore" },
        { label: "Kontak", href: "/contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#0B0F18] text-gray-300 overflow-hidden pt-20 pb-10">
      {/* Lengkungan putih cekung ke bawah */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 220"
          className="w-full h-[200px]"
          preserveAspectRatio="none"
        >
          <path fill="#ffffff" d="M0,0 L1440,0 C960,220 480,220 0,0 Z" />
        </svg>
      </motion.div>

      {/* konten tengah */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 -mt-6 flex flex-col items-center text-center"
      >
        <img
          src="/footer-img.webp"
          alt="UMKNext Logo"
          className="w-[1100px] md:w-[1000px] select-none drop-shadow-[0_5px_20px_rgba(0,0,0,0.6)] mt-[100px]"
          draggable={false}
        />
        <p className="mt-3 text-sm md:text-base text-gray-400 tracking-wide">
          Menghubungkan masyarakat dan UMKM melalui teknologi cerdas.
        </p>
      </motion.div>

      {/* Main Footer Content */}
      <div className="relative z-10 mt-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <img src="/icon.png" alt="UMKNext" className="w-8 h-8" />
              <span className="text-white font-bold text-lg tracking-wide">
                UMKNext
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Platform digital untuk menghubungkan masyarakat dengan UMKM lokal
              melalui teknologi AI.
            </p>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform transition-transform"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm inline-block hover:translate-x-1 transform transition-transform"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500"
        >
          <p className="mb-4 md:mb-0">
            (c) 2025 UMKNext - Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

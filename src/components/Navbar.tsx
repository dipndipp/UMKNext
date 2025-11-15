import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "/" },
    { label: "Fitur", href: "/features" },
    { label: "Cara Kerja", href: "/how-it-works" },
    { label: "Tentang Kami", href: "/about" },
    { label: "UMKM Koja", href: "/umkm-koja" },
    { label: "Kontak", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          pointer-events-auto
          flex items-center justify-between gap-6
          px-6 md:px-8 py-2.5
          rounded-[24px]
          bg-white/85 backdrop-blur-2xl
          border border-white/50
          shadow-[0_18px_45px_rgba(15,23,42,0.18)]
          text-[15px] font-medium
          w-full max-w-7xl mx-4
        "
        role="navigation"
        aria-label="UMKNext navbar"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2 select-none hover:opacity-80 transition-opacity"
        >
          <img
            alt="UMKNext logo"
            className="h-10 w-auto object-contain"
            src="/logo.webp"
            draggable={false}
          />
        </Link>

        {/* Desktop LINKS */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href} className="group relative">
                <Link
                  to={item.href}
                  className={`
                    px-1.5 py-0.5
                    transition-colors duration-200
                    hover:text-blue-700
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded-md
                    ${active ? "text-blue-600 font-semibold" : ""}
                  `}
                >
                  {item.label}
                </Link>
                {/* indicator bawah */}
                <motion.span
                  initial={false}
                  animate={{
                    width: active || false ? "100%" : "0%",
                    opacity: active ? 1 : 0,
                  }}
                  className="
                    absolute -bottom-[6px] left-1/2 h-[2px]
                    -translate-x-1/2 rounded-full bg-blue-600
                    group-hover:w-5 transition-all duration-300
                  "
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 mt-2 rounded-2xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-lg overflow-hidden md:hidden"
        >
          <ul className="flex flex-col p-4 gap-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      block px-4 py-3 rounded-xl
                      transition-colors duration-200
                      hover:bg-blue-50 hover:text-blue-700
                      ${active ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"}
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </nav>
  );
}

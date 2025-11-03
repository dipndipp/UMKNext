import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          pointer-events-auto
          flex items-center gap-10
          px-8 py-2.5
          rounded-[24px]
          bg-white/95 backdrop-blur-xl
          border border-gray-200/100
          shadow-[0_2px_12px_rgba(0,0,0,0.08)]
          text-[15px] font-medium
        "
        role="navigation"
        aria-label="UMKNext navbar"
      >
        {/* LOGO */}
        <a href="#beranda" className="flex items-center gap-2 select-none">
          <img
            alt="UMKNext logo"
            className="h-10 w-30 object-contain"
            src="logo.webp"
            draggable={false}
          />
        </a>

        {/* LINKS */}
        <ul className="flex items-center gap-10 text-gray-700">
          {[
            { label: "Beranda", href: "/" },
            { label: "Eksplor UMKM", href: "/#explore" },
            { label: "Tentang Kami", href: "about" },
          ].map((item) => (
            <li key={item.href} className="group relative">
              <a
                href={item.href}
                className="
                  px-1.5 py-0.5
                  transition-colors duration-200
                  hover:text-blue-700
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 rounded-md
                "
              >
                {item.label}
              </a>
              {/* indicator bawah */}
              <span
                className="
                  absolute -bottom-[6px] left-1/2 h-[2px] w-0
                  -translate-x-1/2 rounded-full bg-blue-600
                  transition-all duration-300 group-hover:w-5 group-focus-within:w-5
                "
              />
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
}

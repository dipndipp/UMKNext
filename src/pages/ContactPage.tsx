import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "support@umknext.id",
      link: "mailto:support@umknext.id",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-100/50",
      iconColor: "text-blue-600",
    },
    {
      icon: FaPhone,
      label: "Telepon",
      value: "+62 812-3456-7890",
      link: "tel:+6281234567890",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-100/50",
      iconColor: "text-green-600",
    },
    {
      icon: FaMapMarkerAlt,
      label: "Alamat",
      value: "Jakarta, Indonesia",
      link: "#",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-100/50",
      iconColor: "text-purple-600",
    },
  ];

  const socialLinks = [
    {
      icon: FaInstagram,
      label: "Instagram",
      link: "https://instagram.com/umknext",
      color: "from-pink-500 to-rose-500",
      hoverColor: "hover:border-pink-400 hover:shadow-pink-400/40",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/umknext",
      color: "from-gray-700 to-gray-900",
      hoverColor: "hover:border-gray-700 hover:shadow-gray-700/40",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://linkedin.com/company/umknext",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:border-blue-500 hover:shadow-blue-500/40",
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
            <FaEnvelope className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Kontak Kami</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Mari{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Berbicara
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Tim UMKNext siap
            membantu Anda. Hubungi kami melalui form di bawah atau media sosial.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 group"
                    >
                      <div
                        className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className={`text-xl ${info.iconColor}`} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-1">
                          {info.label}
                        </div>
                        <div className="text-gray-900 font-semibold">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Ikuti Kami
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 flex items-center justify-center rounded-xl border-2 border-gray-300 ${social.hoverColor} shadow-sm hover:shadow-lg transition-all duration-300`}
                    >
                      <social.icon className="text-xl text-gray-700" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-2xl bg-white border border-gray-200 shadow-lg"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kirim Pesan
                </h2>

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-green-600 text-xl" />
                    <span className="text-green-800 font-medium">
                      Pesan berhasil dikirim! Kami akan membalas segera.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                        placeholder="Nama lengkap"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="space-y-2"
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300"
                      placeholder="Topik pesan"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="space-y-2"
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-300 resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Kirim Pesan
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function AiChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Halo! Saya Asisten UMKNext 🤖 Siap membantu kamu menjelajahi dunia UMKM.",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Terima kasih! Fitur AI akan segera tersedia untuk menjawab pertanyaan kamu secara interaktif ✨",
        },
      ]);
    }, 800);

    setInput("");
  };

  return (
    <section className="min-h-screen bg-white flex flex-col items-center py-8 px-4 font-sans">
      {/* Chat Container */}
      <div className="w-full max-w-4xl mt-16 mb-24 bg-white rounded-[32px] border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-8 space-y-5 overflow-y-auto transition-all">
        <AnimatePresence>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`flex items-end gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {/* Avatar AI */}
              {msg.sender === "ai" && (
                <div className="w-10 h-12 flex-shrink-0 bg-gray-200  overflow-hidden">
                  {/* 🧠 Space untuk image kamu nanti */}
                  <img
                    src="/chatbot-prof.webp"
                    alt="AI Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Chat bubble */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`px-5 py-3 max-w-[70%] text-[15px] md:text-base leading-relaxed rounded-2xl ${
                  msg.sender === "ai"
                    ? "bg-white border border-blue-100 text-gray-800 shadow-[0_2px_6px_rgba(0,0,0,0.05)]"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
                }`}
              >
                {msg.text}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input bar */}
      <div className="fixed bottom-8 w-full max-w-3xl px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center bg-white border border-blue-200 rounded-full shadow-[0_6px_16px_rgba(0,0,0,0.05)] px-5 py-3"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanyakan apa saja kepada Asisten AI..."
            className="flex-grow outline-none bg-transparent text-gray-700 text-sm md:text-base placeholder-gray-400"
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={handleSend}
            className="ml-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white p-3 rounded-full hover:opacity-90 transition"
          >
            <FaPaperPlane size={15} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

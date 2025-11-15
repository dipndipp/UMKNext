import { useState } from "react";
import { kojaUmkmList } from "../data/kojaUmkms";

// Ganti dengan cara import API Key sesuai kebutuhan (misal dari .env)
const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";

export default function AiChat() {
  type Message = {
    sender: string;
    text: string;
    isHtml?: boolean;
  };
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text:
        "Hai! 👋 Aku asisten UMKNext. Mau cari rekomendasi UMKM di Koja? Coba tanya: <br /><br />" +
        "<b>• Toko roti terenak di Koja apa ya?</b><br />" +
        "<b>• Ada coffee shop yang bisa buat kerja remote?</b><br />" +
        "<b>• UMKM fashion yang bisa custom hijab?</b><br /><br />" +
        "Tanya aja apa pun, aku siap bantu kasih rekomendasi dan alasannya!",
      isHtml: true,
    },
  ]);
  const [input, setInput] = useState("");

  // Fungsi untuk memanggil OpenRouter GLM 4.5 Air
  const getAiRecommendation = async (question: string): Promise<string> => {
    const umkmContext = kojaUmkmList
      .map(
        (u, i) =>
          `${i + 1}. ${u.name} (${u.category})\nRating: ${
            u.rating
          } / 5\nAlamat: ${u.address}\nDeskripsi: ${u.description}`
      )
      .join("\n\n");
    const prompt = `Berikut adalah data UMKM di Koja:\n${umkmContext}\n\nJawab pertanyaan user hanya berdasarkan data di atas. Jika user bertanya seperti 'mana rekomendasi toko roti yang bagus?', berikan rekomendasi UMKM yang relevan dari data tersebut. Setelah memberikan rekomendasi, tambahkan alasan kenapa tempat tersebut direkomendasikan (misal: rating tinggi, deskripsi menarik, kategori sesuai, dll). Jika tidak ada yang cocok, jawab dengan sopan bahwa tidak ditemukan. Format jawaban dengan list dan baris baru agar mudah dibaca.`;
    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          },
          body: JSON.stringify({
            model: "z-ai/glm-4.5-air:free",
            messages: [
              { role: "system", content: prompt },
              { role: "user", content: question },
            ],
          }),
        }
      );
      const data = await response.json();
      let aiText =
        data.choices?.[0]?.message?.content ||
        "Maaf, terjadi kesalahan pada AI.";
      // Format agar lebih rapi di tampilan chat
      aiText = aiText.replace(/\n/g, "<br />");
      return aiText;
    } catch (err) {
      return "Maaf, terjadi kesalahan saat menghubungi AI.";
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setMessages((prev) => [
      ...prev,
      {
        sender: "ai",
        text: "Sedang mencari rekomendasi...",
      },
    ]);
    const currentInput = input;
    setInput("");
    const aiText = await getAiRecommendation(currentInput);
    setMessages((prev) => {
      const filtered = prev.filter(
        (m) => m.text !== "Sedang mencari rekomendasi..."
      );
      return [
        ...filtered,
        {
          sender: "ai",
          text: aiText,
          isHtml: true,
        },
      ];
    });
  };
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-blue-50/30 via-white to-white flex flex-col items-center py-8 px-4 font-sans"
    >
      {/* Chat Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full max-w-4xl mt-16 mb-24 bg-white rounded-[32px] border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 space-y-5 overflow-y-auto transition-all duration-300"
      >
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
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                className={`px-5 py-3 max-w-[70%] text-[15px] md:text-base leading-relaxed rounded-2xl ${
                  msg.sender === "ai"
                    ? "bg-white border border-blue-100 text-gray-800 shadow-[0_2px_6px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                    : "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(59,130,246,0.3)]"
                }`}
              >
                {msg.isHtml &&
                typeof msg.text === "string" &&
                msg.text !== undefined &&
                msg.text !== null ? (
                  <span dangerouslySetInnerHTML={{ __html: msg.text }} />
                ) : (
                  msg.text
                )}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Input bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="fixed bottom-8 w-full max-w-3xl px-4"
      >
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
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
      </motion.div>
    </motion.section>
  );
}

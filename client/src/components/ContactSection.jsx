import { useState } from "react";
import axios from "axios";
import { Send, CheckCircle } from "lucide-react";

const ContactSection = () => {
  // State to store user input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for status
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await axios.post("http://localhost:5000/api/contact", formData);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white" id="kontak">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Hubungi Kami</h2>
          <p className="text-slate-400">
            Punya pertanyaan seputar pendaftaran santri?
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="Masukkan nama anda"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                  placeholder="contoh@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-slate-300">
                Pesan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition"
                placeholder="Tulis pesan anda disini..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition duration-300 
                ${
                  status === "success"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-blue-600 hover:bg-blue-700"
                }
                ${status === "loading" ? "opacity-70 cursor-wait" : ""}
              `}
            >
              {status === "loading" ? (
                <span>Mengirim...</span>
              ) : status === "success" ? (
                <>
                  {" "}
                  <CheckCircle /> Pesan Terkirim!{" "}
                </>
              ) : (
                <>
                  {" "}
                  <Send size={20} /> Kirim Pesan{" "}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

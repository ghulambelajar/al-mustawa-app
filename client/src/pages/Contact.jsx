import { useState } from "react";
import axios from "axios";
import { MapPin, Phone, Mail, Clock } from "lucide-react"; // Import Icon Baru

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      <div className="relative h-[40vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070"
          alt="Masjid"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Kontak Kami</h1>
          <p className="text-slate-300">
            Hubungi kami untuk informasi lebih lanjut
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* BAGIAN A: PETA LEBAR (Sesuai Referensi Gambar) */}
        <div className="w-full h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-md mb-16 border border-gray-200">
          {/* Ganti src iframe ini dengan link embed Google Maps asli lokasi TPA-mu nanti */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.073543665396!2d111.45899737406958!3d-7.887372678453488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a0397501b139%3A0xc304033c5e88417c!2sMasjid%20Besar%20Mustawa!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* KOLOM KIRI: INFO KONTAK (Communicate us) */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3">
              Informasi Kontak
            </h2>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Alamat</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Jl. Raya Siman No. 60, Desa Krajan, <br />
                  Kec. Siman, Kab. Ponorogo, <br />
                  Jawa Timur
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Telepon / WA</h3>
                <p className="text-gray-600 text-sm">
                  0812-3456-7890 (Admin)
                  <br />
                  0898-7654-3210 (Kepala Sekolah)
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                <p className="text-gray-600 text-sm">tpaalmustawa@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">Jam Belajar</h3>
                <p className="text-gray-600 text-sm">
                  Senin - Kamis: 15.30 - 17.00
                  <br />
                  Jumat: Libur
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-3 mb-8">
              Formulir Pesan
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                    placeholder="Email Anda"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  No. Telepon / WA
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                  placeholder="+62..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-2">
                  Pesan *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 focus:outline-none focus:border-blue-500 transition"
                  placeholder="Tulis pesan anda disini..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`px-8 py-3 rounded text-white font-bold transition shadow-md
                  ${
                    status === "success"
                      ? "bg-green-600"
                      : "bg-blue-600 hover:bg-blue-700"
                  }
                `}
              >
                {status === "loading"
                  ? "Mengirim..."
                  : status === "success"
                  ? "Pesan Terkirim!"
                  : "Kirim Pesan"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

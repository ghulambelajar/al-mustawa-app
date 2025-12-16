import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Pastikan sudah npm install sweetalert2
import logoBeranda from "../assets/images/home-mustawa.png"; // Pastikan path gambarnya benar

const Register = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    age: "",
    gender: "Laki-laki",
    parent_name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Kirim data ke backend
      await axios.post("http://localhost:5000/api/register", formData);

      // 1. PERBAIKAN SWEETALERT (Ganti alert biasa jadi ini)
      Swal.fire({
        title: "Alhamdulillah!",
        text: "Pendaftaran Berhasil Terkirim.",
        icon: "success",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Oke",
      });

      // Reset Form
      setFormData({
        full_name: "",
        age: "",
        gender: "Laki-laki",
        parent_name: "",
        phone: "",
        address: "",
      });
    } catch (error) {
      console.error(error);
      // Alert Gagal
      Swal.fire({
        title: "Gagal!",
        text: "Terjadi kesalahan saat mendaftar. Silakan coba lagi.",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* HEADER GAMBAR */}
      <div className="relative h-[45vh] flex items-center justify-center">
        <img
          src={logoBeranda}
          alt="Background TPA"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Formulir Penerimaan Santri Baru
          </h1>
          <p className="text-lg text-slate-300">
            Silakan isi data calon santri dengan benar
          </p>
        </div>
      </div>

      {/* 2. PERBAIKAN JARAK (SPACING) */}
      {/* -mt-16 artinya narik ke atas supaya menumpuk sedikit di header (Desain Modern) */}
      {/* z-20 supaya dia muncul di atas header */}
      <div className="relative z-20 max-w-3xl mx-auto px-4 -mt-16">
        <div className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Data Santri */}
            <div className="border-b border-gray-100 pb-6 mb-4">
              <h2 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                📂 Data Santri
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="Nama Anak"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Umur
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="Contoh: 7"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Jenis Kelamin
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Data Wali */}
            <div>
              <h2 className="text-xl font-bold text-blue-600 mb-6 flex items-center gap-2">
                👨‍👩‍👧‍👦 Data Wali
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nama Orang Tua / Wali
                  </label>
                  <input
                    type="text"
                    name="parent_name"
                    value={formData.parent_name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="Nama Orang Tua"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    No. WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    placeholder="08..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Alamat Domisili
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg hover:shadow-blue-500/30 text-lg"
            >
              Kirim Pendaftaran
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

import { useState, useEffect } from "react";
import axios from "axios";
import { Download, LogOut, Plus, Trash2, Newspaper, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("registrations"); // tab change state
  const [students, setStudents] = useState([]);
  const [newsList, setNewsList] = useState([]);

  // new news data form
  const [newsForm, setNewsForm] = useState({
    title: "",
    content: "",
    event_date: "",
    image: null,
  });

  const navigate = useNavigate();

  // security
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchRegistrations();
    fetchNews();
  }, [navigate]);

  const fetchRegistrations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/register");
      setStudents(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNewsList(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogout = () => {
    Swal.fire({
      title: "Mau Keluar?",
      text: "Anda harus login ulang untuk masuk kembali.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Ya, Logout!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/login");
        Swal.fire("Logout!", "Anda berhasil keluar.", "success");
      }
    });
  };

  const handlePostNews = async (e) => {
    e.preventDefault();

    // Pakai FormData untuk kirim File
    const formData = new FormData();
    formData.append("title", newsForm.title);
    formData.append("content", newsForm.content);
    formData.append("event_date", newsForm.event_date);
    if (newsForm.image) {
      formData.append("image", newsForm.image); // Kirim filenya
    }

    try {
      // Content-Type akan otomatis diurus oleh axios saat pakai FormData
      await axios.post("http://localhost:5000/api/news", formData);

      Swal.fire("Sukses", "Berita berhasil diterbitkan!", "success");
      setNewsForm({ title: "", content: "", event_date: "", image: null });
      fetchNews();

      document.getElementById("fileInput").value = "";
    } catch (error) {
      console.error(error);
      Swal.fire("Gagal", "Terjadi kesalahan", "error");
    }
  };
  const handleDeleteNews = async (id) => {
    const result = await Swal.fire({
      title: "Yakin mau hapus?",
      text: "Berita ini akan hilang permanen!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/news/${id}`);
        Swal.fire("Terhapus!", "Berita telah dihapus.", "success");
        fetchNews();
      } catch (error) {
        Swal.fire("Gagal", "Tidak bisa menghapus berita.", "error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans pt-20">
      {/* Sidebar */}
      <div className="bg-slate-900 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Panel TPA</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-bold transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        {/* Tombol Ganti Tab */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("registrations")}
            className={`flex-1 py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-sm transition ${
              activeTab === "registrations"
                ? "bg-white text-blue-600 ring-2 ring-blue-500"
                : "bg-slate-200 text-slate-500 hover:bg-slate-300"
            }`}
          >
            <Users /> Data Pendaftar
          </button>
          <button
            onClick={() => setActiveTab("news")}
            className={`flex-1 py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-lg shadow-sm transition ${
              activeTab === "news"
                ? "bg-white text-blue-600 ring-2 ring-blue-500"
                : "bg-slate-200 text-slate-500 hover:bg-slate-300"
            }`}
          >
            <Newspaper /> Manajemen Berita
          </button>
        </div>

        {/* DATA PENDAFTAR */}
        {activeTab === "registrations" && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                Daftar Santri Baru
              </h2>
              <button
                onClick={() =>
                  window.open(
                    "http://localhost:5000/api/register/export",
                    "_blank"
                  )
                }
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-bold flex items-center gap-2 shadow transition"
              >
                <Download size={18} /> Download Excel
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wider">
                    <th className="p-4 rounded-tl-lg">Nama</th>
                    <th className="p-4">Umur</th>
                    <th className="p-4">Wali</th>
                    <th className="p-4">No HP</th>
                    <th className="p-4 rounded-tr-lg">Tanggal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {students.map((s) => (
                    <tr key={s.id} className="hover:bg-slate-50">
                      <td className="p-4 font-bold text-slate-700">
                        {s.full_name}
                      </td>
                      <td className="p-4">
                        {s.age} Thn ({s.gender})
                      </td>
                      <td className="p-4">{s.parent_name}</td>
                      <td className="p-4 text-blue-600">{s.phone}</td>
                      <td className="p-4 text-gray-500 text-sm">
                        {new Date(s.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MANAJEMEN BERITA */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Input */}
            <div className="bg-white rounded-xl shadow-lg p-6 h-fit">
              <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Plus size={20} className="text-blue-600" /> Tambah Berita
              </h2>
              <form onSubmit={handlePostNews} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1">
                    Judul Berita
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded p-2"
                    value={newsForm.title}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, title: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1">
                    Tanggal Kegiatan
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full border rounded p-2"
                    value={newsForm.event_date}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, event_date: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1">
                    Gambar Berita
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    className="w-full border rounded p-2 bg-white"
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, image: e.target.files[0] })
                    }
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    *Upload dari laptop atau kamera
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-600 mb-1">
                    Isi Berita
                  </label>
                  <textarea
                    required
                    rows="5"
                    className="w-full border rounded p-2"
                    value={newsForm.content}
                    onChange={(e) =>
                      setNewsForm({ ...newsForm, content: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Terbitkan Berita
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Daftar Berita Aktif
              </h2>
              {newsList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-xl shadow flex gap-4 items-start"
                >
                  <img
                    src={item.image_url}
                    alt=""
                    className="w-24 h-24 object-cover rounded-lg bg-gray-200"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-slate-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(item.event_date).toLocaleDateString()}
                    </p>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteNews(item.id)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded transition"
                    title="Hapus Berita"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
              {newsList.length === 0 && (
                <p className="text-center text-gray-500 py-10">
                  Belum ada berita.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

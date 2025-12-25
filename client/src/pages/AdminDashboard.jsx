import { useState, useEffect } from "react";
import axios from "axios";
import { Download, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // security
    const token = localStorage.getItem("token");
    if (!token) {
      Navigate("/login");
      return;
    }
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/register");
        setStudents(res.data.data);
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      }
    };
    fetchData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleDownload = () => {
    window.open("http://localhost:5000/api/register/export", "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 pt-24 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Dashboard Admin</h1>
          <div className="flex-gap-3">
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2"
            >
              <LogOut /> Logout
            </button>
            <button
              onClick={handleDownload}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold flex items-center gap-2 shadow-lg transition"
            >
              <Download size={20} /> Download Excel
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <p>Total Pendaftar: {students.length}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

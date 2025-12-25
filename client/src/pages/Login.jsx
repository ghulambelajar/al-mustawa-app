import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        input
      );

      if (res.data.success) {
        // The token will be stored in the browser's local storage.
        localStorage.setItem("token", res.data.token);

        Swal.fire({
          icon: "success",
          title: "Berhasil Masuk!",
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/admin/dashboard");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: error.response?.data?.message || "Terjadi kesalahan",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 font-sans">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-slate-800">
          Login Admin
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={input.username}
              onChange={(e) => setInput({ ...input, username: e.target.value })}
              className="w-full border rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              className="w-full border rounded p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-slate-900 text-white font-bold py-3 rounded hover:bg-slate-800 transition"
          >
            Masuk Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

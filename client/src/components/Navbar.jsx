import { useState } from "react";
import { Link } from "react-router-dom";
import logoTPA from "../assets/images/logo mustawa.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white fixed w-full z-50 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img
              src={logoTPA}
              alt="Logo TPA Al-Mustawa"
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg tracking-wider">
              TPA AL-MUSTAWA
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="hover:text-blue-400 px-3 py-2 rounded-md font-medium transition"
              >
                Beranda
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-400 px-3 py-2 rounded-md font-medium transition"
              >
                Tentang Kami
              </Link>
              <Link
                to="/news"
                className="hover:text-blue-400 px-3 py-2 rounded-md font-medium transition"
              >
                Berita
              </Link>
              <Link
                to="/registration"
                className="hover:text-blue-400 px-3 py-2 rounded-md font-medium transition"
              >
                Pendaftaran
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-400 px-3 py-2 rounded-md font-medium transition"
              >
                Kontak
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-slate-800 p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Tentang Kami
            </Link>
            <Link
              to="/activity"
              className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Kegiatan
            </Link>
            <Link
              to="/contact"
              className="block hover:bg-slate-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Kontak
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

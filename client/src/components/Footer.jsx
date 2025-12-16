import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoTPA from "../assets/images/logo mustawa.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100 mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src={logoTPA}
                alt="Logo TPA Al-Mustawa"
                className="h-10  w-auto"
              />
              <span className="font-bold text-xl text-slate-900">
                TPA Al-Mustawa
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Jl. Raya Siman, Ds. Krajan, Kec. Siman,
              <br />
              Kab. Ponorogo, Jawa Timur
            </p>
            <p className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer transition">
              tpaalmustawa@gmail.com
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-slate-900">Jelajah</h3>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li>
                <Link to="/sambutan" className="hover:text-blue-600 transition">
                  Sambutan
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-blue-600 transition">
                  Profil TPA
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-blue-600 transition">
                  Berita
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blue-600 transition">
                  Galeri
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-slate-900">
              Halaman Umum
            </h3>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li>
                <Link to="/teacher" className="hover:text-blue-600 transition">
                  Data Pengajar
                </Link>
              </li>
              <li>
                <Link
                  to="/registration"
                  className="hover:text-blue-600 transition"
                >
                  Panduan Pendaftaran
                </Link>
              </li>
              <li>
                <Link to="/location" className="hover:text-blue-600 transition">
                  Lokasi
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-slate-900">
              Media Sosial
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/gallery_almustawa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 text-left">
          <p className="text-gray-400 text-sm">
            Copyright © Taman Pendidikan Al-Qur'an Al-Mustawa. All right
            Reserved. Hosting By IDCloudHost
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

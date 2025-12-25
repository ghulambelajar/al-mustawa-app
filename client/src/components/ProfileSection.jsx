import { BookOpen, Users, Award, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const ProfileSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800">
              Profil Taman Pendidikan <br />
              <span className="text-blue-600">Al-Quran</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kami berkomitmen menyelenggarakan pendidikan Al-Quran yang
              berkualitas, menyenangkan, dan membentuk karakter anak yang
              berakhlakul karimah. Didukung oleh tenaga pengajar yang
              berpengalaman dan kurikulum yang terstruktur.
            </p>
            <Link to="/about">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold shadow-lg transition">
                Lebih Lanjut
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Kartu 1 */}
            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Sejarah</h3>
              <p className="text-sm text-gray-500">
                Berdiri sejak 2011 untuk mencetak generasi Qurani.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center text-green-600 mb-4">
                <Users size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">
                Murid & Guru
              </h3>
              <p className="text-sm text-gray-500">
                Lebih dari 20 murid aktif dan 10 pengajar berpengalaman.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Mitra</h3>
              <p className="text-sm text-gray-500">
                Kerjasama dengan Departemen Pengabdian Masyarakat UNIDA Gontor.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-lg text-slate-800 mb-2">Lokasi</h3>
              <p className="text-sm text-gray-500">
                Jl. Raya Siman, Ds. Krajan, Kec. Siman, Ponorogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

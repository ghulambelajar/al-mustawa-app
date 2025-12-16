import {
  CheckCircle,
  Target,
  Trophy,
  Users,
  BookOpen,
  Star,
} from "lucide-react";
import logoAbout from "../assets//images/galeri-ustad-ustadzah-kejuaraan.png";
import logoBeranda from "../assets/images/home-mustawa.png";

const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <div className="relative h-[50vh] flex items-center justify-center">
        <img
          src={logoBeranda}
          alt="Background Masjid"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
          <p className="text-lg text-slate-300">
            Mengenal lebih dekat Taman Pendidikan Al-Qur'an Al-Mustawa
          </p>
        </div>
      </div>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-900 rounded-full text-sm font-bold mb-4">
              Sejarah Singkat
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Berdiri Sejak 2011 untuk Mencetak Generasi Qurani
            </h2>
            <div className="text-gray-600 space-y-4 leading-relaxed text-justify">
              <p>
                TPA Al-Mustawa berada di bawah naungan Masjid Besar Mustawa di
                Kecamatan Siman, Ponorogo. Didirikan pada 18 April 2011 oleh Ibu
                Nur Khasanah sebagai respon atas kebutuhan pendidikan Al-Quran
                di lingkungan sekitar.
              </p>
              <p>
                Berawal dari kegiatan mengaji sederhana di rumah warga, kini TPA
                Al-Mustawa telah berkembang menjadi lembaga pendidikan
                non-formal yang memiliki fasilitas memadai di lingkungan Masjid
                Besar Mustawa.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={logoAbout}
              alt="Foto Bersama Santri"
              className="rounded-2xl shadow-2xl w-full object-cover h-80 transform hover:scale-[1.02] transition duration-500"
            />
          </div>
        </div>
      </section>

      <section className="py-10 px-6 max-w-7x1 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-400 text-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-2 transition duration-300">
            <h3 className="text-5xl font-bold mb-2">30+</h3>
            <p className="text-slate-200 font-medium">Siswa Aktif</p>
          </div>
          <div className="bg-blue-400 text-white p-8 rounded-2xl text-center shadow-lg hover:-translate-y-2 transition duration-300">
            <h3 className="text-5xl font-bold mb-2">10+</h3>
            <p className="text-slate-200 font-medium">Ustad & Ustadzah</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-500">Visi & Misi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-400 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
              <Star size={100} />
            </div>
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4 inline-block">
              Visi
            </h3>
            <p className="text-slate-100 text-lg leading-relaxed">
              "Membentuk pembelajar yang akhlakul karimah, berilmu, beretika,
              berwawasan lingkungan untuk menuju pentas dunia."
            </p>
          </div>

          <div className="bg-blue-400 text-white p-10 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition">
              <Target size={100} />
            </div>
            <h3 className="text-2xl font-bold mb-6 border-b border-slate-700 pb-4 inline-block">
              Misi
            </h3>
            <ul className="space-y-4 text-slate-100">
              <li className="flex gap-3 items-start">
                <CheckCircle
                  className="text-blue-400 shrink-0 mt-1"
                  size={20}
                />
                <span>
                  Mewujudkan pendidikan dengan keteladanan dan kasih sayang.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle
                  className="text-blue-400 shrink-0 mt-1"
                  size={20}
                />
                <span>
                  Mengembangkan budaya belajar dengan didasari cinta ilmu.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle
                  className="text-blue-400 shrink-0 mt-1"
                  size={20}
                />
                <span>
                  Meningkatkan fasilitas sekolah menuju lingkungan bersih &
                  sehat.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 max-w-7xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-16 text-blue-500">
          Program Unggulan
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          <div className="flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-blue-500">
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Belajar Agama Dasar
              </h3>
              <p className="text-gray-600">
                Tidak hanya belajar membaca Al-Quran saja, tetapi disini di TPA
                Al-Mustawa kita juga mengajarkan kepada anak-anak pelajaran
                agama dasar seperti fiqh, tauhid, dan beberapa sejarah islam
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-blue-500">
              <Users size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Belajar Membaca Al-Quran
              </h3>
              <p className="text-gray-600">
                Belajar membaca Al-Quran sudah menjadi tujuan utama didirikannya
                Taman Pendidikan Al-Quran (TPA) ini karena TPA adalah tempat
                untuk anak belajar membaca Al-Quran
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-blue-500">
              <Trophy size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Olahraga Pagi
              </h3>
              <p className="text-gray-600">
                Disamping itu, pada hari ahad pagi kita mengadakan "Ahad Sehat"
                yang dimana semua anak dan ustad berolahraga secara bersamaan
                seperti, bersepeda atau jalan sehat dan senam pagi
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-slate-100 p-3 rounded-xl text-blue-500">
              <Star size={28} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Lomba dan Kegiatan lainnya
              </h3>
              <p className="text-gray-600">
                Untuk mengasah ketrampilan dan mengulang pelajaran, kita
                mengadakan lomba antar anak, juga dengan TPA lainnya. Jika ada
                event khusus seperti Malam Takbiran dan Lomba 17-an
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

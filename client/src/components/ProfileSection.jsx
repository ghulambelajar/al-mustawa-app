import { Users, MapPin, History, Handshake } from "lucide-react";
import { Link } from "react-router-dom";
import iconMitra from "../assets/icon/icon-home.png";
import iconLokasi from "../assets/icon/icon-map.png";
import iconSejarah from "../assets/icon/icon-list.png";
import iconMurid from "../assets/icon/icon-reward.png";

const ProfileSection = () => {
  const cards = [
    {
      id: 1,
      title: "Mitra",
      desc: "Kerjasama dengan Departemen Pengabdian Masyarakat UNIDA Gontor.",
      icon: <img src={iconMitra} alt="icon mitra" className="w-12 h-12" />,
      color: "bg-blue-50",
    },
    {
      id: 2,
      title: "Lokasi",
      desc: "Jl. Raya Siman, Ds. Krajan, Kec. Siman, Ponorogo.",
      icon: <img src={iconLokasi} alt="icon lokasi" className="w-12 h-12" />,
      color: "bg-orange-50",
    },
    {
      id: 3,
      title: "Sejarah",
      desc: "Berdiri sejak 18 April 2011 untuk mencetak generasi Qurani.",
      icon: <img src={iconSejarah} alt="icon sejarah" />,
      color: "bg-green-50",
    },
    {
      id: 4,
      title: "Murid & Guru",
      desc: "Lebih dari 20 murid aktif dan 10 pengajar berpengalaman.",
      icon: <img src={iconMurid} alt="icon murid" />,
      color: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/3 sticky top-24">
            <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Profil Taman Pendidikan <br />
              <span className="text-blue-600">Al-Quran</span>
            </h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Kami berkomitmen menyelenggarakan pendidikan Al-Quran yang
              berkualitas, menyenangkan, dan membentuk karakter anak yang
              berakhlakul karimah.
            </p>
            <Link
              to="/about"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/30 inline-block"
            >
              Lebih Lanjut
            </Link>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className={`${card.color} p-8 rounded-2xl border border-gray-100 hover:scale-105 transition duration-300 cursor-default`}
              >
                <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center shadow-sm mb-4">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;

import { Play } from "lucide-react";
import DirekturTPA from "../assets/images/galeri-foto-bersama3.png";

const WelcomeSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={DirekturTPA}
                alt="Direktur TPA"
                className="w-full object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 p-4 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition transform hover:scale-110">
                  <Play fill="currentColor" size={32} />
                </button>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-100 rounded-full -z-10 blur-xl"></div>
          </div>

          {/*Teks Sambutan */}
          <div className="w-full md:w-1/2">
            <h4 className="text-blue-600 font-bold uppercase tracking-wider mb-2">
              Sambutan Direktur
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Mewujudkan Santri yang Cinta Al-Quran
            </h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-6">
              "Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang
              senantiasa dengan sifat kasih dan sayangnya banyak memberikan
              nikmat..."
            </blockquote>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Di TPA Al-Mustawa, kami tidak hanya mengajarkan cara membaca
              Al-Quran, tetapi juga menanamkan nilai-nilai adab dan akhlak dalam
              kehidupan sehari-hari.
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Direktur+TPA"
                  alt="Avatar"
                />
              </div>
              <div>
                <p className="font-bold text-slate-900">
                  Ustadzah Aisyah, S.Kom
                </p>
                <p className="text-sm text-gray-500">Kepala Sekolah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

import { Link } from "react-router-dom";
import logoBeranda from "../assets/images/home-mustawa.png";

const Hero = () => {
  return (
    // Relative
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={logoBeranda}
          alt="Background Masjid"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      {/* content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <p className="text-blue-400 font-bold tracking-widest mb-4 animate-bounce">
          MOTTO
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight shadow-lg">
          Taman Pendidikan Al-Qur'an <br />
          <span className="text-blue-500">Al-Mustawa</span>
        </h1>
        <p className="text-xl text-gray-200 mb-8 font-light">
          Membangun Generasi Qurani yang Berakhlak Mulia, Cerdas, dan Mandiri.
        </p>
        <Link
          to="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105 shadow-lg inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Hero;

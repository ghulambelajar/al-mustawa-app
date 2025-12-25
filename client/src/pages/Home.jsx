import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Tambah Link untuk tombol "Baca Selengkapnya"
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import WelcomeSection from "../components/WelcomeSection";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data.data.slice(0, 3));
      } catch (error) {
        console.error(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <>
      <Hero />
      <ProfileSection />
      <WelcomeSection />

      <div className="py-20 px-6 max-w-7xl mx-auto" id="berita">
        <h2 className="text-3xl font-bold mb-10 text-center text-slate-800">
          Berita & Kegiatan Terkini
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">
                  📅{" "}
                  {new Date(item.event_date).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <h3 className="font-bold text-xl mb-3 text-slate-900 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.content}
                </p>

                <Link
                  to="/news"
                  className="text-blue-600 font-bold hover:underline"
                >
                  Baca Selengkapnya →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {news.length === 0 && (
          <p className="text-center text-gray-500">
            Belum ada berita yang diterbitkan.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;

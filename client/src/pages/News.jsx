import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import logoBeranda from "../assets/images/home-mustawa.png";

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <div className="relative h-[50vh] flex items-center justify-center">
        <img
          src={logoBeranda}
          alt="Album TPA Asatidz"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Berita & Kegiatan
          </h1>
          <p className="text-lg text-slate-300">
            Update terbaru dari TPA Al-Mustawa
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {loading ? (
          <p className="text-center">Memuat berita...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar size={16} />
                    <span>
                      {new Date(item.event_date).toLocaleDateString("id-ID", {
                        dateStyle: "long",
                      })}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1">
                    {item.content}
                  </p>
                  <Link
                    to={`/berita/${item.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-800 transition"
                  >
                    Baca Selengkapnya <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default News;

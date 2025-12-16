import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Calendar, ArrowLeft } from "lucide-react";

const NewsDetail = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/news/${id}`
        );
        setNewsItem(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  if (loading)
    return <div className="text-center py-20">Memuat artikel...</div>;
  if (!newsItem)
    return <div className="text-center py-20">Berita tidak ditemukan.</div>;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 pb-20">
      <div className="w-full h-[60vh] relative">
        <img
          src={newsItem.image_url}
          alt={newsItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white max-w-5xl">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-4 transition"
          >
            <ArrowLeft size={20} /> Kembali ke Berita
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {newsItem.title}
          </h1>
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <Calendar size={20} />
            <span>
              {new Date(newsItem.event_date).toLocaleDateString("id-ID", {
                dateStyle: "full",
              })}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-slate text-gray-700 leading-relaxed whitespace-pre-line">
          {newsItem.content}
        </div>
      </article>
    </div>
  );
};

export default NewsDetail;

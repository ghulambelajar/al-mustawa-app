import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import ProfileSection from "../components/ProfileSection";
import WelcomeSection from "../components/WelcomeSection";

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/news");
        setNews(response.data.data);
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
        <h2 className="text-3xl font-bold mb-8 text-center">Berita Terkini</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

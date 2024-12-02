import React from "react";
import CardBox from "../components/CardBox";


const HealthNews = () => {
  const newsData = [
    {
      title: "Empowering healthcare educators through coaching programme for Poltekkes lecturers",
      date: "20 November 2024",
      category: "Highlights",
      image: "https://via.placeholder.com/150", // Ganti dengan URL gambar asli
    },
    {
      title: "Indonesia takes decisive, pioneering action to strengthen multisource collaborative surveillance for dengue",
      date: "20 November 2024",
      category: "Highlights",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Tips Sehat di Musim Hujan",
      date: "19 November 2024",
      category: "Tips & Tricks",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Olahraga yang Baik di Rumah",
      date: "18 November 2024",
      category: "Lifestyle",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="p-10 bg-white-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Health News
      </h1>
      <div className="space-y-6">
        {newsData.map((news, index) => (
          <CardBox
            key={index}
            title={news.title}
            date={news.date}
            category={news.category}
            image={news.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HealthNews;

import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { generateSlug } from "../utils/generateSlug";
import DOMPurify from "dompurify";
import RecommendedNews from "../components/RecommendedSection";
import Breadcrumbs from "../components/Breadcrumbs";

const NewsDetailPage = () => {
  const { slug } = useParams();
  const { data: newsData, loading, error } = useFetch("/data/who_news.json");
  const { data: blogsData } = useFetch("/data/blog_data.json");

  const news = newsData?.find((news) => generateSlug(news.title) === slug);

  if (loading) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-32">Error: {error}</div>;
  }

  if (!news) {
    return <div className="text-center mt-32">News not found</div>;
  }

  const sanitizedContent = DOMPurify.sanitize(news.content);

  const breadcrumbsItems = [
    { label: "Home", to: "/" },
    { label: "Health News", to: "/health-news" },
    { label: news.title, to: "#" },
  ];

  return (
    <div className="container mx-auto p-4 mt-32">
      <div className="grid grid-cols-12">
        <div className="w-full col-span-9 p-4">
          <div className="bg-white border rounded-2xl p-10">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbsItems} />
            </div>
            <h1 className="text-3xl font-semibold mb-4">{news.title}</h1>
            <p className="text-gray-600 mb-4">Published on: {news.date}</p>
            <img
              src={news.thumbnail}
              alt={news.title}
              className="w-full h-auto mb-4 rounded-lg"
            />

            <div
              className="text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        </div>
        <div className="w-full col-span-3 p-4">
          <RecommendedNews newsData={newsData} blogsData={blogsData} />
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;

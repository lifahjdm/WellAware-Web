import React from "react";
import { useNavigate } from "react-router-dom";
import { generateSlug } from "../utils/generateSlug";

const RecommendedSection = ({ newsData, blogsData }) => {
  const navigate = useNavigate();

  const handleClickNews = () => {
    navigate(`/health-news-detail/${slug}`);
  };

  const handleClickBlogs = () => {
    navigate(`/blogs-detail/${slug}`);
  };

  return (
    <>
      <div className="bg-white rounded-xl">
        <h2 className="text-lg font-bold mb-4">Recommended News</h2>
        <ul>
          {newsData?.slice(0, 3).map((recommendation) => (
            <li
              key={recommendation.title}
              className="mb-4 flex items-start"
              onClick={handleClickNews}
            >
              <img
                src={recommendation.thumbnail}
                alt={recommendation.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />

              <div>
                <p className="text-gray-500 text-xs">{recommendation.date}</p>

                <a
                  href={`/health-news-detail/${generateSlug(
                    recommendation.title
                  )}`}
                  className="hover:text-secondary hover:underline text-sm font-semibold block"
                >
                  {recommendation.title.length > 40
                    ? `${recommendation.title.substring(0, 40)}...`
                    : recommendation.title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="my-4" />
      <div className="bg-white rounded-xl">
        <h2 className="text-lg font-bold mb-4">Recommended Blogs</h2>
        <ul>
          {blogsData?.slice(0, 3).map((recommendation) => (
            <li
              key={recommendation.title}
              className="mb-4 flex items-start"
              onClick={handleClickBlogs}
            >
              <img
                src={recommendation.thumbnail}
                alt={recommendation.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />

              <div>
                <p className="text-gray-500 text-xs">{recommendation.date}</p>

                <a
                  href={`/blogs-detail/${generateSlug(recommendation.title)}`}
                  className="hover:text-secondary hover:underline text-sm font-semibold block"
                >
                  {recommendation.title.length > 40
                    ? `${recommendation.title.substring(0, 40)}...`
                    : recommendation.title}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RecommendedSection;

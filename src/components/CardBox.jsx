import React from "react";
import { useNavigate } from "react-router-dom";

const CardBox = ({ title, date, category, image, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/health-news-detail/${slug}`);
  };

  return (
    <div className="flex gap-4 max-w-4xl mx-auto items-start bg-white rounded-xl border hover:shadow-sm transition-shadow duration-300 p-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
        />
      )}

      <div className="flex flex-col justify-between">
        <div className="text-sm text-gray-500 mb-2">
          <span>{date}</span> | <span>{category}</span>
        </div>
        <h2
          className="font-semibold text-lg text-gray-900 hover:text-secondary cursor-pointer"
          onClick={handleClick}
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardBox;

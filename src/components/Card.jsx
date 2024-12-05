import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, subtitle, thumbnail, date, time_read, slug }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs-detail/${slug}`);
  };

  return (
    <div className="border rounded-xl p-4 max-w-sm mx-auto bg-white">
      <div onClick={handleClick} className="cursor-pointer">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4 "
        />
        <h2 className="font-semibold mb-2 hover:text-secondary">
          {title.length > 50 ? `${title.substring(0, 50)}...` : title}
        </h2>
        <div className="text-gray-500 text-xs mb-2">
          <span>{date}</span> | <span>{time_read}</span>
        </div>

        <p className="text-gray-600 text-xs ">{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;

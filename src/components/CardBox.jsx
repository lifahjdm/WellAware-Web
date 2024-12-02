import React from "react";

const CardBox = ({ title, date, category, image }) => {
  return (
    <div className="flex gap-4 items-start bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
      {/* Gambar */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-32 h-24 object-cover rounded-lg flex-shrink-0"
        />
      )}

      {/* Konten */}
      <div className="flex flex-col justify-between">
        {/* Tanggal dan Kategori */}
        <div className="text-sm text-gray-500 mb-2">
          <span>{date}</span> | <span>{category}</span>
        </div>
        {/* Judul */}
        <h2 className="font-semibold text-lg text-gray-900 hover:text-blue-600 cursor-pointer">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default CardBox;

// src/pages/HealthNews.js
import CardBox from "../components/CardBox";
import useFetch from "../hooks/useFetch";
import { generateSlug } from "../utils/generateSlug";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import SearchInput from "../components/SearchInput";
import round from "../assets/images/Rectangle 4.svg";
import footer from "../assets/images/footer.svg";

const NewsPage = () => {
  const { data: newsData, loading, error } = useFetch("/data/who_news.json");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 5;

  if (loading) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-32">Error: {error}</div>;
  }

  const filteredNews = newsData?.filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredNews?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const safeCurrentPage = Math.min(currentPage, totalPages);

  const indexOfLastItem = safeCurrentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const carouselImages = newsData?.map((news) => news.thumbnail);

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <img src={round} alt="overlay" className="w-full opacity-40 h-full" />
      </div>
      <div>
        <section>
        {/* Carousel Section */}
        <div className="w-full mb-24">
          <Carousel images={carouselImages} />
        </div>
        </section>

        {/* Title */}
        <section className="p-8 mb-8 container mx-auto relative">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          <span className="text-primary">Health</span> News
        </h1>
        </section>

        {/* Search Input */}
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* News Cards */}
        <div className="space-y-6">
          {currentItems?.length > 0 ? (
            currentItems.map((news, index) => {
              const slug = generateSlug(news.title);
              return (
                <CardBox
                  key={index}
                  slug={slug}
                  title={news.title}
                  date={news.date}
                  category="Highlights"
                  image={news.thumbnail}
                />
              );
            })
          ) : (
            <div className="text-center text-gray-500">No results found</div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <Pagination
            currentPage={safeCurrentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </div>

      

      <section className="bg-white py-20"></section>

      {/* Footer Section */}
      <div>
      <section>
        <img src={footer} alt="footer" className="w-full" />
      </section>
      </div>
    </>
  );
};

export default NewsPage;

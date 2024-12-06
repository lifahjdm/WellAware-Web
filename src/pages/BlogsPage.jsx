import useFetch from "../hooks/useFetch";
import { generateSlug } from "../utils/generateSlug";
import Card from "../components/Card";
import { useState } from "react";
import Pagination from "../components/Pagination";
import Carousel from "../components/Carousel";
import SearchInput from "../components/SearchInput";
import round from "../assets/images/Rectangle 4.svg";
import footer from "../assets/images/footer.svg";

const carouselImages = [
  "https://www.trans7.co.id/images/7update/7_Cara_Menjaga_Kesehatan_Jantungmu_1582108037.jpeg",
  "https://yankes.kemkes.go.id/img/bg-img/gambarartikel_1704177269_114911.png",
  "https://upk.kemkes.go.id/new/imagex/content/61117e5586ccaf4d775d97e8b89de86d.jpeg",
];

const BlogsPage = () => {
  const { data: blogsData, loading, error } = useFetch("/data/blog_data.json");

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 4;

  if (loading) {
    return <div className="text-center mt-32">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-32">Error: {error}</div>;
  }

  const filteredBlogs = blogsData?.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBlogs?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBlogs?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10">
        <img
          src={round}
          alt="overlay"
          className="w-full opacity-40 h-full object-cover"
        />
      </div>

      <div>
        {/* Carousel Section */}
        <section>
          <div className="w-full mt-24 mb-20 overflow-hidden">
            <Carousel images={carouselImages} />
          </div>
        </section>

        <section className="p-8 mt-16 mb-20 bg-white-100 min-h-screen container mx-auto relative">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <span className="text-primary">Health</span> Blogs
          </h1>

          {/* Search Input */}
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {currentItems?.length > 0 ? (
              currentItems.map((blog, index) => {
                const slug = generateSlug(blog.title);
                return (
                  <Card
                    key={index}
                    slug={slug}
                    title={blog.title}
                    subtitle={blog.subtitle}
                    date={blog.date}
                    time_read={blog.time_read}
                    thumbnail={blog.thumbnail}
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
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </section>
      </div>
      {/* Footer Section */}
      <div>
        <img src={footer} alt="footer" className="w-full" />
      </div>
    </div>
  );
};

export default BlogsPage;

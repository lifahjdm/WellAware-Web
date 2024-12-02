import { useEffect, useState } from "react";
import logo from "../components/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  
  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.screenY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";


  return (
    <div className={'navbar fixed w-full transition-all ${scrollActive}'}>
      {/* Bagian atas dengan background biru */}
      <div className="h-7" style={{ backgroundColor: "#6BCBCF" }}></div>

      {/* Navbar di bawah area biru */}
      <nav className="flex flex-col md:flex-row justify-between items-center px-2 py-1 bg-white">
        {/* Buttons di bagian kiri */}
        <div
          className={`flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-0 mt-4 md:mt-0 md:order-1 order-2 ml-10
          lg:gap-1 md:static md:flex-row md:shadow-none 
          md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black fixed ${menuActive} top-1/2 -translate-y-1/2 px-4 py-3 
          rounded shadow-lg shadow-slate-300 bg-sky-100 font-bold text-white transition-all`}
        >
          <Link to="/HomePage" className="px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:text-blue-600">
            Home
          </Link>
          <Link to="/AboutUsPage" className="px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:text-blue-600">
            About Us
          </Link>
          <Link to="/HealthNewsPage" className="px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:text-blue-600">
            HealthNews
          </Link>
          <Link to="/BlogsPage" className="px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:text-blue-600">
            Blogs
          </Link>
          <Link to="/VideosPage" className="px-4 py-2 rounded-full text-gray-700 text-sm font-medium hover:text-blue-600">
            Videos
          </Link>
        </div>

        {/* Logo dan Judul Website di bagian kanan */}
        <div className="flex items-center md:order-2 order-1">
          <i
            className="ri-menu-line text-3xl ml-2 md:hidden block"
            onClick={handleClick}
          ></i>
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain" // Ukuran logo
          />
          <h1 className="text-l font-bold text-gray-800 hidden sm:block mr-10">
            WellAware
          </h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

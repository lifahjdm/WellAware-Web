import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About Us" },
    { to: "/health-news", label: "HealthNews" },
    { to: "/blogs", label: "Blogs" },
    { to: "/videos", label: "Videos" },
  ];

  return (
    <div className="navbar fixed top-0 left-0 w-full z-10">
      <div className="h-7 bg-primary"></div>

      <div className="bg-white shadow-md">
        <div className="container w-full mx-auto">
          <nav className="flex justify-between items-center px-4 py-3">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-xl font-bold text-gray-800 ml-3 hidden sm:block">
                WellAware
              </h1>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="sm:hidden flex items-center">
              <button
                className="text-gray-700 text-2xl"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i
                  className={`ri-menu-line ${menuOpen ? "rotate-90" : ""}`}
                ></i>
              </button>
            </div>

            {/* Navbar Links (Desktop) */}
            <div className="sm:flex flex-row space-x-6 hidden md:flex">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-full ${
                    activeLink === to
                      ? "bg-secondary/30"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleLinkClick(to)}
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Navbar Links (Mobile) */}
            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } flex md:hidden flex-col space-y-4 absolute top-24 left-0 right-0 bg-white px-4 py-3`}
            >
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`px-4 py-2 text-sm font-medium transition-all rounded-full w-fit ${
                    activeLink === to
                      ? "bg-secondary/30"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => handleLinkClick(to)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

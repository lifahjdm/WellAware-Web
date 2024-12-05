import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center text-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <Link
            to={item.to}
            className={`hover:text-tertiary ${
              index === items.length - 1
                ? "font-medium text-gray-700"
                : "text-gray-400"
            }`}
          >
            {item.label.length > 40
              ? `${item.label.substring(0, 40)}...`
              : item.label}
          </Link>

          {index < items.length - 1 && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3 mx-2 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;

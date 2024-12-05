import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import NewsPage from "./pages/NewsPage";
import BlogsPage from "./pages/BlogsPage";
import VideosPage from "./pages/VideosPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import BlogsDetailPage from "./pages/BlogsDetailPage";

export const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/health-news" element={<NewsPage />} />
      <Route path="/health-news-detail/:slug" element={<NewsDetailPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/blogs-detail/:slug" element={<BlogsDetailPage />} />
      <Route path="/videos" element={<VideosPage />} />
    </Route>
  )
);

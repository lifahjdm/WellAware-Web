import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthNewsPage from "./pages/HealthNewsPage";
import BlogsPage from "./pages/BlogsPage";
import VideosPage from "./pages/VideosPage";

export const publicRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/health-news" element={<HealthNewsPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="/videos" element={<VideosPage />} />
    </Route>
  )
);

import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import HealthNewsPage from "./pages/HealthNewsPage";
import BlogsPage from "./pages/BlogsPage";
import VideosPage from "./pages/VideosPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Navbar */}
      {/* Content */}
      {/* <HomePage /> */}
      {/* Footer */}
      {/* <Footer /> */}
      {/* <AboutUsPage /> */}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route>
        <Route path="HomePage" element={<HomePage />}></Route>
        <Route path="AboutUsPage" element={<AboutUsPage />}></Route>
        <Route path="HealthNewsPage" element={<HealthNewsPage />}></Route>
        <Route path="BlogsPage" element={<BlogsPage />}></Route>
        <Route path="VideosPage" element={<VideosPage />}></Route>
        </Route>
      </Routes>
      </BrowserRouter>

    </div>  
  );      
}
export default App

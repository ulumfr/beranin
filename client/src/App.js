import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NotFoundPage from "./pages/notfound";
import HomePage from "./pages/home/home";
import NewsPage from "./pages/news/news";
import AboutPage from "./pages/about/about";
import DetailNewsPage from "./pages/news/detail";
import { AnimatePresence } from "framer-motion";
import SiswaPage from "./pages/siswa-menu/siswa";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
    <Footer />
  </div>
);

const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route
            path="/"
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
          <Route
            path="/news"
            element={
              <DefaultLayout>
                <NewsPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/detailnews"
            element={
              <DefaultLayout>
                <DetailNewsPage />
              </DefaultLayout>
            }
          />
          <Route
            path="/about"
            element={
              <DefaultLayout>
                <AboutPage />
              </DefaultLayout>
            }
          />
          <Route path="/menu-siswa" element={<SiswaPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;

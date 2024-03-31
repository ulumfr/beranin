import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import NavBar from "./components/navbar";
import NotFoundPage from "./pages/notfound";
import HomePage from "./pages/home/home";
import NewsPage from "./pages/news/news";
import AboutPage from "./pages/about/about";
import { AnimatePresence } from "framer-motion";

const DefaultLayout = ({ children }) => (
  <div>
    <NavBar />
    {children}
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
            path="/about"
            element={
              <DefaultLayout>
                <AboutPage />
              </DefaultLayout>
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;

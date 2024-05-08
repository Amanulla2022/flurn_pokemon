import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import ListPage from "./pages/ListPage";
import IndividualPage from "./pages/IndividualPage";
import Favorites from "./pages/Favorites";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/pokemon/:id" element={<IndividualPage />} />
        <Route path="/fav" element={<Favorites />} />
      </Routes>
    </Router>
  );
};

export default Layout;

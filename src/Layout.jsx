import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import ListPage from "./pages/ListPage";
import IndividualPage from "./pages/IndividualPage";

const Layout = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/pokemon/:id" element={<IndividualPage />} />
      </Routes>
    </Router>
  );
};

export default Layout;

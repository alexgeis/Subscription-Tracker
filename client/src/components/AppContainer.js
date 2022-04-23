import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import MngSub from "./pages/MngSub/MngSub";
import NewSub from "./pages/NewSub/NewSub";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SingleSub from "./pages/SingleSub/SingleSub";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./pages/Footer/Footer";

export default function AppContainer(props) {
  const { toggleTheme } = props;
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/welcome"
            element={<Welcome toggleTheme={toggleTheme} />}
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sub/:id" element={<SingleSub toggleTheme={toggleTheme} />} />
          <Route path="/newsub" element={<NewSub toggleTheme={toggleTheme} />} />
          <Route path="/managesub" element={<MngSub toggleTheme={toggleTheme} />} />
          <Route path="/settings" element={<Settings toggleTheme={toggleTheme} />} />
        </Routes>
      </div>
    </Router>
  );
}
// const handlePageChange = (page) => setCurrentPage(page);

// return (
//   <div>
//     {/* <Home currentPage={currentPage} handlePageChange={handlePageChange} /> */}

//     {renderPage()}
//     <Footer currentPage={SingleSub} handlePageChange={handlePageChange} />
//   </div>
//   );

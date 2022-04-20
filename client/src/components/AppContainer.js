import React, { useState } from "react";
import Home from "./pages/Home/Home";
import MngSub from "./pages/MngSub/MngSub";
import NewSub from "./pages/NewSub/NewSub";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SingleSub from "./pages/SingleSub/SingleSub";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./pages/Footer/Footer";

export default function AppContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Welcome") {
      return <Welcome />;
    }
    if (currentPage === "MngSub") {
      return <MngSub />;
    }
    if (currentPage === "NewSub") {
      return <NewSub />;
    }
    if (currentPage === "Settings") {
      return <Settings />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    if (currentPage === "SingleSub") {
      return <SingleSub />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Home currentPage={currentPage} handlePageChange={handlePageChange} />

      <Footer />
      {renderPage()}
    </div>
  );
}

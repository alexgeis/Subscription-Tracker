import React, { useState } from "react";
// import NavTabs from "./NavTabs"; - create this still
import Home from "./Container/pages/Home";
// import MngSub from "./Container/pages/MngSub";
// import NewSub from "./Container/pages/NewSub";
// import Settings from "./Container/pages/Settings";
// import SignUp from "./Container/pages/SignUp";
// import SingleSub from "./Container/pages/SingleSub";
// import Tips from "./Container/pages/Tips";
// import Welcome from "./Container/pages/Welcome";
// import Header from "./Container/pages/Header";
// import Footer from "./Container/pages/Footer";

export default function PortfolioContainer() {
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
    return <Tips />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
    </div>
  );
}

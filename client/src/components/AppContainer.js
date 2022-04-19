import React, { useState } from "react";
// import NavTabs from "./NavTabs"; - create this still

import Home from "./pages/Home/Home";
// import MngSub from "./components/pages/MngSub";
// import NewSub from "./components/pages/NewSub";
// import Settings from "./components/pages/Settings";
// import SignUp from "./components/pages/SignUp";
// import SingleSub from "./components/pages/SingleSub";
// import Tips from "./components/pages/Tips";
// import Welcome from "./components/pages/Welcome";
// import Header from "./components/pages/Header";
// import Footer from "./components/pages/Footer";


export default function AppContainer() {
  // const [currentPage, setCurrentPage] = useState("Home");

  // const renderPage = () => {
  //   if (currentPage === "Home") {
  //     return <Home />;
  //   }
  // if (currentPage === "Welcome") {
  //   return <Welcome />;
  // }
  // if (currentPage === "MngSub") {
  //   return <MngSub />;
  // }
  // if (currentPage === "NewSub") {
  //   return <NewSub />;
  // }
  // if (currentPage === "Settings") {
  //   return <Settings />;
  // }
  // if (currentPage === "SignUp") {
  //   return <SignUp />;
  // }
  // if (currentPage === "SingleSub") {
  //   return <SingleSub />;
  // }
  // return <Tips />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Home />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* {renderPage()} */}
    </div>
  );
}

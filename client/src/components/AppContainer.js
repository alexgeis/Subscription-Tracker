import React, { useState } from "react";
// import NavTabs from "./NavTabs"; - create this still
<<<<<<< HEAD
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
=======
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
>>>>>>> d9e2f5ddbbd01db15bbb9b1d6bc040dc11879b67

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

import React, { useState } from "react";
// import NavTabs from "./NavTabs"; - create this still

import Home from "./pages/Home/Home";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> 5bb50b66251d987a2c8451aad4a27650bfaa5b84
import MngSub from "./pages/MngSub/MngSub";
import NewSub from "./pages/NewSub/NewSub";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SingleSub from "./pages/SingleSub/SingleSub";
import Tips from "./pages/Tips/Tips";
import welcomeScreen from "./pages/Welcome/Welcome";
// import Header from "./Container/pages/Header";
// import Footer from "./Container/pages/Footer";
<<<<<<< HEAD
>>>>>>> 2d64de9d52d06b85f7bddccb2a9943b47e9040eb
=======

>>>>>>> 5bb50b66251d987a2c8451aad4a27650bfaa5b84

export default function AppContainer() {
  // const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Welcome") {
      return <welcomeScreen />;
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

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* {renderPage()} */}
    </div>
  );
}

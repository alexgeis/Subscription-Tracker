import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import MngSub from "./pages/MngSub/MngSub";
import NewSub from "./pages/NewSub/NewSub";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";
import SingleSub from "./pages/SingleSub/SingleSub";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./pages/Footer/Footer";

export default function AppContainer() {
<<<<<<< HEAD
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

  // return (
  //   <div>
  //     {/* <Home currentPage={currentPage} handlePageChange={handlePageChange} /> */}

  //     {renderPage()}
  //     <Footer currentPage={SingleSub} handlePageChange={handlePageChange} />
  //   </div>
//   );
=======
return (
      <Router>
          <div>
            <Routes>
              <Route 
                path="/"
                element={<Home />}
              />
              <Route 
                path="/welcome" 
                element={<Welcome />}
              />
              <Route 
                path="/signup" 
                element={<SignUp />}
              />
              <Route 
                path="/sub" 
                element={<SingleSub />}
              />
                <Route 
                  path="/newsub" 
                  element={<NewSub />}
                />
              <Route 
                path="/managesub" 
                element={<MngSub />}
              />
              <Route 
                path="/settings" 
                element={<Settings />}
              />
            </Routes>
          </div>
          <Footer />
      </Router>
  );
>>>>>>> a88b11af152cf2ada7c72ac4319ce01dda8d1c4d
}


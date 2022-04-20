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
}


import "./App.css";
import React from "react";
import "font-awesome/css/font-awesome.css";

import { Signup } from "./Pages/Signup";
import { Login } from "./Pages/Login";
import HomeOrg from "./Pages/HomeOrg";
import { Home } from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Profile } from "./Pages/Profile";
import { Events } from "./Pages/Events";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/organization" element={<HomeOrg />} />
          <Route path="/individual" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;

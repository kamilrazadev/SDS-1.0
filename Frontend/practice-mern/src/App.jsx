import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404/Page404";
import SignUp from "./Pages/Signup/SignUp";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export const role = "asd";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {role === "guest" ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Page404 />} />
          </>
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

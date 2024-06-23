import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import HomePage from "./HomePage";
import MovieDetails from "./MovieDetails";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/registration" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/moviedetails/:id" element={<MovieDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

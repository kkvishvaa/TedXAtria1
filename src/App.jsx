import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TedxAtria from "./pages/TedXMain";
import About from "./pages/AboutAtria";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TedxAtria />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

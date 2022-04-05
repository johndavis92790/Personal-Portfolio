import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./pages/Resume";

function App() {

  return (
    <Router>
      <div>
        <Header></Header>
        <main>
          <Routes>
            <Route path="/" exact element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

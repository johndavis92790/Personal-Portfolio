import React, { useState } from 'react';
// import ReactDOM from "react-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { fa-linkedin, faFontAwesome } from "@fortawesome/free-brand-svg-icons";

import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Resume from "./components/Resume";

// library.add(fas, faTwitter, faFontAwesome);

function App() {
  
  const [navSelection, setNavSelection] = useState('about');

  return (
    <div>
      <Header setNavSelection={setNavSelection}></Header>
      <main>
        {navSelection === "portfolio" ? <Portfolio></Portfolio> : <></>}
        {navSelection === "contact" ? <Contact></Contact> : <></>}
        {navSelection === "about" ? <About></About> : <></>}
        {navSelection === "resume" ? <Resume></Resume> : <></>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

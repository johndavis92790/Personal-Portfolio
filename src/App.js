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
  
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(true);
  const [resumeSelected, setResumeSelected] = useState(false);
  return (
    <div>
      <Header
        setPortfolioSelected={setPortfolioSelected}
        setContactSelected={setContactSelected}
        setAboutSelected={setAboutSelected}
        setResumeSelected={setResumeSelected}
      ></Header>
      <main>
        {portfolioSelected ? <Portfolio></Portfolio> : <></>}
        {contactSelected ? <Contact></Contact> : <></>}
        {aboutSelected ? <About></About> : <></>}
        {resumeSelected ? <Resume></Resume> : <></>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

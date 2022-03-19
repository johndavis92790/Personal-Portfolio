import React, { useState } from 'react';
import Nav from "./components/Nav";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <About></About>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;

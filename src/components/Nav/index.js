// import React, { useEffect } from "react";

function Nav(props) {

  const {
    setContactSelected,
  } = props;

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setContactSelected(true)}>
              Contact
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

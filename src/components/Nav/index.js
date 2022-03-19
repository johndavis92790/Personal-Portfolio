// import React, { useEffect } from "react";

function Nav() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              data-testid="about"
              href="#about"
            >
              About me
            </a>
          </li>
          <li>
            <a
              data-testid="porfolio"
              href="#porfolio"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              data-testid="contact"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              data-testid="resume"
              href="#resume"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

import React from "react";
import Pdf from "../../assets/pdf/resume.pdf";

function Resume() {
  return (
    <section>
      <h1 id="resume">Resume</h1>
      <a href={Pdf} target="_blank" rel="noreferrer">
        Resume
      </a>
      <div>
        <p>
          Top Languages/Technologies: Javascript, React, Express.js, MongoDB, Node.js, HTML, CSS.
        </p>
      </div>
    </section>
  );
}

export default Resume;

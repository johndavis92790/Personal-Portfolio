import React from "react";
import { Modal, Button } from "react-bootstrap";


const ModalDiv = ({ setCurrentProject, currentProject }) => {
  //Some projects are back-end only, so they do not have a live link, this function dynamically displays the correct links for each project
  const ifLiveLink = (project) => {
    if (project.url === "") {
      return (
        <span className="px-5">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </span>
      );
    } else {
      return (
        <span className="px-5">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Live Link
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="mt-3"
          >
            Github Repo
          </a>
        </span>
      );
    }
  };

  // Modal div to display larger screen shot and more information for each project
  return (
    <Modal
      show={true}
      onHide={() => setCurrentProject(null)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {currentProject.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className="img-fluid"
          src={require(`../../assets/large/${currentProject.name}.jpg`)}
          alt={currentProject.name}
        />
        <p className="p-5">{currentProject.description}</p>
        {ifLiveLink(currentProject)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setCurrentProject(null)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDiv;

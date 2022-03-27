import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDiv = ({ setCurrentProject, currentProject }) => {
  console.log("test", currentProject);

  return (
    <>
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
            src={require(`../../assets/large/${currentProject.index}.jpg`)}
            alt={currentProject.name}
          />
          <p className="p-5">{currentProject.description}</p>
          <span className="px-5">
            <a
              href={currentProject.url}
              target="_blank"
              rel="noreferrer"
              className="mt-3"
            >
              Live Link
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href={currentProject.github}
              target="_blank"
              rel="noreferrer"
              className="mt-3"
            >
              Github Repo
            </a>
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setCurrentProject(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDiv;

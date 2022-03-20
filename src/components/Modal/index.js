import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDiv = (props) => {
  console.log("test", props);

  return (
    <>
      <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.currentProject.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={`../../assets/large/${props.currentProject.index}.jpg`}
            alt={props.currentProject.name}
          />
          <p>{props.currentProject.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDiv;

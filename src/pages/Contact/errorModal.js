import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function ErrorModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Error!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Missing Information!</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

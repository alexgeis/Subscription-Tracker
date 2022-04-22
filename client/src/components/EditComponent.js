import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";

const EditModal = (s) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button variant="primary" size="md" onClick={() => setShowModal(true)}>
        Edit
      </Button>
      
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update {s.subscriptionName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="input" placeholder={s.subscriptionName} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cost:</Form.Label>
              <Form.Control type="input" placeholder={s.monthlyCost} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Payment Type:</Form.Label>
              <Form.Control type="input" placeholder={s.paymentType} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Auto Pay:</Form.Label>
              <Form.Control type="input" placeholder={s.autoPay} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Auto Renew:</Form.Label>
              <Form.Control type="input" placeholder={s.autoRenew} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;

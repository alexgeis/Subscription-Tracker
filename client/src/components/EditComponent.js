import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_SUBSCRIPTION } from "./utils/mutations";
import AuthService from "./utils/auth";


const EditModal = ({subscription}) => {

  const [showModal, setShowModal] = useState(false);
  const [subName, setSubName] = useState(subscription.subscriptionName)
  const [monthlyCost, setMonthlyCost] = useState(subscription.monthlyCost)
  const [payType, setPayType] = useState(subscription.paymentType)
  const [autoPay, setAutoPay] = useState(subscription.autoPay);
  const [autoRenew, setRenew] = useState(subscription.autoRenew);
  


  let userId = (AuthService.getProfile().data._id)
  function consoleLogger(event){
    event.preventDefault()
    console.log(subName, monthlyCost, payType, autoPay, autoRenew)
  }

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.id;
    const inputValue = target.value;

    switch (inputType) {
      case 'sName': {
        setSubName(inputValue)
        break;
      }
      case 'sCost': {
        setMonthlyCost(inputValue)
        break;
      }
      case 'sPayType': {
        setPayType(inputValue)
        break;
      }
    }
  }

  const handleCheckboxChange = (e) => {
    const { target } = e;
    const inputType = target.id;

    switch (inputType) {
      case 'sAutoPay': {
        setAutoPay(target.checked)
        break;
      }
      case 'sAutoRenew': {
        setRenew(target.checked)
        break;
      }
    }
  }

  const handleHide = () => {
    setAutoPay(subscription.autoPay)
    setRenew(subscription.autoRenew)
    setMonthlyCost(subscription.monthlyCost)
    setSubName(subscription.subscriptionName)
    setPayType(subscription.paymentType)
    setShowModal(false)
  }
  
  const handleFormSubmit = async (e) => {
    e.preventDefault()


  }
 
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
          <Modal.Title>Update {subscription.subscriptionName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name:</Form.Label>
              <Form.Control 
                type="input"
                id="sName"
                onChange={handleInputChange} 
                placeholder={subscription.subscriptionName} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cost:</Form.Label>
              <Form.Control 
                type="input"
                id="sCost"
                onChange={handleInputChange} 
                placeholder={subscription.monthlyCost} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Payment Type:</Form.Label>
              <Form.Control 
                type="input"
                id="sPayType"
                onChange={handleInputChange} 
                placeholder={subscription.paymentType} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Auto Pay:</Form.Label>
              <Form.Check 
                type="checkbox"
                id="sAutoPay"
                onChange = {handleCheckboxChange} 
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Label>Auto Renew:</Form.Label>
              <Form.Check 
                type="checkbox"
                id="sAutoRenew"
                onChange = {handleCheckboxChange}  
              />
            </Form.Group>
          </Form>
          <Button variant="primary" size="sm" onClick = {consoleLogger}>
            Console Logger
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleHide}>
            Cancel
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;

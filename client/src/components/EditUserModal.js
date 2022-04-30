import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import UPDATE_USER from './utils/mutations'


function EditUser({user}){

    // TODO: Destructure User
    const [showModal, setShowModal] = useState(false);
    const [userName, setUserName] = useState(user.username);
    const [userEmail, setUserEmail] = useState(user.email);
    const [userPassword, setUserPassword] = useState(false);
    const [userPasswordConfirm, setUserPasswordConfirm] = useState(false);

    const handleHide = () => {
        setUserName(user.username);
        setUserEmail(user.email);
        setUserPassword(false);
        setShowModal(false);
    }

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.id;
        const inputValue = target.value;

        switch (inputType) {
            case "uName": {
                setUserName(inputValue)
                break
            }
            case "uEmail": {
                setUserEmail(inputValue)
                break
            }
            case "uPass": {
                setUserPassword(inputValue)
                break
            }
            case "uPassConfirm": {
                setUserPasswordConfirm(inputValue)
                break
            }
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (userName.length < 6){
            return alert("Username must be at least 6 characters")
        }
        if ((userPassword)){
            if (userPassword.length < 6){
                return alert ("Password must be at least 6 characters")
            }
            if (userPassword !== userPasswordConfirm){
                return alert ("Password and Confirm Password do not match")
            }
        }

        
    }

    const consoleLogger = (e) => {
        e.preventDefault()
        console.log(userName)
        console.log(userEmail)
        console.log(userPassword)
    }

    return (
        <>
            <Button onClick={() => setShowModal(true)}>Modal Button</Button>
            <Modal show={showModal} onHide={handleHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Account Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={consoleLogger}>Console Logger</Button>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control
                                type = "input"
                                id = "uName"
                                onChange = {handleInputChange}
                                placeholder = {user.username}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email: </Form.Label>
                            <Form.Control
                                type = "input"
                                id = "uEmail"
                                onChange = {handleInputChange}
                                placeholder = {user.email}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control
                                type = "password"
                                id = "uPass"
                                onChange = {handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password: </Form.Label>
                            <Form.Control
                                type = "password"
                                id = "uPassConfirm"
                                onChange = {handleInputChange}>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    <Button variant="primary" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditUser;
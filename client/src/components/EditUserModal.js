import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import UPDATE_USER from './utils/mutations'


function EditUser(props){
    const [showModal, setShowModal] = useState(false);
    const [userName, setUserName] = useState(`props here`);
    const [userEmail, setUserEmail] = useState(`props here`);
    const [userPassword, setUserPassword] = useState(`props here`);

    const handleInputChange = (e) => {
        e.preventDefault();
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
        </>
    )
}

export default EditUser;
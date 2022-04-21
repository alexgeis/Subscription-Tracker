import "../SignUp/signUp.css";
// import validator from 'validator'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import { Form, Button, Alert } from 'react-bootstrap';

const SignUp = () => {

  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [createUser, {error}] = useMutation(CREATE_USER)
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  if (error) {
    console.error(JSON.stringify(error.message));
  }


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
console.log(userFormData)
      try {
  console.log("Working?")      
      const {data} = await createUser({ 
        variables: {...userFormData }})
          

    
      console.log(data);
      AuthService.login(data.createUser.token);
    } catch (error) {
      console.error(error);
      setShowAlert(true);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  };

  // const [emailError, setEmailError] = useState('')
  // const validateEmail = (e) => {
  //   var email = e.target.value
  
  //   if (validator.isEmail(email)) {
  //     setEmailError('Great!')
  //   } else {
  //     setEmailError('Please Enter A Valid Email')
  //   }
  // }

  return (
    <>
    <div className="container-fluid">
      <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        {/* show alert if server response is bad */}
        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
          Something went wrong with your signup!
        </Alert>
        <Form.Group>
          <h1 id="signUp"> Sign Up</h1>
          <Form.Label htmlFor='username'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Your username'
            name='username'
            onChange={handleInputChange}
            value={userFormData.username}
            required
          />
          <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='email'>Email</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your email address'
            name='email'
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Your password'
            name='password'
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
        </Form.Group>
        <Button id="signUpBtn"
          disabled={!(userFormData.username && userFormData.email && userFormData.password)}
          type='submit'
          variant='success'>
          Submit
        </Button>
      </Form>
      </div>
    </>
  );
};

export default SignUp;




// {/* onChange={(e) => validateEmail(e)} ></input> <br />
//           <span style={{
//             color: 'green', 
//           }}>{emailError}</span>  */}

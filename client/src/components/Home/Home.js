import { useState } from "react";
import { Form, Image, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../Home/home.css';
import Logo1 from '../Images/logo1.png'
import Logo2 from '../Images/logo2.png'
import Money from '../Images/raining-money.gif'

function Home() {
  return (
    <>
      <Container >
        <div id="logo">
          {/* <img src={Money}class="img-fluid" id='money'/> */}
          <img src={Logo2}class="img-fluid" id='logo' alt="Logo"/>
          {/* <img src={Money}class="img-fluid" id='money'/> */}
        </div>
        <Form>
          <div id="homeContainer">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
             Login
            </Button>
          <br></br>
          <br></br>
          <p> OR </p>
          <div>
            <Button variant="primary" type="submit">
             Sign Up 
            </Button>
          </div> </div>
        </Form>
        </Container>
        
      </>
    
  );
}

export default Home;

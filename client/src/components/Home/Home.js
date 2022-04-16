import { useState } from "react";
import { Form, Image, Button, Container } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container>
        <div>This is where the logo goes</div>
        <Form>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="Enter User Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>
          <p>OR </p>
          <div>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Home;

import { useState } from "react";
import { Form, Image, Button, Container } from "react-bootstrap";

function Home() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    return name === "userName" ? setUserName(value) : setPassword(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName("");
    setPassword("");
  };
  const handleSignup = (event) => {};

  return (
    <>
      <Container>
        <div>This is where the logo goes</div>
        <Form>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                name="userName"
                onChange={handleInputChange}
                placeholder="Enter User Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Login
            </Button>
          </div>
          <p>OR </p>
          <div>
            <Button variant="primary" type="submit" onClick={handleSignup}>
              Sign Up
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Home;

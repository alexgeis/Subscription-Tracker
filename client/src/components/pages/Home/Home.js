import { useState } from "react";
import { Form, Image, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

// import Welcome from "./Welcome/Welcome";
// import SignUp from "./SignUp/SignUp";

function Home() {
  // const [loginInfo, setloginInfo] = useState("");
  const [formState, setFormState] = useState({ userName: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token); //json web token
    } catch (event) {
      console.error(event);
    }

    // clear form values
    setFormState({
      userName: "",
      password: "",
    });
  };

  // const handleSignup = () => {}

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
                value={formState.userName}
                name="userName"
                onChange={handleInputChange}
                placeholder="Enter User Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={formState.password}
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
            <Button
              variant="primary"
              type="submit"
              // onClick={handleSignup}
            >
              Sign Up
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Home;

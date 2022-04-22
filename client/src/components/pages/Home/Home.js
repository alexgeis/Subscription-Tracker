import { useState } from "react";
import { Form, Image, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css";
import Logo3 from "../../Images/logo3.png";
import Money from "../../Images/raining-money.gif";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import AuthService from "../../utils/auth";

function Home() {
  // const [loginInfo, setloginInfo] = useState("");
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);
  if (error) {
    console.error(JSON.stringify(error.message));
  }

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
      console.log({ ...formState });
      console.log(login);
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(`I'm on line 33 here's some ${data}`);
      AuthService.login(data.login.token); //json web token
    } catch (error) {
      console.error(JSON.stringify(error));
    }

    // clear form values
    setFormState({
      username: "",
      password: "",
    });
  };

  // const handleSignup = () => {
  //   render("/signup");
  // };

  return (
    <>
      <Container>
        <div className="homeContainer" />

        <img src={Money} className="img-fluid" id="money" />
        <div id="logo">
          <img src={Logo3} className="img-fluid" id="logo" alt="Logo" />
        </div>
        <Form>
          <div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                value={formState.username}
                name="username"
                onChange={handleInputChange}
                placeholder="Enter Username"
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
          <br></br>
          <p>OR</p>
          <div>
            <Button
              variant="primary"
              type="submit"
              // onClick={handleSignup}
            >
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
}

export default Home;

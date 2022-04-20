import { useState } from "react";
import { Form, Image, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Home/home.css";
import Logo3 from "../../Images/logo3.png";
// import Logo2 from "../../Images/logo2.png";
import Money from "../../Images/raining-money.gif";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import AuthService from "../../utils/auth";

function Home() {
  // const [loginInfo, setloginInfo] = useState("");
  const [formState, setFormState] = useState({ userName: "", password: "" });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

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
    // try {
    //   const { data } = await login({
    //     variables: { ...formState },
    //   });

    //   AuthService.login(data.login.token); //json web token
    // } catch (event) {
    //   console.error(event);
    // }

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
      <div className="card"/>
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
                value={formState.userName}
                name="userName"
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

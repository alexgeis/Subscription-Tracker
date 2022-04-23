import Welcome from "../Welcome/Welcome";
import { Container, ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Settings/settings.css";
import React, { useState } from "react";
import { useQuery } from '@apollo/client'
import AuthService from "../../utils/auth";
import { QUERY_USER } from "../../utils/queries";
import { useTheme } from '../../utils/ThemeContext';
import Footer from "../Footer/Footer";



function Settings() {

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

let userId = (AuthService.getProfile().data)
console.log(userId)

  return (
    <Container>
      <div class="container-fluid">
        <h1 id="settingsHead">Settings</h1>

<h5>Username:</h5>
      <p>{userId.username}</p>
      <button id="editBtn">Edit</button>
      <h5>Email:</h5>
      <p>{userId.email}</p>
      <button id="editBtn">Edit</button>
      <h5>Password:</h5>
      <p>Password****{userId.password}</p>
      <button id="editBtn">Edit</button>
      <div>
          <button id="buttonInstall" role="button">
            Click To Install!
          </button>
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default Settings;

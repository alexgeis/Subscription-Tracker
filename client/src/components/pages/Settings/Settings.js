import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Settings/settings.css";
import React from "react";
import AuthService from "../../utils/auth";
import Footer from "../Footer/Footer";
import EditUser from "../../EditUserModal";


function Settings(props) {
const { toggleTheme } = props;
let userId = (AuthService.getProfile().data)

  return (
    <Container>
      <div class="container-fluid">
      <h1 id="settingsHead">Settings</h1>

<h5>Username:</h5>
      <p>{userId.username}</p>
      <h5>Email:</h5>
      <p>{userId.email}</p>
      <h5>Password:</h5>
      <p>Password****{userId.password}</p>
      <EditUser user={userId} />    
      <div>
          <button id="buttonInstall">
            Click To Install!
          </button>
        </div>
      </div>
      <Footer toggleTheme={toggleTheme} />
    </Container>
  );
}

export default Settings;

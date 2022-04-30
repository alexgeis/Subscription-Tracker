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
      <EditUser user={userId} />
      <p>{userId.username}</p>
      <button id="editBtn">Edit</button>
      <h5>Email:</h5>
      <p>{userId.email}</p>
      <button id="editBtn">Edit</button>
      <h5>Password:</h5>
      <p>Password****{userId.password}</p>
      <button id="editBtn">Edit</button>
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

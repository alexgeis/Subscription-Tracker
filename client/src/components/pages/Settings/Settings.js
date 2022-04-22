import Welcome from "../Welcome/Welcome";
import { Container, ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Settings/settings.css";
import React, { useState } from "react";
import Footer from "../Footer/Footer";

function Settings() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];

  return (
    <Container>
      <div class="container-fluid">
      <h1 id="settingsHead">Settings</h1>
  
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? "dark" : "light"}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
<br></br><br></br><br></br>
      <p>Place Holder Name</p>
      <br></br>
      <p>Place Holder User</p>
      <br></br>
      <p>Place Holder Password</p>
      
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

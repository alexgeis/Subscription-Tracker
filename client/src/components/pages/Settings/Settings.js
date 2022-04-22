import Welcome from "../Welcome/Welcome";
import { Container, ButtonGroup, ToggleButton, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Settings/settings.css";
import React, { useState } from "react";

import { QUERY_SINGLE_USER } from "../../utils/queries";
import { useQuery } from '@apollo/client'
import AuthService from "../../utils/auth";
import { QUERY_USER } from "../../utils/queries";
import { useTheme } from '../../utils/ThemeContext';


import Footer from "../Footer/Footer";


function Settings() {

  // const { darkTheme, toggleTheme } = useTheme();

  // // Object containing CSS gradient for darkTheme and non-darkTheme
  // const themeStyles = {
  //   background: darkTheme
  //     ? '-webkit-linear-gradient(top left, #150C17, #535353)'
  //     : '-webkit-linear-gradient(bottom, #FFFFFF, #EDBAAB)',
  //   color: darkTheme ? '#FAFAFA' : '#363537',
  // };


  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  let userId = (AuthService.getProfile().data._id)
// let userEmail = (AuthService.getProfile().data2._id)

  const { data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId}
  })
//const { data2 } = useQuery(QUERY_USER, { 
 // variables: {userEmail: userEmail}})

  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];


//   <code style={{ fontWeight: 'bold' }}>
//   darkTheme: {darkTheme.toString()}
// </code>
// </section>
// <div style={themeStyles}>
// <h1>Theme Component</h1>
// </div>


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
      <p>{data.user.username}</p>
      <button>Edit</button>
      <br></br><br></br><br></br>
      <p>Email</p>
      <button>Edit</button>
      <br></br><br></br><br></br>
      <p>Password******</p>
      <button>Edit</button>
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

import "../Welcome/welcome.css";
import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];

  // const styles = {
  //   card: {
  //     margin: 20,
  //     background: "#e8eaf6",
  //   },
  //   heading: {
  //     background: "#3f51b5",
  //     minHeight: 50,
  //     lineHeight: 3.5,
  //     fontSize: "1.2rem",
  //     color: "white",
  //     padding: "0 20px",
  //   },
  //   content: {
  //     padding: 20,
  //   },
  //   button: {
  //     background: "#00FF00",
  //   },
  // };

  return (
    <>
      <div class="container-fluid">
          <h1 id="welcomeScreen">Welcome (Name Renders Here)</h1>
          <button className="btn btn-primary" type="button">
            Manage Subscription
          </button>
          <button className="btn btn-primary" type="button">
            Add A Subscription
          </button>
          <div id="thisMonth">
          
          </div>
        </div>
      
    </>
  );
}

export default Welcome;
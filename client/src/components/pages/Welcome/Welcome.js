import "../Welcome/welcome.css";
import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from '@apollo/client'
import AuthService from "../../utils/auth";


function Welcome() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  console.log(AuthService.getProfile().data._id)
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
      <div className="container-fluid">
          <h1 id="welcomeScreen">Welcome (Name Renders Here)</h1>
            <button id="addSubBtn" className="btn btn-primary" type="button">
              Manage Subscriptions
            </button>
            <br></br>
            <button id="addSubBtn" className="btn btn-primary" type="button">
              Add A Subscription
            </button>
              <div id="thisMonth">
                <div className="row justify-content-around">
                  <div className="col-4">
                    (Title)
                  </div>
                  <div className="col-4">
                    $___
                  </div>
                </div>
              </div>
      </div>
    </>
  );
}

export default Welcome;
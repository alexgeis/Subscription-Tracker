import "../Welcome/welcome.css";
import React, { useState } from "react";
// import { Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Welcome() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];

  return (
    <>
      <div className="container-fluid">
        <h1 id="welcomeScreen">Welcome (Name Renders Here)</h1>
        <Link to="/managesub">
          <button id="addSubBtn" className="btn btn-primary" type="button">
            Manage Subscriptions
          </button>
        </Link>
        <br></br>
        <Link to="newsub">
          <button id="addSubBtn" className="btn btn-primary" type="button">
            Add A Subscription
          </button>
        </Link>
        <div id="thisMonth">
          <div className="row justify-content-around">
            <div className="col-4">(Title)</div>
            <div className="col-4">$___</div>
          </div>
        </div>
        <Link to="/settings">
          <button id="settingsButton" className="btn btn-primary" type="button">
            Settings
          </button>
        </Link>
      </div>
    </>
  );
}

export default Welcome;

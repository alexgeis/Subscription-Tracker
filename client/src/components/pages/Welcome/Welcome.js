import "../Welcome/welcome.css";
import React, { useState } from "react";
import { Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";

function Welcome() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];
  
  const styles = {
    card: {
      margin: 20,
      background: "#e8eaf6",
    },
    heading: {
      background: "#3f51b5",
      minHeight: 50,
      lineHeight: 3.5,
      fontSize: "1.2rem",
      color: "white",
      padding: "0 20px",
    },
    content: {
      padding: 20,
    },
    button: {
      background: "#00FF00",
    },
  };
  return (
    <>
      <div class="card">
        <div class="card-body">
          <h1>Welcome (Name Renders Here)</h1>
          <button class="btn btn-primary" type="button">
            Manage Subscription
          </button>
          <button class="btn btn-primary" type="button">
            Add A Subscription
          </button>
          <div id="thisMonth">
            This is where the subscriptions due this month will render
          </div>
          <div class="btn-group">
            <button type="button" class="btn btn-secondary btn-sm" id="tips">
              Tips
            </button>
            <button type="button" class="btn btn-secondary btn-sm" id="logout">
              Logout
            </button>
          </div>
        </div>
      </div>

      <Container>
        <h1 style={styles.heading}>Settings</h1>
        <p style={styles.button}>Place Holder User</p>
        <p>Place Holder Password</p>

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
        <p>Place Holder Name</p>
        <div className="mb-2">
          <Button variant="primary" size="lg">
            Home
          </Button>{" "}
          <Button variant="danger" size="lg">
            Logout
          </Button>
        </div>
      </Container>
    </>
  );
}


export default Welcome;
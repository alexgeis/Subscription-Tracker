import "../Welcome/welcome.css";
import React, { useState } from "react";
// import { Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";
import SubscriptionList from "../../SubscriptionList";
import Footer from "../Footer/Footer";

function Welcome(props) {
  const { toggleTheme } = props;

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  let userId = AuthService.getProfile().data._id;
  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];

  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div> ...Loading </div>;
  }

  let subArray = data.user.subscriptions;

  let monthlySum = 0;
  for (let i = 0; i < subArray.length; i++) {
    monthlySum = monthlySum + subArray[i].monthlyCost;
  }

  return (
    <>
      <div className="container-fluid">
        <h1 id="welcomeScreen">Welcome, {data.user.username}!</h1>
        <Link to="/settings">
          <button id="settingsButton" className="btn btn-primary" type="button">
            Settings
          </button>
        </Link>
        <br></br> <br></br>
        <Link to="/newsub">
          <button id="addSubBtn" className="btn btn-primary" type="button">
            Add A Subscription
          </button>
          <br></br>
        </Link>
        <div id="thisMonth">
          <SubscriptionList subscriptions={data.user.subscriptions} />
          <br></br>
          <p>Total: ${(Math.round((monthlySum)*100)/100)}</p>
        </div>
      </div>
      <div id="otherSpace"></div>
      <Footer toggleTheme={toggleTheme} />
    </>
  );
}

export default Welcome;

import "../Welcome/welcome.css";
import React, { useState } from "react";
// import { Button, ButtonGroup, ToggleButton, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useQuery } from '@apollo/client'
import { QUERY_SINGLE_USER } from "../../utils/queries";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";
import SubscriptionList from "../../SubscriptionList";


function Welcome() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");
  let userId = (AuthService.getProfile().data._id)
  console.log(userId)
  console.log(typeof userId)
  const radios = [
    { name: "Light Mode", value: "1" },
    { name: "Dark Mode", value: "2" },
  ];

  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId }
  })

  if (loading){
    return (<div> ...Loading </div>)
  }

  console.log({data})
  console.log(data)

  return (
    <>
      <div className="container-fluid">
        <Link to="/settings">
          <button id="settingsButton" className="btn btn-primary" type="button">
            Settings
          </button>
        </Link>
        <h1 id="welcomeScreen">Welcome {data.user.username}</h1>
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
          <SubscriptionList subscriptions={data.user.subscriptions}/>
        </div>
      </div>
    </>
  );
}

export default Welcome;

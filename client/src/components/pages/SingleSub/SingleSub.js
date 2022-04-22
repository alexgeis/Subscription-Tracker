import "../SingleSub/singleSub.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import { useState } from "react";
import AuthService from "../../utils/auth";
import EditModal from "../../EditComponent";

function SingleSub() {
  // set modal display state

  let userId = AuthService.getProfile().data._id;
  const params = useParams();
  const subId = params.id;
  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div> ...Loading </div>;
  }

  const subscriptions = data.user.subscriptions;

  const subIndex = subscriptions.findIndex((object) => {
    return object._id === subId;
  });

  const s = subscriptions[subIndex];

  return (
    <div className="container-fluid">
      <h1>{s.subscriptionName}</h1>

      <div className="container">
        <div>
          <p>Monthly Cost:</p>
          <p>${s.monthlyCost}.00</p>
        </div>
        <div>
          <p>Annual Cost:</p>
          <p>${s.annualCost}.00</p>
        </div>
        <div>
          <p>Payment Type:</p>
          <p>{s.paymentType}</p>
        </div>
        {/* <div>
        <p>Start Date:</p>
        <p>{s.startDate}</p>
    </div>
    <div>
        <p>Next Due Date:</p>
        <p>05/{s.dueDate}/22</p>
    </div> */}
        <div>
          <p>Auto Pay?</p>
          <p>{s.autoPay ? "Yes" : "No"}</p>
        </div>
        <div>
          <p>Auto Renew?</p>
          <p>{s.autoRenew ? "Yes" : "No"}</p>
        </div>
        <div>
          <div className="mb-2">
            <EditModal subscription={s} />{" "}
            <Button variant="danger" size="lg">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>
    <InputGroup className="mb-3">
    <InputGroup.Text>$</InputGroup.Text>
    <FormControl aria-label="Amount (to the nearest dollar)" />
    <InputGroup.Text>.00</InputGroup.Text>
</InputGroup>


    <InputGroup>
    <InputGroup.Text>Description</InputGroup.Text>
    <FormControl as="textarea" aria-label="With textarea" />
</InputGroup> */
}

export default SingleSub;

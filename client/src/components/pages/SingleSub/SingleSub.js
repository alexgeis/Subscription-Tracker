import "../SingleSub/singleSub.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import EditModal from "../../EditComponent";
import { useMutation, useQuery } from "@apollo/client";
import { useParams, useNavigate } from "react-router-dom"
import { QUERY_SINGLE_USER } from "../../utils/queries"
import { REMOVE_SUBSCRIPTION } from '../../utils/mutations';
import AuthService from "../../utils/auth"
import Footer from "../Footer/Footer";

function SingleSub(props) {
  // set modal display state


    let userId = (AuthService.getProfile().data._id)
    const params = useParams();
    const subId = params.id;
    const navigate = useNavigate();
    const [removeSub, {rmData, rmLoading, rmError}] = useMutation(REMOVE_SUBSCRIPTION)
    const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { userId: userId }
      })
    const { toggleTheme } = props;
      if (loading){
        return (<div> ...Loading </div>)
      }

    const subscriptions = data.user.subscriptions;

     
      
      const handleRemove = async (event) => {
        event.preventDefault()
            try {
                removeSub({
                    variables: {userId: userId, subscription: s._id}
                })
            } catch {
                console.error(JSON.stringify(error));
            } finally {
                window.location.assign("/welcome");
            }
    }


  const subIndex = subscriptions.findIndex((object) => {
    return object._id === subId;
  });

  const s = subscriptions[subIndex];

  return (
    <>
    <div className="container-fluid">
      <h1 id="singleSubHead" >{s.subscriptionName}</h1>

      <div className="container">
        <div>
          <h4>Monthly Cost:</h4>
          <p>${s.monthlyCost}.00</p>
        </div>
        <div>
          <h4>Annual Cost:</h4>
          <p>${s.annualCost}.00</p>
        </div>
        <div>
          <h4>Payment Type:</h4>
          <p>{s.paymentType}</p>
        </div>
        <div>
          <h4>Auto Pay?</h4>
          <p>{s.autoPay ? "Yes" : "No"}</p>
        </div>
    
        <div>
          <h4>Auto Renew?</h4>
          <p>{s.autoRenew ? "Yes" : "No"}</p>
        </div>
        <div>
        <br></br>
        <br></br>
          <div className="mb-2">
            <EditModal subscription={s} />{" "}
            <br></br>
            <Button variant="danger" size="md" onClick={handleRemove}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Footer toggleTheme={toggleTheme}/>
    </>
  );
}

export default SingleSub;

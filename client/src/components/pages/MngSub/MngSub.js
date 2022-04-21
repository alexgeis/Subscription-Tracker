import "../MngSub/mngSub.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import QUERY_SUBSCRIPTION from "../../utils/queries";
import SubscriptionList from "../../SubscriptionList";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import AuthService from "../../utils/auth";

<<<<<<< HEAD
const MngSub = () => {
  //   if (!subscriptions.length) {
  //     return <h3>No Subscriptions Yet</h3>;
  //   }
  let userId = AuthService.getProfile().data._id;

  const { loading, error, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  if (loading) {
    return <div> ...Loading </div>;
  }

  return (
    <div className="container-fluid">
      <h1>Manage My Subscriptions</h1>
      <div className="card-body">
        <div className="row justify-content-around">
          <div className="col-4">
            <h3>All Subscriptions</h3>
            <ul>
              <li>
                <SubscriptionList subscriptions={data.user.subscriptions} />
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3>Monthly Costs</h3>
            <ul>
              <li>Render Cost</li>
            </ul>
          </div>
          <h3>Total Annual Cost =</h3>
        </div>
      </div>
    </div>
  );
};

export default MngSub;
=======
function MngSub() {
    return (
<div class="container-fluid">
<h1 id='mngSubPage'>Manage My Subscriptions</h1>
<table class="table table-striped">
<thead>
    <tr>
    <th scope="col">A/M</th>
    <th colspan="2">Subscription Name</th>
    <th scope="col">Monthly Cost</th>
    </tr>
</thead>
<tbody>
    <tr>
    <th scope="row">M</th>
    <td colspan="2"><button id='mngSubBtn'>LA Fitness</button></td>
    <td>$</td>
    </tr>
    <tr>
    <th scope="row">A</th>
    <td colspan="2"><button id='mngSubBtn'>Prime</button></td>
    <td>$</td>
    </tr>
    <tr>
    <th scope="row">A</th>
    <td colspan="2"><button id='mngSubBtn'>Hulu</button></td>
    <td>$</td>
    </tr>
</tbody>
</table>
<h5 id='totalCost'>Total Monthly Cost = </h5>
<h5 id='totalCost'>Total Annual Cost = </h5>
</div>
);
}

export default MngSub;


{/* <h1 id='mngSubPage'>Manage My Subscriptions</h1>    
<div class="row justify-content-around" id='mngSubBox'>
    <div className="col-4" id='allSubList' >
    <h5>Subscription</h5>
    <ul>
    <li>Render Subscriptions</li>
    </ul>
    </div>
    <div className="col-4">
    <h5>Monthly Cost</h5>
    <ul>
    <li>Render Cost</li>
    </ul> 
    </div>
    <h5 id='totalCost'>Total Annual Cost = </h5>
</div> */}
>>>>>>> 08446c73392cf4539f2fb4a120bbb19f55f76006

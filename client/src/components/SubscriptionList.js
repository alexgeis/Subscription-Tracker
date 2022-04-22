import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


function SubscriptionList({ subscriptions }) {
  console.log(subscriptions);
  return (
    <table class="table table-striped">
      <thead>
<tr>
  <th colspan="2">Subscription Name</th>
  <th scope="col">Due Date</th>
  <th scope="col">Monthly Cost</th>
</tr>
</thead>
<tbody/>

      {subscriptions.map((subscription) => (
        <tbody key={subscription._id}>
          
          <td colspan="2">
            <Link
              to={{
                pathname: "/sub/" + subscription._id,
              }}
            >
              <button
                id={subscription._id}
                className="btn btn-primary"
                type="button"
              >
                {subscription.subscriptionName}
              </button>
            </Link> 
          </td>
          <td scope="col">{Date(subscription.dueDate).toLocaleString()}</td>
          <td scope="col">${subscription.monthlyCost}</td>
          </tbody>
          
      ))}<br></br>
    </table>
  );
}

export default SubscriptionList;

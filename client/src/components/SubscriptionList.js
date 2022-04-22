import { Link } from "react-router-dom";
function SubscriptionList({ subscriptions }) {
  console.log(subscriptions);
  return (
    <div className="row justify-content-around">
      {subscriptions.map((subscription) => (
        <div key={subscription._id}>
          <div className="col-4">
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
          </div>
          <div className="col-4">${subscription.monthlyCost}</div>
          <div className="col-4">Due on: 4/{subscription.dueDate}</div>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionList;

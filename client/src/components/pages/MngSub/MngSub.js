import "../MngSub/mngSub.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import QUERY_SUBSCRIPTION from "../../utils/queries";
import SubscriptionList from "../../SubscriptionList";
import { useQuery } from "@apollo/client";
import { QUERY_SINGLE_USER } from "../../utils/queries";
import AuthService from "../../utils/auth";

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

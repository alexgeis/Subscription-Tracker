import '../MngSub/mngSub.css'
import "bootstrap/dist/css/bootstrap.min.css";

function MngSub() {
    return (

        <div class="container-fluid">
<h1>Manage My Subscriptions</h1>    
<div className="card-body">
<div class="row justify-content-around">
    <div className="col-4">
        <h3>All Subscriptions</h3>
        <ul>
    <li>Render Subscriptions</li>
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
}

export default MngSub;
import '../MngSub/mngSub.css'
import "bootstrap/dist/css/bootstrap.min.css";

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
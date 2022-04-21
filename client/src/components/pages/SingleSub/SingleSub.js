import '../SingleSub/singleSub.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Button }  from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom"
import { QUERY_SINGLE_USER } from "../../utils/queries"






function SingleSub() {
    return (
    
<div class="container-fluid">     
    <h1>Subscription Name</h1>
        

    <div className="container">
    <h1>Netflix</h1>

    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
    <div>
        <p>Next Due Date</p>
        <p>Date</p>
    </div>
<div>
<p>Next Due Date</p>
<p>Date</p>





    <div className="mb-2">
        <Button variant="primary" size="lg">
            Edit
        </Button>{" "}
        <Button variant="danger" size="lg">
            Delete
        </Button>
        </div>
    </div>
    </div>
    </div>
);
}

{/* <InputGroup className="mb-3">
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
</InputGroup> */}


export default SingleSub;
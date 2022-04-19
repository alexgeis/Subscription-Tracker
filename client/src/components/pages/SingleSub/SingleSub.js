import '../SingleSub/singleSub.css'
import { Container, Card, Row, Col } from 'react-bootstrap'

import { Button, InputGroup, FormControl}  from "react-bootstrap";

function SingleSub() {
    return (
    <>
        <Container>
            <Col>
                <h1>Subscription Name</h1>
            </Col>
        </Container>
        <Container>
            <Row>
                <Col>

                </Col>
                <Col>

<div className="container">
       <h1 style={styles.heading}>Netflix</h1>

        <InputGroup className="mb-3">
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
  </InputGroup>
  
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
                </Col>
            </Row>


        </Container>
    </>

);
}

export default SingleSub;
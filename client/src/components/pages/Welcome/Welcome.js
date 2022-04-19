<<<<<<< HEAD
<<<<<<< HEAD
import '../Welcome/welcome.css'



function Welcome() {
    return (

<div class="card">
<div class="card-body">
    <h1>Welcome (Name Renders Here)</h1>
<button class="btn btn-primary" type="button">Manage Subscription</button>
<button class="btn btn-primary" type="button">Add A Subscription</button>
<div id='thisMonth'>
    This is where the subscriptions due this month will render
</div>
<div class="btn-group">
<button type="button" class="btn btn-secondary btn-sm" id='tips'>Tips</button>
<button type="button" class="btn btn-secondary btn-sm" id='logout' >Logout</button></div>
</div>
</div>
  );
}

export default Welcome;
=======
=======
import React, { useState } from "react";
import {Button, ButtonGroup, ToggleButton, Container} from "react-bootstrap";
>>>>>>> 2d64de9d52d06b85f7bddccb2a9943b47e9040eb

export default function WelcomeScreen() {

    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'Light Mode', value: '1' },
      { name: 'Dark Mode', value: '2' },
    ];

    const styles = {
        card: {
          margin: 20,
          background: '#e8eaf6',
        },
        heading: {
          background: '#3f51b5',
          minHeight: 50,
          lineHeight: 3.5,
          fontSize: '1.2rem',
          color: 'white',
          padding: '0 20px',
        },
        content: {
          padding: 20,
        },
        button: {
            background: "#00FF00"
        }
      };


return (
    // needs title, Settings
    //Need text for username 
    // need text for password
    //adjust radio button for dark and light mode
    // will need text box for name
    // need two buttons for the bottom, one for home and one for logout

    <>
      <Container>
          <h1 style={styles.heading}>Settings</h1>
          <p style={styles.button}>Place Holder User</p>
          <p>Place Holder Password</p>

      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'dark' : 'light'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <p>Place Holder Name</p>
      <div className="mb-2">
    <Button variant="primary" size="lg">
      Home
    </Button>{' '}
    <Button variant="danger" size="lg">
      Logout
    </Button>
  </div>
      </Container>
    </>
  );
}
<<<<<<< HEAD

export default Welcome;

>>>>>>> d9e2f5ddbbd01db15bbb9b1d6bc040dc11879b67
=======
>>>>>>> 2d64de9d52d06b85f7bddccb2a9943b47e9040eb

import "../SignUp/signUp.css";
import validator from 'validator'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function SignUp() {

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email!')
    } else {
      setEmailError('Please Enter valid Email')
    }
  }
  return (
    
    <div class="m-4">
      <h1>SIGN UP</h1>
    <form action="/examples/actions/confirmation.php" method="post">
    <div class="row mb-3">
            <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
            <div class="col-sm-10">
                <input type="username" class="form-control" id="inputUsername" placeholder="Username" required/>
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
                <input type="email" class="form-control" id="inputEmail" placeholder="name@exmaple.com" 
                onChange={(e) => validateEmail(e)}></input> <br />
          <span style={{
            color: 'red', 
          }}>{emailError}</span> 
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" placeholder="Password" required/>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-10 offset-sm-2">
                <button type="submit" class="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>
</div>
  )
}

export default SignUp;

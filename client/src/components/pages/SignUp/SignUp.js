import "../SignUp/signUp.css";
import validator from 'validator'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function SignUp() {

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Great!')
    } else {
      setEmailError('Please Enter A Valid Email')
    }
  }
  return (
    <div className="container-fluid">
    <div className="m-4">
      <h1 id="signUp">SIGN UP</h1>
    <form action="/examples/actions/confirmation.php" method="post">
    <div className="row mb-3">
            <label for="inputUsername" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="username" className="form-control" id="inputUsername" placeholder="Username" required/>
            </div>
        </div>
        <div className="row mb-3">
            <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail" placeholder="name@exmaple.com" 
                onChange={(e) => validateEmail(e)}></input> <br />
          <span style={{
            color: 'green', 
          }}>{emailError}</span> 
            </div>
        </div>
        <div className="row mb-3">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" required/>
            </div>
        </div>
        <div className="row">
            <div>
                <button id="signUpBtn" type="submit" className="btn btn-primary">Sign in</button>
            </div>
        </div>
    </form>
</div>
</div>
  )
}

export default SignUp;

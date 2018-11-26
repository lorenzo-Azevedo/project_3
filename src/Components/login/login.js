import React, { Component } from 'react';

class LoginDiv extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="loginComponent">
    <div className="container-clearfix divs">
        <div className="container" id="logInForm">
            <p>LogIn</p>
            <div className="col-sm-12">
              <button type="submit" id="submitLogIn" className="btn btn-primary col-md-2 float-left">Login</button>
              <button type="button" className="btn col-md-2 float-right" id="goBackWelcomeLogIn">Go Back</button>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default LoginDiv; 
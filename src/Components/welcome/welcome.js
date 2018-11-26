import React, { Component } from 'react';
import img from './welcome.jpg'

class Welcome extends Component {
  render() {
    return (
    <div className="container-fluid" id="welcomeComponent">
      <div className="container-clearfix divs">
      <div className="container" id="welcomeForm">
      <img src={img} alt="." />
      <br />
        <button type="button" className="btn btn-danger mt-3 float-left" id="LoginButton" onclick="change">Login</button>
        <button type="button" className="btn btn-danger mt-3 float-right" id="signupButton" onclick="change">SignUp</button>
      </div>
      </div>
    </div>
    );
  }
}

export default Welcome; 
import React, { Component } from 'react';

class SignupForm extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="signupComponent">
    <div className="container-clearfix divs">
    <div className="container" id="signupForm">
        <h2>Sign Up Form</h2>
        <br/>
        <form>
            <div className="form-row">
              <div className="col">
                <label for="inputName">First</label>
                <input type="text" className="form-control" placeholder="First name" id="signupFirstName"/>
              </div>
              <div className="col">
                <label for="inputLast">Last</label>
                <input type="text" className="form-control" placeholder="Last name" id="signupLastName"/>
              </div>
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="signupEmail" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="signupPassword" placeholder="Password"/>
            </div>
            <div className="form-group">
                <label>About</label>
                <textarea className="form-control" id="signupAbout" rows="3"></textarea>
            </div>
            <div className="form-group">
                <label for="inputExperience">Years of Experience</label>
                <select id="signupExperience" className="form-control">
                  <option selected>Choose...</option>
                  <option value="1">Less than 5</option>
                  <option value="2">5 to 10</option>
                  <option value="3">10 to 20</option>
                  <option value="4">More than 20</option>
                </select>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputLocation">Location</label>
                <input type="text" className="form-control" id="signupCity"/>
              </div>
            {/* <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="signupState" className="form-control">
                  <option selected>Choose...</option>
                  <option>NY</option>
                  <option>CA</option>
                  <option>FL</option>
                </select>
            </div> */}
            </div>
                <div className="form-group">
                    <label for="inputclassName">Classification</label>
                    <select className="custom-select" id="signupExperience" multiple>
                    <option value="1">Actor</option>
                    <option value="2">Art (General)</option>
                    <option value="3">Dancer</option>
                    <option value="4">Designer</option>
                    <option value="5">Model</option>
                    <option value="6">Musician</option>
                    <option value="7">Photographer</option>
                    <option value="8">Writer/Editor</option>
                    </select>
                </div>
              <div className="col-sm-12" id="signupButtons">
                <button type="submit" id="submitSignup" className="btn btn-primary col-md-2 float-left">Sign Up</button>
                <button type="button" className="btn col-md-2 float-right" id="goBackWelcomeSignUp">Go Back</button>
              </div>
        </form>
    </div>
</div>
    </div>
    );
  }
}

export default SignupForm; 
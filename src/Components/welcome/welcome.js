import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return (
    <div classNameName="container-fluid">
      <div className="container-clearfix divs">
      <div className="container" id="welcomeForm">
        <button type="button" classNameName="btn btn-danger mt-3 float-left" id="loginButton">Login</button>
        <button type="button" className="btn btn-danger mt-3" id="signupButton" onclick="change">SignUp</button>
      </div>
      </div>

    <div className="container-clearfix divs">
        <div className="container" id="signupForm">
            <h2>Sign Up Form</h2>
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
                      <option>Less than 5</option>
                      <option>5 to 10</option>
                      <option>10 to 20</option>
                      <option>More than 20</option>
                    </select>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="signupCity"/>
                  </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="signupState" className="form-control">
                      <option selected>Choose...</option>
                      <option>NY</option>
                      <option>CA</option>
                      <option>FL</option>
                    </select>
                </div>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputclassName">classNameification</label>
                    <select className="custom-select" id="signupclassName" multiple>
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
                  <div className="col-sm-12">
                    <button type="submit" id="submitSignup" className="btn btn-primary col-md-2">Sign Up</button>
                    <button type="button" className="btn col-md-2" id="goBackWelcomeSignUp">Go Back</button>
                  </div>
            </form>
        </div>
    </div>

    <div className="container-clearfix divs">
        <div className="container" id="logInForm">
            <p>LogIn</p>
            <div className="col-sm-12">
              <button type="submit" id="submitLogIn" className="btn btn-primary col-md-2">Login</button>
              <button type="button" className="btn col-md-2" id="goBackWelcomeLogIn">Go Back</button>
            </div>
        </div>
    </div>

    <div className="container-clearfix divs">
        <div className="container" id="listingForm">
            <h2>Job Listing Form</h2>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputMinAge">Min Age</label>
                        <select id="listingMinAge" className="form-control">
                          <option selected>Choose...</option>
                          <option>less than 18</option>
                          <option>18-30</option>
                          <option>30+</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputMaxAge">Max Age</label>
                        <select id="listingMaxAge" className="form-control">
                      <option selected>Choose...</option>
                          <option>less than 18</option>
                          <option>18-30</option>
                          <option>30+</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputMinHeight">Min Height</label>
                        <select id="listingMinHeight" className="form-control">
                          <option selected>Choose...</option>
                          <option>5'5"</option>
                          <option>6'0"</option>
                          <option>6'5"</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputMaxHeight">Max Height</label>
                        <select id="listingMaHeight" className="form-control">
                      <option selected>Choose...</option>
                      <option>5'5"</option>
                      <option>6'0"</option>
                      <option>6'5"</option>
                        </select>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label for="inputMinWeight">Min Weight</label>
                        <select id="listingMinHeight" className="form-control">
                          <option selected>Choose...</option>
                          <option>100</option>
                          <option>150</option>
                          <option>200</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputMaxWeight">Max Weight</label>
                        <select id="listingMaxHeight" className="form-control">
                      <option selected>Choose...</option>
                      <option>100</option>
                      <option>150</option>
                      <option>200</option>
                        </select>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputEye">Eye Color</label>
                    <select className="custom-select" id="listingEye" multiple>
                    <option value="1">Green</option>
                    <option value="2">Blue</option>
                    <option value="3">Brown</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="inputclassName">Hair Color</label>
                    <select className="custom-select" id="listingHair" multiple>
                    <option value="1">Blonde</option>
                    <option value="2">White</option>
                    <option value="3">Brown</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="inputExperience">Years of Experience</label>
                    <select id="listingExperience" className="form-control">
                      <option selected>Choose...</option>
                      <option>Less than 5</option>
                      <option>5 to 10</option>
                      <option>10 to 20</option>
                      <option>More than 20</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>About</label>
                    <textarea className="form-control" id="listingAbout" rows="3"></textarea>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="listingCity"/>
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="listingState" className="form-control">
                      <option selected>Choose...</option>
                      <option>NY</option>
                      <option>FL</option>
                      <option>CA</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                    <label for="inputclassName">classNameification</label>
                    <select className="custom-select" id="listingExperience" multiple>
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
                <div className="col-sm-12">
                  <button type="submit" id="submitListing" className="btn btn-primary col-md-2">Create Listing</button>
                  <button type="button" className="btn col-md-2" id="goBackListing">Go Back</button>
                </div>
            </form>
        </div>
    </div>

    <div className="container-clearfix divs">
        <div className="container" id="renderListings">
            <p>render jobs</p>
            <div>
                <button type="submit" id="createListing" className="btn btn-primary col-md-2">Create Listing</button>
            </div>
        </div>
    </div>

    <div className="container-clearfix divs">
        <div className="container" id="renderClients">
            <p>render clients</p>
        </div>
    </div>
    </div>
    );
  }
}

export default Welcome; 
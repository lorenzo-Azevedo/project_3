import React, { Component } from 'react';

class ListingForm extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="listingFormComponent">
    <div className="container-clearfix divs">
        <div className="container" id="listingForm">
            <h2>Job Listing Form</h2>
            <br/>
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
                    <label for="inputclassName">Classification</label>
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
                <div className="col-sm-12" id="listingButtons">
                  <button type="submit" id="submitListing" className="btn btn-primary col-md-3 float-left">Create Listing</button>
                  <button type="button" className="btn col-md-2 float-right" id="goBackListing">Go Back</button>
                </div>
            </form>
        </div>
    </div>
    </div>
    );
  }
}

export default ListingForm; 
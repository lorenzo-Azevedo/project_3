import React, { Component } from 'react';

class RenderListing extends Component {
  render() {
    return (
    <div classNameName="container-fluid" id="listingComponent">
    <div className="container-clearfix divs">
        <div className="container" id="renderListings">
            <p>render jobs</p>
            <div>
                <button type="submit" id="createListing" className="btn btn-primary col-md-3">Create Listing</button>
            </div>
        </div>
    </div>
    </div>
    );
  }
}

export default RenderListing; 
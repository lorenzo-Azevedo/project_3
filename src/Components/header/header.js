import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    <header className="container-fluid">
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="ww">placeholder</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>                  
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" id="linkModels" href="ww">Models</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="linkListings" href="ww">Listings</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    );
  }
}

export default Header; 
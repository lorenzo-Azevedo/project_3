import React, { Component } from 'react';

import Header from './Components/header/header';
import Welcome from './Components/welcome/welcome';
import LoginDiv from './Components/login/login';
import SignupForm from './Components/signupForm/signupForm';
import ListingForm from './Components/listingForm/listingForm';
import RenderListing from './Components/renderListing/renderListing';
import RenderClient from './Components/renderClient/renderClient';
import Footer from './Components/footer/footer';

import './Assets/css/deafult.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Welcome />

        <LoginDiv />

        <SignupForm />

        <ListingForm />

        <RenderClient />

        <RenderListing />

        <Footer />
      
      </div>
    );
  }
}

export default App;

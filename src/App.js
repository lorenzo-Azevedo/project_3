import React, { Component } from 'react';

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Welcome from './Components/welcome/welcome';
// import Test from './Components/test/test';

import './Assets/css/deafult.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Welcome />

        {/* <Test /> */}

        <Footer />
      
      </div>
    );
  }
}

export default App;

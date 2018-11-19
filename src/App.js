import React, { Component } from 'react';

import Header from './Components/header/header';
import Footer from './Components/footer/footer';
import Welcome from './Components/welcome/welcome';

import './Assets/css/deafult.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Welcome />

        <Footer />
      
      </div>
    );
  }
}

export default App;

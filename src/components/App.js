import React, { Component } from 'react';
import '../styles/App.css';

// * Componenets 
import Navbar from './layout/navbar/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <h1>Welcome!</h1>
      </div>
    );
  }
}

export default App;

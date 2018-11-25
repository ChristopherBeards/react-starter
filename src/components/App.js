import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../styles/App.css';

// * Componenets
import Navbar from './layout/navbar/Navbar';
import Posts from './posts/Posts';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Route exact path="/posts" component={Posts} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(this.props);
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          { this.props.categories.map(cat => 
            <li key={cat.id}>{cat.categoryName}</li>
          )}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = (state) => state; 

export default connect(mapStateToProps)(App);

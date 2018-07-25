import React from 'react';
import Header from './Header';
import Routes from '../routes';
import './App.css';

const App = () => (
  <div>
    <Header />
    <main className="main-container fluid-container">
      <Routes />
    </main>
  </div>
)

export default App

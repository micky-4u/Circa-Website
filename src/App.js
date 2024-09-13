import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Teams from './pages/teams';
import Header from './components/header/header';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home /> */}
        <Teams />
      </div>
    );
  }
}

export default App;

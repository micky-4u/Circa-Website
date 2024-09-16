import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Teams from './pages/teams';
import Header from './components/header/header';
import Projects from './pages/projects';
import Contact from './pages/contact';
// import Proimage from './pages/proimage';
// import Prophone from './pages/prophone';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Projects />
        <Teams />
        <Contact />
      </div>
    );
  }
}

export default App;

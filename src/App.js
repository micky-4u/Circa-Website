import React, { Component } from 'react';
// import * as ReactDOM from "react-dom/client";

import './App.css';
import Home from './pages/home';
import Teams from './pages/teams';
import Header from './components/header/header';
import Header1 from './components/header1/header';

import Projects from './pages/projects';
import Contact from './pages/contact';
import Explore from './pages/explore';
import {} from 'react-dom'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ScrollRestoration } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:       
    <div className="App">

    <Header color="inactive" menu="Home"/>
    <Home />
    <Projects />
    <Teams />
    <Contact />
  </div>

  },
  {
    path:"/projects",
    element: <div className="App">
    <ScrollRestoration />
    <Header1 background="whitebg"color="inactive" menu="Projects"/>
    <Explore />
  </div>
  }
]);
class App extends Component {
  

  render() {
    return (
      // <div className="App">
      //   <Header />
      //   <Home />
      //   <Projects />
      //   <Teams />
      //   <Contact />
      // </div>
      <RouterProvider router={router} />
    );
  }
}

export default App;

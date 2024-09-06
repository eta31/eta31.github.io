import React, { Component } from 'react';
// import logo from './logo.svg';
import {Route,BrowserRouter,Redirect,Switch} from 'react-router-dom';

// import './App.css';
import Profile from "./components/Profile";
import Home from "./components/Home";
import Contact from "./components/Contact";

class App extends Component {
  render() {

      return (
        <BrowserRouter>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/contact" component={Contact}/>
              <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      );
    }
}

export default App;

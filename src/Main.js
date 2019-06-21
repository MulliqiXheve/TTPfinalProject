import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact"
 import Quiz from "./Quiz";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1>Do Tech Be Tech</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/quiz">Quiz</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/quiz" component={Quiz}/>
                <Route path="/contact" component={Contact}/>
               
            </div>
          </div>
        </HashRouter>
      );
    }
  }

export default Main;
import React, { Component } from "react";

import {
  Route,
  NavLink,
  HashRouter,
  
} from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact"
 import Quiz from "./Quiz";
 import Learn from "./Learn";
import Footer from "./Footer";
 
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <h1 class="text-info" >Do Tech Be Tech</h1>
            <ul className="header">
                <li><NavLink exact to="/">Home</NavLink></li>
                <li><NavLink to="/learn">e-Learn</NavLink></li>
                <li><NavLink to="/quiz">Quiz</NavLink></li>
                <li><NavLink to="/contact">Free Bootcamp</NavLink></li>
            </ul>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/learn" component={Learn}/>
                <Route path="/quiz" component={Quiz}/>
                <Route path="/contact" component={Contact}/>
               
            </div>
          </div>
          {/* <Footer /> */}
        </HashRouter>
      );
    }
  }

export default Main;
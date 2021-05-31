import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navber from './Components/Navber/Navber';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Faq from './Components/Faq/Faq';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    
    <Router>
      <Navber></Navber>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/faq">
            <Faq></Faq>
          </Route>
          <Route path="/">
          <Home></Home>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

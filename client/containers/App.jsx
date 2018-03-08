import React, { Component } from 'react';
import fetch from 'cross-fetch';
import Survey from '../components/Survey';
import Footer from '../components/Footer.jsx';
import { Navbar, NavItem, Button } from 'react-materialize';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Landing from '../components/Landing.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>      
        <div className="app">
          <Navbar right brand="awesome team">
            <NavItem href="/companies">Companies</NavItem>
            <NavItem>Employers</NavItem>
            <NavItem>Candidates</NavItem>
            {/* <Link to='/survey'><Button waves='light'>Survey</Button></Link> */}
          </Navbar>

          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/survey" component={Survey} />
            {/* <Route exact path="/user/" component={} />
            <Route exact path="/matched/" component={} />
            <Route exact path="/companies/" component={} />
            <Route exact path="/interview/" component={} /> */}
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

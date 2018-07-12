import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Roster from './Roster';
import Schedule from './Schedule';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/roster" component={Roster} />
    <Route path="/schedule" component={Schedule} />
  </Switch>
);


const About = () => (
  <div>
    <h2>About</h2>
  </div>
);


export default Main
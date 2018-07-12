import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/roster">Roster</Link></li>
      <li><Link to="/schedule">Schedule</Link></li>
    </ul>
  </div>  
)

export default Header
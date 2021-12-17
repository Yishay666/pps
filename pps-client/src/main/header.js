import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
      return (
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/quick">quick</Link></li>
                  <li><Link to="/help">help</Link></li>
              </ul>
          </nav>
      )
    }
  }
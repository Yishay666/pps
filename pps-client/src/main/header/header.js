import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
      return (
          <nav>
              {!this.props.User ? (
                <Link to='/login'>LogIn / SignUp</Link>
              ) : (
                <h2>Hello, {this.props.User}!</h2>
              )}
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/quick">quick</Link></li>
                  <li><Link to="/help">help</Link></li>
                  <li><Link to="/statuses">statuses</Link></li>
              </ul>
          </nav>
      )
    }
  }
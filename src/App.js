import React, { Component } from 'react';
import HowToListPage from './ui/pages/HowToListPage';
import { Nav, NavBrand, NavItem } from './ui/components/Nav.jsx';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavBrand>
            <NavItem>
              <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
            </NavItem>
          </NavBrand>
        </Nav>
        <HowToListPage />
      </div>
    );
  }
}

export default App;

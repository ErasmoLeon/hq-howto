import React, { Component } from 'react';
import { Container } from '../layout/Container';
import { Hero, HeroBody } from '../layout/Hero';
import { Nav, NavItem } from '../components/Nav';
//import { Table } from '';

export default class GridInformation extends Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <Container className={`${this.props.containerClass}`} >
        <Hero isPrimary>
          <HeroBody>
            <Container>
              <h2 className="subtitle grid-info-subtitle">
                {`${this.props.title}`}
              </h2>
            </Container>
          </HeroBody>
        </Hero>
        <Nav className={`${this.props.navbarClass}`}>
          {this.props.navItems.map( (navItem, i) =>
            <NavItem 
              className='grid-info-nav-item' 
              key={`${i}`}
            >
              {navItem}
            </NavItem>
          )}

        </Nav>
      </Container>
    );
  }
}
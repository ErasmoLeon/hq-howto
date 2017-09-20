import React, { Component } from 'react';
import { Container } from '../layout/Container';
import { Hero, HeroBody } from '../layout/Hero';
import { Nav, NavItem } from '../components/Nav';
//import { Table } from '';

export default class PeopleInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Hero isPrimary>
          <HeroBody>
            <Container>
              <h2 className="subtitle">
                Informacion de personas
                </h2>
            </Container>
          </HeroBody>
        </Hero>
        <Nav>
          <NavItem> Desaparecidos </NavItem>
          <NavItem> Rescatados </NavItem>
        </Nav>
      </Container>
    );
  }
}
import React, { Component } from 'react';
import { Container } from '../layout/Container';
import { Hero, HeroBody } from '../layout/Hero';
import { Nav, NavItem } from '../components/Nav';
import DataGrid from 'react-data-grid';
const { Toolbar } = require('react-data-grid-addons');

export default class GridInformation extends Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.onClearFilters = this.onClearFilters.bind(this);
    this.rowGetter = this.rowGetter.bind(this);
    this.getSize = this.getSize.bind(this);
  }

  handleFilterChange(filter) {
    let newFilters = Object.assign({}, this.state.filters);
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter;
    } else {
      delete newFilters[filter.column.key];
    }
    this.setState({ filters: newFilters });
  }

  onClearFilters() {
    // all filters removed
    this.setState({ filters: {} });
  }

  rowGetter(rowIdx) {
    let rows = this.props.rows;
    return rows[rowIdx];
  }

  getSize() {
    return this.props.rows.length;
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
          {this.props.navItems.map((navItem, i) =>
            <NavItem
              className='grid-info-nav-item'
              key={`${i}`}
            >
              {navItem}
            </NavItem>
          )}
        </Nav>
        <DataGrid
          className="grid-info-table-component"
          columns={this.props.columns}
          rowGetter={this.rowGetter}
          enableCellSelect={true}
          rowsCount={this.getSize()}
          minHeight={500}
          toolbar={<Toolbar enableFilter={true} />}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters}
        />
      </Container>
    );
  }
}
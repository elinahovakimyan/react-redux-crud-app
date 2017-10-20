import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				Invoice App
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<NavItem><Link to="/" activeClassName="active">Invoices</Link></NavItem>
			<NavItem><Link to="/customers" activeClassName="active">Customers</Link></NavItem>
			<NavItem><Link to="/products" activeClassName="active">Products</Link></NavItem>
		</Nav>
	</Navbar>
  );
};

export default Header;
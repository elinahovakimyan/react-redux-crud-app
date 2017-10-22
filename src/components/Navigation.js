import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap'


const Navigation = () => {
  return (
    <Navbar>
		<Navbar.Header>
			<Navbar.Brand>
				Invoice App
			</Navbar.Brand>
		</Navbar.Header>
		<Nav>
			<NavItem><Link to="/" className="link" activeClassName="active">Invoices</Link></NavItem>
			<NavItem><Link to="/customers" className="link" activeClassName="active">Customers</Link></NavItem>
			<NavItem><Link to="/products" className="link" activeClassName="active">Products</Link></NavItem>
		</Nav>
	</Navbar>
  );
};

export default Navigation;
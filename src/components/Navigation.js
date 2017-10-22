// import React, {PropTypes} from 'react';
// import { Link, IndexLink } from 'react-router';
// import {Navbar, Nav, NavItem} from 'react-bootstrap'


// const Navigation = () => {
//   return (
//     <Navbar>
// 		<Navbar.Header>
// 			<Navbar.Brand>
// 				Invoice App
// 			</Navbar.Brand>
// 		</Navbar.Header>
// 		<Nav>
// 			<NavItem><Link to="/" className="link" activeClassName="active">Invoices</Link></NavItem>
// 			<NavItem><Link to="/customers" className="link" activeClassName="active">Customers</Link></NavItem>
// 			<NavItem><Link to="/products" className="link" activeClassName="active">Products</Link></NavItem>
// 		</Nav>
// 	</Navbar>
//   );
// };

// export default Navigation;

import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { NavLink } from 'react-router-dom'

const Navigation = () => (
   <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                Invoice App
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <IndexLinkContainer to="/" activeHref="active">
                <NavItem eventKey={1} >
                    Invoices
                </NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/customers" activeHref="active">
                <NavItem eventKey={2} >
                    Customers
                </NavItem>
            </LinkContainer>
            <LinkContainer to="/products" activeHref="active">
                <NavItem eventKey={3} >
                    Products
                </NavItem>
            </LinkContainer>
        </Nav>
    </Navbar>
 );

export default Navigation;
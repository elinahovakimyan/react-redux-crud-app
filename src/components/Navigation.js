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
import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import CustomersTable from './components/CustomersTable'
import ProductsTable from './components/ProductsTable'
import InvoicesTable from './components/InvoicesTable'
import InvoiceEdit from './components/InvoiceEdit'



const pushState = (obj, title, url) => 
	window.history.pushState(obj, title, url);

class App extends Component {
	state={}
	fetchInvoices = () => {
		pushState(
			{currentTable: 'invoices'},
			'Invoices List',
			'/invoices'
		)
		this.setState({
			currentTable: 'invoices'
		})
	}
	fetchCustomers = () => {
		pushState(
			{currentTable: 'customers'},
			'Customers List',
			'/customers'
		)
		this.setState({
			currentTable: 'customers'
		})
	}
	fetchProducts = () => {
		pushState(
			{currentTable: 'products'},
			'Products List',
			'/products'
		)
		this.setState({
			currentTable: 'products'
		})
	}

	currentContent() {
		if(this.state.currentTable === 'customers')
			return <CustomersTable/>
		else if (this.state.currentTable === 'products')
			return <ProductsTable/>
		else 
			return <InvoiceEdit/>
	}

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							Invoice App
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} onClick={this.fetchInvoices} >Invoices</NavItem>
						<NavItem eventKey={2} onClick={this.fetchCustomers} >Customers</NavItem>
						<NavItem eventKey={2} onClick={this.fetchProducts} >Products</NavItem>
					</Nav>
				</Navbar>
				{this.currentContent()}
			</div>
		)
	}
} 

export default App
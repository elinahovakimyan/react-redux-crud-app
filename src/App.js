import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProd, fetchCust } from './actions/index'
import CustomersTable from './components/CustomersTable'
import ProductsTable from './components/ProductsTable'
import InvoicesTable from './components/InvoicesTable'
import InvoiceEdit from './components/InvoiceEdit'
import AddInvoice from './components/AddInvoice'
 

const pushState = (obj, title, url) => 
	window.history.pushState(obj, title, url);

class App extends Component {
	constructor(props) {
		super();
		this.props = {
			customers: [],
			products: []
		}
	}
	componentWillMount(){
		fetch('/api/products')
			.then( products => products.json() )
			.then(products => {
			this.props.onFetchProd(products)
		});
		fetch('/api/customers')
			.then( customers => customers.json() )
			.then(customers => {
			  this.props.onFetchCust(customers)
		})
 	}
	state={}
	fetchInvoices = () => {
		pushState(
			{currentTable: 'invoices'},
			'Invoices List',
			'/invoice-list'
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
	fetchInvoiceEdit = () => {
		pushState(
			{currentTable: 'invoice-edit'},
			'Edit Invoice',
			'/invoice-edit'
		)
		this.setState({
			currentTable: 'invoice-edit'
		})
	}
	fetchInvoiceEdit = () => {
		pushState(
			{currentTable: 'invoice-edit'},
			'Edit Invoice',
			'/invoice-edit'
		)
		this.setState({
			currentTable: 'invoice-edit'
		})
	}


	currentContent() {
		switch(this.state.currentTable) {
			case 'customers':
				return <CustomersTable customers={this.props.customers}/>;
			case 'products':
				return <ProductsTable products={this.props.products}/>;
			case 'invoice-edit':
				return <InvoiceEdit/>;
			case 'invoices': 
				return <InvoicesTable/>;
			case 'invoice-add':
				return <AddInvoice/>
			default:
				return <AddInvoice/>
		}
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


const mapDispatchToProps = dispatch => {
	return {
		onFetchCust(customers) {
			dispatch(fetchCust(customers))
		},
	    onFetchProd(products) {
	      	dispatch(fetchProd(products))
	    }
	}
}


export default connect(
	null,
	mapDispatchToProps
)(App)
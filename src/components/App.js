import React, { Component } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchProd, fetchCust } from '../actions/index'
import CustomersTable from './customers/CustomersTable'
import ProductsTable from './products/ProductsTable'
import InvoicesTable from './invoices/InvoicesTable'
import InvoiceEdit from './invoices/InvoiceEdit'
import AddInvoice from './invoices/AddInvoice'
import Navigation from './Navigation'
 

const pushState = (obj, title, url) => 
	window.history.pushState(obj, title, url);

class App extends Component {
	constructor(props) {
		super();
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
	
	render() {
		return (
			<div className="container-fluid">
				<Navigation />
				{this.props.children}
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
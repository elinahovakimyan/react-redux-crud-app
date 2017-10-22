import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProd, fetchCust, addInv } from '../actions/index'
import CustomersTable from './customers/CustomersTable'
import ProductsTable from './products/ProductsTable'
import InvoicesTable from './invoices/InvoicesTable'
import InvoiceEdit from './invoices/InvoiceEdit'
import AddInvoice from './invoices/AddInvoice'
import Navigation from './Navigation'
 
class App extends Component {
	constructor(props) {
		super();
	}
	componentDidMount(){
		fetch('/api/products')
			.then( products => products.json() )
			.then(products => {
				this.props.onFetchProd(products)
		});
		fetch('/api/customers')
			.then( customers => customers.json() )
			.then(customers => {
				this.props.onFetchCust(customers)
		});
		fetch('api/invoices')
			.then( invoices => invoices.json() )
			.then(invoices => {
				this.props.onFetchInv(invoices) 
		});
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
	    },
	    onFetchInv(invoices) {
	    	dispatch(addInv(invoices))
	    }
	}
}


export default connect(
	null,
	mapDispatchToProps
)(App)
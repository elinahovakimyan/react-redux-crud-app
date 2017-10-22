import React, { Component } from 'react';
import { Provider } from 'react-redux'
import createStore from 'redux'
import store from './store'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import App from './components/App';
import CustomersTable from './components/customers/CustomersTable';
import InvoicesTable from './components/invoices/InvoicesTable';
import ProductsTable from './components/products/ProductsTable';
import AddInvoice from './components/invoices/AddInvoice';
import 'react-select/dist/react-select.css';
import './style/App.css'

render(
	<Provider store={store}>
		<Router history={browserHistory}>
	        <Route path="/" component={App}>
				<IndexRoute component={InvoicesTable} />
				<Route path="/customers" component={CustomersTable} />
				<Route path="/products" component={ProductsTable} />
				<Route path="/invoice-list" component={InvoicesTable} />
				<Route path="/add-invoice" component={AddInvoice} />
	        </Route>
	    </Router>
	</Provider>,
	document.getElementById('root')
);
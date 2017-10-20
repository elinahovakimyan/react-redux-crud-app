import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import CustomersTable from './components/customers/CustomersTable';
import InvoicesTable from './components/invoices/InvoicesTable';
import ProductsTable from './components/products/ProductsTable';
import AddInvoice from './components/invoices/AddInvoice';

export default (
	<Route path="/" component={InvoicesTable}>
		<IndexRoute component={App} />
		<Route path="/customers" component={CustomersTable} />
		<Route path="/products" component={ProductsTable} />
		<Route path="/invoice-list" component={InvoicesTable} />
		<Route path="/add-invoice" component={AddInvoice} />
	</Route>
);
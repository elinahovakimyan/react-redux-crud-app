import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCust, deleteCust } from '../actions/index'
import { Button, Table, Modal } from 'react-bootstrap'
import CreateCust from './CreateCust'
import Del from 'react-icons/lib/fa/trash-o'

const url = '/api/customers'

class CustomersTable extends Component {
	constructor() {
		super();
		this.handleDelete = this.handleDelete.bind(this);
		this.state={showModal: false}
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)
	}
	componentWillMount(){
		fetch(url)
			.then( products => products.json() )
			.then(products => {
			  this.props.onFetch(products)
		})
	}
	close() {
		this.setState({ showModal: false });
	}
	open() {
		this.setState({ showModal: true });
	}
	handleDelete(id, customers) {
		this.props.onDeleteClick(id, customers);
		this.close();
	}
	render() {
		return (
			<div className="tablePage">
				<div className="titlepart">
					<h1> Customer List </h1> 
					<CreateCust/>
				</div>
				<Table responsive>
				    <thead>
				      <tr>
				        <th>#</th>
				        <th>Name</th>
				        <th>Address</th>
				        <th>Phone</th>
				      </tr>
				    </thead>
				    <tbody>
			        	{this.props.customers.map(customer => (
	    					<tr key={customer.id}>
								<td>{customer.id}</td>
								<td>{customer.name}</td>
								<td>{customer.address}</td>
								<td>{customer.phone}</td>
								<td onClick={this.open}> <Del/> </td>
              
					                <Modal show={this.state.showModal} onHide={this.close}>
					                  <Modal.Header closeButton>
					                    <Modal.Title>Do you want to delete?</Modal.Title>
					                  </Modal.Header>
					                  <Modal.Body>
					                    <Button className="inlinebtn" onClick={this.handleDelete.bind(this, customer.id)}> Delete </Button>
					                    <Button className="inlinebtn" onClick={this.close}>Cancel</Button>
					                  </Modal.Body>
					                  <Modal.Footer>
					                    <Button onClick={this.close}>Close</Button>
					                  </Modal.Footer>
					                </Modal>
							</tr>
	   					))}
				    </tbody>
				</Table>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		customers: state.items.customers
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteClick(id, customers) {
			dispatch(deleteCust(id, customers));
		},
		onFetch(customers) {
			dispatch(fetchCust(customers))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomersTable)
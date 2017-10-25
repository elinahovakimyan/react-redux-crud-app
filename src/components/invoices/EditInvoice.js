import React, { Component } from 'react'
import { Button, Table, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCust, fetchProd, addInv } from '../../actions'

class EditInvoice extends Component {
	constructor(props) {
		super();
		this.state={showModal: false}
		this.handleUpdate = this.handleUpdate.bind(this)
		this.handleAddProduct = this.handleAddProduct.bind(this)
	}

	handleAddProduct(e) {
		e.preventDefault()
		const formValues = {
			pselect: this.pselect[selctedIndex].value
		}
		this.props.dispatch(invProd(formValues))
	}

	handleUpdate(e) {
		e.preventDefault() 
		const newValues = {
			discount: this.discount.value,
			customer: this.customer.value,
			total: this.props.total
		}
		this.props.dispatch(updateInv(newValues))
	}
	

	render() {
		return (
		  	<div className="invoice">
		  		<h1> Edit Invoice </h1>
				<Form horizontal onSubmit={this.handleUpdate}>
				    <FormGroup controlId="discount">
						<ControlLabel>Discount (%)</ControlLabel>
						<FormControl 
							inputRef={(ref) => {this.discount = ref}} 
							type="number" 
							className="discount"
							placeholder="Discount"
							value={this.props.invoice.discount}
						/>
					</FormGroup>
				    <FormGroup controlId="formControlsSelect">
						<ControlLabel>Customer</ControlLabel>
						<FormControl componentClass="select" placeholder="Customer">
						{this.props.customers.map(customer => (
							<option value={customer.name}>{customer.name}</option>
						))}
						</FormControl>
					</FormGroup>
					<Button type="submit">
						Add Invoice 
					</Button>
				</Form>

				<Form horizontal onSubmit={this.handleAddProduct}>
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Add product</ControlLabel>
						<FormControl 
							componentClass="select" 
							placeholder="select"
							ref={(ref) => {this.pselect = ref}} >
							<option> select... </option>
						{this.props.products.map(product => (
							<option value={product.name}>{product.name}</option>
						))}
						</FormControl>
					</FormGroup>

				    <FormGroup>
				        <Button type="submit">
				          Add
				        </Button>
				    </FormGroup>
				</Form>
				<Table responsive>
		          <thead>
		            <tr>
		              <th>Name</th>
		              <th>Price</th>
		              <th> Qty </th>
		            </tr>
		          </thead>
		          <tbody>
		            {this.props.invProducts.map(product => (
		              <tr key={product.id}>
		                <td>{product.name}</td>
		                <td>{product.price}</td>
		                <td> 
		                	<FormControl 
								inputRef={(ref) => {this.name = ref}}
								type="number" 
								className="discount"
								defaultValue="1"
								placeholder="Quantity" 
							/> 
						</td>
		              </tr>
		            ))} 
		          </tbody>
		        </Table>
        

		    </div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		customers: state.items.customers,
		products: state.items.products,
		invProducts: state.items.invProducts,
		invoices: state.items.invoices
	}
}

export default connect(
	mapStateToProps,
	null
)(EditInvoice)
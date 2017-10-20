import React, { Component } from 'react'
import { Button, Table, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchCust, fetchProd, addInv, invProd } from '../actions'

class AddInvoice extends Component {
	constructor(props) {
		super();
		this.state={
			showModal: false,
			select: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleAddProduct = this.handleAddProduct.bind(this)

	}
	componentWillMount(){
		fetch('/api/customers')
			.then( customers => customers.json() )
			.then(customers => {
			  this.props.dispatch(fetchCust(customers))
		})
		fetch('/api/products')
			.then( products => products.json() )
			.then(products => {
			  this.props.dispatch(fetchProd(products))
		})

	}
	handleSelect(e) {
		this.setState({
			select: e.target.value
		})
		console.log(e)
	}
	handleAddProduct(e) {
		e.preventDefault()
		
		this.props.dispatch(invProd(this.state.select))
	}
	handleSubmit(e) {
		e.preventDefault()
		const formValues = () => {
			return [
				{
					discount: this.discount.value,
					customer: this.customer.value,
					total: this.props.total
				}
			]
		}
		this.props.dispatch(addInv(formValues()))
	}

	render() {
		return (
		  	<div className="invoice">
		  		<h1> Add Invoice </h1>
				<Form horizontal onSubmit={this.handleSubmit}>
				    <FormGroup controlId="discount">
						<ControlLabel>Discount (%)</ControlLabel>
						<FormControl 
							inputRef={(ref) => {this.discount = ref}} 
							type="number" 
							className="discount"
							placeholder="Discount" 
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
							value={this.state.select}
							onSelect={this.handleSelect}
							ref={(ref) => {this.pselect = ref}} >
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
		invProducts: state.items.invProducts
	}
}

export default connect(
	mapStateToProps,
	null
)(AddInvoice)
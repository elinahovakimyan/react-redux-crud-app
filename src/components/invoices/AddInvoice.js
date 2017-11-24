import React, { Component } from 'react'
import { Button, Table, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router'
import { Helmet } from 'react-helmet'
import { fetchCust, fetchProd, addInv, invProd, addInvId } from '../../actions'

class AddInvoice extends Component {
	constructor(props) {
		super(props);
		this.state={
			showModal: false,
			selected: null,
			invProducts: [],
			invoices: [],
			products: [],
			customers: [],
			quantity: 1,
			discount: 0,
			invId: props.invId
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleAddProduct = this.handleAddProduct.bind(this)
		this.handleSelect = this.handleSelect.bind(this)
		this.handleQuantity = this.handleQuantity.bind(this)
		this.handleDiscount = this.handleDiscount.bind(this)
	}

	handleQuantity(e) {
		this.setState({
			quantity: parseInt(e.target.value)
		})
	}

	handleDiscount(e) {
		this.setState({
			discount: parseInt(e.target.value)
		})
	}

	handleSelect({target}) {
		this.setState({
			selected: Number(target.value)
		})
	}

	handleAddProduct(e) {
		e.preventDefault()
		const { products } = this.props
		const { selected } = this.state
		let invProducts = products.filter(item => item.id === selected)
		this.props.dispatch(invProd(invProducts))
	}

	countTotal() {
		let prices = this.props.invProducts.map(prod => parseFloat(prod.price))
		const getSum = (total, num) => total + num
		const sum = prices.reduce(getSum, 0);
		const qty = this.state.quantity;
		const discount = this.state.discount;
		const timesQty = sum * qty;
		const total = timesQty - (discount * timesQty / 100);
		return total
	}

	createId() {
		this.setState({
			invId: this.state.invId++
		})
		this.props.dispatch(addInvId(this.state.invId))
		return this.state.invId
	}

	handleSubmit(e) {
		e.preventDefault()
		const invoices = {
			invId: this.createId(),
			discount: this.discount.value,
			customer: this.customer.value,
			total: this.countTotal()
		}
		this.props.dispatch(addInv(invoices))
		this.setState({
			invProducts: []
		})
		this.props.router.push(`/invoices`)

	}


	render() {
		const { invProducts } = this.props
		return (
		  	<div className="invoice">
		  		<Helmet>
			    	<title>Add a new invoice</title>
			    </Helmet>
		  		<h1> Add Invoice </h1>
				<Form horizontal onSubmit={this.handleSubmit}>
					<Button type="submit" className="inlinebtn">
						Add Invoice 
					</Button>
				    <FormGroup controlId="discount">
						<ControlLabel> Discount (%) </ControlLabel>
						<FormControl 
							inputRef={(ref) => {this.discount = ref}} 
							type="number" 
							onChange={this.handleDiscount}
							className="discount"
							placeholder="Discount" 
						/>
					</FormGroup>
				    <FormGroup controlId="formControlsSelect">
						<ControlLabel>Customer</ControlLabel>
						<FormControl 
							componentClass="select" 
							placeholder="Customer"
							inputRef={(ref) => {this.customer = ref}}
						>
						{this.props.customers.map(customer => (
							<option key={customer.id} 
									value={customer.name} 
									defaultValue={customer.name}>
								{customer.name}
							</option>
						))}
						</FormControl>
					</FormGroup>
					
				</Form>

				<Form horizontal onSubmit={this.handleAddProduct}>
					<FormGroup controlId="formControlsSelect">
						<ControlLabel>Add product</ControlLabel>
						<FormControl 
							componentClass="select" 
							placeholder="select"
							onChange={this.handleSelect} 
							inputRef={(ref) => {this.address = ref}}>
						{this.props.products.map(product => (
							<option value={product.id} key={product.id}>
								{product.name}
							</option>
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
		    		  {invProducts && invProducts.map(product => (
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
                                onChange={this.handleQuantity}
                            /> 
                        </td>
                      </tr>
                    ))}
		          </tbody>
		        </Table>
        
        		<h2> Total: {this.countTotal()} </h2>

		    </div>
		);
	}
};

const mapStateToProps = ({items}) => {
	return {
		customers: items.customers,
		products: items.products,
		invProducts: items.invProducts,
		invoices: items.invoices,
		invId: items.invId
	}
}

export default withRouter(connect(
	mapStateToProps
)(AddInvoice))
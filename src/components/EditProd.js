import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl  } from 'react-bootstrap'
import {updateProd} from '../actions'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

class EditProd extends Component {
  	constructor(props, context) {
	    super(props, context);

	    this.state = {
			showModal: false
		},
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this) 
	}
	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	componentWillReceiveProps(nextProps) {
		if (!isEqual(nextProps.product, this.state.product)) {
		  this.setState({...this.state, product: nextProps.product});
		}
	}

	componentDidMount() {
		if (this.state.product.id) {
		  	this.context.store.dispatch(productsActions.fetchproduct(this.props.params.product.id));
		}
	}

	handleChange(field, e) {
		const product = Object.assign({}, this.state.product, {[field]: e.target.value});
		this.setState(Object.assign({}, this.state, {product}));
	}

	handleSubmit(e) {
		e.preventDefault()
		const formValues = () => {
			return [
				{
					name: this.name.value,
					price: this.price.value,
				}
			]
		}
		this.props.dispatch(updateProd(formValues()))
		this.close();
	}

	render() {
	    return (
	      	<div className="btnCreate">
			    <a onClick={this.open}>
			    	edit
			    </a>

			    <Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>Update a product</Modal.Title>
					</Modal.Header>
					{this.props.products.map(product => (
					<Modal.Body>
						<Form horizontal onSubmit={this.handleSubmit}>
						    <FormGroup controlId="name">
						      <Col componentClass={ControlLabel} sm={2}>
						        Name
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.name = ref}} 
						        	type="text" 
						        	placeholder="Name" 
						        	value={product.name}
	            					onChange={this.handleChange.bind(this, 'name')}/>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="price">
						      <Col componentClass={ControlLabel} sm={2}>
						        Price
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.price = ref}}
						        	type="number"
						        	step="0.01" 
						        	placeholder="Price" 
						        	value={product.price}
	            					onChange={this.handleChange.bind(this, 'body')}/>
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col>
						        <Button type="submit">
						          {this.state.product.id ? 'Update' : 'Create' }
						        </Button>
						      </Col>
						    </FormGroup>
						</Form>
					</Modal.Body>
					))}
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
			    </Modal>
			</div>
	    );
  	}
}


const mapStateToProps = (state) => {
	return {
		products: state.items.products
	}
}

export default connect(
	mapStateToProps,
	null
)(EditProd)

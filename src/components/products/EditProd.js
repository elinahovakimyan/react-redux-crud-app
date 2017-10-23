import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl  } from 'react-bootstrap'
import {updateProd} from '../../actions'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

class EditProd extends Component {
  	constructor(props) {
	    super(props);

	    this.state = {
			showModal: false,
			name: props.product.name,
			price: props.product.price
		},
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this) 
		this.handleChange = this.handleChange.bind(this) 

	}
	close() {
		this.setState({ showModal: false });
	}

	open() {
		this.setState({ showModal: true });
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (!isEqual(nextProps.product, this.state.product)) {
	// 	  this.setState({...this.state, product: nextProps.product});
	// 	}
	// }

	handleChange(e) {	    
	    let value
	    if(e.target.name === 'name') {
	    	this.setState({
	    		name: e.target.value
	    	})
	    } else {
		    this.setState({
		    	price: e.target.value
		    })
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		const {product, products} = this.props
		let productsList = products.map(item => {
			if( item.id === product.id) {
				item = {
					...item,
					name: this.state.name,
					price: this.state.price
				}
			}
			return item
		})
		this.props.dispatch(updateProd(productsList))
		this.close();
	}

	render() {
		const {name, price} = this.state 
	    return (
	      	<div className="btnCreate">
			    <a onClick={this.open}>
			    	edit
			    </a>

			    <Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Header closeButton>
						<Modal.Title>
							Update a product
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Form horizontal onSubmit={this.handleSubmit}>
						    <FormGroup controlId="name">
						      <Col componentClass={ControlLabel} sm={2}>
						        Name
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.name = ref}}
						        	name="name"
						        	type="text" 
						        	placeholder="Name" 
						        	value={name}
						        	onChange={this.handleChange}
	            					/>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="price">
						      <Col componentClass={ControlLabel} sm={2}>
						        Price
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.price = ref}}
						        	name="price"
						        	type="number"
						        	step="0.01" 
						        	placeholder="Price" 
						        	value={price}
						        	onChange={this.handleChange}
	            				/>
						      </Col>
						    </FormGroup>

						    <FormGroup>
						      <Col>
						        <Button type="submit">
						          Update
						        </Button>
						      </Col>
						    </FormGroup>
						</Form>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>
							Close
						</Button>
					</Modal.Footer>
			    </Modal>
			</div>
	    );
  	}
}

const mapStateToProps = state => {
	return {
		products: state.items.products
	}
	
}

export default connect(
	mapStateToProps,
	null
)(EditProd)

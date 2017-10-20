import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl  } from 'react-bootstrap'
import {addProd} from '../../actions'

class CreateProd extends Component {
	constructor(props) {
		super();
		this.state={
			showModal: false		
		}
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
	createId() {
		const { products } = this.props
		return products.map(item => item.id)[products.length-1] + 1
	}
	handleSubmit(e) {
		e.preventDefault()
		const formValues = {
			id: this.createId(),
			name: this.name.value,
			price: this.price.value,
		}
		this.props.dispatch(addProd(formValues))
		this.close();
	}

	render() {
		const {products} = this.state
		return (
		  <div className="btnCreate">
		    <Button onClick={this.open}>
		    	Create
		    </Button>

		    <Modal show={this.state.showModal} onHide={this.close}>
				<Modal.Header closeButton>
					<Modal.Title>Create a customer</Modal.Title>
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
					        	type="text" 
					        	placeholder="Name" />
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
					        	placeholder="Price" />
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col>
					        <Button type="submit">
					          Add a new Product
					        </Button>
					      </Col>
					    </FormGroup>
					</Form>
				</Modal.Body>
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
)(CreateProd)
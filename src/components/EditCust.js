import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl  } from 'react-bootstrap'
import {updateCust} from '../actions'
import { connect } from 'react-redux';
import { isEqual } from 'lodash';

class EditCust extends Component {
  	constructor(props) {
	    super(props);

	    this.state = {
			showModal: false,
			customer: {
				name: '',
				address: '',
				phone: ''
			}
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

	componentWillReceiveProps(nextProps) {
		if (!isEqual(nextProps.customer, this.state.customer)) {
		  this.setState({...this.state, customer: nextProps.customer});
		}
	}

	handleChange(e, fieldName) {
	    const fleldVal = e.target.value;
	    this.setState({form: {...this.state.customer, [fieldName]: fleldVal}})
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
						<Modal.Title>
							Update a customer
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
						        	type="text" 
						        	placeholder="Name" 
						        	value={this.props.customer.name}
						        	onChange={this.handleChange.bind(this, 'name')}
	            					/>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="name">
						      <Col componentClass={ControlLabel} sm={2}>
						        Name
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.name = ref}} 
						        	type="text" 
						        	placeholder="Name" 
						        	value={this.props.customer.name}
						        	onChange={this.handleChange.bind(this, 'name')}
	            					/>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="name">
						      <Col componentClass={ControlLabel} sm={2}>
						        Name
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.name = ref}} 
						        	type="text" 
						        	placeholder="Name" 
						        	value={this.props.customer.name}
						        	onChange={this.handleChange.bind(this, 'name')}
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
						        	type="number"
						        	step="0.01" 
						        	placeholder="Price" 
						        	value={this.props.customer.price}
						        	onChange={this.handleChange.bind(this, 'price')}
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

export default EditCust

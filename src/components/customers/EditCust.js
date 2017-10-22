import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl  } from 'react-bootstrap'
import { updateCust } from '../../actions'
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
			},
			loading: false
		},
		this.close = this.close.bind(this)
		this.open = this.open.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this) 
		this.handleChange = this.handleChange.bind(this)
	};
	close() {
		this.setState({ showModal: false });
	};

	open() {
		this.setState({ showModal: true });
	};

	// componentWillReceiveProps(nextProps) {
	// 	if (!isEqual(nextProps.customer, this.state.customer)) {
	// 	  this.setState({...this.state, customer: nextProps.customer});
	// 	}
	// }

	// handleChange(e) {
	// 	const fieldName = e.target.name;
	// 	const fieldVal = e.target.value;

	// 	console.log('Value:', fieldName, fieldVal)


	// 	this.setState({fieldName: fieldVal})

	// }

	// handleSubmit(e) {
	// 	e.preventDefault()
	// 	const formValues = () => {
	// 		return [
	// 			{
	// 				name: this.name.value,
	// 				price: this.price.value,
	// 			}
	// 		]
	// 	}
	// 	this.props.dispatch(updateProd(formValues()))
	// 	this.close();
	// }

	componentWillReceiveProps(nextProps) {
		this.setState({
			id: nextProps.customers.id,
			name: nextProps.customers.name,
			address: nextProps.customers.address,
			phone: nextProps.customers.phone,

		});
	};

	handleChange(e) {
		if (!!this.state.errors[e.target.name]) {
			let errors = Object.assign({}, this.state.errors);
			delete errors[e.target.name];
			this.setState({
				[e.target.name]: e.target.value,
				errors
			})
		} else {
			this.setState({ [e.target.name]: e.target.value });
		}
	};

	handleSubmit(e) {
		e.preventDefault();

		const { id, name, address, phone } = this.state;
		this.setState({ loading: true });
		this.props.updateCust({ id, name, address, phone })
			.catch((err) => err.response.json().then(({errors}) => this.setState({ errors, loading: false })));
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
						        	onChange={this.handleChange}
						        	name="name"
	            					/>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="address">
						      <Col componentClass={ControlLabel} sm={2}>
						        Address
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.address = ref}} 
						        	type="text" 
						        	placeholder="Address" 
						        	value={this.props.customer.address}
						        	onChange={this.handleChange}
						        	name="address"
	            					/>
						      </Col>
						    </FormGroup>

						    <FormGroup controlId="phone">
						      <Col componentClass={ControlLabel} sm={2}>
						        Phone
						      </Col>
						      <Col sm={10}>
						        <FormControl 
						        	inputRef={(ref) => {this.phone = ref}} 
						        	type="text" 
						        	placeholder="Phone" 
						        	value={this.props.customer.phone}
						        	onChange={this.handleChange}
						        	name="phone"
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

export default connect()(EditCust)

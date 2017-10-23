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
			name: props.customer.name,
			address: props.customer.address,
			phone: props.customer.phone,
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

	handleChange(e) {	    
	    let value
	    if(e.target.name === 'name') {
	    	this.setState({
	    		name: e.target.value
	    	})
	    } else if(e.target.value === 'address') {
	    	this.setState({
		    	address: e.target.value
		    })
	    } else {
		    this.setState({
		    	phone: e.target.value
		    })
		}
	}

	handleSubmit(e) {
		e.preventDefault()
		const {customer, customers} = this.props
		let customersList = customers.map(item => {
			if( item.id === customer.id) {
				item = {
					...item,
					name: this.state.name,
					address: this.state.address,
					phone: this.state.phone
				}
			}
			return item
		})
		this.props.dispatch(updateCust(customersList))
		this.close();
	}

	render() {
		const {name, phone, address} = this.state
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
						        	value={name}
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
						        	value={address}
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
						        	value={phone}
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

const mapStateToProps = state => {
	return {
		customers: state.items.customers
	}
	
}

export default connect(
	mapStateToProps,
	null
)(EditCust)
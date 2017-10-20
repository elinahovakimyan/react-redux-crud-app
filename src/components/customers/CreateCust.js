import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addCust } from '../../actions'

class CreateCust extends Component {
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
		const { customers } = this.props
		return customers.map(item => item.id)[customers.length-1] + 1
	}
	handleSubmit(e) {
		e.preventDefault()
		const formValues = {
			id: this.createId(),
			name: this.name.value,
			address: this.address.value,
			phone: this.phone.value
		}
		this.props.dispatch(addCust(formValues))
		this.close();
	}

	render() {
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
					        	placeholder="Name" 
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
					        	placeholder="Phone" />
					      </Col>
					    </FormGroup>

					    <FormGroup>
					      <Col>
					        <Button type="submit">
					          Add a new customer
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
};

export default connect()(CreateCust)
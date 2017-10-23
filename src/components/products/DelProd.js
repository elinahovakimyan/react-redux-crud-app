import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProd } from '../../actions/index'
import { Button, Table, Modal } from 'react-bootstrap'
import Del from 'react-icons/lib/fa/trash-o'

class DelProd extends Component {
  constructor(props) {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state={showModal: false}
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  
  handleDelete(e) {
    const { products, product } = this.props
    let productsList = products.filter(item => item.id != product.id )
    this.props.dispatch(deleteProd(productsList))
    this.close();
  }
  
  render() {
    return (
      <div className="deleteModal">
        <Del onClick={this.open}/>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Do you want to delete?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Button className="inlinebtn" onClick={this.handleDelete}> Delete </Button>
            <Button className="inlinebtn" onClick={this.close}>Cancel</Button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.items.products
  }
}


export default connect(
  mapStateToProps
)(DelProd)




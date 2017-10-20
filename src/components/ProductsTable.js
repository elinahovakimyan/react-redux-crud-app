import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchProd, deleteProd } from '../actions/index'
import { Button, Table, Modal } from 'react-bootstrap'
import CreateProd from './CreateProd'
// import EditProd from './EditProd'
import Del from 'react-icons/lib/fa/trash-o'

const url = '/api/products'

class ProductsTable extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.state={showModal: false}
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)
  }
  componentWillMount(){
      fetch(url)
        .then( products => products.json() )
        .then(products => {
          this.props.onFetch(products)
      })
  }
  close() {
    this.setState({ showModal: false });
  }
  open() {
    this.setState({ showModal: true });
  }
  
  handleDelete(id, products) {
    this.props.onDeleteClick(id, products);
    this.close();
  }
  render() {
    console.log(this.props.products[this.props.products.length-1])
    return (
      <div className="tablePage">
        <h1> Product List </h1> 
        <CreateProd/>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td> EditProd </td>
                <td onClick={this.open}> <Del/> </td>
              
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Do you want to delete?</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Button className="inlinebtn" onClick={this.handleDelete.bind(this, product.id)}> Delete </Button>
                    <Button className="inlinebtn" onClick={this.close}>Cancel</Button>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </tr>
            ))} 
          </tbody>
        </Table>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.items.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick(id, products) {
      dispatch(deleteProd(id, products));
    },
    onFetch(products) {
      dispatch(fetchProd(products))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsTable)




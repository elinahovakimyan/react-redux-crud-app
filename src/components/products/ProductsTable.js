import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProd } from '../../actions/index'
import { Button, Table, Modal } from 'react-bootstrap'
import CreateProd from './CreateProd'
import EditProd from './EditProd'
import { Helmet } from 'react-helmet'
import Del from 'react-icons/lib/fa/trash-o'

class ProductsTable extends Component {
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
  
  handleDelete(id) {
    const { products } = this.props
    let productsList = products.filter(item => item.id !== id )
    console.log(productsList)
    this.props.dispatch(deleteProd(productsList))
    this.close();
  }
  render() {
    return (
      <div className="tablePage">
        <Helmet>
          <title>Products List</title>
        </Helmet>
        <h1> Product List </h1> 
        <CreateProd products={this.props.products}/>
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
                <td> <EditProd product={product}/> </td>
                <td onClick={this.open}> <Del/> </td>
              
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


export default connect(
  mapStateToProps
)(ProductsTable)



